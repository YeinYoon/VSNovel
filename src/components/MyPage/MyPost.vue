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
        <div class="post_place">빌리지 이름</div>
        <div class="post_title">제목</div>
        <div class="post_like">추천수</div>
        <div class="post_comment">댓글수</div>
        <div class="post_clicks">조회수</div>
      </div>
      <hr class="lines" />
      <div class="post_line" v-for="(post, i) in postData" :key="i">
        <div class="post_place">{{ post.POST_CODE }}</div>
        <div class="post_title" style="cursor:pointer">{{ post.POST_TITLE }}</div>
        <div class="post_like">{{ post.POST_VOTE }}</div>
        <div class="post_comment">{{ post.COMM_NUM }}</div>
        <div class="post_clicks">{{ post.POST_VIEW }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  created() {
    this.getPost()
  },
  data() {
    return {
      postData : []
    }
  }, 
  methods: {
    getPost() {
      console.log("getPost")
      axios.get('/api/mypage/getpost')
      .then((result) => {
        if(result.data == 'err') {
          console.log('load fail')
        } else {
          console.log(result)
          this.postData = result.rows
          // console.log(this.postData)
        }
      })
    }
  }
};
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
}
.post_line {
  text-align: center;
  display: flex;
  height: 30px;
  margin-bottom: 10px;
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