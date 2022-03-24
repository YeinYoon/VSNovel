<template>
<!--  autoplay=2000 -->
  <carousel :items-to-show="1" :wrap-around="true" autoplay=5000 pauseAutoplayOnHover=true>
     <slide class="f" v-for="slide in 10" :key="slide" >
      {{ slide }}
    </slide>
    <template #addons>
      <navigation />
      <pagination />
    </template>
  </carousel>
</template>
<script>
// If you are using PurgeCSS, make sure to whitelist the carousel CSS classes
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';
// import data from '../../assets/data.js';

export default {
  name: 'App',
  data(){
    return{
      // datas: data,
    }
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
.carousel_img{
  width: 100px;
  height: 200px;
  object-fit: cover;
}
.carousel__prev{
  transform: translate(25%, -100%);
  /* transform: translate(-120%, -100%); */
}
.carousel__next{
  transform: translate(-25%, -100%);
  /* transform: translate(120%, -100%); */
}
</style>