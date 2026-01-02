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
  where,
  orderBy
} from 'firebase/firestore'

export const useTaskStore = defineStore('task', {
  state: () => ({
    tasks: [],
    unsubscribe: null
  }),

  getters: {
    tasksByStatus: (state) => (status) => {
      return state.tasks.filter(task => task.status === status)
    },
    todoTasks: (state) => state.tasks.filter(task => task.status === 'todo'),
    doingTasks: (state) => state.tasks.filter(task => task.status === 'doing'),
    doneTasks: (state) => state.tasks.filter(task => task.status === 'done')
  },

  actions: {
    //  Récupération temps réel avec onSnapshot
    fetchTasks(projectId) {
      // Désabonner de l'ancien listener si il existe
      if (this.unsubscribe) {
        this.unsubscribe()
      }

      if (!projectId) {
        console.error('projectId est manquant pour fetchTasks')
        return
      }

      // Utiliser orderBy seulement si nécessaire, sinon juste where
      const q = query(
        collection(db, 'taches'),
        where('projectId', '==', projectId)
      )

      this.unsubscribe = onSnapshot(q, (snapshot) => {
        console.log(' Tâches reçues:', snapshot.docs.length)
        this.tasks = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }))
      }, (error) => {
        console.error(' Erreur lors de la récupération des tâches:', error)
        // Si l'erreur est liée à orderBy, réessayer sans orderBy
        if (error.code === 'failed-precondition') {
          console.log('Index manquant, réessai sans orderBy...')
          const qSimple = query(
            collection(db, 'taches'),
            where('projectId', '==', projectId)
          )
          this.unsubscribe = onSnapshot(qSimple, (snapshot) => {
            this.tasks = snapshot.docs.map(doc => ({
              id: doc.id,
              ...doc.data()
            }))
          })
        }
      })
    },

    // Nettoyer l'abonnement
    cleanup() {
      if (this.unsubscribe) {
        this.unsubscribe()
        this.unsubscribe = null
      }
      this.tasks = []
    },

    // ➕ Création de tâche
    async addTask(task) {
      console.log('Ajout de tâche:', task)
      
      if (!task.projectId) {
        console.error(' projectId manquant dans la tâche')
        throw new Error('projectId est requis pour créer une tâche')
      }

      if (!task.titre || task.titre.trim() === '') {
        console.error(' Titre manquant')
        throw new Error('Le titre est requis')
      }

      try {
        const taskData = {
          titre: task.titre.trim(),
          description: task.description || '',
          dateLimite: task.dateLimite ? new Date(task.dateLimite) : null,
          status: task.status || 'todo',
          projectId: task.projectId,
          createdAt: new Date()
        }
        
        console.log(' Envoi à Firestore:', taskData)
        const docRef = await addDoc(collection(db, 'taches'), taskData)
        console.log('Tâche créée avec ID:', docRef.id)
        return docRef.id
      } catch (error) {
        console.error(' Erreur lors de l\'ajout de la tâche:', error)
        throw error
      }
    },

    //  Modification de tâche
    async updateTask(id, data) {
      const updateData = { ...data }
      if (updateData.dateLimite && typeof updateData.dateLimite === 'string') {
        updateData.dateLimite = new Date(updateData.dateLimite)
      }
      await updateDoc(doc(db, 'taches', id), updateData)
    },

    //  Changer le statut d'une tâche
    async changeTaskStatus(id, newStatus) {
      await updateDoc(doc(db, 'taches', id), {
        status: newStatus
      })
    },

    // 🗑 Suppression de tâche
    async deleteTask(id) {
      await deleteDoc(doc(db, 'taches', id))
    }
  }
})

