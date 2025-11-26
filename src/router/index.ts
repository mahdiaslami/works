import { createRouter, createWebHistory } from 'vue-router'
import WorkPage from '@/pages/WorkPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name: 'Home',
      path: '/',
      component: WorkPage
    }
  ],
})

export default router
