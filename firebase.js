// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, addDoc, getDocs, orderBy, query, serverTimestamp, deleteDoc, doc } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL, deleteObject } from "firebase/storage";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBBU9GIHLykANxojTxVCIE9JrXw85HUNRY",
  authDomain: "dr-sari-fusha.firebaseapp.com",
  projectId: "dr-sari-fusha",
  storageBucket: "dr-sari-fusha.firebasestorage.app",
  messagingSenderId: "250182826297",
  appId: "1:250182826297:web:b54aa4f24760ebed47d0e8",
  measurementId: "G-2F1EGCDTR8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export { collection, addDoc, getDocs, orderBy, query, serverTimestamp, deleteDoc, doc, ref, uploadBytes, getDownloadURL, deleteObject };
