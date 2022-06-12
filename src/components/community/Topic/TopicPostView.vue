<template>
  <div>
    <!-- 내용을 입력해주세요 모달창 -->
    <div v-if="open==true"><alertmodal :openmodal="open" @closemodal="open = false" :alertcontent="alertcontent"/></div>

    <div class="postview_wrap">
      
      <!-- 까만배경:제목과 내용 댓글들을 감싸는 배경 -->
      <div class="postview_section">
        <!-- 제목을 나타내는 영역-->
        <div class="postview_title">
          <!-- 제목 -->
          <div class="postview"><span>{{topicObject.title}}</span></div>
          
          <div class="topic_postview_btn_info">
            <!-- 이미지 -->
            <div class="topic_postview_thumbimg"><img :src="thumbimg" @error="reimg"></div>
            <div>
              <!-- 작성일자 -->
              <div><span>작성일자 : {{topicObject.date}}</span></div>
              <div class="topic_postview_detail_info">
                <!-- 작성자 -->
                <div><span>{{topicObject.writer}}</span></div>
                <!-- 조회수, 댓글수, 추천수, 비추천수 -->
                <div class="topic_postview_detail_frame">
                  <div class="topic_postview_detail"><span>조회수</span></div>
                  <div class="topic_postview_detail"><span>댓글수 {{topicObject.coment}}</span></div>
                  <div class="topic_postview_detail"><span>추천수 {{topicObject.likes}}</span></div>
                  <div class="topic_postview_detail"><span>비추천수 {{topicObject.nolike}}</span></div>
                </div>
                
              </div>
            </div>

            <!-- 수정, 삭제 버튼 -->
            <div class="topic_postview_btn_area">
              <div class="topic_postview_btn_red" @click="postBtn({type:'retouch'})"><img src="@/assets/icons/white/editing.png"></div>
              <div class="topic_postview_btn_blue" @click="postBtn({type:'deletewrite'})"><img src="@/assets/icons/white/trash_white.png"></div>
            </div>
          </div>

        </div>
        
        <!-- 내용과 추천,비추천을 감싸는 프레임 -->
        <div class="postview_frame">
          <!-- 내용을 나타내는 영역 -->
          <div class="postview_content"><span v-html="topicObject.content"></span></div>
          <!-- 추천, 비추천 영역 -->
          <div class="content_vote">
            <div class="vote_btn_ok" @click="postBtn({type: 'likevote'})">
              <span>추천</span>
              <div>({{topicObject.likes}})</div>
            </div>
            <div class="vote_btn_no" @click="postBtn({type:'nolikevote'})">
              <span>비추천</span>
              <div>({{topicObject.nolike}})</div>
            </div>
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

        <!-- 댓글이 달리는 부분 -->
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
      thumbimg: this.topicObject.titleImg,
      open: false,
      alertcontent : '',
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
        }else if(step.type == 'retouch'){ //글 수정
          this.$emit('btnpostview', 'retouch');
        }else if(step.type == 'deletewrite'){
          this.$emit('btnpostview', 'deletewrite');
        }
      }else if(Object.keys(step).length == 2){ //step의 길이가 2일때, 댓글 작성 부분
        if(step.type == 'comentwrite'){
          if(step.content == ''){
            this.alertcontent = '댓글';
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
.topic_postview_btn_info{
  display:flex;
  margin:5px 5px;
}
.topic_postview_thumbimg{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 55px;
  height: 55px;
  border-radius: 15px;
  margin-right: 10px;
  background-color:#5e5e5e;
}
.topic_postview_thumbimg img{
  width: 50px;
  height: 50px;
  border-radius: 15px;
}
.topic_postview_btn_area{
  display:flex;
  position:absolute;
  float:right;
  right: 30px;
}
.topic_postview_btn_red, .topic_postview_btn_blue{
  /* top:40px; */
  display:flex;
  justify-content: center;
  align-items: center;
  position:relative;
  cursor: pointer;
  font-size: 0.9em;
  width: 50px;
  height: 28px;
  background: #2872f9;
  border-radius: 14px;
  /* display: table; */
  margin-left: 10px;
}
.topic_postview_btn_red img {
  position:relative;
    left:1.5px;
    width:35%; 
    object-fit: cover;
}
.topic_postview_btn_blue img {
  position:relative;
  top:0.5px;
  width:40%; 
  object-fit: cover;
}
.topic_postview_detail_info{
  display:flex;
}
.topic_postview_detail_frame{
  display:flex;
  position:absolute;
  float: right;
  right: 30px;
  margin-top: 10px;
}
.topic_postview_detail{
  padding: 3px 10px;
  background-color: #5e5e5e;
  border-radius: 20px;
  margin-left: 5px;
  
}
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
  background-color: #494949;
  border-radius: 20px;
  padding: 15px 10px;
  
}
.postview_title span {
  height: 50px; 
  margin: 0 auto;
}
.postview {
  position: relative;
  width: 99%;
  height: 100%;
  border: none;
  background: none;
  margin: 0px 10px;
}

.postview_frame {
  color:white;
  margin: 5px auto;
  width: 100%;
  background-color: #494949;
  border-radius: 20px;
}
.postview_content {
  min-height: 100px;
  background-color: #494949;
  border-radius: 20px;
  padding: 10px 15px;
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
    /* height: 50px; */
}
.vote_btn_ok {
  display: inline-block;
  width : 100px;
  /* line-height: 50px; */
  text-align: center;
  margin: 0 10px;
  background-color: #2872f9;
  border-radius: 20px;
  color:white;
  font-size: 1.2em;
  cursor:pointer;
}
.vote_btn_ok:hover {
  background-color:#0084ff;
}
.vote_btn_no {
  display: inline-block;
  width : 100px;
  /* line-height: 50px; */
  text-align: center;
  /* height: 100%; */
  margin: 0 10px;
  background-color: #ff4c4c;
  border-radius: 20px;
  color:white;
  font-size: 1.2em;
  cursor:pointer;
}
.vote_btn_no:hover {
  background-color:#f83636;
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
  background-color:#494949;
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
  background-color:#494949;
  padding: 5px 10px;
  color: white;
}
</style>