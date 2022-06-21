<template>
<div class="tests">
    <div class="header">
      <div class="service">
        <img class="icon" src="../../assets/icons/white/home.png" alt="logo" />
        <span class="title">마이페이지</span>
        <span class="my_topic">작성 리뷰 관리</span>
      </div>
    </div>
  <div class="review_section">
    <div class="work_list" v-for="(r, i) in reviewList" :key="i">
      <div class="img_box"></div>
      <!-- <img class="list_img" :src="`${review.POST_COVER}`"/> -->
      <div class="work_list_con">
        <div class="list_span">
          <span class="list_title">{{r.POST_TITLE}}</span>
          <!-- <span class="list_team">{{r.NOVE_TITLE}}</span> -->
          <span class="list_content" v-html="r.POST_CONTENT"></span>
        </div>
      </div>
      <!-- <div class="review_edit">리뷰수정</div> -->
      <!-- <button class="review_edit" @click="reviewBtn(i)">리뷰수정</button> -->
    </div>
  </div>
</div>
</template>

<script>
import axios from '../../axios';
export default {
  created() {
    this.getReviewList()
  },
  data(){
    return{
      reviewList : [],
    };
  },
  methods: {
    getReviewList() {
      axios.get('/api/mypage/getReviewList')
      .then((result)=>{
        if(result.data=="err"){
          this.$store.commit('gModalOn', {size : "normal", msg : "리뷰 데이터 불러오기 실패"});
        } else {
          this.reviewList = result.data;
        }
      })
    },
  }
}
</script>

<style>
.review_section{
  margin: 0 auto;
  width: 95%;
  height: 80%;
  position: relative;
  top: 5%;
  font-size: 1.3em;
  color: white;
  overflow-y: scroll;
  -ms-overflow-style: none;
}
.review_section .review_list{
  width: 100%;
}
.review_edit{
  width: 130px;
  height: 40px;
  position: absolute;
  top: 105px;
  right: 10px;
  background: #2872F9;
  border-radius: 20px;
  color: white;
  text-align: center;
  line-height: 42px;
  cursor: pointer;
}
.review_edit:hover{
  background: #0084ff;
}
</style>