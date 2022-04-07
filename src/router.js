import { createWebHistory, createRouter } from "vue-router";
import Store from './components/side/StoreSide.vue';
import Main from './components/MainPage/Main.vue';
import Community from './components/side/CommunitySide.vue';
import Mypage from './components/side/MypageSide.vue';
import Library from './components/side/LibrarySide.vue';
import Notice from './components/side/NoticeSide.vue'
import Login from './components/auth/Login.vue';
import SignUp from './components/auth/SignUp.vue';
import FindAcc from './components/auth/SignUp.vue';

const routes = [
  {
    path:"/",
    name: 'Main',
    component : Main
  },
  {
    path : "/signin",
    component : Login
  },
  { 
    path : "/signup",
    component : SignUp
  },
  { 
    path : "/findAcc",
    component : FindAcc
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