import { createWebHistory, createRouter } from "vue-router";
import axios from 'axios'

// 스토어 
import Store from './components/side/Store.vue';
import Admin from './components/mainpage/Admin.vue';
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
// import MyCard from "./components/mypage/MyCard";
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
import KakaoLogin from './components/auth/KakaoLogin.vue'
import SignUp from './components/auth/SignUp.vue';
import FindAcc from './components/auth/FindAcc.vue';
import Engine from './components/engine/Engine.vue';

//Viewer
import Viewer from './components/viewer/Viewer.vue';
const routes = [
  {
    path:"/",
    name: 'Main',
    component : Main,
    props:true
  },
  {
    path : '/admin',
    name : 'Admin',
    component:Admin,
    props:true
  },
  {
    path : "/signin",
    component : Login,
    props:true
  },
  {
    path : "/auth/kakao",
    component : KakaoLogin,
    props:true
  },
  { 
    path : "/signup",
    component : SignUp,
    props:true
  },
  { 
    path : "/findAcc",
    component : FindAcc,
    props:true
  },
  {
    path : '/mypage',
    name: 'MyPage',
    component : MyPage,
    props:true,
    children:  [
      { path : 'mymain',        component : MyPageMain, props:true},
      // { path : 'mycard',        component : MyCard },
      { path : 'mypost',        component : MyPost, props:true },
      { path : 'myreview',      component : Myreview, props:true },
      { path : 'prefer',        component : Prefer, props:true },
      { path : 'myalarm',       component : MyAlarm, props:true },
      { path : 'mywithdrawal',  component : MyWithdrawal, props:true },
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
    props:true
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
      {path : 'villagemain', name:'VillageMain', component : VillageMain, props: true},
      {path : 'register/:id', name:'Register', component : Register, props: true}
    ]
  },
  {
    path : '/engine',
    name: 'Engine',
    component : Engine,
    props:true
  },
  {
    path:'/viewer',
    name: 'Viewer',
    component : Viewer,
    props:true
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router; 