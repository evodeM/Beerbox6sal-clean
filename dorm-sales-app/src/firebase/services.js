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
} from 'firebase/firestore';

// Room Operations
export const getRooms = async () => {
  try {
    console.log('Fetching all rooms...');
    const roomsRef = collection(db, 'rooms');
    const snapshot = await getDocs(roomsRef);
    const rooms = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    console.log('Rooms fetched:', rooms);
    return rooms;
  } catch (error) {
    console.error('Error fetching rooms:', error);
    throw error;
  }
};

export const getRoom = async (roomId) => {
  try {
    console.log('Fetching room:', roomId);
    const roomRef = doc(db, 'rooms', roomId);
    const roomDoc = await getDoc(roomRef);
    const room = roomDoc.exists() ? { id: roomDoc.id, ...roomDoc.data() } : null;
    console.log('Room data:', room);
    return room;
  } catch (error) {
    console.error('Error fetching room:', error);
    throw error;
  }
};

export const updateRoom = async (roomId, data) => {
  try {
    console.log('Updating room:', roomId, 'with data:', data);
    const roomRef = doc(db, 'rooms', roomId);
    await updateDoc(roomRef, data);
    console.log('Room updated successfully');
  } catch (error) {
    console.error('Error updating room:', error);
    throw error;
  }
};

// Product Operations
export const getProducts = async () => {
  try {
    console.log('Fetching products...');
    const productsRef = collection(db, 'products');
    const snapshot = await getDocs(productsRef);
    const products = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    console.log('Products fetched:', products);
    return products;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};

export const updateProduct = async (productId, data) => {
  try {
    console.log('Updating product:', productId, 'with data:', data);
    const productRef = doc(db, 'products', productId);
    await updateDoc(productRef, data);
    console.log('Product updated successfully');
  } catch (error) {
    console.error('Error updating product:', error);
    throw error;
  }
};

// Purchase Operations
export const addPurchase = async (purchaseData) => {
  try {
    console.log('Adding purchase:', purchaseData);
    const purchasesRef = collection(db, 'purchases');
    const purchase = {
      ...purchaseData,
      timestamp: serverTimestamp(),
    };
    
    // Add purchase record
    console.log('Creating purchase record...');
    await addDoc(purchasesRef, purchase);
    
    // Update room balance
    console.log('Updating room balance...');
    const roomRef = doc(db, 'rooms', purchaseData.roomId);
    const roomDoc = await getDoc(roomRef);
    const currentBalance = roomDoc.data()?.balance || 0;
    
    await updateDoc(roomRef, {
      balance: currentBalance + purchaseData.amount,
      lastPurchase: {
        productName: purchaseData.productName,
        amount: purchaseData.amount,
        timestamp: serverTimestamp(),
      },
    });
    console.log('Purchase completed successfully');
  } catch (error) {
    console.error('Error adding purchase:', error);
    throw error;
  }
};

// Admin Operations
export const getAdminConfig = async () => {
  try {
    console.log('Fetching admin config...');
    const adminConfigRef = doc(db, 'adminConfig', 'general');
    const adminConfigDoc = await getDoc(adminConfigRef);
    const adminConfig = adminConfigDoc.exists() ? adminConfigDoc.data() : null;
    console.log('Admin config:', adminConfig);
    return adminConfig;
  } catch (error) {
    console.error('Error fetching admin config:', error);
    throw error;
  }
};

export const updateAdminConfig = async (data) => {
  try {
    console.log('Updating admin config with data:', data);
    const adminConfigRef = doc(db, 'adminConfig', 'general');
    await updateDoc(adminConfigRef, data);
    console.log('Admin config updated successfully');
  } catch (error) {
    console.error('Error updating admin config:', error);
    throw error;
  }
};

// FCM Token Operations
export const saveToken = async (token, roomId) => {
  try {
    console.log('Saving token:', token, 'for room:', roomId);
    const tokensRef = collection(db, 'tokens');
    await addDoc(tokensRef, {
      token,
      roomId,
      timestamp: serverTimestamp(),
    });
    console.log('Token saved successfully');
  } catch (error) {
    console.error('Error saving token:', error);
    throw error;
  }
};

// Initialize default data (if needed)
export const initializeDefaultData = async () => {
  try {
    console.log('Initializing default data...');
    const productsRef = collection(db, 'products');
    const productsSnapshot = await getDocs(productsRef);
    
    if (productsSnapshot.empty) {
      console.log('Products collection is empty, initializing...');
      const defaultProducts = [
        { id: 'beer', name: 'Øl', price: 7 },
        { id: 'soda', name: 'Sodavand', price: 5 },
        { id: 'snacks', name: 'Snacks', price: 10 },
        { id: 'water', name: 'Vand', price: 3 }
      ];
      
      for (const product of defaultProducts) {
        await setDoc(doc(productsRef, product.id), {
          name: product.name,
          price: product.price
        });
      }
      console.log('Default products initialized');
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
  } catch (error) {
    console.error('Error initializing default data:', error);
    throw error;
  }
};
