<template>
  <div class="RouterView"> 
      <div>
            <div class="black-bg">
                <div class="white-bg">
                    <span>선택한 공지사항을...</span>
                    <div class="modal_post">상세페이지내용임</div>
                    <button class="btn-blue">이동</button>
                    <button class="btn-blue">비공개</button>
                    <button class="btn-red">삭제</button>
                    <button class="btn-blue">취소</button>
                </div>
            </div>
        </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.black-bg {
  background: black;
  width: 100vw;
  height: 100vh;
  /* opacity:0; */
  z-index: 3;
  /* position: fixed; */
  animation-duration: 0.3s;
  animation-name: backgrounding_on;
  animation-fill-mode: forwards;
  z-index: 1;
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
</style>