import { createRouter, createWebHistory } from 'vue-router'
import SubjectPage from '@/pages/SubjectPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name: 'Home',
      path: '/',
      component: SubjectPage
    }
  ],
})

export default router
