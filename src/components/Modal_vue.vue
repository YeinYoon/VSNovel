<template>
  <div class="modal_background" v-if="isOpen">
    <div class="modal_style">
        <h1>sdfsdfsdf</h1>
    </div>
  </div>
</template>
<script>

export default {
  name: "Modal_vue",
  data() {
    return {
    };
  },
  props:{
      isOpen:Boolean,
  }
};
</script>

<style>
/* 카러셀 디브 */
.modal_background {
  width: 100vw;
  height: 100vh;
  background-color: rgba(255, 255, 255, 0.1);
  position: fixed;
  display: inline-block;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 20px 40px;
  overflow: hidden;
}
.modal_style {
  width: 90vw;
  height: 90vh;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #2a2a2a;
  border-radius: 20px;
  padding: 20px;
  box-shadow: 0 0 100px 50px black;
}
</style>