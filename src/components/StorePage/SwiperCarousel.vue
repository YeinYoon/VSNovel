<template>
  <carousel
    :items-to-show="1"
    :wrap-around="true"
    :autoplay="sec"
    :pauseAutoplayOnHover="true"
  >
    <slide v-for="slide in bannerData" :key="slide" @click="bannerBtn(slide)">
      <img :src="`${slide.BANN_iMG}`" class="carousel_imga"/>
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
import axios from '../../axios';

export default {
  name: "App",
  data() {
    return {
      sec: 1500,
      status : true,
      bannerData : []
    };
  },
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  
  methods: {
    getBanner() {
      axios.get('/api/store/getbanner')
      .then((result) => {
        if(result.data == "err") {
          console.log("banner's not exist")
        } else {
          console.log("hihiih")
          this.bannerData = result.data
        }
      })
    },
    bannerBtn(data) {
      console.log(this.bannerData[0].BANN_IMG)
      console.log(data)
    }
  },
  created() {
    this.getBanner()
  }
};
</script>
<style>
.carousel_img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}
</style>