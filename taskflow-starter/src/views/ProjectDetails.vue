<script setup>
import { onMounted, onUnmounted, ref, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useProjectStore } from '@/stores/projectStore'
import { useTaskStore } from '@/stores/taskStore'
import { useAuthStore } from '@/stores/authStore'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '@/firebase/config'
import { ArrowLeft, Plus, CheckCircle, Circle, Trash2, Clock } from 'lucide-vue-next'

const route = useRoute()
const router = useRouter()
const projectStore = useProjectStore()
const taskStore = useTaskStore()
const authStore = useAuthStore()

const project = ref(null)
const tasks = computed(() => taskStore.tasks)
const newTaskName = ref('')
const loading = ref(true)

let unsubscribeTasks = null

onMounted(async () => {
  // Fetch project details separately since projectStore might not be fully loaded or we accessed directly
  // However, simpler to just get doc directly for details if not in store, 
  // currently projectStore listens to ALL projects of user so it should be there if loaded.
  // But let's be robust:
  
  const projectId = route.params.id
  
  // 1. Get Project Info
  const projectRef = doc(db, 'projets', projectId)
  const snap = await getDoc(projectRef)
  
  if (snap.exists()) {
    project.value = { id: snap.id, ...snap.data() }
  } else {
    router.push('/dashboard') // Not found
    return
  }
  
  // 2. Subscribe to tasks
  unsubscribeTasks = taskStore.subscribeToProjectTasks(projectId)
  loading.value = false
})

onUnmounted(() => {
  if (unsubscribeTasks) unsubscribeTasks()
})

const createTask = async () => {
  if(!newTaskName.value.trim()) return
  
  try {
    await taskStore.addTask({
      title: newTaskName.value,
      projectId: project.value.id
    })
    newTaskName.value = ''
  } catch (e) {
    console.error(e)
  }
}

const toggleStatus = async (task) => {
  const newStatus = task.status === 'done' ? 'todo' : 'done'
  await taskStore.updateTask(task.id, { status: newStatus })
}

const deleteTask = async (taskId) => {
  if(confirm('Supprimer cette tâche ?')) {
    await taskStore.deleteTask(taskId)
  }
}
</script>

<template>
  <div class="container py-5" v-if="project">
    <!-- Header -->
    <div class="mb-5">
      <button @click="router.push('/dashboard')" class="btn btn-link text-decoration-none p-0 mb-3 d-flex align-items-center gap-2 text-secondary">
        <ArrowLeft size="20"/> Retour au tableau de bord
      </button>
      <h1 class="display-5 fw-bold text-primary">{{ project.name }}</h1>
      <p class="lead text-muted">{{ project.description }}</p>
    </div>

    <!-- Task Creation -->
    <div class="card shadow-sm border-0 mb-5">
      <div class="card-body p-4">
        <form @submit.prevent="createTask" class="d-flex gap-3">
          <input 
            v-model="newTaskName" 
            type="text" 
            class="form-control form-control-lg" 
            placeholder="Nouvelle tâche..." 
            required
          >
          <button type="submit" class="btn btn-primary btn-lg d-flex align-items-center gap-2">
            <Plus size="24"/>
            Ajouter
          </button>
        </form>
      </div>
    </div>

    <!-- Tasks List -->
    <div class="row">
      <div class="col-12">
        <div v-if="tasks.length === 0" class="text-center py-5 text-muted">
          <div class="mb-3">
            <Clock size="48" class="opacity-25"/>
          </div>
          <p class="h5">Aucune tâche pour le moment</p>
          <p>Commencez par en ajouter une ci-dessus !</p>
        </div>

        <div v-else class="list-group list-group-flush border rounded-3 overflow-hidden shadow-sm">
          <div 
            v-for="task in tasks" 
            :key="task.id" 
            class="list-group-item p-4 d-flex align-items-center justify-content-between gap-3 task-item"
            :class="{'bg-light': task.status === 'done'}"
          >
            <div class="d-flex align-items-center gap-3 flex-grow-1">
              <button 
                @click="toggleStatus(task)"
                class="btn p-0 border-0"
                :class="task.status === 'done' ? 'text-success' : 'text-secondary'"
              >
                <CheckCircle v-if="task.status === 'done'" size="24" class="fill-current"/>
                <Circle v-else size="24" />
              </button>
              
              <span 
                class="h5 m-0"
                :class="{'text-decoration-line-through text-muted': task.status === 'done'}"
              >
                {{ task.title }}
              </span>
            </div>

            <button 
              @click="deleteTask(task.id)"
              class="btn btn-link text-danger p-2 opacity-50 hover-opacity-100"
              title="Supprimer"
            >
              <Trash2 size="20"/>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-else-if="loading" class="container py-5 text-center">
    <div class="spinner-border text-primary" role="status">
      <span class="visually-hidden">Chargement...</span>
    </div>
  </div>
</template>

<style scoped>
.task-item {
  transition: all 0.2s ease;
}
.task-item:hover {
  background-color: #f8f9fa;
}
.hover-opacity-100:hover {
  opacity: 1 !important;
}
</style>
