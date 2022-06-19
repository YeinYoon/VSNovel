<template>
  <div>
    <!-- 내용을 입력해주세요 모달창 -->
    <div v-if="open==true"><alertmodal :openmodal="open" @closemodal="open = false" :alertcontent="alertcontent"/></div>

    <div class="postview_wrap">
      <div class="postview_section">
        <div class="postview_title">

          <!-- 제목 -->
          <div class="postview">
            <span class="postview_title_span">{{topicObject.title}}</span>
          </div>
          
          <div class="topic_postview_btn_info">
            
            <div class="topic_postview_thumbimg">
              <!-- 작성자 프로필 이미지 -->
              <img :src="thumbimg" @error="reimg">
            </div>

            <div>
              
              <div>
                <!-- 작성일자 -->
                <span>작성일자 : {{topicObject.date}}</span>
              </div>
              
              <div class="topic_postview_detail_info">
                
                <div>
                  <!-- 작성자 -->
                  <span>{{topicObject.writer}}</span>
                </div>

                <!-- 조회수, 댓글수, 추천수, 비추천수 -->
                <div class="topic_postview_detail_frame">
                  <div class="topic_postview_detail"><span>조회수</span></div>
                  <div class="topic_postview_detail"><span>댓글수 {{topicObject.coment}}</span></div>
                  <div class="topic_postview_detail"><span>추천수 {{topicObject.likes}}</span></div>
                  <div class="topic_postview_detail"><span>비추천수 {{topicObject.nolike}}</span></div>
                </div>

                <!-- 수정, 삭제 버튼 -->
                <div class="topic_postview_btn_area">
                  <div class="topic_postview_btn_red" @click="postBtn({type:'retouch'})"><img src="@/assets/icons/white/editing.png"></div>
                  <div class="topic_postview_btn_blue" @click="postBtn({type:'deletewrite'})"><img src="@/assets/icons/white/trash_white.png"></div>
                </div>
              </div>
            </div>
            

          </div>

        </div>
        <!-- 본문조회 상단부 끝 -->

        <!-- 내용영역 -->
        <div class="postview_frame">

          <!-- 본문 -->
          <div class="postview_content">
            <span v-html="topicObject.content"></span>
          </div>

          <!-- 추천, 비추천 -->
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

        <!-- 댓글 갯수 Comment() -->
        <div class="postview_comment">
          <span>Comment({{topicObject.coment}})</span>
        </div>

        <!-- 댓글 입력 -->
        <div class="postview_comment_area">
            <textarea v-model="writecoment"></textarea>
            <div class="postview_comment_register"><span @click="postBtn({type:'comentwrite', content: writecoment})">작성하기</span></div>
        </div>

        <!-- 댓글 목록 -->
        <div class="postview_view_area" v-for="(a,index) in topicObject.comentcontents" :key="index">
            <div><img class="postview_img" src="" @error="reimg"></div>
            <div class="postview_view_content"><span>{{topicObject.comentcontents[index]}}</span></div>
        </div>
      </div>

      <!-- 목록으로 버튼 -->
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
</style>