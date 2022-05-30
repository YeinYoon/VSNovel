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
    <div class="work_list" v-for="(review, i) in reviews" :key="i">
      <div class="img_box"></div>
      <img class="list_img" :src="`${review.REVIEW_IMG}`"/>
      <div class="work_list_con">
          <div class="list_span">
              <span class="list_title">{{review.REVIEW_TITLE}}</span>
              <span class="list_team">{{review.producer}} / {{review.NOVE_TEAMNAME}}</span>
              <span class="list_content">{{review.REVIEW_COMMENT}}</span>
          </div>
      </div>
      <!-- <div class="review_edit">리뷰수정</div> -->
      <button class="review_edit" @click="reviewBtn()">리뷰수정</button>
    </div>
  </div>
</div>
</template>

<script>
import axios from '../../axios';

export default {
  created() {
    this.getReview()
  },
  data(){
    return{
      reviews :[],

    };
  },
  methods: {
    getReview() {
      axios.get('/api/mypage/getreview')
      .then((result)=>{
        if(result.data=="err"){
          console.log("리뷰 데이터 불러오기 실패");
        } else {
          this.reviews = result.data;
          console.log(this.reviews)
        }
      })
    }
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
  position: relative;
  top: 105px;
  right: 10px;
  background: #2872F9;
  border-radius: 20px;
  color: white;
  text-align: center;
  line-height: 42px;
  cursor: pointer;
}
</style>