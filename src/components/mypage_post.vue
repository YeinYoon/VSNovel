<template>
<div>
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
    <div class="header">
      <img src="../assets/icons/white/library.png" class="icon">
      <p class="service_title">마이페이지</p>
      <p class="service_subtitle">내가 쓴 게시글</p>
    </div>
    <div class="mypage_post-box">
    <table class="mypage_post-table">
      <div class="text_container">
        <thead>
          <tr>
            <td>작성위치</td>
            <td>제목</td>
            <td>추천수</td>
            <td>댓글수</td>
            <td>조회수</td>
          </tr>
        </thead>
        <hr align="center" style="border: solid 2px #959595; width: 99%;">
        <tr style="transform: translateY(-10%);" v-for="(post,i) in post" :key="i">
          <td>{{post.position}}</td>
          <td>{{post.title}}</td>
          <td>{{post.prefer}}</td>
          <td>{{post.comment}}</td>
          <td>{{post.look}}</td>
        </tr>
      </div>
    </table>
  </div>
  </section>
</div>
</template>

<script>
import post from '@/assets/postdata.js'

export default {
  data(){
    return{
      post:post
    };
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
  input{
    border: 0;
    outline: 0;
    margin: 0 0 0 0;
    color: white;
  }
  input::placeholder{
    color: white;
    font-size: 25px;
  }
  thead{
    display: flex;
    transform: translateY(20%);
  }
  td{
    display: inline-block;
    text-align: center;
    width: 200px;
    white-space:nowrap;
    overflow:hidden;
    text-overflow: ellipsis;
  }
  

.text_container{
  transform: translateX(2%);
  margin-left: 0%;
}
.sidebar {
  top:0px;
  left: 110px;
  position: fixed;
  width: 280px;
  height: 100%;
  background: #2C2C2C;
}
.header .service_title {
  position: absolute;
  top: -12px;
  left: 60px;
  color: white;
  font-size: 50px;
}
.header .icon {
  position: absolute;
  top: 0px;
  left: 0px;
  width: 50px;
  height: 50px;
}
#search{
  position: fixed;
  top: 150px;
  left: 147px;
  width: 210px;
  height: 40px;
  background-color: white;
  border-radius: 20px;
}
.side_first-title{
  position: fixed;
  top: 250px;
  left: 150px;
  width: 210px;
  height: 40px;
  background-color: white;
  border-radius: 20px;
  
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
  border-radius: 20px;
}
#mypage_sidebar-pay{
  position: fixed;
  top: 360px;
  left: 173px;
  width: 190px;
  height: 40px;
  border-radius: 20px;
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
  background-color: #2872F9;
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
.header .service_title {
  position: absolute;
  top: -12px;
  left: 60px;
  color: white;
  font-size: 50px;
}
.header .icon {
  position: absolute;
  top: 0px;
  left: 0px;
  width: 50px;
  height: 50px;
}
.service_subtitle{
  position: absolute;
  top: 58px;
  left: 0px;
  color: white;
  font-size: 30px;
}
.mypage_post-table{
  display: inline-block;
  left: 450px;
  font-size: 25px;
  color: white;
  border-spacing: 20px;
  overflow: auto;
  text-overflow: ellipsis;
}
.mypage_post-box{
  display: flex;
  transform: translate(3%,25%);
  border:1px;
  width: 1060px;
  height: 600px;
  background-color: #484848;
  border-radius: 20px;
}
</style>