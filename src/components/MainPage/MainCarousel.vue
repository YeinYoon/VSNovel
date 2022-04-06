<template>
  <!--  autoplay=2000 -->
<carousel
    :items-to-show="1.95"
    :wrap-around="true"
    :autoplay="sec"
    :pauseAutoplayOnHover="status"
  >
    <slide v-for="slide in datas" :key="slide">
      <img :src="`${slide.link}`" class="main_carousel_img"/>
    </slide>
    <template #addons>
      <navigation />
      <pagination />
    </template>
  </carousel>
  
</template>
<script>
// If you are using PurgeCSS, make sure to whitelist the carousel CSS classes
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
import data from "../../assets/DataJs/data.js";

export default {
  name: "App",
  data() {
    return {
      datas: data,
      status : true, // 마우스 가져다 댔을 경우 사진이 안넘어가요
      sec : 153333300, //사진 넘어가는 시간,
    };
  },
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
};
</script>
<style>
/* 메인 carousel */
.main_carousel_img {
  width: 110%;
  height: 200px;
  transform: scale(1.1);
  z-index: 11;
  box-shadow: 0px 0px 18px 10px rgba(0, 0, 0, 0.7);
}
/* 메인 페이지를 제외한 carousel img style */
.carousel_img {
  position: relative;
  width: 60%;
  height: 200px;
  object-fit: contain;
}
.carousel_imga{
  width: 100%;
  position: absolute;
  filter: blur(5px);
}
/* ---------------------------------------- */
/* 다음 이미지 */
.carousel__slide--next{
  transform: scale(0.9) translate(-10px);
  filter: blur(2px);
}
/* 전 이미지 */
.carousel__slide--prev {
  transform: scale(0.9) translate(10px);
  filter: blur(2px);
}
/* ------------------------------------------ */
.carousel__prev {
  transform: translate(25%, -70%);
  /* transform: translate(-120%, -100%); */
}
.carousel__next {
  transform: translate(-25%, -70%);
  /* transform: translate(120%, -100%); */
}

</style>