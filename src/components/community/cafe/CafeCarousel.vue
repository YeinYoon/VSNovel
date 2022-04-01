<template>
  <!--  autoplay=2000 -->
  <div><CafeModal  v-if="openModal == true" @close="openModal = false" :dataNum = "dataNum" :datas ="datas"></CafeModal></div>
  <carousel
    :items-to-show="1"
    :wrap-around="true"
    :autoplay="sec"
    :pauseAutoplayOnHover="status"
  >
    <slide v-for="(slide,i) in datas" :key="i" @click="sendData(i)" >
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
import data from "@/assets/DataJs/data.js";
import CafeModal from "./CafeModal.vue";

export default {
  name: "App",
  data() {
    return {
      datas: data,
      openModal : false,
      dataNum : 0,
      status: true,
      sec : 1500,
    };
  },
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
    CafeModal
  },
  methods: {
    sendData(i) {
      this.dataNum = i;
      this.openModal = true;
    }
  }
};
</script>
<style>
.carousel_img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}
.carousel__prev {
  transform: translate(25%, -50%);
  /* transform: translate(-120%, -100%); */
}
.carousel__next {
  transform: translate(-25%, -50%);
  /* transform: translate(120%, -100%); */
}
.carousel__pagination-button {
  display: none;
}
</style>