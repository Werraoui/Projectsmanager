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
    serverTimestamp
} from 'firebase/firestore'
import { useAuthStore } from './authStore'

export const useTaskStore = defineStore('task', {
    state: () => ({
        tasks: []
    }),

    actions: {
        // 🔄 Subscribe to tasks for a specific project
        subscribeToProjectTasks(projectId) {
            this.tasks = [] // Reset
            const q = query(
                collection(db, 'taches'),
                where('projectId', '==', projectId)
            )

            return onSnapshot(q, (snapshot) => {
                this.tasks = snapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }))
            })
        },

        // ➕ Create Task
        async addTask(task) {
            const authStore = useAuthStore()
            if (!authStore.user) throw new Error("Must be logged in")

            await addDoc(collection(db, 'taches'), {
                ...task,
                userId: authStore.user.uid,
                createdAt: serverTimestamp(),
                status: 'todo' // Default status
            })
        },

        // ✏️ Update Task
        async updateTask(id, data) {
            await updateDoc(doc(db, 'taches', id), data)
        },

        // 🗑 Delete Task
        async deleteTask(id) {
            await deleteDoc(doc(db, 'taches', id))
        }
    }
})
