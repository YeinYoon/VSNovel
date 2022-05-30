<template>
  <div>
    <!-- 내용을 입력해주세요 모달창 -->
    <div v-if="open==true"><alertmodal :openmodal="open" @closemodal="open = false" :alertcontent="alertcontent"/></div>
    
    <div class="commu_write_section">
      <!-- 리뷰 & 추천 부분 => 작품선택, 제목, 별점 입력 -->
      <div class="commu_review_frame" v-if='step=="리뷰 & 추천"'>
        <div class="commu_novel_choice"><span>작품선택</span></div>
        <!-- 기본 리뷰 & 추천  -->
        <div class="commu_review_title" v-if="update == false"><input type="text" v-model="writetitle"/></div>
        <!-- 리뷰 & 추천 + 수정 -->
        <div class="commu_review_title" v-if='step=="리뷰 & 추천" && update == true'><input type="text" :value="`${topicObject.title}`" id="updatetitle"/></div>

        <!-- 수정 리뷰 글쓰기 별점 부분 -->
        <div class="commu_str_back_update" v-if='update == true && this.step == "리뷰 & 추천"'>
          <span class="str_first">★★★★★
            <span :style="str_draw">★★★★★</span>
            <input type="range" class="str_range" @input="draw(value)" v-model="value" step="1" min="0" max="10">
          </span>
        </div>

        <!-- 처음 리뷰 글쓰기 별점 부분 -->
        <div class="commu_str_back" v-else-if='this.step == "리뷰 & 추천"' @click="stargrade()" id="starBack">
          <span class="commu_str_grade" v-if="strOpen==false">별점 매기기</span>
          <span class="str_first" v-if="strOpen==true">★★★★★
            <span :style="str_draw">★★★★★</span>
            <input type="range" class="str_range" @input="draw(value)" v-model="value" step="1" min="0" max="10">
          </span>
        </div>
        

      </div>
      <!-- 기본 글쓰기 제목입력 -->
      <div class="commu_write_title" v-if="update==false && step!='리뷰 & 추천'"><input type="text" v-model="writetitle"/></div>
      <!-- 수정 글쓰기 제목입력 -->
      <div class="commu_write_title" v-if="update==true && step!='리뷰 & 추천'"><input type="text" :value="`${topicObject.title}`" id="updatetitle"/></div>

      <!-- 내용 입력창 -->
      <div class="commu_write_content">
        <Editor @registerdata="writecontent = $event" :topicObject="topicObject" :update="update"/>
      </div>
    </div>
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
      if(this.writetitle == '' && this.writecontent == '' && this.update == false){
        this.alertcontent = '제목과 내용'
        this.open = true;
      }else if(this.writetitle == '' && this.update == false){
        this.alertcontent = '제목'
        this.open = true;
      }else if(this.writecontent == '' && this.update == false){
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
.commu_write_section {
  margin: 0 auto;
  padding: 10px 15px;
  width: 95%;
  height: 65vh;
  background-color: #2c2c2c;
  border-radius: 20px;
  position: relative;
  top: 50px;
}
.commu_review_frame{
  display:flex;
  justify-content: space-between;
  height: 7%;
  margin: 5px auto;
}
.commu_novel_choice {
  display:flex;
  align-items:center;
  justify-content:center;
  flex:1;
  height: 100%;
  background-color:#2872f9;
  border-radius: 20px;
  padding: 0 10px;
  margin-right: 10px;
  cursor: pointer;
}
.commu_novel_choice span {
  color:white;
  font-size: 1.2vw;
}
.commu_review_title {
  flex: 3;
  height: 100%;
  background-color: #5e5e5e;
  border-radius: 20px;
  padding: 0 10px;
}
.commu_review_title input {
  position: relative;
  left: 5px;
  width: 99%;
  height: 100%;
  border: none;
  background: none;
  color:white;
}
.commu_str_back {
  display:flex;
  align-items:center;
  justify-content:center;
  flex:1;
  height: 100%;
  background-color: #ffe342;
  border-radius: 20px;
  padding: 0 10px;
  margin-left: 10px;
  cursor: pointer;
}
.commu_str_back_update{
  display:flex;
  align-items:center;
  justify-content:center;
  flex:1;
  height: 100%;
  background-color: #5e5e5e;
  border-radius: 20px;
  padding: 0 10px;
  margin-left: 10px;
  cursor: pointer;
}
.commu_str_grade{
  font-size: 1.2vw;
}
.str_first {
  border:none;
  position:relative;
  font-size: 1.8vw;
  color: #ddd;
  bottom: -0.5px;
  /* margin-left:2px;
  margin-right:2px; */
}
.str_range {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    /* top: 10px; */
    opacity: 0;
    cursor: pointer;
}
.commu_write_title {
  margin: 5px auto;
  width: 100%;
  height: 7%;
  background-color: #5e5e5e;
  border-radius: 20px;
  padding: 0 10px;
}
.commu_write_title input {
  position: relative;
  left: 5px;
  width: 99%;
  height: 100%;
  border: none;
  background: none;
  color:white;
}
.commu_write_content {
  margin: 9px auto;
  width: 100%;
  height: 89%;
  background-color: #5e5e5e;
  border-radius: 20px;
  padding: 10px 10px;
  color:white;
}
.write_btn_area {
  display:flex;
  justify-content: center;
  position: relative;
  top: 70px;
  width: 100%;
  text-align: center;
  color: white;
}
.write_btn {
  padding: 5px 10px;
  background-color: #2872f9;
  width: 100px;
  border-radius: 20px;
  margin: 0 10px;
}
.write_cancle_btn {
  padding: 5px 10px;
  margin: 0 10px;
  background-color: #5e5e5e;
  width: 100px;
  border-radius: 20px;
}
</style>