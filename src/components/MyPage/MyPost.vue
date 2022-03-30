<template>
  <div class="tests">
    <div class="header">
      <div class="service">
        <img class="icon" src="../../assets/icons/white/home.png" alt="logo" />
        <span class="title">마이페이지</span>
        <span class="topic">내가 쓴 게시글</span>
      </div>
    </div>
    <div class="post_section">
      <div class="post">
        <div class="post_place">작성위치</div>
        <div class="post_title">제목</div>
        <div class="post_like">추천수</div>
        <div class="post_comment">댓글수</div>
        <div class="post_clicks">조회수</div>
      </div>
      <hr class="lines" />
      <div class="post" v-for="(post, i) in post" :key="i">
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
import post from "@/assets/post.js";

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
  border-radius: 20px;
  font-size: 1.3em;
  color: white;
  width: 700px;
  height: 70%;
  background-color: #484848;
  position: relative;
  top: 50px;
  overflow-y: scroll;
}
.post_section::-webkit-scrollbar {
  display: none;
}
.post {
  text-align: center;
  display: flex;
}
.post_place,
.post_like,
.post_comment,
.post_clicks {
  width: 100px;
}
.post_title {
  width: 300px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>