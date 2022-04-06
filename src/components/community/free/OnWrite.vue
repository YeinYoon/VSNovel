<template>
  <div>
    <div class="write_section">
      <div class="write_title"><input type="text" /></div>
      <div class="write_content">
        <!-- <textarea/> -->
        <Editor />
      </div>
    </div>
    <div class="btn_area">
      <div class="write_btn" @click="$emit('end')">글쓰기</div>
      <div class="cancle_btn">취소</div>
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
.write_section {
  margin: 0 auto;
  padding: 10px 15px;
  width: 800px;
  height: 65vh;
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
}
.write_content {
  margin: 0 auto;
  width: 100%;
  height: 90%;
  background-color: #5e5e5e;
  border-radius: 20px;
  padding: 0 10px;
}
.btn_area {
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
.cancle_btn {
  padding: 5px 10px;
  margin: 0 10px;
  background-color: #5e5e5e;
  width: 100px;
  border-radius: 20px;
}
</style>