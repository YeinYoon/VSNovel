<template>
  <div>
    <!-- 모달창의 크기를 결정하는 modal_frame,
  모달창의 크기 또한 파라미터로 받아서 나오게 할수도 있겠다. 쓰는사람 마음대로-->
    <div v-bind:class="{ post_modal_frame_big: true }">
      <!--모달 내 메세지 및 컨텐츠인 modal_inner, 여기에 단순히 메세지만을 표시할수도 
    작은 컴포넌트를 삽입할수도 있따.-->
      <div class="post_modal_inner">
        <span>선택한 게시물을..</span>
        <div class="post_modal_content"><span v-html="modaldatasend.content"></span></div>
        <!--메세지를 출력하는 예제-->
      </div>
      <!--모달을 닫는 버튼과 버튼내 메세지(확인, 취소 등등)-->
      <div class="post_modal_btn_position">
        <div class="post_modal_btn"><span>이동</span></div>
        <div class="post_modal_btn"><span>비공개</span></div>
        <div class="post_modal_btn_red" @click="modalremove"><span>삭제</span></div>
        <div class="post_modal_btn" id="cancel" @click="$emit('closemodal', open)"><span>취소</span></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "vsn_modal_universal",

  components: {},
  props: {
    open : Boolean,
    modaldatasend : Object,
    datasend : Object,
  },
  methods: {
    modalremove() {
      this.$emit('deletedata');
      this.$emit('closemodal', open);
    }
  }
};
</script>
<style>
.post_modal_content {
  position:relative;
  background-color:gray;
  border-radius: 15px;
  height: 200px;
  margin-top: 10px;
  overflow-y:scroll;
  word-wrap: break-word;
  
}
.post_modal_content span {
  position: absolute;
  margin-top: 10px;
  width: 95%;
  left: 50%;
  transform: translateX(-50%);
}
.post_modal_frame_big {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 700px;
  height: 310px;
  border-radius: 25px;
  background: #2a2a2a;
  animation-duration: 0.7s;
  animation-name: opening;
  z-index: 2;
  opacity: 1;
}
.post_modal_inner {
  color: white;
  position: fixed;
  width: 90%;
  left: 5%;
  top: 5%; 
}
.post_modal_btn {
    position: relative;
    width: 100px;
    height: 30px;
    background-color:#2872f9;
    color: white;
    text-align: center;
    font-size: 1.0em;
    border-radius: 12px;
    cursor: pointer;
    margin-right: 10px;
    padding-top: 3px;
}
.post_modal_btn_red {
    position: relative;
    width: 100px;
    height: 30px;
    background-color:rgb(255, 71, 71);
    color: white;
    text-align: center;
    font-size: 1.0em;
    border-radius: 12px;
    cursor: pointer;
    padding-top: 3px;
}
.post_modal_btn_position {
  display:flex;
  position:relative;
  width: 90%;
  margin: 0 auto; 
  top: 90%;
  transform: translateY(-50%);
}
#cancel{
  left: 33.5%;
}
/* 애니메이션들,*/
/*열리는 애니메이션 opening*/
@keyframes opening {
  from {
    top: 150%;
    opacity: 0;
  }

  to {
    top: 50%;
    opacity: 1;
  }
}
</style>