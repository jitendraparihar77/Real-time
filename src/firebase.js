// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDwJfPW_r8hg6yyRpSXISXZTT2PI1Uo900",
    authDomain: "real-time-b176a.firebaseapp.com",
    projectId: "real-time-b176a",
    storageBucket: "real-time-b176a.appspot.com",
    messagingSenderId: "956442355668",
    appId: "1:956442355668:web:5d8bad8f62647b84cad841",
    measurementId: "G-QZQM42L20Y"
  };
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  
  export { db };
