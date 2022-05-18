<template>
  <!--  autoplay=2000 -->
  <div><CafeModal  v-if="openModal == true" @close="openModal = false" :modalData="modalData"></CafeModal></div>
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
      status: true,
      sec : 1500,
      modalData : {},
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
    this.getVillageList();
  },
  methods: {
    sendData(i) {
      this.modalData = this.datas[i];
      this.openModal = true;
    },
    //카페 리스트 조회
    getVillageList() {
      axios.get('/api/village/getVillageList')
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