<template>
  <!-- logo  -->
  <div class="tests">
    <div class="header">
      <div class="service">
        <img
          class="icon"
          src="../../assets/icons/white/shopping-cart.png"
          alt="logo"
        />
        <span class="title">스토어</span>
      </div>
      <div class="price_div">
        <div @click="priceClick">
          <div class="price" v-if="step == 0">
            <span class="free">무료</span>
            <div class="price_btn"></div>
            <span class="charge">유료</span>
          </div>
          <div class="price" v-if="step == 1">
            <div class="price_btn"></div>
            <span class="charge">유료</span>
          </div>
          <div class="price" v-if="step == 2">
            <span class="free">무료</span>
            <div class="price_btn"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="listView">
      <div
        class="work_list"
        v-for="(data, i) in dataHuman"
        :key="i"
        @click="modalOpen(i)"
      >
        <img class="list_img" :src="`${data.titleImg}`" />
        <div class="work_list_con">
          <div class="list_span">
            <span class="list_title">{{ data.title }}</span>
            <span class="list_team">{{ data.writer }} / {{ data.team }}</span>
            <span class="list_content">{{ data.content }}</span>
          </div>
        </div>
        <div class="list_price">
          <span> {{ data.pay }}&#8361; </span>
        </div>
      </div>
    </div>
    <StoreModal
      @close="modal = false"
      :datas="dataHuman"
      :modal="modal"
      :num="clickNum"
    />
  </div>
</template>

<script>
import StoreModal from "./StoreModal";
import data from "../../assets/data.js"; // 이미지 링크
import dataHu from "../../assets/dataHu.js"; // 작품 정보

export default {
  name: "Store",
  data() {
    return {
      step: 0,
      modal: false,
      datas: data,
      clickNum: 0,
      dataHuman: dataHu,
    };
  },
  components: {
    StoreModal,
  },
  methods: {
    priceClick() {
      this.step++;
      if (this.step > 2) this.step = 0;
    },
    modalOpen(i) {
      this.clickNum = i;
      this.modal = true;
    },
  },
};
</script>

<style>
.tests {
  /* background-color: #353535; */
  padding: 35px 40px 10px 40px;
  width: calc(100% - 440px);
  height: 100%;
  position: fixed;
  left: 440px;
  overflow: auto;
}
/* price_div 위치 잡는 div /  price 전체 div / 
    free 무료 / price_btn 버튼 /charge 유료*/
.price_div {
  position: absolute;
  left: calc(100% - 160px);
  top: 100px;
  height: 30px;
}
.price {
  display: flex;
  background-color: white;
  border-radius: 20px;
  width: 125px;
  float: right;
  height: 40px;
}
.price_btn {
  flex: 1;
  width: 40px;
  height: 40px;
  background-color: #2872f9;
  border-radius: 100px;
  top: 50%;
  /* transform : translateY(5%); */
}
.free,
.charge {
  flex: 1;
  text-align: center;
  font-size: 18px;
  top: 50%;
  transform: translateY(16%);
  color: black;
}
/* work_list 작품 전체 div / list_img 작품 이미지 / 
    list_title 작품 제목 / list_span 글자들 묶은 div / 
    list_team 작품 팀 / list_content 작품 줄거리 / list_price 작품 가격 */

.work_list {
  /* width: calc(50%); */
  background-color: #2a2a2a;
  margin: 50px 10px;
  border-radius: 20px;
  height: 125px;
  top: 100px;
  display: flex;
  flex-direction: row;
  position: relative;
}
.list_img {
  width: 100px;
  height: 140px;
  margin: 0 10px 0 20px;
  transform: translateY(-25%);
}
.list_span {
  display: flex;
  flex-direction: column;
  width: 100%;
}
.work_list_con {
  color: white;
  width: 70%;
}
.work_list_con::-webkit-scrollbar {
  display: none;
}
.list_title {
  font-size: 1.3em;
  padding-top: 5px;
}
.list_team {
  font-size: 0.9em;
}
.list_content {
  font-size: 0.7em;
  padding-top: 5px;
  height: 50px;
  width: 100%;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
.list_price {
  background-color: #2872f9;
  padding: 0 20px;
  height: 30px;
  width: 120px;
  text-align: center;
  border-radius: 20px;
  display: table;
  position: absolute;
  bottom: -10px;
  right: 10px;
}
.list_price span {
  color: white;
  display: table-cell;
  vertical-align: middle;
  font-size: 1.1em;
}
</style>