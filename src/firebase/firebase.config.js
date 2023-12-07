// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCp5QZ9Ay9oICu3BjRbw3IogUiYDCW_J_k",
  authDomain: "email-password-auth-6afc2.firebaseapp.com",
  projectId: "email-password-auth-6afc2",
  storageBucket: "email-password-auth-6afc2.appspot.com",
  messagingSenderId: "242561310735",
  appId: "1:242561310735:web:4cc7694fda0f995ec5c37a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth= getAuth(app)
export default auth;