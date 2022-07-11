<template>
  <div class="list_section">
    <div class="work_list" v-for="data in datas" :key="data">
      <img class="list_img" :src="`${data.titleImg}`" />
      <div class="work_list_con">
        <div class="list_span">
          <span class="list_title">{{ data.title }}</span>
          <span class="list_all_percent">
            <progress value="13" max="35"></progress>
            <span class="progress_text">시리즈 총 편수 13/35</span>
          </span>
          <span class="list_recent">최근 플레이한 날짜 {{ data.recentPlay }}</span>
        </div>
        <div class="btn_container">
          <div class="sub_btn">이 작품 리뷰 남기기</div>
          <div class="sub_btn">스토어 페이지</div>
          <div class="sub_btn">빌리지</div>
          <div class="play_btn">PLAY</div>
        </div>
        
      </div>
    </div>
  </div>
</template>

<script>
import datas from "@/assets/DataJs/dataHu.js";

export default {
  data() {
    return {
      datas: datas,
    };
  },
};
</script>

<style>

</style>