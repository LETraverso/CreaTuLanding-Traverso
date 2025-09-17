
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB12vZlV-te83EwrLRGaR-db0Icb2x8MBY",
  authDomain: "navegalasrutas.firebaseapp.com",
  projectId: "navegalasrutas",
  storageBucket: "navegalasrutas.firebasestorage.app",
  messagingSenderId: "918991839256",
  appId: "1:918991839256:web:18a6561f96651aba9de36d",
  measurementId: "G-4BB9H0WKBZ"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)