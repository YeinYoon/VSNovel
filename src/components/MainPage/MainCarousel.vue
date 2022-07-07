<template>
  <!--  autoplay=2000 -->
<carousel
    :items-to-show="1"
    :wrap-around="true"
    :autoplay="sec"
    :pauseAutoplayOnHover="status"
  >
    <slide v-for="slide in bannerData" :key="slide">
      <div class="carousel__item"><img :src="slide.BANN_IMG" @click="bannerBtn()"></div>
    </slide>

    <template #addons>
      <pagination />
      <navigation />
    </template>
  </carousel>
  
</template>
<script>
// If you are using PurgeCSS, make sure to whitelist the carousel CSS classes
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
import data from "../../assets/DataJs/data.js";
import axios from '../../axios';
export default {
  name: "App",
  data() {
    return {
      datas: data,
      bannerData: null,
      status : true, // 마우스 가져다 댔을 경우 사진이 안넘어가요
      sec : 2500, //사진 넘어가는 시간,
      breakpoints: {
        // 700px and up
        700: {
          itemsToShow: 3.5,
          snapAlign: 'center',
        },
        // 1024 and up
        1024: {
          itemsToShow: 5,
          snapAlign: 'start',
        }
      },
    }
  },
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  methods:{
    openSlide(link){
      this.$store.commit('gModalOn', {msg:"hi", bg : link, size : "ad"});
    },
  },
  created(){
    axios.get('/api/main/carousel')
    .then((result) => {
      if(result.data == "err") {
        console.log("fail")
      } else {
        this.bannerData = result.data;
        console.log(this.bannerData)
      }
    })
  },
};
</script>
<style>


.carousel__item {
  height: 200px;
  width: 100%;
  background-color: var(--vc-clr-primary);
  color:  var(--vc-clr-white);
  font-size: 20px;
  /* border-radius: 8px; */
  display: flex;
  justify-content: center;
  align-items: center;
  object-fit: contain;
}

.carousel__item img{
  width: 100%;
  /* transform: scale(1.1); */
}

.carousel__prev {
  transform: translate(25%, -50%);
  background-color: #2872f9;
  /* border: 2px solid white; */
  /* transform: translate(-120%, -100%); */
}
.carousel__next {
  transform: translate(-25%, -50%);
  background-color: #2872f9;
  /* border: 2px solid white; */
  /* transform: translate(120%, -100%); */
}
</style>