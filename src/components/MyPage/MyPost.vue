<template>
  <div class="tests">
    <div class="header">
      <div class="service">
        <img class="icon" src="../../assets/icons/white/home.png" alt="logo" />
        <span class="title">마이페이지</span>
        <span class="my_topic">내가 쓴 게시글</span>
      </div>
      <!-- <div class="PostTabs">
        <button>일반</button>
        <button>빌리지</button>
      </div> -->
    </div>
    <div class="post_section">
      <div class="post_line">
        <div class="post_place">게시판</div>
        <div class="post_title">제목</div>
        <div class="post_estadate">작성일</div>
        <div class="post_clicks">조회수</div>
      </div>
      <hr class="lines" />
      <div class="post_line" v-for="(p, i) in postData" :key="i" @click="rowBtn(i)">
        <div class="post_place" v-if="p.BOAR_CODE == 1">자유</div>
        <div class="post_place" v-if="p.BOAR_CODE == 2">작가</div>
        <div class="post_place" v-if="p.BOAR_CODE == 3">팀원모집</div>
        <div class="post_place" v-if="p.BOAR_CODE == 4">리뷰 & 추천</div>
        <div class="post_place" v-if="p.BOAR_CODE == 5">업데이트</div>
        <div class="post_place" v-if="p.BOAR_CODE == 6">이벤트</div>
        <div class="post_place" v-if="p.BOAR_CODE == 7">정책</div>
        <div class="post_title" style="cursor:pointer">{{ p.POST_TITLE }}</div>
        <div class="post_estadate">{{p.POST_ESTADATE.substring(0, 10)}}</div>
        <div class="post_clicks">{{ p.POST_VIEW }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  created() {
    this.getPostList()
  },
  data() {
    return {
      postData : []
    }
  }, 
  methods: {
    getPostList() {
      console.log("getPost")
      axios.get('/api/mypage/getPostList')
      .then((result) => {
        if(result.data == 'err') {
          this.$store.commit('gModalOn', {size : "normal", msg : "게시글 데이터 불러오기 실패"});
        } else {
          console.log(result.data);
          this.postData = result.data;
        }
      })
    },
    rowBtn(i) {
      // console.log(this.postList[i].BOAR_CODE.forEach(function(element) {
      //   console.log(element)
      // }))
      console.log(this.postData[i].BOAR_CODE)
      console.log(this.postData[i].POST_CODE)
      this.$router.push({
          name: 'Community',
          params: {
            POST_CODE: this.postData[i].POST_CODE
          }
          })
      // if(this.postList[i].BOAR_CODE == 1) {
      //   this.$router.push({
      //     name: "Community"
      //   });
      //   this.$store.commit('communityServiceCng', 'F');
      // }else if(this.postList[i].BOAR_CODE == 2) {
      //   this.$router.push({
      //     name: "Community"
      //   });
      //   this.$store.commit('communityServiceCng', 'W')
      // }else if(this.postList[i].BOAR_CODE == 3) {
      //   this.$router.push({
      //     name: "Community"
      //   });
      //   this.$store.commit('communityServiceCng', 'T')
      // }
      }
      // this.$router.push({
      //   name: "Community",
      //   params: { BOAR_CODE: this.postList[i].BOAR_CODE,
      //             POST_CODE: this.postList[i].POST_CODE,
      //             communityService: "F"
      //             },
      // }
      // );
      
    },
  }
</script>

<style>
.post_section {
  margin: 0 auto;
  padding: 5px;
  font-size: 1.3em;
  color: white;
  width: 95%;
  height: 80%;
  background-color: #484848;
  position: relative;
  top: 50px;
  border-radius: 20px;
  overflow-y: scroll;
  -ms-overflow-style: none;
  padding-top: 10px;
}
.post_line {
  text-align: center;
  display: flex;
  height: 30px;
  margin-bottom: 10px;
}
.post_clicks{
  width: 22%;
  font-size: 0.9em;
  overflow: hidden;
}
.post_place,
.post_clicks,
.post_estadate {
  font-size: 0.9em;
  width: 22%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.post_title {
  font-size: 0.9em;
  width: 50%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.PostTabs {
  position: absolute;
  top: 90px;
  left: calc(100% - 215px);
}

.PostTabs button {
  border-radius: 15px;
  padding: 9px 20px 9px 20px;
  margin: 2px;
  color: white;
  background: #2872f9;
  display: inline;
}
</style>