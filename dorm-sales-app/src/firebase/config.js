import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getMessaging } from 'firebase/messaging';

const firebaseConfig = {
  apiKey: "AIzaSyBQKuRUDTLBJXsYJqxiNRbPTOLhSyxVLwE",
  authDomain: "fridge6sal-5b0f6.firebaseapp.com",
  projectId: "fridge6sal-5b0f6",
  storageBucket: "fridge6sal-5b0f6.appspot.com",
  messagingSenderId: "101941863173090067079",
  appId: "1:101941863173090067079:web:9e7f2e9f9f2e9f9f2e9f9f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize services
const db = getFirestore(app);
const auth = getAuth(app);
const messaging = getMessaging(app);

export { db, auth, messaging };
