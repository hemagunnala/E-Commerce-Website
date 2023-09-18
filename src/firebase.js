// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDRtNglm30br_wFuLgTIOwD4hNnR1_dfCI",
  authDomain: "shopify-9ca13.firebaseapp.com",
  projectId: "shopify-9ca13",
  storageBucket: "shopify-9ca13.appspot.com",
  messagingSenderId: "671122444676",
  appId: "1:671122444676:web:85caf329d98f059d278dd1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);