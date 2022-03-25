<template>
  <div class="RouterView"> 
      <div>
            <div class="black-bg">
                <div class="white-bg">
                    <span>선택한 공지사항을...</span>
                    <div class="modal_post"></div>
                    <button class="btn-blue">이동</button>
                    <button class="btn-blue">비공개</button>
                    <button class="btn-red">삭제</button>
                    <button class="btn-blue" @click="$emit('closemodal', 모달창열렸니)">취소</button>
                </div>
            </div>
        </div>
  </div>
</template>

<script>
export default {
  props: {
    모달창열렸니 : Boolean
  },
}
</script>

<style>
.black-bg {
  z-index: 4;
  width: 100%; height:100%;
  background: rgba(0,0,0,0.5);
  position: fixed; padding: 20px;
}
.white-bg {
  width: 100%; background: #353535;
  border-radius: 8px;
  padding: 20px;
  color:white;
} 
.modal_post {
  width: 98%;
  height: 100px;
  background-color: white;
  border-radius: 20px;
}
</style>