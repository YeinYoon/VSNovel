<template>
  <div>
    <!-- 내용을 입력해주세요 모달창 -->
    <div v-if="open==true"><alertmodal :openmodal="open" @closemodal="open = false" :alertcontent="alertcontent"/></div>
    
    <div class="commu_write_section">

      <!-- 리뷰게시판 -->
      <div class="commu_review_frame" v-if='step=="리뷰 & 추천"'>
        <div class="commu_novel_choice"><span>작품선택</span></div>
        <div class="commu_review_title" v-if="update == false"><input type="text" v-model="writetitle"/></div>
        <div class="commu_review_title" v-if='step=="리뷰 & 추천" && update == true'><input type="text" :value="`${topicObject.title}`" id="updatetitle"/></div>

        <!-- 리뷰 수정 상단부 (제목, 별점) -->
        <div class="commu_str_back_update" v-if='update == true && this.step == "리뷰 & 추천"'>
          <span class="str_first">★★★★★
            <span :style="str_draw">★★★★★</span>
            <input type="range" class="str_range" @input="draw(value)" v-model="value" step="1" min="0" max="10">
          </span>
        </div>

        <!-- 리뷰 작성 상단부 -->
        <div class="commu_str_back" v-else-if='this.step == "리뷰 & 추천"' @click="stargrade()" id="starBack">
          <span class="commu_str_grade" v-if="strOpen==false">별점 매기기</span>
          <span class="str_first" v-if="strOpen==true">★★★★★
            <span :style="str_draw">★★★★★</span>
            <input type="range" class="str_range" @input="draw(value)" v-model="value" step="1" min="0" max="10">
          </span>
        </div>
      </div>

      <!-- 글쓰기 자유/작가/팀원모집 상단부 (제목) -->
      <div class="commu_write_title" v-if="update==false && step!='리뷰 & 추천'">
        <input type="text" v-model="writetitle"/>
      </div>

      <!-- 수정 자유/작가/팀원모집 상단부 (제목) -->
      <div class="commu_write_title" v-if="update==true && step!='리뷰 & 추천'">
        <input type="text" :value="`${topicObject.title}`" id="updatetitle"/>
      </div>

      <!-- 내용 입력창 -->
      <div class="commu_write_content">
        <Editor @registerdata="writecontent = $event" :topicObject="topicObject" :update="update"/>
      </div>
    </div>
    <!-- 게시물 폼 끝 -->

    <!-- 게시물 폼 글쓰기 및 수정버튼 -->
    <div class="write_btn_area">
      <div class="write_btn" @click="registerpost">
        <span v-if="update==false">글쓰기</span>
        <span v-if="update==true">수정</span>
      </div>
      <div class="write_cancle_btn" @click="$emit('add','add')"><span>취소</span></div>
    </div>
  
  </div>
</template>

<script>
import Editor from './Editor'
import alertmodal from "../AlertModal";
export default {
  name: "TopicWrite",
  mounted(){
    if(this.step == "리뷰 & 추천" && this.update == true){
      this.str_draw.width = this.valueUp*10 + '%';
    }
    console.log(this.topicObject);
  },
  watch: {
    value(val) {
      this.count = val * 0.5;
    }
  },
  data() {
    return {
      open:false,
      strOpen: false,
      alertcontent : '',
      writecontent : '',
      writetitle: '',
      writedate:'',
      datedata:'',
      content:{
        post_title:'',
        writer : '',
        post_content : '',
        titleImg : '',
        date : '',
        likes    : 0,
        coment  : 0,
      },
      str_draw: {
        position: 'absolute',
        color: '#2872f9',
        left: 0,
        width: 0,
        overflow: 'hidden',
        'font-size' : '1.8vw',
        '-webkit-text-stroke-width':'1.2px',
        '-webkit-text-stork-color':'#2872f9'
      },
      count: 0, 
      value : 1,
      valueUp : (this.topicObject.str / 0.5 )
    }
  },
  methods : {
    registerpost(){
      //내용을 입력해주세요 모달창 
      if(this.writetitle == '' && (this.writecontent == '' || this.writecontent == null)&& this.update == false){
        this.alertcontent = '제목과 내용'
        this.open = true;
      }else if(this.writetitle == '' && this.update == false){
        this.alertcontent = '제목'
        this.open = true;
      }else if((this.writecontent == '' || this.writecontent == null) && this.update == false){
        this.alertcontent = '내용'
        this.open = true;
      }else if(this.strOpen == false && this.step=='리뷰 & 추천' && this.update == false){
        this.alertcontent = '별점'
        this.open = true;
      }
      else {
        //TopicCommu로 이동
        this.$emit('add','add');

        //제목과 내용 가지고 와서 content객체에 넣어준다
        //제목 가져오기
        if(this.update == false){
          this.content.title = this.writetitle;
        }else {
          this.content.title = document.getElementById('updatetitle').value;
        }

        //내용 or 수정한 내용 가져오기
        this.content.content = this.writecontent;

        //날짜 데이터 가지고 오기
        this.datedata = new Date();
        this.writedate = this.datedata.toISOString().substr(0,10);
        this.content.date = this.writedate;

        //별점 보내기
        const reviewcontent = {type: 'reviewcontent', content : this.content , strcount : this.count}
        //this.content를 TopicFrame으로 보내기
        const contentdata = {type:'contentdata', content : this.content}
        const updatedata = {type:'updatedata', content : this.content , strcount: this.count}

        if(this.update == false){
          if(this.step=="리뷰 & 추천"){
            this.$emit('add', reviewcontent);
          }else
          this.$emit('add' , contentdata);
        }else {
          this.$emit('add', updatedata);
        }
      }
    },
    //리뷰 & 추천 => 별점 매기기
    stargrade(){
      this.strOpen = true;
      document.getElementById('starBack').style.backgroundColor= "#5e5e5e";
    },
    //리뷰 & 추천 => 별점 그리기
    draw(value){
      this.str_draw.width = value*10 + '%';
    }
  },
  components: {
      Editor,
      alertmodal
  },
  props : {
    topicObject : Object,
    update: Boolean,
    step: String
  }
};
</script>

<style>

</style>