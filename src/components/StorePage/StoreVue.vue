<template>
  <!-- 로고쪽 -->
  <div>
    <div class="header">
      <div class="service">

        <!-- 프로젝트 대표 이미지 가져오기 -->
        <img class="icon" src="@/assets/icons/white/cart.png" alt="logo" />
        <span class="title">상세 페이지</span>
      </div>
    </div>
    <div class="Store_Content">

      <div class="Store_Novel_title">{{ modalData.NOVE_TITLE }}</div>

      <div class="Store_Novel_info">

        <!-- 데이터 값 채워주기 -->
        팀 {{ modalData.NOVE_TEAMNAME }} 제작
        장르 {{modalData.CATE_CODE}}
        최근 업데이트 
        최초 발매일
        에피소드당 가격
        총 회차
      </div>

      <div class="Store_Novel_Img"><img src="@/assets/imgs/adver.png"></div>

      <div class="Store_Novel_Buy" @click="$emit('next')">
        <div class="Store_Novel_Buy_Content" >
        <p>1화 소장</p>
        <p>{{ modalData.NOVE_PRICE }} ₩</p>
        </div>
      </div>

      <div class="Store_Novel_Synop">
        <div class="Store_Novel_Synop_title">줄거리</div>
        <div class="Store_Novel_Synop_content">{{ modalData.NOVE_SYNOPSIS }}</div>
      </div>

      
      <div class="Store_Novel_EP">
        <div class="Store_Novel_EP_title">에피소드 목록</div>
        <div class="Store_Novel_EP_list">
          <!-- Store_Novel_EP_list_item 반복 -->
          <div class="Store_Novel_EP_list_item">1</div>
        </div>
      </div>

      <div class="Store_Novel_review">
        리뷰
      </div>

    </div>
  </div>
</template>

<script>
import SwiperCarouselVue from "./SwiperCarousel";
export default {
  name: "StoreVue",
  data() {
    return {};
  },
  props: {
    modalData: Object,
  },
  components: {
    SwiperCarousel: SwiperCarouselVue,
  },
};
</script>

<style>
.Store_Novel_info {
  position: absolute;
  left: 450px;
  top: 0px;
  width: 500px;
  height: 80px;
  border-radius: 20px;
  background: #424242; 
}

.Store_Novel_title {
  position: absolute;
  left: 0px;
  top: 0px;
  color: white;
  font-size: 1.3em;
  z-index: 1;
  width: 430px;
  height: 80px;
  padding: 4px 12px;
  border-radius: 20px;
  background: #565656;
}

.Store_Novel_Buy {
  position: absolute;
  right: 0px;
  top: 0px;
  background: #2872f9;
  width: 220px;
  height: 80px;
  border-radius: 20px;
  text-align: center;
  cursor: pointer;
  line-height: 5px;
  padding-top: 25px;
  color: white;
}

.Store_Novel_Img {
  position: absolute;
  left: 0px;
  top: 40px;
  width: 250px;
  height: 270px;
  background: white;
  border-radius: 20px;
  object-fit: cover;
  overflow: hidden;
  z-index: 2;
}

.Store_Novel_Synop {
  position: absolute;
  left: 210px;
  top: 40px;
  width: 220px;
  height: 270px;
  z-index: 1;
  background: #424242;
  border-radius: 20px;
  object-fit: cover;
  overflow: hidden;
  color: white;
}

.Store_Novel_Synop_title {
  position: absolute;
  top: 10px;
  left: 50px;
  font-size: 1.2em;
}

.Store_Novel_Synop_content {
  position: absolute;
  top: 40px;
  left: 50px;
  width: calc(100% - 55px);
  height: calc(100% - 55px);
  overflow: auto;
}

.Store_Novel_Img img {
  width: 100%;
}

.Store_Novel_EP {
  position: absolute;
  left: 450px;
  top: 90px;
  height: 220px;
  width: 735px;
  background: #424242;
  border-radius: 20px;
}

.Store_Novel_EP_title {
  position: absolute;
  left: 12px;
  top: 8px;
  color: white;
  font-size: 1.3em;
  z-index: 1;
}

.Store_Novel_EP_list {
  position: absolute;
  left: 12px;
  top: 40px;
  width: calc(100% - 24px);
  height: 160px;
  overflow: auto;
  color: white;
  font-size: 1.3em;
  z-index: 1;
  padding: 5px;
}

.Store_Novel_EP_list_item {
  position: relative;
  width: 100%;
  display: inline-block;
  background: #565656;
  border-radius: 10px;
  padding: 0px 5px 0px 5px;
  margin-bottom: 4px;
}

.Store_Novel_EP_list_item_disable {
  position: relative;
  width: 100%;
  display: inline-block;
  opacity: 0.5;
  background: #565656;
  border-radius: 10px;
  padding: 0px 5px 0px 5px;
  margin-bottom: 4px;
}

.Store_Novel_review {
  position: absolute;
  left: 0px;
  top: 330px;
  width: 800px;
  height: 180px;
  border-radius: 20px;
  background: #565656;
}

.Store_Content {
  position: absolute;
  top: 90px;
  width: calc(100% - 40px);
  height: calc(100% - 110px);
}
</style>

<style>
</style>