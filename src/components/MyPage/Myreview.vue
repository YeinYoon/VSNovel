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
    <div class="review_work_list" v-for="(r, i) in reviewList" :key="i">
      <div class="review_work_list_back">
          <img class="review_img_box" src="@/assets/imgs/noimage.png"/>
        <!-- <img class="review_list_img" :src="`${review.POST_COVER}`"/> -->
        <div class="review_work_list_con">
            <span class="review_list_title">{{r.POST_TITLE}}</span>
            <!-- <span class="list_team">{{r.NOVE_TITLE}}</span> -->
            <div class="review_list_info">
              <p class="review_list_content" v-html="r.POST_CONTENT"></p>
            </div>

        </div>
        <!-- <div class="review_edit">리뷰수정</div> -->
        <!-- <button class="review_edit" @click="reviewBtn(i)">리뷰수정</button> -->
      </div>
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
  width: 100%;
  height: 80%;
  position: relative;
  top: 5%;
  font-size: 1.3em;
  color: white;
  overflow: scroll;
  -ms-overflow-style: none;
  margin-top: 30px;
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

/* 석버미 css */

.review_work_list {
  /* width: calc(50%); */
  /* background-color: #2a2a2a; */
  position: relative;
  width: 100%;
  height: 120px;
  transition: 0.2s all ease;
}

.review_work_list_back {
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

.review_work_list_con {
  color: white;
  width: 80%;
  height: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-all;
  white-space: nowrap;
}
.review_img_box {
  width: 80px;
  height: 80px;
  cursor: pointer;
  position: absolute;
  top: -10px;
  left: -21px;
  z-index: 11;
  object-fit: cover;

}
.review_img_box img{
  width: 100%;
}
.review_list_title {
  font-size: 1.1em;
  padding-top: 5px;
  position: relative;
  left: 70px;
}
.review_list_team {
  font-size: 0.9em;
}

.review_list_info {
  position: relative;
  left: 70px;
  width: calc(100% - 10px);
  height: 100%;
  white-space: nowrap;
  word-break:break-all;
  text-overflow: ellipsis;
  overflow: hidden;
}

.review_list_content {
}
.review_list_content p {
}
</style>