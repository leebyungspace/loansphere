
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {

  apiKey: "AIzaSyAoIPoptRoUQungnX-lYBtrNJylsovpTV8",

  authDomain: "loan-sphere-32bfa.firebaseapp.com",

  projectId: "loan-sphere-32bfa",

  storageBucket: "loan-sphere-32bfa.firebasestorage.app",

  messagingSenderId: "85658144660",

  appId: "1:85658144660:web:a28ba9bcb26de817d10981",

  measurementId: "G-5JHQR33FTS"

};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
