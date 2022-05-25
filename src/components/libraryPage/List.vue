<template>
  <div class="list_section">
    <div class="work_list" v-for="data in datas" :key="data">
      <img class="list_img" :src="`${data.titleImg}`" />
      <div class="work_list_con">
        <div class="list_span">
          <span class="list_title">{{ data.title }}</span>
          <span class="list_all_percent">
            <progress value="42" max="100">
              <div class="progrees-label">전체 진행률 : 42.0%</div></progress>
          </span>
          <span class="list_recent">최근 플레이한 날짜 {{ data.recentPlay }}</span>
          <span class="list_page_pro">수집한 페이지 및 엔딩 14/30</span>
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
.list_section {
  margin: 0 auto;
  padding: 5px;
  font-size: 1.3em;
  color: white;
  width: 95%;
  height: 100%;
  position: relative;
  top: 20px;
  overflow-y: scroll;
  -ms-overflow-style: none;
}
.list_recent{
  font-size: 0.7em;
  text-decoration: underline;
  text-decoration-color: #6D6D6D;
  text-decoration-thickness:2px;
  text-underline-offset: 5px;
}
.list_all_percent{
  position: absolute;
  top: 5px;
  right: 15px;
  height: 10px;
  font-size:0.5em;
}

progress {
  -webkit-appearance: none;
}
::-webkit-progress-bar {
  position: absolute;
  background-color: #5D5D5D;
  border-radius: 20px;
  width: 120%;
  height: 15px;
  top: 5px;
  right: -8px;
}

::-webkit-progress-value {
  background-color: #2872F9;
  border-radius: 20px;
}
.list_page_pro{
  position: absolute;
  right: 10px;
  top: 28px;
  font-size: 0.5em;
}
.btn_container{
  display: flex;
}
.sub_btn{
  margin: 18px 5px 0 0;
  height: 20px;
  color: white;
  background-color: #6D6D6D;
  border-radius: 20px;
  font-size: 0.7em;
  text-align: center;
  vertical-align:middle;
}
.play_btn{
  position: absolute;
  right: 10px;
  margin-top: 10px;
  width: 110px;
  height: 30px;
  border-radius: 20px;
  color: white;
  text-align: center;
  background-color:#2872F9;
}
.play_btn:hover{
  background-color: #0084ff;
}

</style>