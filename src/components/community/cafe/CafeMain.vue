<template>
  <div class="tests">
    <!-- 헤더 -->
    <div class="header">
      <div class="service">
        <img  class="icon" src="@/assets/icons/white/leaf.png" />
        <span class="title">Village</span>
        <span class="topic">소모임 커뮤니티</span>
      </div>
      <div class="search">
        <img src="@/assets/icons/magnifier.png" class="icon" />
        <input type="text" />
      </div>
    </div>
    <div class="cafe_section">
      <div class="carousel">
        <SwiperCarousel/>
      </div>
      <div class="widgets">
        <div class="con">
          <span class="cafeTitle">NEW Village</span>
          <div class="boxs">
            <div class="list" v-for="commu in commuData" :key="commu">
              <div class="contents">
                <span class="titles">{{ commu.title }}</span>
                <span class="dataLine"
                  >{{ commu.writer }} | {{ commu.date }} | {{ commu.likes }} |
                  {{ commu.coment }}</span
                >
              </div>
            </div>
          </div>
        </div>
        <div class="con">
          <span class="cafeTitle">TOP10 Village</span>
          <div class="boxs">
            <div class="list" v-for="(vill, i) in villageData" :key="i">
              <div class="contents">
                <span class="titles">{{ vill.title }}</span>
                <span class="dataLine"
                  >추천 수 : {{ vill.likes }} | 순위 : {{ i + 1 }}</span
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SwiperCarouselVue from "./CafeCarousel";
import commuData from "@/assets/DataJs/commuData.js";
export default {
  name: "MainScreen",
  data() {
    return {
      commuData: commuData,
      villageData: {},
    };
  },
  components: {
    SwiperCarousel: SwiperCarouselVue,
  },
  mounted() {
    // 추천 순으로 정렬 후 10위까지만 자르기
    this.villageData = this.commuData.sort(function (a, b) {
      return b.likes - a.likes;
    });
    this.villageData = this.villageData.slice(0, 10);
  },
};
</script>

<style>
.cafe_section {
  width: 800px;
  margin: 0 auto;
  position: relative;
  top: 70px;
}
.cafe_section .carousel {
  width: 100%;
}
.widgets {
  width: 100%;
  display: flex;
  height: 95%;
}
.widgets .con {
  margin: 0 20px;
  flex: 4;
  position: relative;
  height: 400px;
}
.widgets .con .title {
  font-size: 1.5em;
}
.widgets .con .boxs {
  border-radius: 20px;
  background-color: #5e5e5e;
  padding: 0 10px 0 10px;
  width: 100%;
  height: 550px;
  overflow-y: scroll;
  -ms-overflow-style: none;
}
.widgets .con .boxs::-webkit-scrollbar {
  display: none;
}
.widgets .cafeTitle {
  border-radius: 10px;
  height: 40px;
  font-size: 1.3em;
}
.con .boxs .list {
  background-color: #353535;
  width: 100%;
  height: 50px;
  border-radius: 10px;
  color: white;
}
.con .boxs .list .contents {
  margin: 10px 0;
  width: 98%;
  position: relative;
}
.con .boxs .list .titles {
  position: absolute;
  top: 0px;
  left: 5px;
  bottom: 30px;
  font-size: 1.2em;
}
.con .boxs .list .dataLine {
  position: absolute;
  right: 10px;
  top: 30px;
}
</style>