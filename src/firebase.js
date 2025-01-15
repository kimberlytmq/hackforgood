import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBUDiBQsJmvgSEHnTLhvGmXEV-Rh9oh44I",
  authDomain: "hackforgood-dev.firebaseapp.com",
  projectId: "hackforgood-dev",
  storageBucket: "hackforgood-dev.firebasestorage.app",
  messagingSenderId: "387640123774",
  appId: "1:387640123774:web:6763e481f98ca9f91e532f"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
