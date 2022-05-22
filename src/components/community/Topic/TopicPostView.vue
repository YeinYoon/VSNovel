<template>
  <div>
    <div v-if="open==true"><alertmodal :openmodal="open" @closemodal="open = false"/></div>
    <div class="postview_wrap">
      <!-- 까만배경:제목과 내용 댓글들을 감싸는 배경 -->
      <div class="postview_section">

        <!-- 제목을 나타내는 영역-->
        <div class="postview_title"><div class="postview"><span>{{topicObject.title}}</span></div></div>
        
        <!-- 내용과 추천,비추천을 감싸는 프레임 -->
        <div class="postview_frame">
          <!-- 내용을 나타내는 영역 -->
          <div class="postview_content"><span v-html="topicObject.content"></span></div>
          <!-- 추천, 비추천 영역 -->
          <div class="content_vote">
            <div class="vote_btn_ok" @click="postBtn({type: 'likevote'})"><span>추천</span></div>
            <div class="vote_btn_no" @click="postBtn({type:'nolikevote'})"><span>비추천</span></div>
          </div>
        </div>

        <!-- 댓글이 몇 개인지 알려주는 영역 -->
        <div class="postview_comment">
          <span>Comment({{topicObject.coment}})</span>
        </div>
        <!-- 댓글을 적는 부분 -->
        <div class="postview_comment_area">
            <textarea v-model="writecoment"></textarea>
            <div class="postview_comment_register"><span @click="postBtn({type:'comentwrite', content: writecoment})">작성하기</span></div>
        </div>
    
        <!-- 댓글이 달리는 부분 1 -->
        <!-- <div class="postview_view_area" v-for="(a) in Number(topicObject.coment)" :key="a">
            <div><img class="postview_img" src="" @error="reimg"></div>
            <div class="postview_view_content"><span></span></div>
        </div> -->

        <!-- 댓글이 달리는 부분 2 -->
        <div class="postview_view_area" v-for="(a,index) in topicObject.comentcontents" :key="index">
            <div><img class="postview_img" src="" @error="reimg"></div>
            <div class="postview_view_content"><span>{{topicObject.comentcontents[index]}}</span></div>
        </div>
      </div>

      <!-- 목록으로 나타내는 부분 -->
      <div class="postview_btn_area">
        <div class="postview_btn_list" @click="postBtn({type:'second'})">
          <span>목록으로</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import img from "@/assets/imgs/noprofile.png";
import alertmodal from "../AlertModal";

export default {
  name: "CommunityPostView",
  data() {
    return {
      open: false,
      writecoment: '',
      writecoments: [],
      novotecount : 0
    }
  },
  components: {
    alertmodal
  },
  methods : {
    postBtn(step={}){
      //step의 길이가 1일때 Topicwrite로 이동
      if(Object.keys(step).length == 1) {
        if(step.type == 'second'){
          this.$emit('btnpostview', 'second');
        }else if(step.type == 'likevote'){ //추천수 올리기
          this.$emit('btnpostview', 'likevote' );
        }else if(step.type == 'nolikevote'){ //비추천 올리기
          this.$emit('btnpostview', 'nolikevote');
        }
      }else if(Object.keys(step).length == 2){ //step의 길이가 2일때, 댓글 작성 부분
        if(step.type == 'comentwrite'){
          if(step.content == ''){
            this.open = true;
            this.writecoment = '';
          }else {
            this.writecoments.push(this.writecoment);
            const writebtn = {type: 'reloaddata', content : this.writecoments};
            this.$emit('btnpostview', writebtn);
            this.writecoment = '';
          }
        }
        
      }
    },
    // comentwrite(writecoment){
    //   if(writecoment == ''){
    //     this.open = true;
    //     this.writecoment = '';
    //   }else {
    //     this.writecoments.push(this.writecoment);
    //     // this.commentcount += 1;
    //     this.$emit('reloaddata',this.writecoments);
    //     this.writecoment = '';
    //   }
    //   // console.log(this.topicObject);
    //   // console.log(this.writecoments);
    //   //console.log(this.writecoment);
    // },

    //이미지가 나타나지 않을 때
    reimg(e){
      e.target.src=img
    },
  },
  props:{
    topicObject : Object,
  },
};
</script>

<style>
.postview_wrap {
  margin: 0 auto;
  width: 95%;
}
.postview_section {
  padding: 10px 15px;
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
  margin: 0 auto;
}
.postview {
  position: relative;
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
  min-height: 100px;
  background-color: #5e5e5e;
  border-radius: 20px;
  padding: 10px 10px;
  overflow-y:scroll;
  word-wrap: break-word;
  
}
.postview_content span {
  margin: 0 auto;
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
.vote_btn_ok:hover {
  opacity: 0.7;
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
.vote_btn_no:hover {
  opacity: 0.7;
}
.postview_btn_area {
  position: relative;
  top: 50px;
  height: 50px;
  width: 100px;
  display: table-cell;
  vertical-align: middle;
  color: white;
}
.postview_btn_list{
  text-align: center;
  padding: 5px 10px;
  background-color: #2872f9;
  border-radius: 14px;
  cursor:pointer;
}
.postview_comment {
  color:white;
  font-size: 1.2em;
}
.postview_comment_area textarea {
  width: 100%;
  border-radius: 14px;
  font-size: 1.0em;
  background-color:#5e5e5e;
  color:white;
  border: none;
  outline: none;
  padding: 5px 10px;
  resize: none;
}
.postview_comment_register {
  justify-content: flex-end;
  display:flex;
  position:relative;
  color: white;
  text-align: center;
  margin: 3px auto;
}
.postview_comment_register span {
  padding: 5px 10px;
  background-color: #2872f9;
  border-radius: 14px;
  width: 100px;
  cursor:pointer;
}
.postview_view_area{
  display:flex;
  margin-top: 10px;
  margin-bottom : 5px;
}
.postview_img{
  width: 50px;
  height: 50px;
  border-radius: 15px;
  margin-right: 10px;
}
.postview_view_content {
  width: 100%;
  border-radius: 14px;
  font-size: 1.0em;
  background-color:#5e5e5e;
  padding: 5px 10px;
  color: white;
}
</style>