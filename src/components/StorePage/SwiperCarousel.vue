<template>
  <carousel
    :items-to-show="1"
    :wrap-around="true"
    autoplay="1000"
    pauseAutoplayOnHover="true"
  >
    <slide v-for="slide in datas" :key="slide">
      <img :src="`${slide.link}`" class="carousel_img" />
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
import data from "../../assets/data.js";

export default {
  name: "App",
  data() {
    return {
      datas: data,
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
/* .img_class{
  width: 60%;
  margin: 0 auto;
} */
/* .carousel__prev--in-active,
.carousel__next--in-active {
  display: none;
} */
.carousel_img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  /* border-radius: 20px; */
}
</style>