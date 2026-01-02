import { defineStore } from 'pinia'
import { db } from '@/firebase/config'
import {
  collection,
  addDoc,
  deleteDoc,
  doc,
  updateDoc,
  onSnapshot,
  query,
  where
} from 'firebase/firestore'
import { useAuthStore } from './authStore'

export const useProjectStore = defineStore('project', {
  state: () => ({
    projects: []
  }),

  actions: {

    // 🔄 Récupération temps réel
    fetchProjects() {
      const authStore = useAuthStore()
      if (!authStore.user) return

      const q = query(
        collection(db, 'projets'),
        where('userId', '==', authStore.user.uid)
      )

      onSnapshot(q, (snapshot) => {
        // console.log(snapshot.docs.map(doc => doc.data()))

        this.projects = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }))
      })
    },


    // ➕ Création
    async addProject(project) {
      const authStore = useAuthStore()
      if (!authStore.user) throw new Error('User not authenticated')

      await addDoc(collection(db, 'projets'), {
        ...project,
        userId: authStore.user.uid,
        createdAt: new Date()
      })
    },

    // ✏️ Modification
    async updateProject(id, data) {
      await updateDoc(doc(db, 'projets', id), data)
    },

    // 🗑 Suppression
    async deleteProject(id) {
      await deleteDoc(doc(db, 'projets', id))
    }
  }
})
