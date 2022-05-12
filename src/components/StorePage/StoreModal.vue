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
        <div class="con">
          <div class="font">결제 완료</div>
          <div class="btn_areas">
            <div class="btn_1" @click="$router.push('/library')"><span>보관함</span></div>
            <div class="btn_store" @click="send_event"><span>스토어</span></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import StoreCard from "./StoreCard.vue";
import StoreVue from "./StoreVue.vue";

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
      // 모달 닫을 때 쓰는 함수
      this.modal_step = 0;
      this.$emit("close");
    },
  },
  components: {
    StoreCard,
    StoreVue,
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

.con {
  text-align: center;
  width: 97%;
  height: 93%;
  position: absolute;
  color: white;
  z-index: 11;
}
.font {
  font-size: 2em;
  width: 100%;
  text-align: center;
  position: relative;
  display: flex;
  justify-content: center;
  top: 40%;
}
.btn_areas {
  display: flex;
  justify-content: center;
  align-items: flex-end;
  width: 100%;
  height: 93%;
}
.btn_areas .btn_1 {
  display: table;
  background-color: #2872f9;
  padding: 0 10px;
  width: 100px;
  height: 40px;
  border-radius: 20px;
}
.btn_areas .btn_1 span,
.btn_areas .btn_store span {
  display: table-cell;
  vertical-align: middle;
}
.btn_areas .btn_store {
  display: table;
  background-color: red;
  padding: 0 10px;
  margin: 0 0 0 20px;
  width: 100px;
  height: 40px;
  border-radius: 20px;
}
</style>