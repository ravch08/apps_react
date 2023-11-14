import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBOempabdvVTURkx09iTAIFq3Ua5HPDAoU",
  authDomain: "reactapps-62081.firebaseapp.com",
  projectId: "reactapps-62081",
  storageBucket: "reactapps-62081.appspot.com",
  messagingSenderId: "895244935139",
  appId: "1:895244935139:web:50873b2ab0106c5c704ad6",
  measurementId: "G-8F6WY7DZHB",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
