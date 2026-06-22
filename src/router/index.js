import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeViews.vue'
import AboutView from '../views/AboutViews.vue'
import ContactView from '../views/ContactViews.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView,
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactView,
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router