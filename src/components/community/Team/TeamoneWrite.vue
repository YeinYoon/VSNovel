<template>
  <div>
    <div class="write_section">
      <div class="write_title"><input type="text"/></div>
      <div class="write_content">
        <Editor />
      </div>
    </div>
    <div class="btn_area">
      <div class="write_btn" @click="$emit('add')">글쓰기</div>
      <div class="cancle_btn" @click="$emit('add')">취소</div>
    </div>
  </div>
</template>

<script>
import Editor from '../free/Editor'
export default {
  name: "TeamoneWrite",
  data() {
    return {
      Writedata : ''
    }
  },
  methods : {
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
</style>