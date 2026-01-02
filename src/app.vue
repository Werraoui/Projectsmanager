<script setup>
import AppNavbar from '@/components/AppNavbar.vue'
</script>

<template>
  <div class="min-h-screen bg-gray-100">
    <!-- Barre de navigation -->
    <AppNavbar />

    <!-- Contenu des pages -->
    <main class="p-4">
      <router-view />
    </main>
  </div>
</template>
