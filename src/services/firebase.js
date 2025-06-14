
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {

  apiKey: "AIzaSyC8Z4OzUKjn31QFq6-iAHUT9HTaPjDp18k",

  authDomain: "grand-radio-462820-m2.firebaseapp.com",

  projectId: "grand-radio-462820-m2",

  storageBucket: "grand-radio-462820-m2.firebasestorage.app",

  messagingSenderId: "249128067374",

  appId: "1:249128067374:web:ef2962a68a020d45715abf",

  measurementId: "G-4GMCZGF4M7"

};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
