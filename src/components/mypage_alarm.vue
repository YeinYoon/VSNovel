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
    <p class="service_subtitle">알림 설정</p>
    <table class="mypage_alarm-table">
      <tr>
        <td style="width: 5%; float:left"><input type="checkbox" name="pay" value="pay" style="vertical-align: bottom;"></td>
        <td>결제</td>
      </tr>
      <tr>
        <td></td>
        <td id="mypage_alarm-detail">· 결제 성공 알림 등, 각종 결제에 관한 정보를 알려드립니다.</td>
      </tr>
      <tr>
        <td style="width: 5%;"><input type="checkbox" name="commu" value="commu" style="vertical-align: bottom;"></td>
        <td>커뮤니티</td>
      </tr>
      <tr>
        <td></td>
        <td id="mypage_alarm-detail">· 작성하신 게시글 및 리뷰의 댓글 등, 커뮤니티 관련 소식을 알려드립니다.</td>
      </tr>
      <tr>
        <td style="width: 5%;"><input type="checkbox" name="event" value="event" style="vertical-align: bottom;"></td>
        <td>이벤트</td>
      </tr>
      <tr>
        <td></td>
        <td id="mypage_alarm-detail">· VSN에서 진행하는 각종 이벤트에 대한 소식을 알려드립니다.</td>
      </tr>
      <tr>
        <td style="width: 5%;"><input type="checkbox" name="ad" value="ad" style="vertical-align: bottom;"></td>
        <td>홍보</td>
      </tr>
      <tr>
        <td></td>
        <td id="mypage_alarm-detail">· 인기, 최신 작품 등, VSN의 최신 히트작을 알려드립니다.</td>
      </tr>
      <tr>
        <td style="width: 5%;"><input type="checkbox" name="platform" value="platform" style="vertical-align: bottom;"></td>
        <td>플랫폼</td>
      </tr>
      <tr>
        <td></td>
        <td id="mypage_alarm-detail">· VSN 엔진과 관련된 알림 및 플랫폼 공지사항 등을 알려드립니다.</td>
      </tr>
    </table>
    <button id="mypage_alarm-canc">취소</button>
    <button id="mypage_alarm-save">저장</button>
  </section>
</div>
</template>

<script>
export default {
  data(){

  }
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
  td{
    position: relative;
    width: 200px;
    text-align: left;
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
    background-color: #2872F9;
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
  .mypage_alarm-table{
    position: fixed;
    top: 250px;
    left: 500px;
    border: 1px;
    border: white;
    font-size: 30px;
    color: white;
    border-spacing: 20px;
  }
  
  #mypage_alarm-detail{
    width: 300px;
    font-size: 15px;
    text-align: left;
  }
  #mypage_alarm-canc{
    position: fixed;
    top:850px;
    left:1250px;
    width: 120px;
    height: 40px;
    border-radius: 15px;
    background-color: #5E5E5E;
    color: white;
    font-size: 15px;
  }
  #mypage_alarm-save{
    position: fixed;
    top:850px;
    left:1400px;
    width: 120px;
    height: 40px;
    border-radius: 15px;
    background-color: #2872F9;
    color: white;
    font-size: 15px;
  }
  input[type="checkbox"]{
  width: 40px; /*Desired width*/
  height: 40px; /*Desired height*/
  cursor: pointer;
  -webkit-appearance: none;
  appearance: none;
  background-color: #929292;
  border-radius: 5px;
  }
  input[type='checkbox']:checked{
      -webkit-appearance: none;
      -moz-appearance: none;
      -o-appearance: none;
      appearance:none;
      box-shadow: none;
      background-color: #2872F9;
  }
</style>