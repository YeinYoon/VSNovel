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
      <div class="sel" v-for="(array, i) in sideCafe" :key="i">
        <div @click="clickEvent(i, $event, array)" id="element">· {{array}}</div>
      </div>
    </div>
  </div>
</div>
    <div v-if="step == '자유'"> <Community/> </div>
    <div v-if="step == '작가'"> <Writer/> </div>
    <div v-if="step == '팀원 모집'"> <Team/> </div>
    <div v-if="step == '리뷰 & 추천'"> <Review/> </div>
    <div v-if="step == '카페 메인'"> <Cafe /> </div>
</div>
</template>

<script>
import Community from '../community/free/CommuFree';
import Writer from '../community/WriterCommu';
import Team from '../community/TeamCommu';
import Review from '../community/ReviewCommu';
import Cafe from '../community/cafe/CafeMain';
export default {
  name: "CommunitySide",
  data() {
    return {
      sideArrays : ['자유', '작가', '팀원 모집', '리뷰 & 추천'],
      sideCafe : this.$store.state.cafeSide,
      step: '자유',
      clickNum : null,
    };
  },
  components:{
      Community,
      Writer,
      Team,
      Review,
      Cafe,
  },
  methods:{
    clickEvent(index, event, array) {
    // 메인 화면 이동 함수
      this.step = array;
    // 사이드바 강조효과
      let id = document.querySelectorAll("#element");
      console.log(id);
      event.target.style.backgroundColor = "#2872f9";
      if (this.clickNum != null) {
        if (this.clickNum != index) {
          id[this.clickNum].style.backgroundColor = "#2c2c2c";
        }
      }
      this.clickNum = index;
    },
},
}
</script>

<style>

</style>