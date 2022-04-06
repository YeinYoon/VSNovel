<template>
  <carousel
    :items-to-show="1"
    :wrap-around="true"
    :autoplay="sec"
    :pauseAutoplayOnHover="true"
  >
    <slide v-for="slide in datas" :key="slide">
      <img :src="`${slide.link}`" class="carousel_imga"/>
      <img :src="`${slide.link}`" class="carousel_img"/>
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
      sec: 1500,
      status : true,
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
</style>