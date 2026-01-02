<template>
  <div class="auth-container">
    <div class="card">
      <h2>{{ isLogin ? 'Connexion' : 'Inscription' }}</h2>

      <form @submit.prevent="handleSubmit">

        <!-- Nom & Prénom (inscription uniquement) -->
        <div v-if="!isLogin" class="row">
          <input type="text" placeholder="Nom" v-model="nom" required />
          <input type="text" placeholder="Prénom" v-model="prenom" required />
        </div>

        <input type="email" placeholder="Email" v-model="email" required />
        <input type="password" placeholder="Mot de passe" v-model="password" required />

        <!-- Confirmation mot de passe -->
        <input
          v-if="!isLogin"
          type="password"
          placeholder="Confirmer le mot de passe"
          v-model="confirmPassword"
          required
        />

        <p v-if="error" class="error">{{ error }}</p>

        <button type="submit">
          {{ isLogin ? 'Se connecter' : "S'inscrire" }}
        </button>
      </form>

      <button class="google" @click="loginWithGoogle">
        Continuer avec Google
      </button>

      <p class="switch">
        {{ isLogin ? "Pas encore de compte ?" : "Déjà un compte ?" }}
        <span @click="toggleMode">
          {{ isLogin ? "S'inscrire" : "Se connecter" }}
        </span>
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/authStore'
import { auth, googleProvider, db } from '@/firebase/config'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup
} from 'firebase/auth'
import { doc, getDoc, setDoc } from 'firebase/firestore'

const email = ref('')
const password = ref('')
const confirmPassword = ref('')
const nom = ref('')
const prenom = ref('')
const isLogin = ref(true)
const error = ref('')

const authStore = useAuthStore()
const router = useRouter()

const handleSubmit = async () => {
  error.value = ''

  try {
    if (!isLogin.value) {
      // Vérification mots de passe
      if (password.value !== confirmPassword.value) {
        error.value = 'Les mots de passe ne correspondent pas'
        return
      }

      // Les règles de validation Firestore et Auth géreront les doublons
      // On s'appuie sur createUserWithEmailAndPassword pour l'erreur "email-already-in-use"

      // Création du compte Firebase Auth
      const res = await createUserWithEmailAndPassword(auth, email.value, password.value)

      // Création du document utilisateur dans Firestore
      await setDoc(doc(db, 'users', res.user.uid), {
        nom: nom.value,
        prenom: prenom.value,
        email: email.value,
        createdAt: new Date()
      })
    } else {
      // Login classique
      await authStore.login(email.value, password.value)
    }

    router.push('/dashboard')

  } catch (err) {
    error.value = err.message
  }
}

const loginWithGoogle = async () => {
  error.value = ''
  try {
    const res = await signInWithPopup(auth, googleProvider)

    // Vérifie si l'utilisateur existe déjà dans Firestore
    const userRef = doc(db, 'users', res.user.uid)
    await setDoc(userRef, {
      nom: res.user.displayName?.split(' ')[0] || '',
      prenom: res.user.displayName?.split(' ')[1] || '',
      email: res.user.email,
      createdAt: new Date()
    }, { merge: true }) // merge: ne pas écraser les données existantes

    router.push('/dashboard')
  } catch (err) {
    if (err.code !== 'auth/popup-closed-by-user') {
      error.value = err.message
    }
  }
}

const toggleMode = () => {
  isLogin.value = !isLogin.value
  error.value = ''
}
</script>

<style scoped>
.auth-container {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f8fafc;
}

.card {
  width: 380px;
  padding: 2rem;
  background: white;
  border-radius: 14px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
}

h2 {
  text-align: center;
  color: #1e3a8a;
  margin-bottom: 1.5rem;
}

input {
  width: 100%;
  padding: 12px;
  margin-bottom: 12px;
  border: 1px solid #cbd5e1;
  border-radius: 8px;
  font-size: 14px;
}

input:focus {
  outline: none;
  border-color: #2563eb;
}

.row {
  display: flex;
  gap: 10px;
}

button {
  width: 100%;
  padding: 12px;
  background: #2563eb;
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
}

button:hover {
  background: #1e40af;
}

.google {
  margin-top: 10px;
  background: white;
  color: #2563eb;
  border: 1px solid #2563eb;
}

.google:hover {
  background: #eff6ff;
}

.switch {
  margin-top: 15px;
  text-align: center;
  font-size: 14px;
}

.switch span {
  color: #2563eb;
  cursor: pointer;
  font-weight: 600;
}

.error {
  color: #dc2626;
  font-size: 13px;
  margin-bottom: 10px;
}
</style>