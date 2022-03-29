<template>
<div>
  <div class="sideBar">
    <div class="side_search">
      <img src="../../assets/icons/magnifier.png" class="side_icon" />
      <input type="text" />
    </div>
    <div>
      <div class="group"><span>· TOPIC</span></div>
      <div class="sel" v-for="(array, i) in sideArrays" :key="i">
        <div @click="clickEvent(i, $event, array)" id="element">· {{array}}</div>
    </div>
    <div>
      <div class="group"><span>· CAFE</span></div>
      <div class="sel" @click="step = 'cafeMain'">
        <div>· 카페 메인</div>
      </div>
      <div class="sel">
        <div>· FPS게임 카페</div>
      </div>
    </div>
  </div>
</div>
    <div v-if="step == '자유'"> <Community/> </div>
    <div v-if="step == '작가'"> <Community/> </div>
    <div v-if="step == '팀원 모집'"> <Community/> </div>
    <div v-if="step == '리뷰 & 추천'"> <Community/> </div>
    <div v-if="step == 'cafeMain'"> <Cafe/> </div>
</div>
</template>

<script>
import Cafe from '../community/cafe/CafeMain';
import Community from '../community/CommuManage';
export default {
  name: "CommunitySide",
  data() {
    return {
      sideArrays : ['자유', '작가', '팀원 모집', '리뷰 & 추천'],
      step: '자유',
      clickNum : null,
    };
  },
  components:{
      Cafe,
      Community,
  },
  methods:{
    clickEvent(index, event, array) {
      this.step = array;
      let a = document.querySelectorAll('#element');
        event.target.style.backgroundColor = "#2872f9";
        if(this.clickNum != null){
          a[this.clickNum].style.backgroundColor = "#2c2c2c";
        }
        this.clickNum = index;
  }
},
}
</script>

<style>

</style>