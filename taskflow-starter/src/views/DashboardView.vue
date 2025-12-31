<script setup>
import { onMounted, ref, computed } from 'vue'
import { useProjectStore } from '@/stores/projectStore'
import { Modal } from 'bootstrap'

// Import icônes lucide
import { Eye, Edit, Trash2, Plus } from 'lucide-vue-next'

const projectStore = useProjectStore()
const editModalRef = ref(null)
let modalInstance = null
const editingProject = ref({
  name: '',
  description: ''
})
const isEditing = ref(false)

onMounted(() => {
  projectStore.fetchProjects()
  modalInstance = new Modal(editModalRef.value)
})

const modalTitle = computed(() => isEditing.value ? 'Modifier le projet' : 'Nouveau projet')

// Fonctions temporaires pour open
const openProject = (projectId) => {
  console.log('Ouvrir projet', projectId)
}

const openCreateModal = () => {
  isEditing.value = false
  editingProject.value = { name: '', description: '' }
  modalInstance.show()
}

const openEditModal = (project) => {
  isEditing.value = true
  editingProject.value = { ...project }
  modalInstance.show()
}

const saveProject = async () => {
  if (isEditing.value) {
    await projectStore.updateProject(editingProject.value.id, {
      name: editingProject.value.name,
      description: editingProject.value.description
    })
  } else {
    await projectStore.addProject({
      name: editingProject.value.name,
      description: editingProject.value.description
    })
  }
  modalInstance.hide()
}

const confirmDelete = async (id) => {
  if (confirm('Êtes-vous sûr de vouloir supprimer ce projet ?')) {
    await projectStore.deleteProject(id)
  }
}
</script>

<template>
  <div class="container py-5">
    <div class="d-flex justify-content-between align-items-center mb-5">
      <h1 class="display-5 fw-bold text-dark m-0">Mes projets</h1>
      <button class="btn btn-primary d-flex align-items-center gap-2" @click="openCreateModal">
        <Plus size="20" />
        Nouveau projet
      </button>
    </div>

    <div class="row g-4">
      <div 
        v-for="project in projectStore.projects" 
        :key="project.id"
        class="col-12 col-md-6 col-lg-4"
      >
        <div class="card h-100 shadow-sm border-0">
          <div class="card-body d-flex flex-column p-4">
             <h5 class="card-title fw-bold mb-2 text-dark">{{ project.name }}</h5>
             <p class="card-text text-muted mb-4">{{ project.description }}</p>
             
             <div class="mt-auto">
               <p class="text-muted small mb-3 border-top pt-3">
                 Créé le : {{ project.createdAt ? new Date(project.createdAt.seconds * 1000).toLocaleDateString() : 'Récemment' }}
               </p>

               <!-- Actions -->
               <div class="d-flex gap-3">
                 <button 
                  class="btn btn-outline-primary rounded-circle p-2 d-flex align-items-center justify-content-center"
                  style="width: 40px; height: 40px;"
                  @click="openProject(project.id)"
                  title="Voir"
                 >
                   <Eye size="20" />
                 </button>
                 <button 
                  class="btn btn-outline-primary rounded-circle p-2 d-flex align-items-center justify-content-center"
                  style="width: 40px; height: 40px;"
                  @click="openEditModal(project)"
                  title="Modifier"
                 >
                   <Edit size="20" />
                 </button>
                 <button 
                  class="btn btn-outline-danger rounded-circle p-2 ms-auto d-flex align-items-center justify-content-center"
                  style="width: 40px; height: 40px;"
                  @click="confirmDelete(project.id)"
                  title="Supprimer"
                 >
                   <Trash2 size="20" />
                 </button>
               </div>
             </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal Modification / Création -->
    <div class="modal fade" id="editModal" tabindex="-1" aria-hidden="true" ref="editModalRef">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">{{ modalTitle }}</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <form v-if="editingProject" @submit.prevent="saveProject">
              <div class="mb-3">
                <label for="projectName" class="form-label">Nom du projet</label>
                <input type="text" class="form-control" id="projectName" v-model="editingProject.name" required>
              </div>
              <div class="mb-3">
                <label for="projectDesc" class="form-label">Description</label>
                <textarea class="form-control" id="projectDesc" v-model="editingProject.description" rows="3"></textarea>
              </div>
              <div class="d-flex justify-content-end gap-2">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Annuler</button>
                <button type="submit" class="btn btn-primary">Enregistrer</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
