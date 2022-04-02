<template>
  <!--  autoplay=2000 -->
  <div>
<carousel
    :items-to-show="1"
    :wrap-around="true"
    :autoplay="sec"
    :pauseAutoplayOnHover="status"
  >
    <slide v-for="slide in datas" :key="slide">
      <img :src="`${slide.link}`" class="carousel_img" />
    </slide>
    <template #addons>
      <navigation />
      <pagination />
    </template>
  </carousel>
  </div>
  
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
      sec : 1500, //사진 넘어가는 시간
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
.carousel_img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}
.carousel__prev {
  transform: translate(25%, -100%);
  /* transform: translate(-120%, -100%); */
}
.carousel__next {
  transform: translate(-25%, -100%);
  /* transform: translate(120%, -100%); */
}
</style>