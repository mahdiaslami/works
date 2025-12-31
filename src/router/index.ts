import { createRouter, createWebHistory } from 'vue-router'
import IssuePage from '@/pages/IssuePage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name: 'Home',
      path: '/',
      component: IssuePage
    }
  ],
})

export default router
