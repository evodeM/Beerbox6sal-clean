import { 
  collection, 
  doc,
  getDoc,
  getDocs, 
  query, 
  where, 
  limit,
  orderBy,
  startAfter
} from 'firebase/firestore';
import { db } from './config';

// Performance Monitoring Decorator
const measurePerformance = async (fn) => {
  const start = performance.now();
  try {
    const result = await fn();
    const end = performance.now();
    console.log(`Operation completed in ${end - start}ms`);
    return result;
  } catch (error) {
    console.error('Performance measurement failed:', error);
    throw error;
  }
};

// Batch Data Fetching
export const fetchBatchData = async (roomId, lastVisible = null) => {
  return measurePerformance(async () => {
    const [roomData, purchasesData, productsData] = await Promise.all([
      fetchRoomData(roomId),
      fetchRecentPurchases(roomId, lastVisible),
      fetchProducts()
    ]);

    return {
      room: roomData,
      purchases: {
        data: purchasesData.purchases,
        lastVisible: purchasesData.lastVisible
      },
      products: productsData,
      fetchTimestamp: new Date().toISOString()
    };
  });
};

// Individual Fetch Functions
const fetchRoomData = async (roomId) => {
  const roomRef = doc(db, 'rooms', roomId);
  const roomSnapshot = await getDoc(roomRef);
  
  return roomSnapshot.exists() 
    ? { 
        id: roomSnapshot.id, 
        ...roomSnapshot.data(),
        lastUpdated: new Date().toISOString()
      }
    : null;
};

const fetchRecentPurchases = async (roomId, lastVisible = null) => {
  let purchasesQuery = query(
    collection(db, 'purchases'),
    where('roomId', '==', roomId),
    orderBy('timestamp', 'desc'),
    limit(10)
  );

  if (lastVisible) {
    purchasesQuery = query(
      purchasesQuery,
      startAfter(lastVisible)
    );
  }

  const purchasesSnapshot = await getDocs(purchasesQuery);
  const purchases = purchasesSnapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));

  return { 
    purchases, 
    lastVisible: purchasesSnapshot.docs[purchasesSnapshot.docs.length - 1] || null
  };
};

const fetchProducts = async () => {
  const productsQuery = query(
    collection(db, 'products'),
    orderBy('lastUpdated', 'desc'),
    limit(50)
  );

  const productsSnapshot = await getDocs(productsQuery);
  return productsSnapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));
};
