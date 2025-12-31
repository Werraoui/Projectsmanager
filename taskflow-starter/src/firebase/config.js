// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBzBenh-fOk1t2uvHYOpIkP9JN2L7BgoLA",
  authDomain: "project-manager-67a0e.firebaseapp.com",
  projectId: "project-manager-67a0e",
  storageBucket: "project-manager-67a0e.firebasestorage.app",
  messagingSenderId: "195791382898",
  appId: "1:195791382898:web:f675f575b77c3fbc70d5eb",
  measurementId: "G-ZCG37M9TY8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);