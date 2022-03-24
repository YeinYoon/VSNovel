import { createWebHistory, createRouter } from "vue-router";
import Store from './components/StorePage/Store.vue';
import Main from './components/MainPage/Main.vue';
import Cafe from './components/cafe/CafeMain.vue';

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
  {
    path : '/cafe',
    component : Cafe,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router; 