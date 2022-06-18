<template>
  <div class="RouterView">
    <header class="header">
      <div class="service">
        <img
          class="icon"
          src="@/assets/icons/white/megaphone.png"
          alt="community"
        />
        <span class="title">공지사항</span>
        <div><span class="topic">전체 - {{ noticeData.title }}</span></div>
      </div>
    </header>
    <div class="notice_write_section">
      <div class="notice_write_title">
        <span>{{ noticeData.title }}</span>
        <div class="notice_title_info">
          <span>작성일자 : {{noticeData.date}}</span>
          <div class="notice_title_btn">
            <div class="strong_btn" v-if="admin && this.noticeData.emphasis == 1" @click="noticeBtnEvent('notice_cancle')">
              <span>강조 취소</span>
            </div>
            <div class="strong_btn" v-if="admin && this.noticeData.emphasis == 0" @click="noticeBtnEvent('updata')">
              <span>강조 발행</span>
            </div>
            <div v-if="admin" @click="noticeBtnEvent('modify')" class="notice_update_btn"><img src="@/assets/icons/white/editing.png"></div>
            <div v-if="admin" @click="noticeBtnEvent('delete')" class="notice_delete_btn"><img src="@/assets/icons/white/trash_white.png"></div>
          </div>
      
        </div>
      </div>
      <div class="notice_write_contents">
        <span v-html="noticeData.content">
        </span>
      </div>
    </div>
    <div class="notice_cancle_area">
      <div class="cancle_btn" @click="noticeBtnEvent('cancle')"><span>목록으로</span></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NoticeRead",
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
  padding: 10px 15px;
  background-color: #2c2c2c;
  border-radius: 20px;
  position: relative;
  top: 50px;
  width: 95%;
  margin: 0 auto;
  color:white;
}
.notice_write_title {
  margin: 5px auto;
  width: 100%;
  /* height: 7%; */
  background-color: #5e5e5e;
  border-radius: 20px;
  padding: 10px 10px;
  font-size: 1.2em;
  /* display:flex; */
  display: table;
}
/* .notice_write_title span{
  display: table-cell;
  vertical-align: middle;
} */
.notice_title_info{
  display: flex;
}
.notice_title_btn{
  display: flex;
  position:absolute;
  float:right;
  right:30px;
}
.notice_update_btn, .notice_delete_btn{
  display:flex;
  justify-content:center;
  align-items: center;
  width: 55px;
  height: 28px;
  background-color: #2872f9;
  border-radius: 20px;
  margin: 0 5px;
  transition: 0.2s all ease;
  cursor: pointer;
}
.notice_update_btn:hover, .notice_delete_btn:hover{
  background-color: #0084ff;
}
.notice_update_btn img{
    position:relative;
    left:1.5px;
    width:35%; 
    object-fit: cover;
}
.notice_delete_btn img{
    position:relative;
    top:0.5px;
    width:40%; 
    object-fit:cover;
}
.notice_write_contents {
  margin: 5px auto;
  width: 100%;
  min-height: 400px;
  background-color: #5e5e5e;
  border-radius: 20px;
  font-size: 1.4em;
  padding: 10px 10px;
  overflow-y: scroll;
}
.notice_write_contents span{
  word-wrap: break-word;
}
.editer_info {
  color: white;
  margin: 5px 0 0 0;
  font-size: 0.8em;
}

.strong_btn {
  display:flex;
  /* padding: 5px 10px; */
  /* display: table; */
  background-color: red;
  width: 70px;
  height: 28px;
  border-radius: 20px;
  margin: 0 5px;
}
.strong_btn span {
  font-size: 13px;
}
/* .write_btn {
  padding: 5px 10px;
  background-color: #2872f9;
  width: 100px;
  border-radius: 20px;
  margin: 0 10px;
} */
.notice_cancle_area {
  /* position:relative; */
  position:relative;
  top: 50px;
  height: 50px;
  /* width: 97%; */
  /* left: 10px; */
  /* display: table-cell; */
  /* vertical-align: middle; */
  color:white;
  /* margin: 0 auto; */
}
.cancle_btn {
  padding: 5px 10px;
  margin: 0 10px;
  background-color: #5e5e5e;
  width: 100px;
  border-radius: 14px;
  display: table;
  
}
.cancle_btn span {
  display:table-cell;
  text-align: center;
}
</style>