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
    <p class="service_subtitle">작성 리뷰 관리</p>
    <div class="example_review">
      <div class="mypage_rev-info"></div>
      <img id="mypage_rev-img" src="review.jpg" alt="">
      <div id="mypage_rev-title">자바 연애 시뮬레이터</div>
      <div id="mypage_rev-team">십덕영 / 팀 자연시</div>
      <div id="mypage_rev-content">연관성이 전혀 없고 캐릭터 디자인이 다 달라서 플레이에 몰입도를 떨어뜨리는거 같습니다.
      <br>이런 식으로 게임 만드셔서 배포하는데 가격대가 너무 높은거 아닐까요? 다시는 십덕영 게...
      </div>
      <div class="starpoint_wrap">
      <div class="starpoint_box">
        <label for="starpoint_1" class="label_star" title="0.5"><span class="blind">0.5점</span></label>
        <label for="starpoint_2" class="label_star" title="1"><span class="blind">1점</span></label>
        <label for="starpoint_3" class="label_star" title="1.5"><span class="blind">1.5점</span></label>
        <label for="starpoint_4" class="label_star" title="2"><span class="blind">2점</span></label>
        <label for="starpoint_5" class="label_star" title="2.5"><span class="blind">2.5점</span></label>
        <label for="starpoint_6" class="label_star" title="3"><span class="blind">3점</span></label>
        <label for="starpoint_7" class="label_star" title="3.5"><span class="blind">3.5점</span></label>
        <label for="starpoint_8" class="label_star" title="4"><span class="blind">4점</span></label>
        <label for="starpoint_9" class="label_star" title="4.5"><span class="blind">4.5점</span></label>
        <label for="starpoint_10" class="label_star" title="5"><span class="blind">5점</span></label>
        <input type="radio" name="starpoint" id="starpoint_1" class="star_radio">
        <input type="radio" name="starpoint" id="starpoint_2" class="star_radio">
        <input type="radio" name="starpoint" id="starpoint_3" class="star_radio">
        <input type="radio" name="starpoint" id="starpoint_4" class="star_radio">
        <input type="radio" name="starpoint" id="starpoint_5" class="star_radio">
        <input type="radio" name="starpoint" id="starpoint_6" class="star_radio">
        <input type="radio" name="starpoint" id="starpoint_7" class="star_radio">
        <input type="radio" name="starpoint" id="starpoint_8" class="star_radio">
        <input type="radio" name="starpoint" id="starpoint_9" class="star_radio">
        <input type="radio" name="starpoint" id="starpoint_10" class="star_radio">
        <span class="starpoint_bg"></span>
      </div>
      </div>
      <div id="mypage_rev-star-point">0.5</div>
      <button id="mypage_rev-edit" style="text-align: center;">리뷰수정</button>
    </div>
    <div class="mypage_rev-info2"></div>
    <img id="mypage_rev-img2" src="review.jpg" alt="">
    <div id="mypage_rev-title2">자바 연애 시뮬레이터</div>
    <div id="mypage_rev-team2">십덕영 / 팀 자연시</div>
    <div id="mypage_rev-content2">연관성이 전혀 없고 캐릭터 디자인이 다 달라서 플레이에 몰입도를 떨어뜨리는거 같습니다.
      <br>이런 식으로 게임 만드셔서 배포하는데 가격대가 너무 높은거 아닐까요? 다시는 십덕영 게...
    </div>
    <div class="starpoint_wrap2">
      <div class="starpoint_box">
        <label for="starpoint_1" class="label_star" title="0.5"><span class="blind">0.5점</span></label>
        <label for="starpoint_2" class="label_star" title="1"><span class="blind">1점</span></label>
        <label for="starpoint_3" class="label_star" title="1.5"><span class="blind">1.5점</span></label>
        <label for="starpoint_4" class="label_star" title="2"><span class="blind">2점</span></label>
        <label for="starpoint_5" class="label_star" title="2.5"><span class="blind">2.5점</span></label>
        <label for="starpoint_6" class="label_star" title="3"><span class="blind">3점</span></label>
        <label for="starpoint_7" class="label_star" title="3.5"><span class="blind">3.5점</span></label>
        <label for="starpoint_8" class="label_star" title="4"><span class="blind">4점</span></label>
        <label for="starpoint_9" class="label_star" title="4.5"><span class="blind">4.5점</span></label>
        <label for="starpoint_10" class="label_star" title="5"><span class="blind">5점</span></label>
        <input type="radio" name="starpoint" id="starpoint_1" class="star_radio">
        <input type="radio" name="starpoint" id="starpoint_2" class="star_radio">
        <input type="radio" name="starpoint" id="starpoint_3" class="star_radio">
        <input type="radio" name="starpoint" id="starpoint_4" class="star_radio">
        <input type="radio" name="starpoint" id="starpoint_5" class="star_radio">
        <input type="radio" name="starpoint" id="starpoint_6" class="star_radio">
        <input type="radio" name="starpoint" id="starpoint_7" class="star_radio">
        <input type="radio" name="starpoint" id="starpoint_8" class="star_radio">
        <input type="radio" name="starpoint" id="starpoint_9" class="star_radio">
        <input type="radio" name="starpoint" id="starpoint_10" class="star_radio">
        <span class="starpoint_bg"></span>
      </div>
    </div>
    <div id="mypage_rev-star-point2">0.5</div>
    <button id="mypage_rev-edit2" style="text-align: center;">리뷰수정</button>
    <div class="mypage_rev-info3"></div>
    <img id="mypage_rev-img3" src="review.jpg" alt="">
    <div id="mypage_rev-title3">자바 연애 시뮬레이터</div>
    <div id="mypage_rev-team3">십덕영 / 팀 자연시</div>
    <div id="mypage_rev-content3">연관성이 전혀 없고 캐릭터 디자인이 다 달라서 플레이에 몰입도를 떨어뜨리는거 같습니다.
      <br>이런 식으로 게임 만드셔서 배포하는데 가격대가 너무 높은거 아닐까요? 다시는 십덕영 게...
    </div>
    <div class="starpoint_wrap3">
      <div class="starpoint_box">
        <label for="starpoint_1" class="label_star" title="0.5"><span class="blind">0.5점</span></label>
        <label for="starpoint_2" class="label_star" title="1"><span class="blind">1점</span></label>
        <label for="starpoint_3" class="label_star" title="1.5"><span class="blind">1.5점</span></label>
        <label for="starpoint_4" class="label_star" title="2"><span class="blind">2점</span></label>
        <label for="starpoint_5" class="label_star" title="2.5"><span class="blind">2.5점</span></label>
        <label for="starpoint_6" class="label_star" title="3"><span class="blind">3점</span></label>
        <label for="starpoint_7" class="label_star" title="3.5"><span class="blind">3.5점</span></label>
        <label for="starpoint_8" class="label_star" title="4"><span class="blind">4점</span></label>
        <label for="starpoint_9" class="label_star" title="4.5"><span class="blind">4.5점</span></label>
        <label for="starpoint_10" class="label_star" title="5"><span class="blind">5점</span></label>
        <input type="radio" name="starpoint" id="starpoint_1" class="star_radio">
        <input type="radio" name="starpoint" id="starpoint_2" class="star_radio">
        <input type="radio" name="starpoint" id="starpoint_3" class="star_radio">
        <input type="radio" name="starpoint" id="starpoint_4" class="star_radio">
        <input type="radio" name="starpoint" id="starpoint_5" class="star_radio">
        <input type="radio" name="starpoint" id="starpoint_6" class="star_radio">
        <input type="radio" name="starpoint" id="starpoint_7" class="star_radio">
        <input type="radio" name="starpoint" id="starpoint_8" class="star_radio">
        <input type="radio" name="starpoint" id="starpoint_9" class="star_radio">
        <input type="radio" name="starpoint" id="starpoint_10" class="star_radio">
        <span class="starpoint_bg"></span>
      </div>
    </div>
    <div id="mypage_rev-star-point3">0.5</div>
    <button id="mypage_rev-edit3" style="text-align: center;">리뷰수정</button>
  </section>
</div>
</template>

<script>
export default {

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
  #mypage_sidebar-review:hover{
    background-color: #2872F9;
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
  #mypage_rev-edit{
    position: fixed;
    top: 308px;
    left: 1350px;
    width: 120px;
    height: 40px;
    border-radius: 15px;
    background-color: #2872F9;
    color: white;
    font-size: 20px;
  }
  .mypage_rev-info{
    position: fixed;
    width: 1020px;
    height: 150px;
    top: 290px;
    left: 470px;
    border-radius: 15px;
    background-color: #2C2C2C;
  }
  #mypage_rev-img{
    position: fixed;
    top: 240px;
    left: 500px;
    width: 130px;
    height: 180px;
  }
  #mypage_rev-title{
    position: fixed;
    top: 300px;
    left: 650px;
    font-size: 30px;
    color: white;
  }
  #mypage_rev-team{
    position: fixed;
    top: 340px;
    left: 650px;
    font-size: 25px;
    color: white;
  }
  #mypage_rev-content{
    position: fixed;
    top: 380px;
    left: 650px;
    font-size: 15px;
    color: white;
  }
  .starpoint_wrap{
    display:inline-block;
    position: fixed;
    top: 320px;
    left: 1150px;
  }
  .starpoint_box{position:relative;background:url(https://hsecode.github.io/images_codepen/codepen_sp_star.png) 0 0 no-repeat;font-size:0;}
  .starpoint_box .starpoint_bg{display:block;position:absolute;top:0;left:0;height:18px;background:url(https://hsecode.github.io/images_codepen/codepen_sp_star.png) 0 -20px no-repeat;pointer-events:none;}
  .starpoint_box .label_star{display:inline-block;width:10px;height:18px;box-sizing:border-box;}
  .starpoint_box .star_radio{opacity:0;width:0;height:0;position:absolute;}
  .starpoint_box .star_radio:nth-of-type(1):hover ~ .starpoint_bg,
  .starpoint_box .star_radio:nth-of-type(1):checked ~ .starpoint_bg{width:10%;}
  .starpoint_box .star_radio:nth-of-type(2):hover ~ .starpoint_bg,
  .starpoint_box .star_radio:nth-of-type(2):checked ~ .starpoint_bg{width:20%;}
  .starpoint_box .star_radio:nth-of-type(3):hover ~ .starpoint_bg,
  .starpoint_box .star_radio:nth-of-type(3):checked ~ .starpoint_bg{width:30%;}
  .starpoint_box .star_radio:nth-of-type(4):hover ~ .starpoint_bg,
  .starpoint_box .star_radio:nth-of-type(4):checked ~ .starpoint_bg{width:40%;}
  .starpoint_box .star_radio:nth-of-type(5):hover ~ .starpoint_bg,
  .starpoint_box .star_radio:nth-of-type(5):checked ~ .starpoint_bg{width:50%;}
  .starpoint_box .star_radio:nth-of-type(6):hover ~ .starpoint_bg,
  .starpoint_box .star_radio:nth-of-type(6):checked ~ .starpoint_bg{width:60%;}
  .starpoint_box .star_radio:nth-of-type(7):hover ~ .starpoint_bg,
  .starpoint_box .star_radio:nth-of-type(7):checked ~ .starpoint_bg{width:70%;}
  .starpoint_box .star_radio:nth-of-type(8):hover ~ .starpoint_bg,
  .starpoint_box .star_radio:nth-of-type(8):checked ~ .starpoint_bg{width:80%;}
  .starpoint_box .star_radio:nth-of-type(9):hover ~ .starpoint_bg,
  .starpoint_box .star_radio:nth-of-type(9):checked ~ .starpoint_bg{width:90%;}
  .starpoint_box .star_radio:nth-of-type(10):hover ~ .starpoint_bg,
  .starpoint_box .star_radio:nth-of-type(10):checked ~ .starpoint_bg{width:100%;}
  
  .blind{
    position:absolute;
    clip:rect(0 0 0 0);
    margin:-1px;
    width:1px;
    height: 1px;
    overflow:hidden;}
  #mypage_rev-star-point{
    position: fixed;
    top: 315px;
    left: 1270px;
    color: white;
    font-size: 20px;
  }
  
  #mypage_rev-star-point2{
    position: fixed;
    top: 555px;
    left: 1270px;
    color: white;
    font-size: 20px;
  }
  #mypage_rev-edit2{
    position: fixed;
    top: 550px;
    left: 1350px;
    width: 120px;
    height: 40px;
    border-radius: 15px;
    background-color: #2872F9;
    color: white;
    font-size: 20px;
  }
  .mypage_rev-info2{
    position: fixed;
    width: 1020px;
    height: 150px;
    top: 530px;
    left: 470px;
    border-radius: 15px;
    background-color: #2C2C2C;
  }
  #mypage_rev-img2{
    position: fixed;
    top: 480px;
    left: 500px;
    width: 130px;
    height: 180px;
  }
  #mypage_rev-title2{
    position: fixed;
    top: 540px;
    left: 650px;
    font-size: 30px;
    color: white;
  }
  #mypage_rev-team2{
    position: fixed;
    top: 580px;
    left: 650px;
    font-size: 25px;
    color: white;
  }
  #mypage_rev-content2{
    position: fixed;
    top: 620px;
    left: 650px;
    font-size: 15px;
    color: white;
  }
  .starpoint_wrap2{
    display:inline-block;
    position: fixed;
    top: 560px;
    left: 1150px;
  }
  #mypage_rev-star-point3{
    position: fixed;
    top: 795px;
    left: 1270px;
    color: white;
    font-size: 20px;
  }
  #mypage_rev-edit3{
    position: fixed;
    top: 792px;
    left: 1350px;
    width: 120px;
    height: 40px;
    border-radius: 15px;
    background-color: #2872F9;
    color: white;
    font-size: 20px;
  }
  .mypage_rev-info3{
    position: fixed;
    width: 1020px;
    height: 150px;
    top: 770px;
    left: 470px;
    border-radius: 15px;
    background-color: #2C2C2C;
  }
  #mypage_rev-img3{
    position: fixed;
    top: 720px;
    left: 500px;
    width: 130px;
    height: 180px;
  }
  #mypage_rev-title3{
    position: fixed;
    top: 780px;
    left: 650px;
    font-size: 30px;
    color: white;
  }
  #mypage_rev-team3{
    position: fixed;
    top: 820px;
    left: 650px;
    font-size: 25px;
    color: white;
  }
  #mypage_rev-content3{
    position: fixed;
    top: 860px;
    left: 650px;
    font-size: 15px;
    color: white;
  }
  .starpoint_wrap3{
    display:inline-block;
    position: fixed;
    top: 800px;
    left: 1150px;
  }
</style>