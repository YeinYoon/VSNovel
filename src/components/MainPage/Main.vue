<template>
  <div class="test">
    <!-- 헤더 -->
    <div class="header">
      <div class="service">
        <img src="../../assets/icons/vsn_platform.png" class="icon" />
        <span class="title">Visual Studio Novel</span>
      </div>
      <div class="search">
        <img src="../../assets/icons/magnifier.png" class="icon" />
        <input type="text" />
      </div>
    </div>
    <div class="section">
      <div class="banner">
        <div class="background"></div>
        <div class="carousel">
          <SwiperCarousel />
        </div>
      </div>
      <div class="widget">
        <Com />
      </div>
    </div>
    <hr class="lines" />
    <div class="footer">
      <span
        >한국장학재단 콜센터 1599-2000 <br />ARS 기부 (한통화에 2,000원이
        기부됩니다.) 060-700-1003 평일 09:00 ~ 18:00 <br />(우 41200) 대구광역시
        동구 신암로 125 (신암동 819-1) <br />본 홈페이지에 게시된 이메일 주소가
        자동 수집되는 것을 거부하며, 이를 위반시 개인정보 보호법에 의해 처벌됨을
        유념하시기 바랍니다. <br />Copyright © 2021 Korea Student Aid
        Foundation. All rights reserved.</span
      >
    </div>
  </div>
</template>

<script>
import SwiperCarouselVue from "./MainCarousel";
import Com from "../MainPage/Com.vue";
export default {
  name: "MainScreen",
  data() {
    return {};
  },
  components: {
    SwiperCarousel: SwiperCarouselVue,
    Com,
  },
};
</script>

<style>
.test {
  /* background-color: #353535; */
  padding: 35px 40px 10px 40px;
}
.lines {
  margin: 10px 0 15px 0;
  border: 1px solid white;
}
.main {
  width: 90%;
  position: absolute;
  left: 5%;
}
.header {
  display: flex;
  width: calc(100%);
}
.service {
  float: left;
  height: 50px;
}
.service .icon {
  width: 50px;
  height: 50px;
  margin-right: 10px;
}
.service .title {
  color: white;
  font-weight: 600;
  font-size: 2em;
  position: relative;
  top: 0px;
}
.service .topic {
  /* background-color: antiquewhite; */
  display: block;
  width: 150px;
  color: white;
  position: relative;
  top: 30px;
  left: calc(100% - 320px);
  font-size: 1.2em;
}

.search {
  background-color: white;
  width: 150px;
  height: 40px;
  padding: 5px 10px;
  border: 1px solid black;
  border-radius: 30px;
  margin: 0 10px 0 0;
  position: absolute;
  top: 45px;
  left: calc(100% - 190px);
}
.search .icon {
  position: relative;
  top: -0px;
  left: -5px;
  width: 30px;
  height: 30px;
}
.search input {
  width: 75%;
  height: 95%;
  border: none;
  font-size: 100%;
}
.search input:focus {
  outline: 0px;
}
.section {
  width: calc(100%);
  margin: 20px 0 0 0;
}
.section .banner {
  position: relative;
  display: flex;
  justify-content: center;
}
.section .banner .background {
  position: absolute;
  width: 100%;
  background-color: #5e5e5e;
  height: 150px;
  top: 25px;
  /* border-radius: 20px; */
}
.section .banner .carousel {
  width: 90%;
  position: relative;
  left: 2%;
}
.footer {
  width: calc(100%);
  color: white;
  padding: 5px 0 0 5px;
}
.widget {
  width: 100%;
}
</style>