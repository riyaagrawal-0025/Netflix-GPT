// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCJUWhuXBRNOoPUn9L95npCK3HwREKT180",
  authDomain: "netflix-gpt-18154.firebaseapp.com",
  projectId: "netflix-gpt-18154",
  storageBucket: "netflix-gpt-18154.firebasestorage.app",
  messagingSenderId: "494253367086",
  appId: "1:494253367086:web:584c32713eb5a42ec2e4bf",
  measurementId: "G-5ZZ4Y5ZQ3E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();