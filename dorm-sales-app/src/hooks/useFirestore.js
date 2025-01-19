import { useState, useEffect } from 'react';
import { db } from '../firebase/config';
import { collection, onSnapshot, query } from 'firebase/firestore';

export const useFirestore = (collectionName, queryConstraints = []) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const q = query(collection(db, collectionName), ...queryConstraints);
    
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const results = [];
      snapshot.forEach(doc => {
        results.push({ id: doc.id, ...doc.data() });
      });
      setData(results);
    });

    return () => unsubscribe();
  }, [collectionName]);

  return { data };
};
