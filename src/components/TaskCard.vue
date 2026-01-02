<script setup>
import { computed } from 'vue'
import { Circle, Clock, CheckCircle2, Calendar } from 'lucide-vue-next'
import { useTaskStore } from '@/stores/taskStore'

const props = defineProps({
  task: {
    type: Object,
    required: true
  }
})

const emit = defineEmits(['edit', 'delete'])

const taskStore = useTaskStore()

const statusConfig = {
  todo: {
    icon: Circle,
    label: 'To Do',
    color: 'text-gray-500',
    borderColor: 'border-gray-300'
  },
  doing: {
    icon: Clock,
    label: 'Doing',
    color: 'text-blue-500',
    borderColor: 'border-blue-300'
  },
  done: {
    icon: CheckCircle2,
    label: 'Done',
    color: 'text-green-500',
    borderColor: 'border-green-300'
  }
}

const currentStatus = computed(() => statusConfig[props.task.status] || statusConfig.todo)
const StatusIcon = computed(() => currentStatus.value.icon)

const formatDate = (date) => {
  if (!date) return null
  const d = date.toDate ? date.toDate() : new Date(date)
  return d.toLocaleDateString('fr-FR', {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  })
}

const handleStatusChange = async (newStatus) => {
  await taskStore.changeTaskStatus(props.task.id, newStatus)
}

const handleEdit = () => {
  emit('edit', props.task)
}

const handleDelete = () => {
  if (confirm('Êtes-vous sûr de vouloir supprimer cette tâche ?')) {
    emit('delete', props.task.id)
  }
}
</script>

<template>
  <div 
    class="task-card bg-white rounded-lg p-4 mb-3 shadow-sm"
    :class="currentStatus.borderColor"
    style="border: 2px dashed; cursor: move;"
    draggable="true"
    @dragstart="$emit('dragstart', $event, task)"
  >
    <h5 class="fw-bold mb-2 text-dark">{{ task.titre }}</h5>
    <p class="text-muted small mb-3">{{ task.description }}</p>
    
    <div v-if="task.dateLimite" class="d-flex align-items-center gap-1 mb-3">
      <Calendar size="14" class="text-muted" />
      <span class="text-muted small">{{ formatDate(task.dateLimite) }}</span>
    </div>

    <div class="d-flex justify-content-between align-items-center">
      <div class="d-flex align-items-center gap-2">
        <component :is="StatusIcon" size="16" :class="currentStatus.color" />
        <span class="small" :class="currentStatus.color">{{ currentStatus.label }}</span>
      </div>
      
      <div class="d-flex gap-2">
        <select 
          class="form-select form-select-sm" 
          :value="task.status"
          @change="handleStatusChange($event.target.value)"
          style="width: auto;"
        >
          <option value="todo">To Do</option>
          <option value="doing">Doing</option>
          <option value="done">Done</option>
        </select>
        <button 
          class="btn btn-sm btn-outline-danger"
          @click="handleDelete"
          title="Supprimer"
        >
          ×
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.task-card {
  transition: transform 0.2s, box-shadow 0.2s;
}

.task-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1) !important;
}

.task-card.dragging {
  opacity: 0.5;
}
</style>

