<template>
<div class="tests">
    <div class="header">
      <div class="service">
        <img class="icon" src="../../assets/icons/white/home.png" alt="logo" />
        <span class="my_title">마이페이지</span>
        <span class="my_topic">작성 리뷰 관리</span>
      </div>
    </div>
  <div class="review_section">
    <div class="work_list" v-for="(review, i) in reviews" :key="i">
      <div class="img_box"></div>
      <img class="list_img" :src="`${review.img}`"/>
      <div class="work_list_con">
          <div class="list_span">
              <span class="list_title">{{review.title}}</span>
              <span class="list_team">{{review.producer}} / {{review.team}}</span>
              <span class="list_content">{{review.content}}</span>
          </div>
      </div>
      <button id="review_edit">리뷰수정</button>
    </div>
  </div>
</div>
</template>

<script>
import review from '@/assets/review.js'

export default {
  data(){
    return{
      reviews :review,
    };
  },
}
</script>

<style>
.review_section{
  margin: 0 auto;
  width: 700px;
  position: relative;
  font-size: 1.3em;
  color: white;
}
.review_section .review_list{
  width: 100%;
}
#review_edit{
  width: 130px;
  height: 40px;
  position: relative;
  top: 105px;
  right: 10px;
  background: #2872F9;
  border-radius: 20px;
  color: white;
}
</style>