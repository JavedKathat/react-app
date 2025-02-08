// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-project-11949.firebaseapp.com",
  projectId: "mern-project-11949",
  storageBucket: "mern-project-11949.firebasestorage.app",
  messagingSenderId: "424394228287",
  appId: "1:424394228287:web:1951ac45a00cc912a8ae8a",
  measurementId: "G-YYPXZ7CYNG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);