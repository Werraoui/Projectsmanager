import { defineStore } from 'pinia'
import { ref } from 'vue'
import { auth } from '@/firebase/config'
import { signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth'

export const useAuthStore = defineStore('auth', () => {
  const user = ref(auth.currentUser)

  onAuthStateChanged(auth, (currentUser) => {
    user.value = currentUser
  })

  const login = async (email, password) => {
    const res = await signInWithEmailAndPassword(auth, email, password)
    user.value = res.user
  }

  const logout = async () => {
    await signOut(auth)
    user.value = null
  }

  return { user, login, logout }
})