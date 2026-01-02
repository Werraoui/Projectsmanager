// Firebase core
import { initializeApp } from "firebase/app"
// Auth & Firestore
import { getFirestore } from "firebase/firestore"
import { getAuth, GoogleAuthProvider } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyBzBenh-fOk1t2uvHYOpIkP9JN2L7BgoLA",
  authDomain: "project-manager-67a0e.firebaseapp.com",
  projectId: "project-manager-67a0e",
  storageBucket: "project-manager-67a0e.appspot.com",
  messagingSenderId: "195791382898",
  appId: "1:195791382898:web:f675f575b77c3fbc70d5eb",
  measurementId: "G-ZCG37M9TY8"
}

// Initialisation Firebase
const app = initializeApp(firebaseConfig)

// Auth
export const auth = getAuth(app)

//  Firestore
export const db = getFirestore(app)

// Analytics (optionnel - désactivé pour éviter les erreurs en développement)
// export const analytics = getAnalytics(app)

export const googleProvider = new GoogleAuthProvider()
