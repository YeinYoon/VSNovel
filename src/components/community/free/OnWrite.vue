<template>
  <div>
    <div class="commu_write_section">
      <div class="commu_write_title"><input type="text" /></div>
      <div class="commu_write_content">
        <Editor />
      </div>
    </div>
    <div class="write_btn_area">
      <div class="write_btn" @click="$emit('end')"><span>글쓰기</span></div>
      <div class="write_cancle_btn"><span>취소</span></div>
    </div>
  </div>
</template>

<script>
import Editor from './Editor'
export default {
  name: "OnWrite",
  data() {
    return {}
  },
  components: {
      Editor
  },
};
</script>

<style>
</style>