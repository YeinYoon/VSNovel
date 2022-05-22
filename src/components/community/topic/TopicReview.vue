<template>
  <div>
    <div class="commu_review_section">
      <div class="commu_review_title"><input type="text" v-model="writetitle"/></div>
      <div class="commu_review_content">
        <Editor/>
      </div>
    </div>
    <div class="review_btn_area">
      <div class="review_btn" @click="registerpost">글쓰기</div>
      <div class="review_cancle_btn" @click="$emit('add','add')">취소</div>
    </div>
  </div>
</template>

<script>
import Editor from './Editor'
export default {
  name: "TopicReview",
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
      }
    }
  },
  methods : {
    registerpost(){
      //TopicCommu로 이동
      this.$emit('add','add');

      //제목과 내용 가지고 와서 content객체에 넣어준다
      this.content.title = this.writetitle;
      this.content.content = this.writecontent;

      //날짜 데이터 가지고 오기
      this.datedata = new Date();
      this.writedate = this.datedata.toISOString().substr(0,10);
      this.content.date = this.writedate;


      //this.content를 TopicFrame으로 보내기
      const contentdata = {type:'contentdata', content : this.content}
      this.$emit('add' , contentdata);

    }
  },
  components: {
      Editor
  },
  props : {
    datasend:Object
  }
};
</script>

<style>
.commu_review_section {
  margin: 0 auto;
  padding: 10px 15px;
  width: 95%;
  height: 65vh;
  background-color: #2c2c2c;
  border-radius: 20px;
  position: relative;
  top: 50px;
}
.commu_review_title {
  margin: 5px auto;
  width: 100%;
  height: 7%;
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
.commu_review_content {
  margin: 0 auto;
  width: 100%;
  height: 90%;
  background-color: #5e5e5e;
  border-radius: 20px;
  padding: 10px 10px;
  color:white;
}
.review_btn_area {
  display:flex;
  justify-content: center;
  position: relative;
  top: 70px;
  width: 100%;
  text-align: center;
  color: white;
}
.review_btn {
  padding: 5px 10px;
  background-color: #2872f9;
  width: 100px;
  border-radius: 20px;
  margin: 0 10px;
}
.review_cancle_btn {
  padding: 5px 10px;
  margin: 0 10px;
  background-color: #5e5e5e;
  width: 100px;
  border-radius: 20px;
}
</style>