<script setup>
import { computed } from 'vue'
import { useAuthStore } from '@/stores/authStore'
import { useRouter } from 'vue-router'

const authStore = useAuthStore()
const router = useRouter()
const user = computed(() => authStore.user)

const logout = async () => {
  await authStore.logout();
  router.push("/auth");
};
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
    <div class="container-fluid">
      <router-link class="navbar-brand fw-bold" to="/">
        Task Manager
      </router-link>
      
      <div class="navbar-nav ms-auto d-flex flex-row gap-3 align-items-center">
        <router-link 
          v-if="authStore.user" 
          class="nav-link" 
          to="/dashboard"
        >
          Dashboard
        </router-link>

        <button 
          v-if="authStore.user" 
          class="btn btn-outline-danger btn-sm"
          @click="logout"
        >
          Déconnexion
        </button>

        <router-link 
          v-else 
          class="nav-link" 
          to="/auth"
        >
          Login
        </router-link>
      </div>
    </div>
  </nav>
</template>
