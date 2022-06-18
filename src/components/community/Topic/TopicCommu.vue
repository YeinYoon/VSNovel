<template>
  <div class="team_box">
    <!-- 상단 버튼 프레임 -->
    <div class="commu_btn_area">
      <!-- 관리자 계정만 노출 -->
      <div class="commu_btn_red" >
        <span class="commu_btn_manage" @click="manage=true" v-if="manage==false">관리자 시점</span>
        <span class="commu_btn_manage" @click="manage=false" v-if="manage==true">관리</span>
      </div>
      <!-- 글쓰기 버튼 -->
      <div class="commu_btn_blue" v-if="manage==false">
        <span class="commu_btn_write" @click="goToPosting">글쓰기</span>
      </div>
    </div>
    <!-- 상단 버튼 프레임 -->

    <!-- 글 목록 프레임 -->
    <section class="commu_section">
      <div class="commu_post" v-for="(p, i) in postList" :key="i" @click="goToPostView(p.POST_CODE)"> <!-- (반복) 글 DB 데이터 반복문 -->
        
        <!-- 글 썸네일 -->
        <img class="commu_thumb" :src="p.titleImg" @error="'error'"/>
        
        <!-- 글 정보 및 제목, 검은 블록 -->
        <div class="commu_back">
          <!-- 글제목 -->
          <div class="commu_back_title">{{ p.POST_TITLE }}</div>

          <!-- (조건) 리뷰 게시판일 경우 별점 -->
          <span v-if="$store.state.communityService=='R'" class="commu_str">★★★★★
            <span class="commu_str_draw" :style="{width : p.str*20 + '%'}">★★★★★</span>
          </span>

          <!-- 글정보 -->
          <div class="commu_back_info">
            {{ p.USER_NICKNAME }} | 생성일 | {{ p.POST_FAVORITE }} | 댓글 수
          </div>
        </div>
        <!-- 글 정보 및 제목, 검은 블록 -->
      </div>
      <!-- (반복) 글 DB 데이터 반복문 end -->
    </section>
    <!-- 글 목록 프레임 end -->
  </div>
</template>

<script>
import axios from '../../../axios'
export default {
  created() {
    this.getPostList('F');
  },
  watch : {
    communityService(cng) {
      this.getPostList(cng);
    }
  },
  data() {
    return {
      manage : false,

      postList : [],
    };
  },
  methods : {
    getPostList(selectService) {
      axios.post('/api/community/getPostList', {select : selectService})
      .then((result)=>{
        if(result.data == "err") {
          this.$store.commit('gModalOn',{size : "normal", msg : "해당 게시판 포스트 불러오기 실패"});
        } else {
          this.postList = result.data;
          console.log(this.postList);
        }
      })
    },
    goToPostView(postCode) {
      var boardCode;
      switch(this.$store.state.communityService) {
        case 'F' :
          boardCode = 1;
          break;
        case 'W' :
          boardCode = 2;
          break;
        case 'T' :
          boardCode = 3;
          break;
        case 'R' :
          boardCode = 4;
          break;       
      }
      this.$router.push(`/community/${boardCode}/${postCode}`);
    }
  },
  props : {
    communityService : String
  }
};
</script>

<style>
.team_box {
  height: 80vh;
}
.commu_btn_area{
  display:flex;
  justify-content: flex-end;
}
.commu_btn_red{
  top:20px;
  position:relative;
  cursor: pointer;
  font-size: 0.9em;
  width: 100px;
  height: 30px;
  background: #ff4c4c;
  border-radius: 14px;
  display: table;
  margin-left: 20px;
}
.commu_btn_blue{
  top:20px;
  position:relative;
  cursor: pointer;
  font-size: 0.9em;
  margin-left: 20px;
  width: 100px;
  height: 30px;
  background: #2872f9;
  border-radius: 14px;
  display:table;
}
.commu_btn_manage{
  display: table-cell;
  vertical-align:middle;
  text-align:center;
  color:white;
}
.commu_btn_write{
  display:table-cell;
  vertical-align: middle;
  text-align: center;
  color:white;
}
.commu_section {
  position:relative;
  margin-top: 30px;
  overflow: scroll;
  width: 100%;
  height: calc(100vh - 157px);
  -ms-overflow-style:none;
}
.commu_post {
  position: relative;
  width: 100%;
  height: 120px;
  transition: 0.2s all ease;
}
.commu_post:hover {
  opacity: 0.7;
}
.commu_thumb {
  width: 80px;
  height: 80px;
  cursor: pointer;
  position: absolute;
  top: 10px;
  left: 21px;
  z-index: 11;
}
.commu_back {
  cursor: pointer;
  display: block;
  position: absolute;
  width: calc(100% - 50px);
  left: 30px;
  height: 80px;
  background-color: #262626;
  border-radius: 12px;
  color: white;
  top: 30px;
}
.commu_back_title {
  position: absolute;
  font-size: 20px;
  top: 10px;
  float: left;
  left: 80px;
}
.commu_str {
  position:absolute;
  float:right;
  right: 10px;
  top:10px;
  font-size: 1.5em;
}
.commu_back_info {
  position: absolute;
  float: right;
  font-size: 17px;
  top: 50px;
  right: 10px;
}
.commu_str_draw {
  position: absolute;
  color: #2872f9;
  left: 0;
  overflow: hidden;
  font-size : 1.0em;
  -webkit-text-stroke-width:1.2px;
  -webkit-text-stork-color:#2872f9
  }
</style>