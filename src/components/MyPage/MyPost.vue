<template>
  <div class="tests">
    <div class="header">
      <div class="service">
        <img class="icon" src="../../assets/icons/white/home.png" alt="logo" />
        <span class="title">마이페이지</span>
        <span class="my_topic">내가 쓴 게시글</span>
      </div>
    </div>
    <div class="post_section">
      <div class="post_line">
        <div class="post_place">작성위치</div>
        <div class="post_title">제목</div>
        <div class="post_like">추천수</div>
        <div class="post_comment">댓글수</div>
        <div class="post_clicks">조회수</div>
      </div>
      <hr class="lines" />
      <div class="post_line" v-for="(post, i) in post" :key="i">
        <div class="post_place">{{ post.position }}</div>
        <div class="post_title">{{ post.title }}</div>
        <div class="post_like">{{ post.prefer }}</div>
        <div class="post_comment">{{ post.comment }}</div>
        <div class="post_clicks">{{ post.look }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import post from "@/assets/DataJs/post.js";

export default {
  data() {
    return {
      post: post,
    };
  },
};
</script>

<style>
.post_section {
  margin: 0 auto;
  padding: 5px;
  font-size: 1.3em;
  color: white;
  width: 800px;
  height: 80%;
  background-color: #484848;
  position: relative;
  top: 50px;
  overflow-y: scroll;
  -ms-overflow-style: none;
}
.post_section::-webkit-scrollbar {
  display: none;
}
.post_line {
  text-align: center;
  display: flex;
  height: 30px;
}
.post_place,
.post_like,
.post_comment,
.post_clicks {
  width: 15%;
}
.post_title {
  width: 40%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>