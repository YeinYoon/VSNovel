<template>
  <div class="main">
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
        <div class="car">
          <SwiperCarousel />
        </div>
      </div>
      <div class="widget">
        <Com />
      </div>
    </div>
    <hr>
    <div class="footer">
        <span>한국장학재단 콜센터 1599-2000
        <br>ARS 기부 (한통화에 2,000원이 기부됩니다.) 060-700-1003 평일 09:00 ~ 18:00
        <br>(우 41200) 대구광역시 동구 신암로 125 (신암동 819-1)
        <br>본 홈페이지에 게시된 이메일 주소가 자동 수집되는 것을 거부하며, 이를 위반시 개인정보 보호법에 의해 처벌됨을 유념하시기 바랍니다.
        <br>Copyright © 2021 Korea Student Aid Foundation. All rights reserved.</span>
    </div>
  </div>
</template>

<script>
import SwiperCarouselVue from "./MainCarousel";
import Com from "../MainPage/Com.vue";
export default {
  name: "MainScreen",
  data() {
    return {
    };
  },
  components: {
    SwiperCarousel: SwiperCarouselVue,
    Com,
  },
};
</script>

<style>
.main {
  width: 90%;
  position: fixed;
  left: 5%;
}
.header {
  display: flex;
}
.service {
  display: table;
  float: left;
}
.service .icon {
  display: table-cell;
  width: 50px;
  height: 50px;
  margin-right: 10px;
}
.service .title {
  display: table-cell;
  vertical-align: middle;
  color: white;
  font-weight: 600;
  font-size: 2em;
}
.search {
  flex: 2;
  float: right;
  background-color: white;
  width: 150px;
  height: 30px;
  padding: 5px 10px;
  border: 1px solid black;
  border-radius: 30px;
  margin: 0 10px 0 0;
  position: relative;
  top: -50px;
  right: 0px;
}
.search .icon {
  width: 30px;
  height: 30px;
}
.search input {
  width: 75%;
  height: 95%;
  border: none;
  font-size: 100%;
  transform: translate(0, -30%);
}
.search input:focus {
  outline: 0px;
}
.section {
  width: calc(100% - 100px);
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
.section .banner .car {
  width: 90%;
}
.footer{
    color: white;
    padding: 5px 0 0 5px;
}
.widget{
  width: 100%;
}
</style>