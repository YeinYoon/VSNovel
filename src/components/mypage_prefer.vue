/* eslint-disable vue/no-parsing-error */
<template>
<div>
  <aside class="menubar">
    <nav class="nav">
      <div id="img_box"></div>
      <div id="img_box"></div>
      <div id="img_box"></div>
      <div id="img_box"></div>
      <div id="img_box"></div>
      <div id="img_box"></div>
      <div id="img_box"></div> 
    </nav>
  </aside>
  <aside class="sidebar">
    <input id="search">
    <div class="side_first-title">
      <p class="side_first-title-font">· 마이페이지</p>
    </div>
    <button id="mypage_sidebar-profile">· 프로필 설정</button>
    <button id="mypage_sidebar-pay">· 결제정보 설정</button>
    <button id="mypage_sidebar-post">· 내가 쓴 게시글</button>
    <button id="mypage_sidebar-review">· 작성 리뷰 관리</button>
    <button id="mypage_sidebar-prefer">· 선호/비선호 설정</button>
    <button id="mypage_sidebar-alarm">· 알림 설정</button>
    <button id="mypage_sidebar-exit">· 회원 탈퇴</button>
  </aside>
  <section>
    <p class="service_title">마이페이지</p>
    <p class="service_subtitle">선호/비선호 설정</p>
    <p id="mypage_cate-detail">추천 받고싶은 장르를 클릭으로 선택할 수 있습니다.
      <br>두번 클릭할 시 해당 장르는 추천에서 제외됩니다.</p>
    <div class="mypage_cate-box">
    <button :style="buttonStyles" id="mypage_cate-genre" v-for="(genre,i) in predata" :key="i"  @click="prefer({genre}, $event)">{{genre.name}}</button>
    </div>
    <button id="mypage_cate-canc">취소</button>
    <button id="mypage_cate-save">저장</button>
  </section>
</div>
</template>

<script>
import genre from '../assets/preferdata.js';

export default {
  data(){
    return{
      predata : genre,
      status : 0
    }
  },
  methods:{
    prefer: function(genre, event){
      genre = genre.genre
      genre.count++
      genre.count%=3
      this.status = genre.count;
      event.target.style.backgroundColor= (this.status==0) ? '#5E5E5E' : (this.status==1 ? '#0078FF' : '#EA4235')
    }
  },
}
</script>

<style>
html{
    background-color: #363636;
  }
  button{
    border: 0;
    outline: 0;
    background-color:transparent;
    cursor: pointer;
  }
  td{
    position: relative;
    width: 200px;
  }
  .menubar {
    top:0px;
    left: 0px;
    position: fixed;
    width: 110px;
    height: 100%;
    background: #262626;
  }
  .sidebar {
    top:0px;
    left: 110px;
    position: fixed;
    width: 280px;
    height: 100%;
    background: #2C2C2C;
  }
  .nav::-webkit-scrollbar { 
    width: 5px; 
  }
  .nav::-webkit-scrollbar-track { 
    background-color: #e4e4e4; 
    border-radius: 100px; 
  } 
  .nav::-webkit-scrollbar-thumb { 
    background-color: #d4aa70; 
    border-radius: 100px; 
  } 
  .nav { 
    scrollbar-color: #D4AA70 #e4e4e4; 
  } 
  .nav::-webkit-scrollbar-thumb { 
    background-image: linear-gradient(180deg, #D0368A 0%, #708AD4 99%);
    box-shadow: inset 2px 2px 5px 0 rgba(#fff, 0.5);
    border-radius: 100px;
  }
  .nav {
    height: 100%;
    position: relative;
    margin-left: 13px;
    top: 5%;
    overflow: auto;
    
  }
  #img_box{
    top: 50px;
      position: relative;
      margin-top: 30px;
      border:1px solid white;
      width: 80px;
      height: 80px;
      border-radius: 10px;
      background-color: #353535;
  }
  .img{
      max-width: 100%;
      height: auto;
  }
  #search{
    position: fixed;
    top: 150px;
    left: 147px;
    width: 210px;
    height: 40px;
    background-color: white;
    border-radius: 18px;
  }
  .side_first-title{
    position: fixed;
    top: 250px;
    left: 150px;
    width: 210px;
    height: 40px;
    background-color: white;
    border-radius: 18px;
    
  }
  .side_first-title-font{
    margin-top: 5px;
    float: left;
    padding-left: 20px;
    font-size: 20px;
    text-align: left;
    font-weight: bolder;
  }
  #mypage_sidebar-profile{
    position: fixed;
    top: 310px;
    left: 173px;
    width: 190px;
    height: 40px;
    font-size: 20px;
    text-align: left;
    font-weight: bolder;
    color: white;
    border-radius: 18px;
  }
  #mypage_sidebar-pay{
    position: fixed;
    top: 360px;
    left: 173px;
    width: 190px;
    height: 40px;
    border-radius: 18px;
    font-size: 20px;
    font-weight: bolder;
    text-align: left;
    color: white;
  }
  #mypage_sidebar-post{
    position: fixed;
    top: 410px;
    left: 173px;
    width: 190px;
    height: 40px;
    border-radius: 18px;
    font-size: 20px;
    font-weight: bolder;
    text-align: left;
    color: white;
  }
  #mypage_sidebar-review{
    position: fixed;
    top: 460px;
    left: 173px;
    width: 190px;
    height: 40px;
    border-radius: 18px;
    font-size: 20px;
    font-weight: bolder;
    text-align: left;
    color: white;
  }
  #mypage_sidebar-prefer{
    position: fixed;
    top: 510px;
    left: 173px;
    width: 190px;
    height: 40px;
    border-radius: 18px;
    font-size: 20px;
    font-weight: bolder;
    text-align: left;
    color: white;
  }
  #mypage_sidebar-alarm{
    position: fixed;
    top: 560px;
    left: 173px;
    width: 190px;
    height: 40px;
    border-radius: 18px;
    font-size: 20px;
    font-weight: bolder;
    text-align: left;
    color: white;
  }
  #mypage_sidebar-exit{
    position: fixed;
    top: 610px;
    left: 173px;
    width: 190px;
    height: 40px;
    border-radius: 18px;
    font-size: 20px;
    font-weight: bolder;
    text-align: left;
    color: white;
  }
  .service_title{
    position: fixed;
    top: 10px;
    left: 550px;
    color: white;
    font-size: 50px;
  }
  .service_subtitle{
    position: fixed;
    top: 110px;
    left: 470px;
    color: white;
    font-size: 30px;
  }
  #mypage_cate-detail{
    position: fixed;
    top: 200px;
    left: 650px;
    font-size: 25px;
    color: white;
    text-align: center;
  }
  .mypage_cate-box{
    position: fixed;
    top: 350px;
    left: 500px;
    width: 850px;
    height: 260px;
    background-color: #444444;
    border-radius: 20px;
  }
  /* .mypage_cate-table{
    margin-left:auto;
    margin-right:auto;
    margin-top: 15px;
    text-align: center;
    width: 780px;
    height: 220px;
    background-color: #444444;
    border-radius: 20px;
  } */
  #mypage_cate-genre{
    margin-top: 18px;
    margin-left: 14px;
    width: 180px;
    height: 60px;
    background-color: #5E5E5E;
    color: white;
    font-size: 30px;
    border-radius: 20px;
  }
  
  #mypage_cate-canc{
    position: fixed;
    top:700px;
    left:1140px;
    width: 120px;
    height: 40px;
    border-radius: 15px;
    background-color: #5E5E5E;
    color: white;
    font-size: 15px;
  }
  #mypage_cate-save{
    position: fixed;
    top:700px;
    left:1300px;
    width: 120px;
    height: 40px;
    border-radius: 15px;
    background-color: #2872F9;
    color: white;
    font-size: 15px;
  }
</style>