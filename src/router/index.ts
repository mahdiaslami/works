import { createRouter, createWebHistory } from 'vue-router'
import TaskPage from '@/pages/TaskPage.vue'
import LabelPage from '@/pages/LabelPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name: 'Home',
      path: '/',
      component: TaskPage
    },
    {
      name: 'Labels',
      path: '/labels',
      component: LabelPage
    }
  ],
})

export default router
