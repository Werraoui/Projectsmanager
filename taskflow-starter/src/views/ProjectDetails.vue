<script setup>
import { onMounted, onUnmounted, ref, computed, nextTick } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useProjectStore } from '@/stores/projectStore'
import { useTaskStore } from '@/stores/taskStore'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '@/firebase/config'
import { ArrowLeft, Plus, Trash2, MoreHorizontal, Clock, CheckCircle2, CircleDashed, Loader2 } from 'lucide-vue-next'
import { Modal } from 'bootstrap'

const route = useRoute()
const router = useRouter()
const taskStore = useTaskStore()

const project = ref(null)
const loading = ref(true)
let unsubscribeTasks = null

// Modal refs
const taskModalRef = ref(null)
let taskModalInstance = null
const newTaskName = ref('')
const newTaskDesc = ref('')

onMounted(async () => {
  const projectId = route.params.id
  
  // 1. Get Project Info
  const projectRef = doc(db, 'projets', projectId)
  const snap = await getDoc(projectRef)
  
  if (snap.exists()) {
    project.value = { id: snap.id, ...snap.data() }
  } else {
    router.push('/dashboard')
    return
  }
  
  // 2. Subscribe to tasks
  unsubscribeTasks = taskStore.subscribeToProjectTasks(projectId)
  loading.value = false

  // 3. Init Modal
  await nextTick()
  if (taskModalRef.value) {
    taskModalInstance = new Modal(taskModalRef.value)
  }
})

onUnmounted(() => {
  if (unsubscribeTasks) unsubscribeTasks()
})

// Computed Columns
const todoTasks = computed(() => taskStore.tasks.filter(t => t.status === 'todo'))
const doingTasks = computed(() => taskStore.tasks.filter(t => t.status === 'doing'))
const doneTasks = computed(() => taskStore.tasks.filter(t => t.status === 'done'))

// Actions
const openCreateModal = () => {
  newTaskName.value = ''
  newTaskDesc.value = ''
  taskModalInstance.show()
}

const createTask = async () => {
  if(!newTaskName.value.trim()) return
  
  try {
    await taskStore.addTask({
      title: newTaskName.value,
      description: newTaskDesc.value, // Added description capability
      projectId: project.value.id,
      status: 'todo'
    })
    taskModalInstance.hide()
  } catch (e) {
    console.error(e)
  }
}

const updateStatus = async (task, newStatus) => {
  await taskStore.updateTask(task.id, { status: newStatus })
}

const deleteTask = async (taskId) => {
  if(confirm('Supprimer cette tâche ?')) {
    await taskStore.deleteTask(taskId)
  }
}

const statusColors = {
  todo: 'text-secondary',
  doing: 'text-primary',
  done: 'text-success'
}

const statusBg = {
  todo: 'bg-light',
  doing: 'bg-primary-subtle',
  done: 'bg-success-subtle'
}
</script>

<template>
  <div class="container-fluid px-4 py-4" v-if="project">
    <!-- Header -->
    <div class="d-flex justify-content-between align-items-center mb-4">
      <div class="d-flex align-items-center gap-3">
        <button @click="router.push('/dashboard')" class="btn btn-outline-secondary border-0 p-2 rounded-circle hover-bg-gray">
          <ArrowLeft size="20"/>
        </button>
        <div>
          <h4 class="mb-0 fw-bold">{{ project.name }}</h4>
          <span class="text-muted small">Manage your tasks</span>
        </div>
      </div>
      
      <button class="btn btn-primary d-flex align-items-center gap-2" @click="openCreateModal">
        <Plus size="18"/>
        Add Task
      </button>
    </div>

    <!-- Kanban Board -->
    <div class="row g-4 overflow-x-auto flex-nowrap pb-3" style="min-height: calc(100vh - 150px);">
      
      <!-- To Do Column -->
      <div class="col-12 col-md-4 col-lg-4" style="min-width: 300px;">
        <div class="d-flex align-items-center justify-content-between mb-3">
          <div class="d-flex align-items-center gap-2">
            <CircleDashed size="18" class="text-secondary"/>
            <span class="fw-bold text-secondary">To Do</span>
          </div>
          <span class="badge bg-secondary-subtle text-secondary rounded-pill px-2">{{ todoTasks.length }}</span>
        </div>
        
        <div class="d-flex flex-column gap-3 kanban-column p-2 rounded-3">
          <div v-for="task in todoTasks" :key="task.id" class="card shadow-sm border-0 task-card">
            <div class="card-body p-3">
              <h6 class="fw-bold mb-2">{{ task.title }}</h6>
              <p v-if="task.description" class="text-muted small mb-3">{{ task.description }}</p>
              
              <div class="d-flex justify-content-between align-items-center mt-3 pt-3 border-top border-light">
                 <div class="dropdown">
                  <button class="btn btn-sm btn-light border d-flex align-items-center gap-2 dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <CircleDashed size="14"/> To Do
                  </button>
                  <ul class="dropdown-menu">
                    <li><a class="dropdown-item active" href="#">To Do</a></li>
                    <li><a class="dropdown-item" href="#" @click="updateStatus(task, 'doing')">Doing</a></li>
                    <li><a class="dropdown-item" href="#" @click="updateStatus(task, 'done')">Done</a></li>
                  </ul>
                 </div>
                 
                 <button @click="deleteTask(task.id)" class="btn btn-link text-danger p-0 opacity-50 hover-opacity-100">
                   <Trash2 size="16"/>
                 </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Doing Column -->
      <div class="col-12 col-md-4 col-lg-4" style="min-width: 300px;">
        <div class="d-flex align-items-center justify-content-between mb-3">
          <div class="d-flex align-items-center gap-2">
            <Loader2 size="18" class="text-primary spin-slow"/>
            <span class="fw-bold text-primary">Doing</span>
          </div>
          <span class="badge bg-primary-subtle text-primary rounded-pill px-2">{{ doingTasks.length }}</span>
        </div>
        
        <div class="d-flex flex-column gap-3 kanban-column p-2 rounded-3 border-primary-dashed">
          <div v-for="task in doingTasks" :key="task.id" class="card shadow-sm border-0 task-card">
            <div class="card-body p-3">
              <h6 class="fw-bold mb-2">{{ task.title }}</h6>
              <p v-if="task.description" class="text-muted small mb-3">{{ task.description }}</p>
              
              <div class="d-flex justify-content-between align-items-center mt-3 pt-3 border-top border-light">
                 <div class="dropdown">
                  <button class="btn btn-sm btn-primary-subtle text-primary border-primary-subtle d-flex align-items-center gap-2 dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <Loader2 size="14"/> Doing
                  </button>
                  <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#" @click="updateStatus(task, 'todo')">To Do</a></li>
                    <li><a class="dropdown-item active" href="#">Doing</a></li>
                    <li><a class="dropdown-item" href="#" @click="updateStatus(task, 'done')">Done</a></li>
                  </ul>
                 </div>

                 <button @click="deleteTask(task.id)" class="btn btn-link text-danger p-0 opacity-50 hover-opacity-100">
                   <Trash2 size="16"/>
                 </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Done Column -->
      <div class="col-12 col-md-4 col-lg-4" style="min-width: 300px;">
        <div class="d-flex align-items-center justify-content-between mb-3">
          <div class="d-flex align-items-center gap-2">
            <CheckCircle2 size="18" class="text-success"/>
            <span class="fw-bold text-success">Done</span>
          </div>
          <span class="badge bg-success-subtle text-success rounded-pill px-2">{{ doneTasks.length }}</span>
        </div>
        
        <div class="d-flex flex-column gap-3 kanban-column p-2 rounded-3 border-success-dashed">
          <div v-for="task in doneTasks" :key="task.id" class="card shadow-sm border-0 task-card">
            <div class="card-body p-3">
              <h6 class="fw-bold mb-2 text-decoration-line-through text-muted">{{ task.title }}</h6>
              <p v-if="task.description" class="text-muted small mb-3">{{ task.description }}</p>
              
              <div class="d-flex justify-content-between align-items-center mt-3 pt-3 border-top border-light">
                 <div class="dropdown">
                  <button class="btn btn-sm btn-success-subtle text-success border-success-subtle d-flex align-items-center gap-2 dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <CheckCircle2 size="14"/> Done
                  </button>
                  <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#" @click="updateStatus(task, 'todo')">To Do</a></li>
                    <li><a class="dropdown-item" href="#" @click="updateStatus(task, 'doing')">Doing</a></li>
                    <li><a class="dropdown-item active" href="#">Done</a></li>
                  </ul>
                 </div>

                 <button @click="deleteTask(task.id)" class="btn btn-link text-danger p-0 opacity-50 hover-opacity-100">
                   <Trash2 size="16"/>
                 </button>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>

    <!-- Create Task Modal -->
    <div class="modal fade" id="createTaskModal" tabindex="-1" ref="taskModalRef">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content border-0 shadow">
          <div class="modal-header border-0 pb-0">
            <h5 class="modal-title fw-bold">New Task</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body p-4">
            <form @submit.prevent="createTask">
              <div class="mb-3">
                <label class="form-label text-muted small fw-bold text-uppercase">Title</label>
                <input v-model="newTaskName" type="text" class="form-control" placeholder="e.g. Implement functionality" required>
              </div>
              <div class="mb-4">
                <label class="form-label text-muted small fw-bold text-uppercase">Description (Optional)</label>
                <textarea v-model="newTaskDesc" class="form-control" rows="3" placeholder="Add more details..."></textarea>
              </div>
              <div class="d-grid">
                <button type="submit" class="btn btn-primary py-2">Create Task</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>

  </div>
  
  <div v-else-if="loading" class="d-flex justify-content-center align-items-center vh-100">
     <div class="spinner-border text-primary" role="status"></div>
  </div>
</template>

<style scoped>
.kanban-column {
  background-color: #f8fafc;
  min-height: 200px;
  height: 100%;
}

.border-primary-dashed {
  border: 1px dashed #bfdbfe;
  background-color: #eff6ff;
}

.border-success-dashed {
  border: 1px dashed #bbf7d0;
  background-color: #f0fdf4;
}

.task-card {
  transition: transform 0.2s, box-shadow 0.2s;
  cursor: grab;
}

.task-card:active {
  cursor: grabbing;
}

.task-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06) !important;
}

.spin-slow {
  animation: spin 3s linear infinite;
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.hover-bg-gray:hover {
  background-color: #f1f5f9;
}

.hover-opacity-100:hover {
  opacity: 1 !important;
}
</style>
