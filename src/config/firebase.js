// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "ecommerce-6fcad.firebaseapp.com",
  projectId: "ecommerce-6fcad",
  storageBucket: "ecommerce-6fcad.appspot.com",
  messagingSenderId: "593555279659",
  appId: "1:593555279659:web:e1cf12a0637fe37f543f6e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
