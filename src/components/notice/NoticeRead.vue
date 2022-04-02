<template>
  <div class="tests">
    <header class="header">
        <div class="service">
            <img class="icon" src="@/assets/icons/white/megaphone.png" alt="community">
            <span class="title">공지사항</span>
            <span class="topic">전체 - {{noticeData.title}}</span>
        </div>
    </header>  
    <div class="write_section">
      <div class="write_title">{{noticeData.title}}</div>
      <div class="write_contents">
          {{noticeData.content}}
      </div>
    </div>
    <div class="notice_btn_area">
        <div class="strong_btn" v-if="noticeData.emphasis == 0" @click="noticeBtnEvent('cancle')">강조 취소</div>
        <div class="strong_btn" v-if="noticeData.emphasis == 1" @click="noticeBtnEvent('updata')">강조로 발행</div>
        <div class="write_btn">수정</div>
        <div class="write_btn">삭제</div>
        <div class="cancle_btn" @click="$emit('cancle')">취소</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "OnWrite",
  data() {
    return {}
  },
  props:{
      noticeData:Object,
  },
  methods:{
      noticeBtnEvent(step){
        //강조 발행 / 취소 이벤트
        if(step == 1)
            this.$emit('updata');
        else this.$emit('notice_cancle');
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
  color: white;
}
.write_title {
  margin: 5px auto;
  width: 100%;
  height: 7%;
  background-color: #5e5e5e;
  border-radius: 20px;
  padding: 0 10px;
  font-size: 1.2em;
}
.write_title input {
  position: relative;
  left: 5px;
  width: 99%;
  height: 100%;
  border: none;
  background: none;
}
.write_contents {
  margin: 0 auto;
  width: 100%;
  height: 89%;
  background-color: #5e5e5e;
  border-radius: 20px;
  font-size: 1.4em;
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