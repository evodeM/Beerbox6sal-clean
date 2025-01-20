import { useState, useEffect, useRef } from 'react';
import { db } from '../firebase/config';
import { collection, onSnapshot, query, getDocs } from 'firebase/firestore';

export const useFirestore = (collectionName, queryConstraints = [], options = {}) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const cache = useRef(new Map());
  const { realtime = false } = options;

  useEffect(() => {
    const q = query(collection(db, collectionName), ...queryConstraints);
    
    // Check cache first
    const cacheKey = `${collectionName}-${queryConstraints.join('-')}`;
    if (cache.current.has(cacheKey)) {
      setData(cache.current.get(cacheKey));
      setLoading(false);
    }

    const fetchData = async () => {
      try {
        const snapshot = await getDocs(q);
        const results = [];
        snapshot.forEach(doc => {
          results.push({ id: doc.id, ...doc.data() });
        });
        setData(results);
        cache.current.set(cacheKey, results);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    if (realtime) {
      // Use realtime updates only when needed
      const unsubscribe = onSnapshot(q, (snapshot) => {
        const results = [];
        snapshot.forEach(doc => {
          results.push({ id: doc.id, ...doc.data() });
        });
        setData(results);
        cache.current.set(cacheKey, results);
        setLoading(false);
      });
      return () => unsubscribe();
    } else {
      // Use one-time fetch for static data
      fetchData();
    }
  }, [collectionName, queryConstraints.join('-'), realtime]);

  return { data, loading };
};
