// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBTt6sULCQhNS_7ll_O9sRKpe27nb3keDw",
  authDomain: "discount-pro-efaec.firebaseapp.com",
  projectId: "discount-pro-efaec",
  storageBucket: "discount-pro-efaec.firebasestorage.app",
  messagingSenderId: "139862467013",
  appId: "1:139862467013:web:6deb1cf4b4260b9eefabac"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
