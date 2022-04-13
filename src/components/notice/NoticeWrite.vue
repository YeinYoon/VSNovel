<template>
  <div class="tests">
    <header class="header">
        <div class="service">
            <img class="icon" src="@/assets/icons/white/megaphone.png" alt="community">
            <span class="title">공지사항</span>
            <span class="topic" v-if="writeModify == false">전체 - 글쓰기</span>
            <span class="topic" v-if="writeModify">전체 - 수정하기</span>
        </div>
    </header>  
    <div class="write_section">
      <div class="write_title" @change="titlePush">
        <input id="input" type="text" :value="`${noticeData.title}`" v-if="writeModify"/>
        <input id="input" type="text" v-if="writeModify == false"/>
      </div>
      <div class="write_content">
        <Editor :noticeData="noticeData" :writeModify="writeModify" @up="upEvent($event)"/>
      </div>
      <div class="editer_info">
        주의! 당신은 현재 공지사항 게시판에서 작성중입니다.
        <br>강조로 발행 버튼을 누르면 '강조공지'로 상단에 우선 노출됩니다.
        <br>공지사항의 말머리를 선택하여 '해당 TOPIC' 에 맞게 작성하세요.
    </div>
    </div>
    <div class="notice_btn_area">
      <div class="strong_btn" @click="pushEvent(0)">강조로 발행</div>
      <div class="write_btn" @click="pushEvent(1)">글쓰기</div>
      <div class="cancle_btn" @click="$emit('write_cancle', 'cancle')">취소</div>
    </div>
  </div>
</template>

<script>
import Editor from './NoticeEditor'
export default {
  name: "OnWrite",
  data() {
    return {
      writeData : {
        emphasis : 0,
        title: '',
        content: '',
        date : '',
      },
    }
  },
  components: {
      Editor
  },
  props:{
    noticeData:Object,
    writeModify:Boolean,
  },
  methods:{
    titlePush(){
      this.writeData.title = document.getElementById('input').value;
    },
    upEvent(event){
      this.writeData.content = event;
      console.log(event);
    },
    pushEvent(emphasis){
      var today = new Date().toISOString().substring(0,10);
      this.writeData.date = today;
      this.writeData.emphasis = emphasis;
      this.$emit('arrUp', this.writeData);
    }
  }
};
</script>

<style>
.write_section {
  margin: 0 auto;
  padding: 10px 15px;
  width: 800px;
  height: 75%;
  background-color: #2c2c2c;
  border-radius: 20px;
  position: relative;
  top: 50px;
}
.write_title {
  margin: 5px auto;
  width: 100%;
  height: 7%;
  background-color: #5e5e5e;
  border-radius: 20px;
  padding: 0 10px;
}
.write_title input {
  position: relative;
  left: 5px;
  width: 99%;
  height: 100%;
  border: none;
  background: none;
  color: white;
}
.write_content {
  margin: 0 auto;
  width: 100%;
  height: 77%;
  background-color: #5e5e5e;
  border-radius: 20px;
}
.write_content textarea {
  background: none;
  border: none;
  position: relative;
  top: 5px;
  resize: none;
  width: 100%;
  height: 95%;
}
.editer_info{
  color: white;
  margin: 5px 0 0 0;
  font-size: 0.8em;
}
.notice_btn_area {
  width: 100%;
  text-align: center;
  color: white;
  display: flex;
  justify-content: center;
  position: relative;
  top: 70px;
}
.strong_btn {
  padding: 5px 10px;
  background-color: red;
  width: 100px;
  border-radius: 20px;
  margin: 0 10px;
}
.write_btn {
  padding: 5px 10px;
  background-color: #2872f9;
  width: 100px;
  border-radius: 20px;
  margin: 0 10px;
}
.cancle_btn {
  padding: 5px 10px;
  margin: 0 10px;
  background-color: #5e5e5e;
  width: 100px;
  border-radius: 20px;
}
</style>