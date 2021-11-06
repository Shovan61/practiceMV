// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCxfwSty_aJv4fMMqg5vIly_2q9RtahGcw",
  authDomain: "test-3366b.firebaseapp.com",
  projectId: "test-3366b",
  storageBucket: "test-3366b.appspot.com",
  messagingSenderId: "270537639903",
  appId: "1:270537639903:web:e4777d67d014f2ef42e66a",
  measurementId: "G-ZN8ZYEPB7Z",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
