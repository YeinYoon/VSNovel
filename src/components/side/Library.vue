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
      <div class="work_list" v-for="(novel, i) in totalList" :key="i">

        <!-- 작품 대표이미지 -->
        <img class="list_img" /> 
        <div class="work_list_con">
          <div class="list_span">
            <!-- 제목 -->
            <span class="list_title">{{novel.NOVE_TITLE}}</span>

            <!-- 총편수 및 소유한 편수 -->
            <span class="list_all_percent">
              <progress value="13" max="35"></progress>
              <span class="progress_text">시리즈 총 편수 {{novel.EP_LIST.length}}/??</span>
            </span>

            <!-- 최근 플레이날짜 -->
            <span class="list_recent">최근 플레이한 날짜 2022-07-12</span>
          </div>
          <div class="btn_container">
            <div class="sub_btn">이 작품 리뷰 남기기</div>
            <div class="sub_btn">스토어 페이지</div>
            <div class="sub_btn" @click="openEp()">에피소드 목록</div>
            <div class="play_btn">PLAY</div>
          </div>

          <!-- 에피목록 -->
          <div class="lib_eplist">
            <div class="lib_eplist_title">에피소드 목록</div>
            <div class="lib_eplist_list">
              <div class="lib_eplist_item">1</div>
            </div>
          </div>

        </div>
      </div>
      <!-- 반복 END -->

    </div>

  </div>
</div>
</template>

<script>
import axios from '../../axios'
export default {
  name: "StoreSide",
  data() {
    return {
      novelList : [],
      epList : [],
      totalList : [] // 최종적으로 v-for 돌릴 데이터
    };
  },
  created() {
    this.$store.commit('sideBarOn');
    this.$store.commit('currentServiceCng', 'L');

    this.getNovelList();
  },
  methods: {
    getNovelList() {
      
    },
    goToViewer(){
      let pjCode=159
      let ep=1
      console.log("goto")
      this.$router.push({name: "Viewer",
        params: { pjCode: pjCode, ep:ep },})
      axios.get('/api/library/getNovelList')
      .then((result)=>{
        if(result.data == "err") {
          console.log("유저 소유 소설 데이터 불러오기 실패");
        } else {
          this.novelList = result.data;
          this.getEpList();
        }
      })
    },
    getEpList() {
      axios.get('/api/library/getEpList')
      .then((result)=>{
        if(result.data == "err") {
          console.log("유저 소유 소설 에피소드 데이터 불러오기 실패");
        } else {
          this.epList = result.data;
          this.getTotalList();
        }
      })
    },
    getTotalList() {
      for(var i=0; i<this.novelList.length; i++) {
        this.totalList.push({
          NOVE_CODE : this.novelList[i].NOVE_CODE, // 소설 코드
          NOVE_TITLE : null, // 소설 제목
          RECENT_EP : null, // 현재 소설의 회차중 가장 최근에 본 것
          EP_LIST : [], // 에피소드 목록
          EP_OPEN : false, // 에피소드 목록을 열었다 닫았다 상태값
        })
        for(var j=0; j<this.epList.length; j++) {
          if(this.totalList[i].NOVE_CODE == this.epList[j].NOVE_CODE) {
            this.totalList[i].NOVE_TITLE = this.epList[j].NOVE_TITLE;
            this.totalList[i].EP_LIST.push(this.epList[j]);
            this.totalList[i].RECENT_EP = this.epList[j].POSS_RECENTEP;
          }
        }
      }
      console.log(this.totalList);
    },

    openEp() {

    }
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

.lib_eplist {
  width: calc(300px);
  height: 300px;
  background: #525252;
  border-radius: 10px;
  z-index: 11;
  position: relative;
  left: 240px;
  top: 10px;
  padding: 3px 10px 10px 10px;
}

.lib_eplist_title {
  font-size: 1em;
}

.lib_eplist_list {
  position: absolute;
  width: calc(100% - 20px);
  height: calc(100% - 45px);
  border-radius: 10px;
  background: #484848;
  padding: 5px;
}

.lib_eplist_item {

}
</style>