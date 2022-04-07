import { createWebHistory, createRouter } from "vue-router";
import Store from './components/side/StoreSide.vue';
import Main from './components/MainPage/Main.vue';
import Community from './components/side/CommunitySide.vue';
import MyPage from './components/side/MypageSide.vue';
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
    name: 'MyPage',
    component : MyPage,
  },
  {
    path : '/notice',
    name: 'Notice',
    component : Notice,
    props:true
  },
  {
    path : '/library',
    name: 'Library',
    component : Library,
  },
  {
    path : '/store',
    name: 'Store',
    component : Store,
    props:true
  },
  {
    path : '/community',
    name: 'Community',
    component : Community,
    props:true
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router; 