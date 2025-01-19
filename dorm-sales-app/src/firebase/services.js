import { db } from './config';
import {
  collection,
  doc,
  getDoc,
  getDocs,
  setDoc,
  updateDoc,
  addDoc,
  serverTimestamp,
  query,
  where,
  orderBy,
  runTransaction,
  Timestamp,
} from 'firebase/firestore';

// Room Operations
export const getRooms = async () => {
  const roomsRef = collection(db, 'rooms');
  const snapshot = await getDocs(roomsRef);
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

export const getRoom = async (roomId) => {
  const roomDoc = await getDoc(doc(db, 'rooms', roomId));
  return roomDoc.exists() ? roomDoc.data() : null;
};

export const updateRoom = async (roomId, data) => {
  await updateDoc(doc(db, 'rooms', roomId), data);
};

// Product Operations
export const getProducts = async () => {
  const productsRef = collection(db, 'products');
  const snapshot = await getDocs(productsRef);
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

export const updateProduct = async (productId, data) => {
  await updateDoc(doc(db, 'products', productId), data);
};

// Purchase Operations
export const addPurchase = async ({ roomId, productName, amount }) => {
  const timestamp = Timestamp.now();
  
  await runTransaction(db, async (transaction) => {
    const roomRef = doc(db, 'rooms', roomId);
    const roomDoc = await transaction.get(roomRef);

    if (!roomDoc.exists()) {
      throw new Error('Room does not exist!');
    }

    const newBalance = (roomDoc.data().balance || 0) + amount;
    
    transaction.update(roomRef, { 
      balance: newBalance,
      lastPurchase: {
        productName,
        amount,
        timestamp
      }
    });

    // Add purchase to history
    const purchaseRef = collection(db, 'purchases');
    transaction.set(doc(purchaseRef), {
      roomId,
      productName,
      amount,
      timestamp,
      balanceAfter: newBalance
    });
  });
};

// Admin Operations
export const getAdminConfig = async () => {
  const configRef = doc(db, 'adminConfig', 'general');
  const configDoc = await getDoc(configRef);
  return configDoc.exists() ? configDoc.data() : null;
};

export const updateAdminConfig = async (data) => {
  const configRef = doc(db, 'adminConfig', 'general');
  await updateDoc(configRef, data);
};

export const getTotalSales = async () => {
  const querySnapshot = await getDocs(collection(db, 'purchases'));
  return querySnapshot.docs.reduce((total, doc) => total + doc.data().amount, 0);
};

export const resetAllBalances = async () => {
  const roomsSnapshot = await getDocs(collection(db, 'rooms'));
  
  const batch = db.batch();
  roomsSnapshot.docs.forEach((doc) => {
    batch.update(doc.ref, { balance: 0 });
  });
  
  await batch.commit();
};

export const getPurchaseHistory = async (startDate, endDate) => {
  const q = query(
    collection(db, 'purchases'),
    where('timestamp', '>=', startDate),
    where('timestamp', '<=', endDate),
    orderBy('timestamp', 'desc')
  );
  
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

// FCM Token Operations
export const saveToken = async (token, roomId) => {
  const tokensRef = collection(db, 'tokens');
  await addDoc(tokensRef, {
    token,
    roomId,
    timestamp: serverTimestamp(),
  });
};

// Initialize default data (if needed)
export const initializeDefaultData = async () => {
  // Initialize products if they don't exist
  const defaultProducts = {
    beer: { name: 'Beer', price: 7 },
    soda: { name: 'Soda', price: 5 },
    snacks: { name: 'Snacks', price: 10 },
    water: { name: 'Water', price: 3 },
  };

  for (const [id, data] of Object.entries(defaultProducts)) {
    const productRef = doc(db, 'products', id);
    const productDoc = await getDoc(productRef);
    if (!productDoc.exists()) {
      await setDoc(productRef, data);
    }
  }

  // Initialize rooms if they don't exist
  for (let i = 601; i <= 628; i++) {
    const roomRef = doc(db, 'rooms', i.toString());
    const roomDoc = await getDoc(roomRef);
    if (!roomDoc.exists()) {
      await setDoc(roomRef, {
        occupantName: '',
        balance: 0,
        lastPurchase: null,
      });
    }
  }

  // Initialize admin config if it doesn't exist
  const adminConfigRef = doc(db, 'adminConfig', 'general');
  const adminConfigDoc = await getDoc(adminConfigRef);
  if (!adminConfigDoc.exists()) {
    await setDoc(adminConfigRef, {
      mobilePayPhoneNumber: '',
      adminPassword: 'admin123', // Default password, should be changed
    });
  }
};
