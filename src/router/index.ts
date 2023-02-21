import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

export const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/search',
    name: 'search',
    component: () => import('../views/SearchView.vue'),
  },
  {
    path: '/show/:id',
    name: 'description',
    component: () => import('../views/ShowView.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
