import { createWebHistory, createRouter } from "vue-router";
// 스토어 
import Store from './components/side/Store.vue';
// 메인페이지
import Main from './components/mainpage/Main.vue';
// 커뮤니티
import Community from './components/side/Community.vue';
//카페
import VillageMain from './components/community/cafe/CafeMain.vue';
import Register from './components/community/cafe/RegisterCafe.vue';

// 마이페이지 링크들
import MyPage from './components/side/Mypage.vue';
import MyPageMain from './components/mypage/MyPageMain.vue';
import MyCard from "./components/mypage/MyCard";
import MyPost from "./components/mypage/MyPost";
import Myreview from "./components/mypage/Myreview";
import Prefer from "./components/mypage/Prefer";
import MyAlarm from "./components/mypage/MyAlarm";
import MyWithdrawal from "./components/mypage/withdrawal/MyWithdrawal";
// 라이브러리
import Library from './components/side/Library.vue';
// 공지사항
import Notice from './components/side/Notice.vue';

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
    children:  [
      { path : 'mymain',        component : MyPageMain },
      { path : 'mycard',        component : MyCard },
      { path : 'mypost',        component : MyPost },
      { path : 'myreview',      component : Myreview },
      { path : 'prefer',        component : Prefer },
      { path : 'myalarm',       component : MyAlarm },
      { path : 'mywithdrawal',  component : MyWithdrawal },
    ]
  },
  {
    path : '/notice',
    name: 'Notice',
    component : Notice,
    props:true,
  },
  {
    path : '/library',
    name: 'Library',
    component : Library,
    props:true,
  },
  {
    path : '/store',
    name: 'Store',
    component : Store,
    props:true,
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
    props:true,
    children:[
      {path : 'villagemain', name:'VillageMain', component : VillageMain},
      {path : 'register/:id', name:'Register', component : Register, props: true}
    ]
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