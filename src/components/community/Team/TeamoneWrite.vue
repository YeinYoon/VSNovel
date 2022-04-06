<template>
  <div>
    <div class="write_section">
      <div class="write_title"><input type="text" v-model="writetitle"/></div>
      <div class="write_content">
        <TeamEditor @registerdata="writecontent = $event"/>
      </div>
    </div>
    <div class="btn_area">
      <div class="write_btn" @click="registerpost()">글쓰기</div>
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
      this.$emit('add');

      this.content.title = this.writetitle;
      this.content.content = this.writecontent;
      console.log(this.content);
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