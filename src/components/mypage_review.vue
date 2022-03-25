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
      <span class="service_title">마이페이지</span>
      <span class="service_subtitle">작성 리뷰 관리</span>
    </div>
    <div class="work_list" v-for="(review, i) in reviews" :key="i">
      <div class="img_box"></div>
      <img class="list_img" :src="`${review.img}`"/>
      <div class="work_list_con">
          <div class="list_span">
              <span class="list_title">{{review.title}}</span>
              <span class="list_team">{{review.producer}} / {{review.team}}</span>
              <span class="list_content">{{review.content}}</span>
          </div>
      </div>
      <button id="review_edit">리뷰수정</button>
    </div>
  </section>
</div>
</template>

<script>
import review from '@/assets/reviewdata.js'

export default {
  data(){
    return{
      reviews :review,
    };
  },
}
</script>

<style>
html{
    background-color: #363636;
  }
  p{
    color: white;
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
  }
  select{
    border-radius: 15px;
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
.sidebar {
  top:0px;
  left: 110px;
  position: fixed;
  width: 280px;
  height: 100%;
  background: #2C2C2C;
}
.service_title{
  position: fixed;
  top: 10px;
  left: 550px;
  color: white;
  font-size: 50px;
}
.service_subtitle{
  position: absolute;
  top: 58px;
  left: 0px;
  color: white;
  font-size: 30px;
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
  text-align: center;
  font-weight: bolder;
  color: black;
}
.side-second-title-webnovel{
  position: fixed;
  top: 310px;
  left: 173px;
  width: 190px;
  height: 40px;
  background-color: #2872F9;
  border-radius: 18px;
  
}
.side-second-title-webnovel-font{
  margin-top: 5px;
  float: left;
  padding-left: 5px;
  font-size: 20px;
  text-align: center;
  font-weight: bolder;
  color: white;
}
.side-second-title-visualnovel{
  position: fixed;
  top: 360px;
  left: 173px;
  width: 190px;
  height: 40px;
  border-radius: 18px;
}
.side-second-title-visualnovel-font{
  margin-top: 5px;
  float: left;
  padding-left: 5px;
  font-size: 20px;
  font-weight: bolder;
  text-align: center;
  color: white;
}
#review_edit{
  display: flex;
    flex-direction: row;
    position: relative;
  transform: translateY(80%);
  flex-grow: 1;
  width: 10px;
  height: 30px;
  background: #2872F9;
  border-radius: 20px;
  color: white;
}
.lib_cate{
  position: fixed;
  top: 480px;
  left: 112px;
    margin-left: 40px;
    background-color: white;
    border: 1px solid gray;
    border-radius: 18px;
    display: inline-block;
    font: inherit;
    line-height: 1.5em;
    padding: 3px 47px 8px 47px;
    font-size: 20px;
    font-weight: bolder;
    text-align: left;
}
.img_box{
  position: absolute;
  transform: translate(20%,-30%);
  width: 100px;
  height: 150px;
  background: #6D6D6D;
}
.work_list{
    /* width: calc(50%); */
    background-color: #2a2a2a;
    margin: 50px 10px;
    border-radius: 20px;
    height: 125px;
    top: 150px;
    display: flex;
    flex-direction: row;
    position: relative;
}
.list_img{
    width: 100px;
    height: 140px;
    margin: 0 10px 0 20px;
    transform : translateY(-25%);
}
.list_span{
    display: flex;
    flex-direction: column;
    width: 100%;
}
.work_list_con{
    color: white;
    width: 70%;
}
.work_list_con::-webkit-scrollbar{
    display:none;
}
.list_title{
    font-size: 1.3em;
    padding-top: 5px;
}
.list_team{
    font-size: 0.9em;
}
.list_content{
    font-size: 0.7em;
    padding-top: 5px;
    height: 50px;
    width: 100%;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
}
.list_container{
  transform: translateY(18%);
}
.lib_list-box{
  display: flex;
  margin-top: 8%;
  margin-left: 3%;
  width: 1100px;
  height: 180px;
  border-radius: 15px;
  background-color: #2C2C2C;
  color: white;
  z-index: 10;
}
#lib_image{
  transform: translate(20%,-25%);
  top: 260px;
  left: 520px;
  width: 150px;
  height: 200px;
  background-color: #6D6D6D;
  z-index: 12;
}
#lib_title{
  display: flex;
  transform: translateX(45px);
  font-size: 30px;
  z-index: 12;
}
#lib_produce-team{
  position: absolute;
  transform: translate(5px,40px);
  left: 21%;
  font-size: 30px;
  z-index: 12;
}
#lib_con{
  position: absolute;
  left:21%;
  transform: translate(10px,80px);
  font-size: 15px;
  text-align: left;
  z-index: 12;
}
.lib_list-box2{
  position: fixed;
  top: 600px;
  left: 480px;
  width: 1100px;
  height: 180px;
  border-radius: 15px;
  background-color: #2C2C2C;
  z-index: 0;
  overflow: hidden; 
  text-overflow: ellipsis;
  white-space: nowrap; 
  width: 100px;
}
#lib_image2{
  position: fixed;
  top: 540px;
  left: 520px;
  width: 150px;
  height: 200px;
  background-color: #6D6D6D;
  z-index: 1;
}
#lib_title2{
  position: fixed;
  top: 590px;
  left: 700px;
  font-size: 30px;
  z-index: 1;
}
#lib_con2{
  position: fixed;
  top: 640px;
  left: 700px;
  font-size: 20px;
  z-index: 1;
}
#lib_produce-team2{
  position: fixed;
  top: 680px;
  left: 700px;
  font-size: 15px;
  z-index: 1;
}
.lib_list-box3{
  position: fixed;
  top: 870px;
  left: 480px;
  width: 1100px;
  height: 180px;
  border-radius: 15px;
  background-color: #2C2C2C;
  z-index: 0;
}
#lib_image3{
  position: fixed;
  top: 820px;
  left: 520px;
  width: 150px;
  height: 200px;
  background-color: #6D6D6D;
  z-index: 1;
}
#lib_title3{
  position: fixed;
  top: 860px;
  left: 700px;
  font-size: 30px;
  z-index: 1;
}
#lib_con3{
  position: fixed;
  top: 910px;
  left: 700px;
  font-size: 20px;
  z-index: 1;
}
#lib_produce-team3{
  position: fixed;
  top: 950px;
  left: 700px;
  font-size: 15px;
  z-index: 1;
}
</style>