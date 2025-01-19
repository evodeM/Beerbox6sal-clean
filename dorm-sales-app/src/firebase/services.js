import { db } from './config.js';
import {
  collection,
  doc,
  getDoc,
  getDocs,
  setDoc,
  updateDoc,
  addDoc,
  serverTimestamp,
} from 'firebase/firestore';

// Room Operations
export const getRooms = async () => {
  const roomsRef = collection(db, 'rooms');
  const snapshot = await getDocs(roomsRef);
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

export const getRoom = async (roomId) => {
  const roomRef = doc(db, 'rooms', roomId);
  const roomDoc = await getDoc(roomRef);
  return roomDoc.exists() ? { id: roomDoc.id, ...roomDoc.data() } : null;
};

export const updateRoom = async (roomId, data) => {
  const roomRef = doc(db, 'rooms', roomId);
  await updateDoc(roomRef, data);
};

// Product Operations
export const getProducts = async () => {
  const productsRef = collection(db, 'products');
  const snapshot = await getDocs(productsRef);
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

export const updateProduct = async (productId, data) => {
  const productRef = doc(db, 'products', productId);
  await updateDoc(productRef, data);
};

// Purchase Operations
export const addPurchase = async ({ roomId, productId, productName, amount }) => {
  const purchasesRef = collection(db, 'purchases');
  const purchase = {
    roomId,
    productId,
    productName,
    amount,
    timestamp: serverTimestamp(),
  };
  
  // Add purchase record
  await addDoc(purchasesRef, purchase);
  
  // Update room balance
  const roomRef = doc(db, 'rooms', roomId);
  const roomDoc = await getDoc(roomRef);
  const currentBalance = roomDoc.data()?.balance || 0;
  
  await updateDoc(roomRef, {
    balance: currentBalance + amount,
    lastPurchase: {
      productId,
      productName,
      amount,
      timestamp: serverTimestamp(),
    },
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
    beer: { id: 'beer', name: 'Øl', price: 7 },
    soda: { id: 'soda', name: 'Sodavand', price: 5 },
    snacks: { id: 'snacks', name: 'Snacks', price: 10 },
    water: { id: 'water', name: 'Vand', price: 3 },
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
