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
  <List />
</div>
</template>

<script>
import genreData from "../../assets/genreData.js";
import List from '../libraryPage/List';
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
    List,
  },
  methods: {
    groupEvent(step, event) {
      let id = document.getElementById(step);
      console.log(id);
      if (this.groupStep == "") {
        event.target.style.backgroundColor = "#2872f9";
        this.groupStep = step;
      } else {
        event.target.style.backgroundColor = "#2872f9";
        id.style.backgroundColor = "#2c2c2c";
      }
    },
    hidden() {
      if (this.hiddenData) this.hiddenData = false;
      else this.hiddenData = true;
    },
    genreEvent(num, event) {
      let id = Array.from(document.querySelectorAll(".select_btn"));

      event.target.style.color = "black";
      // console.log(id[this.genreNum]);
      id[this.genreNum].style.color = "gray";
      this.genreNum = num;
    },
  },
};
</script>

<style>
/* -------------------------------------------------------------------- */

</style>