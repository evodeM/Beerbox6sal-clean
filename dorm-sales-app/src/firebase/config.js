import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBQKuRUDTLBJXsYJqxiNRbPTOLhSyxVLwE",
  authDomain: "fridge6sal-5b0f6.firebaseapp.com",
  projectId: "fridge6sal-5b0f6",
  storageBucket: "fridge6sal-5b0f6.appspot.com",
  messagingSenderId: "101941863173",
  appId: "1:101941863173:web:4f8f8f8f8f8f8f8f8f8f8f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize services
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
