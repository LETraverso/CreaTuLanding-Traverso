// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB12vZlV-te83EwrLRGaR-db0Icb2x8MBY",
  authDomain: "navegalasrutas.firebaseapp.com",
  projectId: "navegalasrutas",
  storageBucket: "navegalasrutas.firebasestorage.app",
  messagingSenderId: "918991839256",
  appId: "1:918991839256:web:18a6561f96651aba9de36d",
  measurementId: "G-4BB9H0WKBZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)