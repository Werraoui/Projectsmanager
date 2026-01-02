import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AuthView from '@/views/AuthView.vue'
import DashboardView from '@/views/DashboardView.vue'
import ProjectDetails from '@/views/ProjectDetails.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/auth'
    },
    {
      path: '/home',
      component: HomeView
    },
    {
      path: '/auth',
      name: 'Auth',
      component: AuthView
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: DashboardView,
      // meta: { requiresAuth: true } // Désactivé pour le moment
    },
    {
      path: '/project/:id',
      name: 'ProjectDetails',
      component: ProjectDetails,
      // meta: { requiresAuth: true } // Désactivé pour le moment
    }
  ]
})

// Navigation Guard (désactivé pour le moment)
// router.beforeEach((to) => {
//   const authStore = useAuthStore()
//   if (to.meta.requiresAuth && !authStore.user) {
//     return '/auth'
//   }
// })

export default router
