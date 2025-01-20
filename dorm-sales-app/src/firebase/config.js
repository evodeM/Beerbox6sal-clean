import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBfzh_QQFaKhGXLuVJXbSVkBuOZOvXLBRg",
  authDomain: "fridge6sal-5b0f6.firebaseapp.com",
  projectId: "fridge6sal-5b0f6",
  storageBucket: "fridge6sal-5b0f6.appspot.com",
  messagingSenderId: "1091624932154",
  appId: "1:1091624932154:web:b5e0e3d9c5c9b5e5d8e5c5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
