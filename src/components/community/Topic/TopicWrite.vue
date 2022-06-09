<template>
  <div>
    <!-- 내용을 입력해주세요 모달창 -->
    <div v-if="open==true"><alertmodal :openmodal="open" @closemodal="open = false"/></div>
    
    <div class="commu_write_section">
      <!-- 리뷰 & 추천 부분 => 작품선택, 제목, 별점 입력 -->
      <div class="commu_review_frame" v-if='step=="리뷰 & 추천"'>
        <div class="commu_novel_choice"><span>작품선택</span></div>
        <div class="commu_review_title"><input type="text" v-model="writetitle" placeholder="내용입력"/></div>
        <div class="commu_str_back"><span>★★★★★</span></div>
      </div>
      <!-- 기본 글쓰기 제목입력 -->
      <div class="commu_write_title" v-if="update==false && step!='리뷰 & 추천'"><input type="text" v-model="writetitle"/></div>
      <!-- 수정 글쓰기 제목입력 -->
      <div class="commu_write_title" v-if="update==true"><input type="text" :value="`${topicObject.title}`" id="updatetitle"/></div>

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
export default {
  name: "TopicWrite",
  data() {
    return {
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
    }
  },
  methods : {
    registerpost(){
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

      //this.content를 TopicFrame으로 보내기
      const contentdata = {type:'contentdata', content : this.content}
      const updatedata = {type:'updatedata', content : this.content}
      if(this.update == false){
        this.$emit('add' , contentdata);
      }else {
        this.$emit('add', updatedata);
      }
      

    },
  },
  components: {
      Editor
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
}
.commu_novel_choice {
  display:flex;
  align-items:center;
  justify-content:center;
  margin: 5px auto;
  flex:1;
  /* height: 7%; */
  background-color:#2872f9;
  border-radius: 20px;
  padding: 0 10px;
  margin-right: 10px;
  cursor: pointer;
}
.commu_novel_choice span {
  color:white;
}
.commu_review_title {
  margin: 5px auto;
  flex: 3;
  /* width: 50%; */
  /* height: 7%; */
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
  margin: 5px auto;
  flex:1;
  /* height: 7%; */
  background-color: #5e5e5e;
  border-radius: 20px;
  padding: 0 10px;
  margin-left: 10px;
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
  margin: 0 auto;
  width: 100%;
  height: 90%;
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