import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/layout/DefulLayout.vue')
    },
    {
      path: '/project',
      name: 'project',
      component: () => import('@/layout/DefulLayout.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/views/AboutUs.vue'),
    },
  ],
})

export default router
