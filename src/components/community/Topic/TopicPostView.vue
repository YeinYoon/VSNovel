<template>
  <div>
    <div class="postview_section">
      <div class="postview_title"><div class="postview"><span>{{topicObject.title}}</span></div></div>
      <div class="postview_frame">
        <div class="postview_content" id="addpostdata"><span v-html="topicObject.content"></span></div>
        <div class="content_vote">
          <div><span class="vote_btn_ok">추천</span></div>
          <div><span class="vote_btn_no">비추천</span></div>
        </div>
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
  /* height: 50px;  px로 주면 안된다?*/
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
  margin: 0 auto;
  width: 100%;
  background-color: #5e5e5e;
  border-radius: 20px;
  padding: 0 10px;
}
.postview_content {
  width: 100%;
  min-height: 100px;
  background-color: #5e5e5e;
  border-radius: 20px;
  padding: 10px 10px;
  overflow-y:scroll;
}
.content_vote {
    display:flex;
    justify-content: center;
    bottom: 20px;
    margin-top: 50px;
    position: relative;
    width: 100%;
    height: 50px;
}
.vote_btn_ok {
  padding: 20px 35px;
  margin: 0 10px;
  background-color: #2872f9;
  border-radius: 20px;
  color:white;
  font-size: 1.5em;
}
.vote_btn_no {
  padding: 20px 30px;
  margin: 0 10px;
  background-color: red;
  border-radius: 20px;
  color:white;
  font-size: 1.5em;
}
.postview_btn_area {
  position: relative;
  top: 70px;
  width: 100%;
  text-align: center;
  color: white;
}
.postview_cancle_btn {
  padding: 5px 10px;
  margin: 0 10px;
  background-color: #2872f9;
  width: 100px;
  border-radius: 14px;
  cursor:pointer;
}
</style>