<template>
  <div class="tests">
    <div class="header">
      <div class="service">
        <img class="icon" src="../../assets/icons/white/home.png" alt="logo" />
        <span class="title">마이페이지</span>
        <span class="topic">선호 / 비선호 설정</span>
      </div>
    </div>
    <div class="prefer_section">
      <p class="mypage_cate-detail">
        추천 받고싶은 장르를 클릭으로 선택할 수 있습니다. <br />두번 클릭할 시
        해당 장르는 추천에서 제외됩니다.
      </p>
      <div class="mypage_cate-box">
        <button
          :style="buttonStyles"
          class="mypage_cate-genre"
          v-for="(genre, i) in predata"
          :key="i"
          @click="prefer({ genre }, $event)"
        >
          {{ genre.name }}
        </button>
      </div>
      <button class="mypage_cate-canc">취소</button>
      <button class="mypage_cate-save">저장</button>
    </div>
  </div>
</template>

<script>
import genre from "../../assets/DataJs/preferdata.js";

export default {
  data() {
    return {
      predata: genre,
      status: 0,
    };
  },
  methods: {
    prefer: function (genre, event) {
      genre = genre.genre;
      genre.count++;
      genre.count %= 3;
      this.status = genre.count;
      event.target.style.backgroundColor =
        this.status == 0 ? "#5E5E5E" : this.status == 1 ? "#0078FF" : "#EA4235";
    },
  },
};
</script>

<style>
.prefer_section {
  margin: 0 auto;
  /* background-color: antiquewhite; */
  width: 700px;
  position: relative;
  top: 15%;
  text-align: center;
  font-size: 1.3em;
  color: white;
}
.mypage_cate-box {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  background-color: #444444;
  height: 200px;
  border-radius: 20px;
  padding: 5px;
  margin: 10px;
}
.mypage_cate-genre {
  background-color: #5e5e5e;
  color: white;
  width: 150px;
  height: 50px;
  margin: 5px;
  padding: 5px;
  border-radius: 20px;
}

.mypage_cate-canc {
  background-color: #5e5e5e;
  color: white;
  width: 150px;
  padding: 10px;
  margin: 5px;
  border-radius: 20px;
}
.mypage_cate-save {
  background-color: #2872f9;
  color: white;
  width: 150px;
  padding: 10px;
  margin: 5px;
  border-radius: 20px;
}
</style>