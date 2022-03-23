import { createWebHistory, createRouter } from "vue-router";
import Store from './components/StorePage/Store.vue';
import Main from './components/MainPage/Main.vue';

const routes = [
  {
    path:"/",
    name: 'Main',
    component : Main
  },
  {
    path : '/store',
    component : Store,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router; 