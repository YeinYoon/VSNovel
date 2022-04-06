<template>
  <div class="tests">
    <header class="header">
      <div class="service">
        <img
          class="icon"
          src="@/assets/icons/white/megaphone.png"
          alt="community"
        />
        <span class="title">공지사항</span>
        <span class="topic">전체 - {{ noticeData.title }}</span>
      </div>
    </header>
    <div class="notice_write_section">
      <div class="notice_write_title">
        <span>{{ noticeData.title }}</span>
      </div>
      <div class="notice_write_contents" >
        {{ noticeData.content }}
      </div>
    </div>
    <div class="notice_btn_area">
      <div
        class="strong_btn"
        v-if="admin && this.noticeData.emphasis == 0"
        @click="noticeBtnEvent('notice_cancle')"
      >
        강조 취소
      </div>
      <div
        class="strong_btn"
        v-if="admin && this.noticeData.emphasis == 1"
        @click="noticeBtnEvent('updata')"
      >
        강조로 발행
      </div>
      <div class="write_btn" v-if="admin" @click="noticeBtnEvent('modify')">수정</div>
      <div class="write_btn" v-if="admin" @click="noticeBtnEvent('delete')">삭제</div>
      <div class="cancle_btn" @click="noticeBtnEvent('cancle')">취소</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "OnWrite",
  data() {
    return {
      noticeAdmin : 0,
    };
  },
  props: {
    noticeData: Object,
    admin : Boolean,
  },
  methods: {
    noticeBtnEvent(step) {
      //강조 발행
      if (step == 'updata') 
        this.$emit('btnEvent','updata');
      //강조 취소
      else if(step == 'notice_cancle')
        this.$emit('btnEvent','notice_cancle');
      //게시물 삭제
      else if(step == 'delete')
        this.$emit('btnEvent', 'delete');
      //게시물 수정
      else if(step == 'modify')
        this.$emit('btnEvent', 'modify');
      //뒤로 가기
      else this.$emit('btnEvent', 'cancle');
    },
  },
};
</script>

<style>
.notice_write_section {
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
.notice_write_title {
  margin: 5px auto;
  width: 100%;
  height: 7%;
  background-color: #5e5e5e;
  border-radius: 20px;
  padding: 0 10px;
  font-size: 1.2em;
  display: table;
}
.notice_write_title span{
  display: table-cell;
  vertical-align: middle;
}
.notice_write_contents {
  margin: 0 auto;
  width: 100%;
  height: 89%;
  background-color: #5e5e5e;
  border-radius: 20px;
  font-size: 1.4em;
  padding: 5px 10px;
}
.editer_info {
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