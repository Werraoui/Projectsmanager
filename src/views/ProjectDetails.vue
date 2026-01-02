<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useProjectStore } from '@/stores/projectStore'
import { useTaskStore } from '@/stores/taskStore'
import TaskCard from '@/components/TaskCard.vue'
import TaskModal from '@/components/TaskModal.vue'
import { ArrowLeft, Plus, Circle, Clock, CheckCircle2 } from 'lucide-vue-next'

const route = useRoute()
const router = useRouter()
const projectStore = useProjectStore()
const taskStore = useTaskStore()

const projectId = computed(() => route.params.id)
const project = computed(() => 
  projectStore.projects.find(p => p.id === projectId.value)
)

const showTaskModal = ref(false)
const editingTask = ref(null)
const draggedTask = ref(null)
const draggedOverColumn = ref(null)

const statuses = [
  { key: 'todo', label: 'To Do', icon: Circle, color: 'text-gray-500' },
  { key: 'doing', label: 'Doing', icon: Clock, color: 'text-blue-500' },
  { key: 'done', label: 'Done', icon: CheckCircle2, color: 'text-green-500' }
]

const tasksByStatus = (status) => {
  return taskStore.tasksByStatus(status)
}

onMounted(() => {
  if (projectId.value) {
    console.log('📋 Chargement des tâches pour le projet:', projectId.value)
    taskStore.fetchTasks(String(projectId.value))
  } else {
    console.error('❌ projectId manquant dans ProjectDetails')
  }
})

onUnmounted(() => {
  taskStore.cleanup()
})

const goBack = () => {
  router.push('/dashboard')
}

const openAddTaskModal = () => {
  editingTask.value = null
  showTaskModal.value = true
}

const openEditTaskModal = (task) => {
  editingTask.value = task
  showTaskModal.value = true
}

const handleTaskSaved = () => {
  showTaskModal.value = false
  editingTask.value = null
}

const handleDeleteTask = async (taskId) => {
  await taskStore.deleteTask(taskId)
}

// Drag and Drop handlers
const handleDragStart = (event, task) => {
  draggedTask.value = task
  event.dataTransfer.effectAllowed = 'move'
  event.target.classList.add('dragging')
}

const handleDragOver = (event, status) => {
  event.preventDefault()
  event.dataTransfer.dropEffect = 'move'
  draggedOverColumn.value = status
}

const handleDragLeave = () => {
  draggedOverColumn.value = null
}

const handleDrop = async (event, targetStatus) => {
  event.preventDefault()
  
  if (draggedTask.value && draggedTask.value.status !== targetStatus) {
    await taskStore.changeTaskStatus(draggedTask.value.id, targetStatus)
  }
  
  draggedTask.value = null
  draggedOverColumn.value = null
  
  // Retirer la classe dragging de tous les éléments
  document.querySelectorAll('.dragging').forEach(el => {
    el.classList.remove('dragging')
  })
}

const handleDragEnd = () => {
  draggedTask.value = null
  draggedOverColumn.value = null
  document.querySelectorAll('.dragging').forEach(el => {
    el.classList.remove('dragging')
  })
}
</script>

<template>
  <div class="container-fluid py-4">
    <!-- Header -->
    <div class="d-flex justify-content-between align-items-center mb-4">
      <div>
        <button 
          class="btn btn-link text-decoration-none p-0 mb-2 d-flex align-items-center gap-2"
          @click="goBack"
        >
          <ArrowLeft size="20" />
          <span>Back</span>
        </button>
        <h1 class="display-6 fw-bold text-dark m-0">{{ project?.name || 'Projet' }}</h1>
        <p class="text-muted mb-0">Manage your tasks</p>
      </div>
      <button 
        class="btn btn-primary d-flex align-items-center gap-2"
        @click="openAddTaskModal"
      >
        <Plus size="20" />
        Add Task
      </button>
    </div>

    <!-- Kanban Board -->
    <div class="row g-4">
      <div 
        v-for="status in statuses" 
        :key="status.key"
        class="col-12 col-md-4"
      >
        <div 
          class="kanban-column h-100 p-3 rounded"
          :class="{ 'drag-over': draggedOverColumn === status.key }"
          @dragover="handleDragOver($event, status.key)"
          @dragleave="handleDragLeave"
          @drop="handleDrop($event, status.key)"
        >
          <!-- Column Header -->
          <div class="d-flex align-items-center justify-content-between mb-3">
            <div class="d-flex align-items-center gap-2">
              <component 
                :is="status.icon" 
                size="20" 
                :class="status.color"
              />
              <h5 class="fw-bold m-0">{{ status.label }}</h5>
            </div>
            <span class="badge bg-secondary">{{ tasksByStatus(status.key).length }}</span>
          </div>

          <!-- Tasks in this column -->
          <div class="tasks-container">
            <TaskCard
              v-for="task in tasksByStatus(status.key)"
              :key="task.id"
              :task="task"
              @edit="openEditTaskModal"
              @delete="handleDeleteTask"
              @dragstart="handleDragStart($event, task)"
              @dragend="handleDragEnd"
            />
            
            <div 
              v-if="tasksByStatus(status.key).length === 0"
              class="text-center text-muted py-5"
            >
              Aucune tâche
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Task Modal -->
    <TaskModal
      v-if="projectId"
      :project-id="String(projectId)"
      :task="editingTask"
      :show="showTaskModal"
      @update:show="showTaskModal = $event"
      @saved="handleTaskSaved"
    />
  </div>
</template>

<style scoped>
.kanban-column {
  background-color: #f8f9fa;
  min-height: 500px;
  border: 1px solid #dee2e6;
  transition: background-color 0.2s;
}

.kanban-column.drag-over {
  background-color: #e7f3ff;
  border-color: #0d6efd;
}

.tasks-container {
  min-height: 200px;
}

@media (max-width: 768px) {
  .kanban-column {
    min-height: 300px;
  }
}
</style>
