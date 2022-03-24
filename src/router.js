import { createWebHistory, createRouter } from "vue-router";
import Store from './components/side/StoreSide.vue';
import Main from './components/MainPage/Main.vue';
import Cafe from './components/cafe/CafeMain.vue';
import Mypage from './components/side/MypageSide.vue';
import Library from './components/side/LibrarySide.vue';

const routes = [
  {
    path:"/",
    name: 'Main',
    component : Main
  },
  {
    path : '/mypage',
    component : Mypage,
  },
  {
    path : '/library',
    component : Library,
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