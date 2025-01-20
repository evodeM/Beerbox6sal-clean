import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.VITE_FIREBASE_API_KEY,
  authDomain: process.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: process.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.VITE_FIREBASE_APP_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Service account configuration (if needed)
export const serviceAccount = {
  type: process.env.VITE_FIREBASE_TYPE,
  project_id: process.env.VITE_FIREBASE_PROJECT_ID,
  private_key_id: process.env.VITE_FIREBASE_PRIVATE_KEY_ID,
  private_key: process.env.VITE_FIREBASE_PRIVATE_KEY,
  client_email: process.env.VITE_FIREBASE_CLIENT_EMAIL,
  client_id: process.env.VITE_FIREBASE_CLIENT_ID,
  auth_uri: process.env.VITE_FIREBASE_AUTH_URI,
  token_uri: process.env.VITE_FIREBASE_TOKEN_URI,
  auth_provider_x509_cert_url: process.env.VITE_FIREBASE_AUTH_PROVIDER_X509_CERT_URL,
  client_x509_cert_url: process.env.VITE_FIREBASE_CLIENT_X509_CERT_URL
};

export { db };
