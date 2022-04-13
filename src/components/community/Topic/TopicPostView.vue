<template>
  <div>
    <div class="postview_section">
      <div class="postview_title"><div class="postview"><span>{{topicObject.title}}</span></div></div>
      <div class="postview_frame">
        <div class="postview_content"><span v-html="topicObject.content"></span></div>
        <div class="content_vote">
          <div class="vote_btn_ok"><span>추천</span></div>
          <div class="vote_btn_no"><span>비추천</span></div>
        </div>
      </div>
      <div class="postview_comment"><span>Comment({{topicObject.coment}})</span></div>
      <div class="postview_comment_area">
          <div class="postview_comment_img"><img src="" alt=""></div>
          <div class="postview_comment_content"></div>
      </div>
    </div>
    <div class="postview_btn_area">
      <div class="postview_cancle_btn" @click="$emit('second')">목록으로</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CommunityPostView",
  data() {
    return {}
  },
  components: {
  },
  methods : {
  },
  props:{
    topicObject : Object,

  }
};
</script>

<style>
.postview_section {
  margin: 0 auto;
  padding: 10px 15px;
  width: 800px;
  background-color: #2c2c2c;
  border-radius: 20px;
  position: relative;
  top: 50px;
}
.postview_title {
  color:white;
  margin: 5px auto;
  width: 100%;
  background-color: #5e5e5e;
  border-radius: 20px;
  padding: 0px 10px;
  display: table;
  
}
.postview_title span {
  display: table-cell; 
  vertical-align:middle; 
  height: 50px; 
}
.postview {
  position: relative;
  left: 5px;
  width: 99%;
  height: 100%;
  border: none;
  background: none;
}
.postview_frame {
  color:white;
  margin: 5px auto;
  width: 100%;
  background-color: #5e5e5e;
  border-radius: 20px;
}
.postview_content {
  width: 100%;
  min-height: 100px;
  background-color: #5e5e5e;
  border-radius: 20px;
  padding: 10px 10px;
  overflow-y:scroll;
}
.postview_content span {
  position: relative;
  left: 5px;
}
.content_vote {
    display:flex;
    justify-content: center;
    position:relative;
    bottom: 20px;
    margin-top: 10px;
    width: 100%;
    height: 50px;
}
.vote_btn_ok {
  display: table;
  width : 100px;
  height: 100%;
  margin: 0 10px;
  background-color: #2872f9;
  border-radius: 20px;
  color:white;
  font-size: 1.5em;
  cursor:pointer;
}
.vote_btn_ok span{
  display: table-cell; 
  vertical-align:middle; 
  text-align: center;
}
.vote_btn_no {
  display: table;
  width : 100px;
  height: 100%;
  margin: 0 10px;
  background-color: red;
  border-radius: 20px;
  color:white;
  font-size: 1.5em;
  cursor:pointer;
}
.vote_btn_no span{
  display: table-cell; 
  vertical-align:middle; 
  text-align: center;
}
.postview_btn_area {
  display: flex;
  position: relative;
  top: 50px;
  width: 100%;
  text-align: center;
  color: white;
}
.postview_cancle_btn {
  padding: 5px 10px;
  margin-top: 1%;
  margin-bottom: 1%;
  background-color: #2872f9;
  width: 100px;
  border-radius: 14px;
  cursor:pointer;
}
.postview_comment {
  color:white;
  font-size: 1.2em;
}
.postview_comment_area{
  background-color: #5e5e5e;
  display:flex;
}
.postview_comment_img{
  background-color: pink;
}
</style>