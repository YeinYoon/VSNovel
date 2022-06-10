<template>
  <div class="RouterView">
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
          <div class="box">
            <div class="community_box">
              <div class="community">
                <div class="header">
                  <div class="service">
                    <img
                      class="icon"
                      src="../../assets/icons/white/bubble_chat.png"
                      alt="logo"
                    />
                    <span class="title">커뮤니티</span>
                  </div>
                </div>
                <hr class="lines" />
                <div
                  class="list"
                  v-for="commu in commuData"
                  :key="commu"
                  @click="communityView(commu)"
                >
                  <div class="content">
                    <img class="img" :src="`${commu.titleImg}`" />
                    <span class="title">{{ commu.title }}</span>
                    <span class="datas"
                      >{{ commu.writer }} | {{ commu.date }} |
                      {{ commu.likes }} | {{ commu.coment }}</span
                    >
                  </div>
                </div>
              </div>
            </div>
            <div class="line"></div>
            <div class="notice_box">
              <div class="notice">
                <div class="header">
                  <div class="service">
                    <img
                      class="icon"
                      src="@/assets/icons/white/propaganda.png"
                      alt="logo"
                    />
                    <span class="title">공지사항</span>
                  </div>
                </div>
                <hr class="lines" />
                <div
                  class="list"
                  v-for="notice in noticeData"
                  :key="notice"
                  @click="noticeView(notice)"
                >
                  <span class="titles">{{ notice.title }}</span>
                  <span class="con">{{ notice.content }}</span>
                  <span class="date">{{ notice.date }}</span>
                </div>
              </div>
            </div>
            <div class="store">
              <div class="header">
                <div class="service" style="background: $ {}">
                  <img
                    class="icon"
                    src="@/assets/icons/white/shopping-cart.png"
                    alt="logo"
                  />
                  <span class="title">스토어</span>
                </div>
              </div>
              <hr class="lines" />
              <div class="div">
                <div class="list" v-for="store in storeData" :key="store">
                  <img
                    class="img"
                    :src="`${store.titleImg}`"
                    @click="storeView(store)"
                  />
                  <div class="titles">
                    {{ store.title }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr class="lines" />
      <div class="footer">
        <span
          >한국장학재단 콜센터 1599-2000 <br />ARS 기부 (한통화에 2,000원이
          기부됩니다.) 060-700-1003 평일 09:00 ~ 18:00 <br />(우 41200)
          대구광역시 동구 신암로 125 (신암동 819-1) <br />본 홈페이지에 게시된
          이메일 주소가 자동 수집되는 것을 거부하며, 이를 위반시 개인정보
          보호법에 의해 처벌됨을 유념하시기 바랍니다. <br />Copyright © 2021
          Korea Student Aid Foundation. All rights reserved.</span
        >
      </div>
    </div>
  </div>
</template>

<script>
import SwiperCarouselVue from "./MainCarousel";
import commuData from "../../assets/DataJs/commuData.js";
import notice from "../../assets/DataJs/notice.js";
import store from "../../assets/DataJs/dataHu.js";
export default {
  name: "MainScreen",
  mounted() {
    // 공지사항 날짜 순으로 정렬
    this.noticeData.sort(function (a, b) {
      return new Date(a.date) - new Date(b.date);
    });
  },
  data() {
    return {
      commuData: commuData,
      noticeData: notice,
      storeData: store,
    };
  },

  components: {
    SwiperCarousel: SwiperCarouselVue,
  },
  methods: {
    // 스토어 게시물 이동 함수
    storeView(data) {
      this.$router.push({
        name: "Store",
        params: { NOVE_TITLE: data.title,
                  NOVE_SYNOPSIS: data.content,
                  NOVE_PRICE: data.pay,
                  NOVE_TEAMNAME: data.team,
                  },
      }
      );
    },
    communityView(data) {
      console.log(data.title);
      this.$router.push({
        name: 'Community',
        params: { comm_id: data.title,
                  comm_content : data.content },
      });
    },
    noticeView(data) {
      console.log(data.title);
      this.$router.push({
        name: 'Notice',
        params: { noti_id: data.title,
                  noti_content: data.content },
      });
    },
  },
};
</script>

<style>
.test {
  background-color: #353535;
  padding: 35px 40px 10px 40px;
}
.lines {
  margin: 10px 0 15px 0;
  border: 1px solid white;
}
.main {
  width: 100%;
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
button {
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
input {
  border: none;
  outline: none;
}
.input:focus {
  outline: 0px;
}
button {
  border: none;
  outline: none;
}
.section {
  width: 100%;
  position: relative;
  top: 30px;
  margin: 0 auto;
  /* margin: 20px 0 0 0; */
}
.banner_div_carousel {
  width: 95%;
  height: 180px;
  border-radius: 25px;
  background-color: rgb(75, 75, 75);
  position: absolute;
  left: 2.5%;
  top: 13px;
}
.section .banner {
  margin: 0 auto;
  width: 90%;
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
.box {
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
}
.community_box,
.notice_box {
  flex: 4;
  background-color: #494949;
  height: 300px;
  padding: 5px 10px;
  border-radius: 20px;
  margin: 30px 0 0 0;
}
.notice,
.community {
  height: 95%;
  width: 100%;
  overflow-y: scroll;
  -ms-overflow-style: none;
}
.line {
  width: 5px;
  margin: 0 20px;
  background-color: #494949;
  height: 280px;
  border-radius: 20px;
  transform: translateY(10%);
}
.community .list {
  background-color: #353535;
  border-radius: 10px;
  height: 40px;
  margin: 0 1% 0 2%;
}

.list .content {
  margin: 10px 0;
  display: table;
  width: 98%;
  height: 20px;
  color: white;
  position: relative;
  text-overflow: ellipsis;
}
.list .img {
  width: 35px;
  height: 35px;
  display: table-cell;
  position: absolute;
  top: -5px;
  left: -5px;
}
.list .title {
  position: absolute;
  top: 0%;
  left: 40px;
  display: table-cell;
  vertical-align: top;
  font-size: 1.2em;
}
.list .datas {
  position: absolute;
  top: 20px;
  right: 0%;
  float: right;
  font-size: 0.8em;
}
.notice .list {
  background-color: #353535;
  height: 100px;
  margin: 5px 0;
  border-radius: 20px;
  padding: 10px;
  color: white;
  display: flex;
  flex-direction: column;
}
.notice .titles {
  position: relative;
  font-size: 1.5em;
}
.notice .con {
  text-align: left;
  position: relative;
  font-size: 0.8em;
  padding: 5px 0 10px 0;
  width: 90%;
  height: 70px;
  text-overflow: ellipsis;
  overflow: hidden;
}
.list .date {
  position: relative;
  text-align: right;
  font-size: 0.8em;
}

.store {
  margin: 30px 0 30px 0;
  width: 100%;
  height: 300px;
  background-color: #494949;
  padding: 5px 10px 0 10px;
  border-radius: 20px;
  /* overflow-y: scroll; */
}
.store ::-webkit-scrollbar {
  display: block;
  height: 10px;
  background: none;
}

.store ::-webkit-scrollbar-thumb {
  background: #353535;
  border-radius: 25px;
}
.store .div {
  display: flex;
  margin: 5px;
  overflow-x: scroll;
  white-space: nowrap;
}
.store .list {
  margin: 0 10px 10px 10px;
}
.store .list .img {
  position: relative;
  left: 50px;
  top: 10px;
  width: 100px;
  height: 150px;
  z-index: 11;
}
.store .list .titles {
  width: 200px;
  height: 40px;
  background-color: #353535;
  color: white;
  text-align: center;
  padding: 15px 0 0 0;
  font-weight: 500;
}
</style>