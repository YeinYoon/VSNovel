<template>
<div>
  <div class="sideBar">
    <div class="side_search">
      <img src="../../assets/icons/magnifier.png" class="side_icon" />
      <input type="text" />
    </div>
    <div>
      <div class="group" @click="step = 'community'"><span>· TOPIC</span></div>
      <div class="sel">
        · 자유
      </div>
      <div class="sel">
        · 작가
      </div>
      <div class="sel">
        · 팀원모집
      </div>
      <div class="sel">
        · 리뷰 & 추천
      </div>
    </div>
    <div>
      <div class="group"><span>· CAFE</span></div>
      <div class="sel">
        · 카페 메인
      </div>
      <div class="sel">
        · FPS게임 카페
      </div>
    </div>
  </div>
    <Cafe />
</div>
</template>

<script>
import Cafe from '../community/cafe/CafeMain';
export default {
  name: "CommunitySide",
  data() {
    return {
      groupStep: "",
      step: 'main',
    };
  },
  components:{
      Cafe,
  },
};
</script>

<style>

</style>