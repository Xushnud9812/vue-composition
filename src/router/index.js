import { createRouter, createWebHistory } from 'vue-router'

import home from '../pages/home.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [

    {
      path: '/',
      component: () => import('@/layouts/default.vue'),
      redirect: '/home',
      children: [
        {
          path: '/:pathMatch(.*)*',
          name: 'not-found',
          component: () => import('@/pages/not-found.vue')
        },
        {
          path: '/home',
          name: 'home',
          component: home,
          redirect: '/sponsors',
          children: [
            {
              path: '/dashboard',
              name: 'dashboard',
              component: () => import('@/pages/dashboard.vue')
            },
            {
              path: '/sponsors',
              name: 'sponsors',
              component: () => import('@/pages/sponsors.vue')
            },
            {
              path: '/students',
              name: 'students',
              component: () => import('@/pages/students.vue')
            },
          ]
        },
        {
          path: '/about',
          name: 'about',
          component: () => import('@/pages/about.vue')
        },
        {
          path: '/products',
          name: 'products',
          component: () => import('@/pages/products.vue')
        },
        {
          path: '/posts',
          name: 'posts',
          component: () => import('@/pages/posts.vue')
        },
        {
          path: '/products/:id',
          name: 'product-detail',
          component: () => import('@/pages/product-details.vue')
        },
      ]
    },

    {
      path: '',
      component: () => import('@/layouts/authLayout.vue'),
      children: [
        {
          path: '/login',
          name: 'login',
          component: () => import('@/pages/auth/login.vue')
        },
        {
          path: '/register',
          name: 'register',
          component: () => import('@/pages/auth/register.vue')
        },
      ]
    }


  ]
})


router.beforeEach((to, from) => {

  const isLoggedin = true

  if (!isLoggedin && to.name != 'login') {
    return { name: 'login' }
  }

})



export default router
