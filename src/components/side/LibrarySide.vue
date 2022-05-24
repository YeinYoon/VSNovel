<template>
<div>
  <div class="sideBar">
    <div class="side_search">
      <img src="../../assets/icons/magnifier.png" class="side_icon" />
      <input type="text" />
    </div>
    <div>
      <div class="group"><span>· 컨텐츠 분류</span></div>
      <div class="novel_div">
        <div class="novel" id="novel" @click="novelEvent($event, 'novel')">
          기본
        </div>
        <div class="newNovel" id="newNovel" @click="novelEvent($event, 'newNovel')">
          신작
        </div>
        <div class="payNovel" id="payNovel" @click="novelEvent($event, 'payNovel')">
          구매↑
        </div>
        <div class="starNovel" id="starNovel" @click="novelEvent($event, 'starNovel')">
          별점↑
        </div>
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
import Library from '../librarypage/LibraryView';
export default {
  name: "StoreSide",
  data() {
    return {
      groupStep: "",
      data: genreData,
      hiddenData: false,
      genreNum: 0,
      clickNovel : 'novel',
    };
  },
  components:{
    Library,
  },
  mounted(){
    let id = document.getElementById('novel');
    id.style.backgroundColor = "#2872f9";
  },
  methods: {
    novelEvent(event, className) {
      // 사이드바 강조효과
      let id = document.getElementById(this.clickNovel);
      if (className != this.clickNovel) {
        id.style.backgroundColor = "#8a8a8a";
      }
        event.target.style.backgroundColor = "#2872f9";
        this.clickNovel = className;
    },
    hidden() {
    // 장르 열고 닫기
      if (this.hiddenData) this.hiddenData = false;
      else this.hiddenData = true;
    },
    genreEvent(num, event) {
    // 장르 강조 효과
      let id = Array.from(document.querySelectorAll(".select_btn"));

      id[this.genreNum].style.color = "gray";
      event.target.style.color = "black";
      this.genreNum = num;
    },
  },
};
</script>

<style>
/* -------------------------------------------------------------------- */

</style>