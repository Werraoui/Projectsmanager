import { createRouter, createWebHistory } from 'vue-router'
import { auth } from '@/firebase/config'
import AuthView from '../views/AuthView.vue'
import DashboardView from '../views/DashboardView.vue'
import ProjectDetails from '../views/ProjectDetails.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'Login',
      component: AuthView
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: DashboardView,
      meta: { requiresAuth: true }
    },
    {
      path: '/project/:id',
      name: 'ProjectDetails',
      component: ProjectDetails,
      meta: { requiresAuth: true }
    }
  ]
})

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)

  // We need to wait for firebase auth to init before checking currentUser properly 
  // in a real app, but here we might rely on the store or simple check if it persists.
  // For now simple check:
  const currentUser = auth.currentUser

  if (requiresAuth && !currentUser) {
    next('/login')
  } else if (!requiresAuth && currentUser && to.path === '/login') {
    next('/dashboard')
  } else {
    next()
  }
})

export default router