import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyChtlkduXmo0XbrofVuHAsMDVQzM3hKumk',
  authDomain: 'novaq-7dd26.firebaseapp.com',
  projectId: 'novaq-7dd26',
  storageBucket: 'novaq-7dd26.appspot.com',
  messagingSenderId: '215115099808',
  appId: '1:215115099808:web:177113c882e4497a7fe3c5',
  measurementId: 'G-2HWM7FJJPT'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize firestore
const db = getFirestore();

export { app, analytics, db };
