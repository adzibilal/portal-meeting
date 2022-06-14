import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'

const routes = [
  {
    path: '/',
    name: 'login',
    component: LoginView
  },
  {
    path: '/forgot',
    name: 'forgot',
    component: () => import(/* webpackChunkName: "about" */ '../views/ForgotView.vue')
  },
  {
    path: '/list-rapat',
    name: 'listrapat',
    component: () => import(/* webpackChunkName: "about" */ '../views/ListRapatView.vue')
  },
  {
    path: '/detail-rapat',
    name: 'detailrapat',
    component: () => import(/* webpackChunkName: "about" */ '../views/DetailRapatView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
