<template>
  <div class="modal_background" v-if="modal">
    <div class="modal_style">
      <div class="close" @click="send_event">X</div>
      <div v-if="modal_step == 0">
        <StoreVue :modalData="modalData" @next="modal_step++" />
      </div>
      <div v-if="modal_step == 1">
        <StoreCard @next="modal_step++" />
      </div>
      <div v-if="modal_step == 2">
        <ModalEnd @close="send_event" />
      </div>
    </div>
  </div>
</template>
<script>
import StoreCard from "./StoreCard.vue";
import StoreVue from "./StoreVue.vue";
import ModalEnd from "./ModalEnd.vue";

export default {
  name: "StoreModal",
  data() {
    return {
      modal_step: 0,
    };
  },
  props: {
    modal: Boolean,
    modalData: Object,
  },
  methods: {
    send_event() {
      this.modal_step = 0;
      this.$emit("close");
    },
  },
  components: {
    StoreCard,
    StoreVue,
    ModalEnd,
  },
};
</script>

<style>
/* 카러셀 디브 */
.close {
  color: white;
  font-size: 1.3em;
  float: right;
  width: 2%;
  padding: 0;
  margin: 0;
  text-align: center;
  position: fixed;
  right: 15px;
  z-index: 12;
}
div {
  box-sizing: border-box;
}
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