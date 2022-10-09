// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getDatabase } from 'firebase/database';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBEMFklteNCQ0CCBCS7fh64xpfLI1pZ190',
  authDomain: 'find-vision.firebaseapp.com',
  projectId: 'find-vision',
  storageBucket: 'find-vision.appspot.com',
  messagingSenderId: '458232796083',
  appId: '1:458232796083:web:49e779158d87f3f37fb1c6',
  measurementId: 'G-D60V4TVN89',
};

export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getDatabase(app);
export const auth = getAuth();
