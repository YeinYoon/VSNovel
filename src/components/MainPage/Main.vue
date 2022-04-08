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
      <div class="banner_div_carousel"></div>
        <div class="banner">
            <SwiperCarousel />
        </div>
      <div class="widget">
        <Widget />
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
import Widget from "./Widget";
export default {
  name: "MainScreen",
  data() {
    return {};
  },
  components: {
    SwiperCarousel: SwiperCarouselVue,
    Widget,
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
  display: table;
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
.service .topic {
  display: block;
  width: 200px;
  color: white;
  position: relative;
  top: 30px;
  left: calc(100% - 370px);
  font-size: 1.2em;
}
button{
  border: none;
  outline: none;
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
  font-size: 100%;
}
input{
  border: none;
  outline: none;
}
.input:focus {
  outline: 0px;
}
button{
  border: none;
  outline: none;
}
.section {
  width: 1000px;
  position: relative;
  top: 30px;
  margin: 0 auto;
  /* margin: 20px 0 0 0; */
}
.banner_div_carousel{
  width: 1000px;
  height: 150px;
  border-radius: 25px;
  background-color: rgb(75, 75, 75);
  position: absolute;
  top: 30px;
}
.section .banner {
  margin: 0 auto;
  width: 920px;
  height: 204px;
  border-radius: 25px;
  border: 2px solid rgb(73, 73, 73);
  overflow: hidden;
}
.footer {
  width: 100%;
  color: white;
  padding: 5px 0 0 5px;
}
.widget {
  width: 100%;
}
</style>