<template>
<div>
  <div class="sideBar">
    <div class="side_search">
      <img src="../../assets/icons/magnifier.png" class="side_icon" />
      <input type="text" />
    </div>
    <div>
      <div class="group"><span>· 컨텐츠 분류</span></div>
      <div class="fiction" id="fiction" @click="groupEvent('novel', $event)">
        · 웹소설
      </div>
      <div class="novel" id="novel" @click="groupEvent('fiction', $event)">
        · 비주얼 노벨
      </div>
    </div>
    <div class="side_genre_group">
      <div class="side_genre" @click="hidden">· 장르</div>
      <div class="genre_group" v-if="hiddenData">
        <div class="selecter" v-for="(genre, i) in data" :key="i">
          <div class="genre_select" @click="genreEvent(i, $event)">
            <div class="select_btn">· {{ genre.genre }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Library />
</div>
</template>

<script>
import genreData from "../../assets/DataJs/genreData.js";
import Library from '../libraryPage/LibraryView';
export default {
  name: "StoreSide",
  data() {
    return {
      groupStep: "",
      data: genreData,
      hiddenData: false,
      genreNum: 0,
    };
  },
  components:{
    Library,
  },
  methods: {
    groupEvent(step, event) {
    // 강조효과
      let id = document.getElementById(step);
      if (this.groupStep == "") {
        event.target.style.backgroundColor = "#2872f9";
        this.groupStep = step;
      } else {
        event.target.style.backgroundColor = "#2872f9";
        id.style.backgroundColor = "#2c2c2c";
      }
    },
    hidden() {
    // 장르 열고 닫기
      if (this.hiddenData) this.hiddenData = false;
      else this.hiddenData = true;
    },
    genreEvent(num, event) {
    // 장르 강조 효과
      let id = Array.from(document.querySelectorAll(".select_btn"));

      event.target.style.color = "black";
      id[this.genreNum].style.color = "gray";
      this.genreNum = num;
    },
  },
};
</script>

<style>
/* -------------------------------------------------------------------- */

</style>