import { createWebHistory, createRouter } from "vue-router";
import Store from './components/side/StoreSide.vue';
import Main from './components/MainPage/Main.vue';
import Community from './components/side/CommunitySide.vue';
import Mypage from './components/side/MypageSide.vue';
import Library from './components/side/LibrarySide.vue';
import Notice from './components/side/NoticeSide.vue'

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
    path : '/notice',
    component : Notice,
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
    path : '/community',
    component : Community,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router; 