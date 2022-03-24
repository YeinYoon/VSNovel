<template>
<div class="tests">
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
.sideBar {
  font-size: 1.2em;
  display: flex;
  flex-direction: column;
  padding: 50px 10px 0 10px;
  background: #2c2c2c;
  /* width: 200px; */
  height: 100vh;
  /* overflow: auto; */
  position: fixed;
  top: 0px;
  left: 140px;
}
/* -------------------------------------------------------------------- */

.side_search {
  background-color: white;
  width: 180px;
  height: 40px;
  padding: 5px 10px;
  border: 1px solid black;
  border-radius: 30px;
  margin: 0 0 25px 0;
  top: 45px;
}
.side_search .side_icon {
  position: relative;
  top: -0px;
  left: -5px;
  width: 30px;
  height: 30px;
}
.side_search input {
  width: 120px;
  border: none;
  font-size: 100%;
}
.side_search input:focus {
  outline: 0px;
}
.group {
  width: 180px;
  height: 40px;
  background-color: white;
  padding: 5px 10px 5px 20px;
  border: none;
  border-radius: 30px;
  font-weight: 700;
  display: table;
}
.group span {
  display: table-cell;
  vertical-align: middle;
}
.novel,
.fiction {
  width: 160px;
  height: 40px;
  color: white;
  padding: 5px 10px 5px 20px;
  text-align: left;
  margin: 10px 0 0 20px;
  border-radius: 30px;
  font-weight: 700;
}
.side_genre_group {
  margin: 20px 0 0 0;
  font-weight: 700;
}
.side_genre {
  background-color: white;
  padding: 5px 10px 5px 20px;
  border-radius: 30px;
  border: none;
  position: relative;
  z-index: 12;
  box-shadow: 0 2px 5px 1px black;
}
.genre_group {
  margin: 10px 0 0 0;
  background-color: white;
  border-radius: 20px;
  padding: 40px 10px 5px 30px;
  position: relative;
  z-index: 11;
  top: -40px;
  font-size: 0.9em;
}
.selecter {
  font-weight: 700;
  color: #8a8a8a;
}
.select_btn {
  font-weight: 700;
  color: #8a8a8a;
}
</style>