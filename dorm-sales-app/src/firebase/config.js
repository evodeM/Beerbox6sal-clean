import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Service account configuration (if needed)
export const serviceAccount = {
  type: import.meta.env.VITE_FIREBASE_TYPE,
  project_id: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  private_key_id: import.meta.env.VITE_FIREBASE_PRIVATE_KEY_ID,
  private_key: import.meta.env.VITE_FIREBASE_PRIVATE_KEY,
  client_email: import.meta.env.VITE_FIREBASE_CLIENT_EMAIL,
  client_id: import.meta.env.VITE_FIREBASE_CLIENT_ID,
  auth_uri: import.meta.env.VITE_FIREBASE_AUTH_URI,
  token_uri: import.meta.env.VITE_FIREBASE_TOKEN_URI,
  auth_provider_x509_cert_url: import.meta.env.VITE_FIREBASE_AUTH_PROVIDER_X509_CERT_URL,
  client_x509_cert_url: import.meta.env.VITE_FIREBASE_CLIENT_X509_CERT_URL
};

export { db };
