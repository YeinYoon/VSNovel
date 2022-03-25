<template>
<div class="tests">
    <div class="header">
      <div class="service">
        <img class="icon" src="../../assets/icons/white/home.png" alt="logo" />
        <span class="my_title">마이페이지</span>
        <span class="my_topic">내가 쓴 게시글</span>
      </div>
    </div>
  <section>
    <div class="mypage_post-box">
    <table class="mypage_post-table">
      <div class="text_container">
        <thead>
          <tr>
            <td>작성위치</td>
            <td>제목</td>
            <td>추천수</td>
            <td>댓글수</td>
            <td>조회수</td>
          </tr>
        </thead>
        <hr align="center" style="border: solid 2px #959595; width: 99%;">
        <tr style="transform: translateY(-10%);" v-for="(post,i) in post" :key="i">
          <td>{{post.position}}</td>
          <td>{{post.title}}</td>
          <td>{{post.prefer}}</td>
          <td>{{post.comment}}</td>
          <td>{{post.look}}</td>
        </tr>
      </div>
    </table>
  </div>
  </section>
</div>
</template>

<script>
import post from '@/assets/post.js'

export default {
  data(){
    return{
      post:post
    };
  },
}
</script>

<style>
.mypage_post-table{
  display: inline-block;
  left: 450px;
  font-size: 25px;
  color: white;
  border-spacing: 20px;
  overflow: auto;
  text-overflow: ellipsis;
}
.mypage_post-box{
  display: flex;
  transform: translate(3%,25%);
  border:1px;
  width: 1060px;
  height: 600px;
  background-color: #484848;
  border-radius: 20px;
}
</style>