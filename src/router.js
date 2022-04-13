import { createWebHistory, createRouter } from "vue-router";
import Store from './components/side/StoreSide.vue';
import Main from './components/mainpage/Main.vue';
import Community from './components/side/CommunitySide.vue';
import MyPage from './components/side/MypageSide.vue';
import Library from './components/side/LibrarySide.vue';
import Notice from './components/side/NoticeSide.vue'
import Login from './components/auth/Login.vue';
import SignUp from './components/auth/SignUp.vue';
import FindAcc from './components/auth/FindAcc.vue';
import Engine from './components/engine/Engine.vue';

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
    path : '/engine',
    name: 'Engine',
    component : Engine,
    props:true
  },
  {
    path : '/community',
    name: 'Community',
    component : Community,
    props:true
  },
  {
    path : '/engine',
    name: 'Engine',
    component : Engine,
    props:true
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router; 