<template>
<div>
  <div class="sideBar">
    <div class="side_search">
      <img src="../../assets/icons/magnifier.png" class="side_icon" />
      <input type="text" />
    </div>
    <div>
      <div class="group"><span>· TOPIC</span></div>
    <div>
      <div v-for="(array, i) in sideCafe" :key="i">
        <div class="group" v-if="i == 4"><span>· CAFE</span></div>
        <div @click="clickEvent(i, $event, array.title, array)" id="element">· {{array.title}}</div>
      </div>
    </div>
  </div>
</div>
    <div v-if="step == '자유'"> <Community/> </div>
    <div v-else-if="step == '작가'"> <Community/> </div>
    <div v-else-if="step == '팀원 모집'"> <Community/> </div>
    <div v-else-if="step == '리뷰 & 추천'"> <Community/> </div>
    <div v-else-if="step == '카페 메인'"> <Cafe /> </div>
    <div v-else> <RegisterCafe :registerCafeData="registerCafeData"/> </div>
</div>
</template>

<script>
import Community from '../community/CommunityView';
import Cafe from '../community/cafe/CafeMain';
import RegisterCafe from '../community/cafe/RegisterCafe';
export default {
  name: "CommunitySide",
  data() {
    return {
      // sideArrays : ['자유', '작가', '팀원 모집', '리뷰 & 추천'],
      sideCafe : this.$store.state.cafeSide,
      step: '자유',
      clickNum : 0,
      registerCafeData : {},
    };
  },
  components:{
      Community,
      Cafe,
      RegisterCafe,
  },
  mounted(){
    // 기본 강조 효과
    let id = document.querySelectorAll("#element")
    id[this.clickNum].style.backgroundColor = "#2872f9"
  },
  methods:{
    clickEvent(index, event, title, array) {
    //가입된 카페 정보
    this.registerCafeData = array;
    // 메인 화면 이동 함수
    this.step = title;
    // 사이드바 강조효과
      let id = document.querySelectorAll("#element");
      // console.log("과거 : " + id[this.clickNum].innerHTML);
      // console.log("현재 : " + event.target.innerHTML)
      event.target.style.backgroundColor = "#2872f9";
      if (this.clickNum != null && this.clickNum != index) {
         id[this.clickNum].style.backgroundColor = "#2c2c2c";
      }
      this.clickNum = index;
    },
},
}
</script>

<style>
.sideBar{
  overflow: auto;
}
#element{
  width: 90%;
  height: 40px;
  color: white;
  padding: 5px 10px 5px 20px;
  text-align: left;
  margin: 10px 0 0 20px;
  border-radius: 30px;
  font-weight: 600;
  font-size: 1em;
}
</style>