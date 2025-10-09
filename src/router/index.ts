import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name: 'Home',
      path: '/',
      component: () => import('../pages/dashboard/Index.vue'),
      children: [
        {
          name: 'Stories',
          path: 'stories',
          component: () => import('../pages/dashboard/StoriesPage.vue')
        },
        {
          name: 'Iterations',
          path: 'iterations',
          component: () => import('../pages/dashboard/IterationsPage.vue')
        }
      ]
    }
  ],
})

export default router
