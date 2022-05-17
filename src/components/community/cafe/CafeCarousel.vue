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
      <img :src="`${slide.VILL_PRO_IMG}`" class="carousel_imga"/>
      <img :src="`${slide.VILL_PRO_IMG}`" class="carousel_img"/>
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
import CafeModal from "./CafeModal.vue";
import axios from '../../../axios'

export default {
  name: "App",
  data() {
    return {
      datas: [],
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
  created(){
    this.getvillagelist();
  },
  methods: {
    sendData(i) {
      this.dataNum = i;
      this.openModal = true;
    },
    //카페 리스트 조회
    getvillagelist() {
      axios.get('/api/village/getvillagelist')
      .then((result)=>{
        if(result.data == "err") {
          console.log("커뮤니티 데이터 불러오기 실패");
        } else {
          this.datas = result.data;
        }
      })
    },
  }
};
</script>
<style>
/* .carousel__prev {
  transform: translate(25%, -50%);
}
.carousel__next {
  transform: translate(-25%, -50%);
} */
.carousel__pagination-button {
  display: none;
}
</style>