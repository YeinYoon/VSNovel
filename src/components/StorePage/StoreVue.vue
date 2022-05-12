<template>
  <!-- 로고쪽 -->
  <div>
    <div class="header">
      <div class="service">
        <img class="icon" src="@/assets/icons/white/cart.png" alt="logo" />
        <span class="title">상세 페이지</span>
      </div>
    </div>
    <div class="modal_contents">
      <!-- 제목이랑 작가 -->
      <div class="modal_con">
        <div class="modal_header">
          <span class="modal_title">{{ modalData.NOVE_TITLE }}</span>
          <span class="modal_writer">???</span>
        </div>
        <!-- 상세 이미지 -->
        <div class="carousel_div">
          <SwiperCarousel />
        </div>
        <!-- 상세 내용 -->
        <div class="modal_explain">
          <div class="modal_explain_up">
            <span class="up_con">장르</span>
            <span class="up_data">{{modalData.CATE_CODE}}</span>
          </div>
          <div class="modal_explain_down">
            <span class="down_con">설명</span>
            <div class="down_data">
              <span class="down_data_text">{{ modalData.NOVE_SYNOPSIS }}</span>
            </div>
          </div>
        </div>
      </div>
      <!-- 오른쪽 사진 및, 짧은 내용 -->
      <div class="add_content">
        <img class="add_content_img" src="@/assets/imgs/noimage.png" alt="소설표지" />
        <div class="add_content_box">
          <div>별점</div>
          <div class="add_content_data">
            <span>제목 : {{ modalData.NOVE_TITLE }}</span>
            <span>제작자 : ???</span>
            <span>제작팀 : {{ modalData.NOVE_TEAMNAME }}</span>
            <span>발매년도 : ???</span>
          </div>
        </div>
        <div class="btn_div">
          <div class="price_btn" @click="$emit('next')">
            <span> {{ modalData.NOVE_PRICE }}&#8361; </span>
          </div>
        </div>
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
  mounted(){
    console.log(this.$route.params.nove_id);
  }
};
</script>

<style>
.carousel_div {
  width: 100%;
  height: 204px;
  border-radius: 25px;
  border: 2px solid rgb(73, 73, 73);
  overflow: hidden;
}

/* 모달 전체 */
.modal_contents {
  color: white;
  display: flex;
  flex-direction: row;
  padding: 10px 0 0 0;
  width: calc(100% - 50px);
  /* height: calc(100% - 200px); */
  height: 80%;
  position: absolute;
  top: 15%;
}
.modal_con {
  padding-right: 15px;
  width: 100%;
  position: relative;
}
/* 제목이랑 작가 */
.modal_header {
  display: flex;
  width: 100%;
}
/* 제목 */
.modal_title {
  flex: 2;
  vertical-align: middle;
  font-size: 1.2em;
}
/* 작가 */
.modal_writer {
  flex: 1;
  vertical-align: middle;
  font-size: 1.1em;
  text-align: right;
}
/* 설명부분 */
.modal_explain {
  display: flex;
  flex-direction: column;
  margin: 10px;
  font-size: 1.1em;
  position: absolute;
  width: 100%;
  height: calc(100% - 200px);
}
/* 설명 윗부분 ( 장르 ) */
.modal_explain_up {
  width: 50%;
  margin: 30px 0 0 0;
  position: absolute;
}
/* 윗부분 고정 글 */
/* .up_con{
} */
/* 윗부분 데이터 바인딩 */
.up_data {
  display: inline-block;
  width: 50%;
  margin: 0 10px;
  padding: 5px 10px;
  background-color: gray;
  border-radius: 20px;
  position: absolute;
}
/* 설명 아래 ( 설명 ) */
.modal_explain_down {
  width: 100%;
  position: absolute;
  top: 90px;
  height: 80%;
}
/* 설명 부분 고정 글 */
.down_con {
  vertical-align: top;
  width: 10%;
}
/* 설명 데이터바인딩 */
.down_data {
  font-size: 0.9em;
  flex: 9;
  margin: 0 10px;
  width: 93.5%;
  display: inline-block;
  padding: 5px 10px;
  background-color: gray;
  border-radius: 20px;
  overflow: auto;
  -ms-overflow-style: none;
  position: absolute;
  height: 50%;
  
}
/* 오른쪽 전체 */
.add_content {
  padding: 0 0 0 5px;
  width: 30%;
  height: 100%;
}
/* 오른쪽 사진 ( 표지 ) */
.add_content_img {
  width: 100%;
  height: 40%;
  border-radius: 20px;
  padding: 0 0 5px 2px;
}
/* 오른쪽 작은 회색 박스 */
.add_content_box {
  background-color: gray;
  border-radius: 20px;
  padding: 10px 5px;
  font-size: 0.8em;
  margin: 10px 0 0 0;
  height: 195px;
}
/* 데이터 바인딩 부분 */
.add_content_data {
  display: flex;
  flex-direction: column;
}
/* 버튼 div */
.btn_div {
  margin: 10px 0 0 0;
  display: flex;
  align-items: center; /* 수직 정렬 */
  flex-direction: row; /* default: row */
  justify-content: center; /* flex direction에 대해서 정렬방식 선택 */
}
/* 가격 버튼 */
.price_btn {
  background-color: #2872f9;
  border-radius: 20px;
  text-align: center;
  display: table;
}
.price_btn span {
  display: table-cell;
  vertical-align: middle;
}
</style>