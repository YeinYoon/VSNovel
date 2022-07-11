<template>
<div>
  <div class="RouterView">
    <div class="header">
      <div class="service">
        <img
          class="icon"
          src="../../assets/icons/white/library.png"
          alt="logo"
        />
        <span class="title">라이브러리</span>
      </div>
    </div>

    <div class="list_section">

      <!-- 반복 -->
      <div class="work_list">

        <!-- 작품 대표이미지 -->
        <img class="list_img" /> 
        <div class="work_list_con">
          <div class="list_span">
            <!-- 제목 -->
            <span class="list_title">제목</span>

            <!-- 총편수 및 소유한 편수 -->
            <span class="list_all_percent">
              <progress value="13" max="35"></progress>
              <span class="progress_text">시리즈 총 편수 13/35</span>
            </span>

            <!-- 최근 플레이날짜 -->
            <span class="list_recent">최근 플레이한 날짜 2022-07-12</span>
          </div>
          <div class="btn_container">
            <div class="sub_btn">이 작품 리뷰 남기기</div>
            <div class="sub_btn">스토어 페이지</div>
            <div class="sub_btn">에피소드 목록</div>
            <div class="play_btn">PLAY</div>
          </div>
        </div>
      </div>
      <!-- 반복 END -->

    </div>

  </div>
</div>
</template>

<script>
import Library from '../librarypage/LibraryView';
export default {
  name: "StoreSide",
  data() {
    return {
      groupStep: "",
      hiddenData: false,
      genreNum: 0,
      clickNovel : 'novel',
      payDate : '구매일자↑'
    };
  },

  components:{
    Library,
  },

  created() {
    this.$store.commit('sideBarOn');
    this.$store.commit('currentServiceCng', 'L');
  },

  methods: {
  },
};
</script>

<style>
.library_view {
  float: right;
}
.library_view .gall_icon {
  width: 50px;
  height: 50px;
  margin: 0 10px;
  border-radius: 5px;
}
.library_view .list_icon {
  width: 50px;
  height: 50px;
  margin: 0 0 0 10px;
  border-radius: 5px;
}

.list_section {
  margin: 0 auto;
  padding: 5px;
  font-size: 1.3em;
  color: white;
  width: 95%;
  height: 100%;
  position: relative;
  top: 20px;
  overflow-y: scroll;
  -ms-overflow-style: none;
}
.list_recent{
  font-size: 0.7em;
  text-decoration: underline;
  text-decoration-color: #6D6D6D;
  text-decoration-thickness:2px;
  text-underline-offset: 5px;
}
.list_all_percent{
  position: absolute;
  top: 5px;
  right: 15px;
  height: 10px;
  font-size:0.5em;
}

progress {
  -webkit-appearance: none;
}
::-webkit-progress-bar {
  position: absolute;
  background-color: #5D5D5D;
  border-radius: 20px;
  width: 120%;
  height: 15px;
  top: 5px;
  right: -8px;
}

::-webkit-progress-value {
  background-color: #2872F9;
  border-radius: 20px;
}
.progress_text{
  position: absolute;
  top: 5px;
  right:10px;
  color: white;
}
.btn_container{
  display: flex;
}
.sub_btn{
  margin: 18px 5px 0 0;
  padding: 3px 10px 0px 10px;
  height: 27px;
  color: white;
  background-color: #6D6D6D;
  border-radius: 20px;
  font-size: 0.7em;
  text-align: center;
  vertical-align:middle;
}
.play_btn{
  position: absolute;
  right: 10px;
  margin-top: 20px;
  width: 110px;
  height: 30px;
  border-radius: 20px;
  color: white;
  text-align: center;
  background-color:#2872F9;
}
.play_btn:hover{
  background-color: #0084ff;
}
</style>