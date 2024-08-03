// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore"

import {getAuth, GoogleAuthProvider} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAmXFqeyL4jMMPIg-v-Tw2BLRrYGnotJ-w",
  authDomain: "web-geost.firebaseapp.com",
  projectId: "web-geost",
  storageBucket: "web-geost.appspot.com",
  messagingSenderId: "879360890919",
  appId: "1:879360890919:web:7fecc1bcbb8a99ca7c1602"


};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();