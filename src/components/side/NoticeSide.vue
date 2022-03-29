<template>
<div>
  <div class="sideBar">
    <div class="side_search">
      <img src="../../assets/icons/magnifier.png" class="side_icon" />
      <input type="text" />
    </div>
    <div>
      <div class="group" @click="step = 'community'"><span>· TOPIC</span></div>
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
  name: "CommunitySide",
  data() {
    return {
        sideArrays : ['전체', '업데이트 내역', '이벤트', '정책'],
        step: 'main',
        clickNum : null,
    };
  },
  components:{
      Notice,
  },
  methods:{
    clickEvent(index, event, clickSide) {
      this.step = clickSide;
      let a = document.querySelectorAll('#element');
        event.target.style.backgroundColor = "#2872f9";
        if(this.clickNum != null){
          a[this.clickNum].style.backgroundColor = "#2c2c2c";
        }
        this.clickNum = index;
    },
  }
};
</script>

<style>
.sel div{
  width: 90%;
  height: 40px;
  color: white;
  padding: 5px 10px 5px 20px;
  text-align: left;
  border-radius: 30px;
  font-weight: 600;
  font-size: 1em;
}
</style>