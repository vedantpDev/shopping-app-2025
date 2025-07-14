import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD79Lu9DyJmpGHXfPGXh9XfwjlexALmwZE",
  authDomain: "shopping-site-222fe.firebaseapp.com",
  projectId: "shopping-site-222fe",
  storageBucket: "shopping-site-222fe.firebasestorage.app",
  messagingSenderId: "347647935804",
  appId: "1:347647935804:web:145d68b09d7c5734c58a39",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
