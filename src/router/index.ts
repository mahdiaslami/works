import { createRouter, createWebHistory } from 'vue-router'
import TaskPage from '@/pages/TaskPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name: 'Home',
      path: '/',
      component: TaskPage
    }
  ],
})

export default router
