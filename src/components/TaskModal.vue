<script setup>
import { ref, watch, computed, onMounted, nextTick } from 'vue'
import { Modal } from 'bootstrap'
import { useTaskStore } from '@/stores/taskStore'

const props = defineProps({
  projectId: {
    type: String,
    required: true
  },
  task: {
    type: Object,
    default: null
  },
  show: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['update:show', 'saved'])

const taskStore = useTaskStore()
const modalRef = ref(null)
let modalInstance = null

const formData = ref({
  titre: '',
  description: '',
  dateLimite: '',
  status: 'todo'
})

const isEditing = computed(() => !!props.task)
const modalTitle = computed(() => isEditing.value ? 'Modifier la tâche' : 'Nouvelle tâche')

const initModal = () => {
  if (modalRef.value && !modalInstance) {
    modalInstance = new Modal(modalRef.value)
    
    modalRef.value.addEventListener('hidden.bs.modal', () => {
      emit('update:show', false)
    })
  }
}

onMounted(() => {
  nextTick(() => {
    initModal()
  })
})

watch(() => props.show, (newVal) => {
  if (newVal) {
    nextTick(() => {
      if (!modalInstance && modalRef.value) {
        initModal()
      }
      if (modalInstance) {
        modalInstance.show()
      }
    })
  } else if (modalInstance) {
    modalInstance.hide()
  }
}, { immediate: true })

watch(() => props.task, (newTask) => {
  if (newTask) {
    formData.value = {
      titre: newTask.titre || '',
      description: newTask.description || '',
      dateLimite: newTask.dateLimite 
        ? (newTask.dateLimite.toDate ? newTask.dateLimite.toDate().toISOString().split('T')[0] : new Date(newTask.dateLimite).toISOString().split('T')[0])
        : '',
      status: newTask.status || 'todo'
    }
  } else {
    formData.value = {
      titre: '',
      description: '',
      dateLimite: '',
      status: 'todo'
    }
  }
}, { immediate: true })

const saveTask = async () => {
  try {
    console.log('💾 Sauvegarde de la tâche...')
    console.log('projectId:', props.projectId)
    console.log('formData:', formData.value)
    
    if (!props.projectId) {
      alert('Erreur: ID du projet manquant')
      console.error('❌ projectId manquant dans TaskModal')
      return
    }

    if (isEditing.value) {
      await taskStore.updateTask(props.task.id, {
        titre: formData.value.titre,
        description: formData.value.description,
        dateLimite: formData.value.dateLimite || null,
        status: formData.value.status
      })
    } else {
      await taskStore.addTask({
        titre: formData.value.titre,
        description: formData.value.description,
        dateLimite: formData.value.dateLimite || null,
        status: formData.value.status,
        projectId: props.projectId
      })
    }
    
    console.log('✅ Tâche sauvegardée avec succès')
    
    if (modalInstance) {
      modalInstance.hide()
    }
    emit('saved')
  } catch (error) {
    console.error('❌ Erreur lors de la sauvegarde:', error)
    alert(`Erreur lors de la sauvegarde de la tâche: ${error.message || error}`)
  }
}

defineExpose({
  initModal
})
</script>

<template>
  <div 
    class="modal fade" 
    id="taskModal" 
    tabindex="-1" 
    aria-hidden="true" 
    ref="modalRef"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">{{ modalTitle }}</h5>
          <button 
            type="button" 
            class="btn-close" 
            data-bs-dismiss="modal" 
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <form @submit.prevent="saveTask">
            <div class="mb-3">
              <label for="taskTitre" class="form-label">Titre *</label>
              <input 
                type="text" 
                class="form-control" 
                id="taskTitre" 
                v-model="formData.titre" 
                required
                placeholder="Titre de la tâche"
              >
            </div>
            
            <div class="mb-3">
              <label for="taskDescription" class="form-label">Description</label>
              <textarea 
                class="form-control" 
                id="taskDescription" 
                v-model="formData.description" 
                rows="3"
                placeholder="Description de la tâche"
              ></textarea>
            </div>
            
            <div class="mb-3">
              <label for="taskDateLimite" class="form-label">Date limite</label>
              <input 
                type="date" 
                class="form-control" 
                id="taskDateLimite" 
                v-model="formData.dateLimite"
              >
            </div>
            
            <div class="mb-3">
              <label for="taskStatus" class="form-label">Statut</label>
              <select 
                class="form-select" 
                id="taskStatus" 
                v-model="formData.status"
              >
                <option value="todo">To Do</option>
                <option value="doing">Doing</option>
                <option value="done">Done</option>
              </select>
            </div>
            
            <div class="d-flex justify-content-end gap-2">
              <button 
                type="button" 
                class="btn btn-secondary" 
                data-bs-dismiss="modal"
              >
                Annuler
              </button>
              <button type="submit" class="btn btn-primary">
                Enregistrer
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

