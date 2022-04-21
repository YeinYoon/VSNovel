<template>
<div>
  <div class="sideBar">
    <div class="side_search">
      <img src="@/assets/icons/magnifier.png" class="side_icon" />
      <input type="text" />
    </div>
    <div>
      <div class="group" @click="myStep = '전체'"><span>· TOPIC</span></div>
      <div class="sel" v-for="(array, i) in sideArrays" :key="i">
        <div @click="clickEvent(i, $event, array)" id="element">· {{array}}</div>
      </div>
    </div>
  </div>
    <Notice />
</div>
</template>

<script>
import Notice from '../notice/Notice';
export default {
  name: "NoticeSide",
  data() {
    return {
        sideArrays : ['전체', '업데이트 내역', '이벤트', '정책'],
        myStep: '전체',
        clickNum : 0,
    };
  },
  components:{
      Notice,
  },
  mounted(){
    // 기본 강조효과
    let id = document.querySelectorAll("#element")
    id[this.clickNum].style.backgroundColor = "#2872f9"
  },
  methods:{
    clickEvent(index, event, array) {
    // 강조효과 및 메인 화면 변경
      this.myStep = array;
      let id = document.querySelectorAll("#element");
      event.target.style.backgroundColor = "#2872f9";
      if (this.clickNum != null) {
        if (this.clickNum != index) {
          id[this.clickNum].style.backgroundColor = "#2c2c2c";
        }
      }
      this.clickNum = index;
    },
  }
};
</script>

<style>
</style>