<template>
  <div>
    <div class="write_section">
      <div class="write_title"><input type="text" v-model="writetitle"/></div>
      <div class="write_content">
        <TeamEditor @registerdata="writecontent = $event"/>
      </div>
    </div>
    <div class="btn_area">
      <div class="write_btn" @click="registerpost">글쓰기</div>
      <div class="cancle_btn" @click="$emit('add')">취소</div>
    </div>
  </div>
</template>

<script>
import TeamEditor from './TeamEditor'
export default {
  name: "TeamoneWrite",
  data() {
    return {
      writecontent : '',
      writetitle: '',
      writedate:'',
      datedata:'',
      content:{
        title:'',
        writer : '',
        content : '',
        titleImg : '',
        date : '',
        likes    : '',
        coment  : '',
      }
    }
  },
  methods : {
    registerpost(){
      //TeamCommu로 이동
      this.$emit('add');

      //제목과 내용 가지고 와서 content객체에 넣어준다
      this.content.title = this.writetitle;
      this.content.content = this.writecontent;

      //날짜 데이터 가지고 오기
      this.datedata = new Date();
      this.writedate = this.datedata.toLocaleString();
      this.content.date = this.writedate;

      //this.content를 Teamone으로 보내기
      this.$emit('contentdata' , this.content);

    }
  },
  components: {
      TeamEditor
  },
  props : {
    datasend:Object
  }
};
</script>

<style>
</style>