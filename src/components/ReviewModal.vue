<template>
  <div>
    <!-- 모달창이 나올떄 뒷 배경을 흐리게 만드는 녀석
  이걸 안쓰고 싶을땐 단순히 modal_opacity만을 주석처리하면 된다.-->
    <div class="modal_opacity"></div>
    <!-- 모달창의 크기를 결정하는 modal_frame,
  모달창의 크기 또한 파라미터로 받아서 나오게 할수도 있겠다. 쓰는사람 마음대로-->
    <div v-bind:class="{ modal_frame_big: true }">
      <!--모달 내 메세지 및 컨텐츠인 modal_inner, 여기에 단순히 메세지만을 표시할수도 
    작은 컴포넌트를 삽입할수도 있따.-->
        <div class="close_btn" @click="$emit('close', openmodal)">
            <img src="../assets/icons/white/close.png" class="close_img">
        </div>
      

      <div class="modal_inner">
        <div><img src="" alt=""><input type="text" class="inp"></div>
        <div class="book_chose_position"><span class="book_chose">작품선택</span></div>
        <div class="modal_content">사진</div>
        <div class="modal_content">사진</div>
        
        <!--메세지를 출력하는 예제-->
      </div>
      <!--모달을 닫는 버튼과 버튼내 메세지(확인, 취소 등등)-->
      
    </div>
  </div>
</template>

<script>
export default {
  name: "vsn_modal_universal",

  components: {},
  props: {
    openmodal : Boolean
  },
};
</script>
<style>
.modal_content {
  background-color:gray;
  border-radius: 15px;
  width: 13%;
  height: 200px;
  margin-top: 10px;
  margin-right: 10px;
}
.modal_opacity {
  background: black;
  width: 100vw;
  height: 100vh;
  opacity: 0;
  z-index: 100;
  position: fixed;
  animation-duration: 0.3s;
  animation-name: backgrounding_on;
  animation-fill-mode: forwards;
  z-index: 1;
}
.modal_frame_normal {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 500px;
  height: 200px;
  border-radius: 25px;
  background: #2a2a2a;
  animation-duration: 0.7s;
  animation-name: opening;
  z-index: 2;
  opacity: 1;
}
.modal_frame_small {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 300px;
  height: 125px;
  border-radius: 25px;
  background: #2a2a2a;
  animation-duration: 0.7s;
  animation-name: opening;
  z-index: 1;
  opacity: 1;
}
.modal_frame_big {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 1200px;
  height: 600px;
  border-radius: 25px;
  background: #353535;
  animation-duration: 0.7s;
  animation-name: opening;
  z-index: 1;
  opacity: 1;
}
.close_img {
   width:20px; height:20px;
}
.modal_inner {
  color: white;
  position: fixed;
  width: 94%;
  margin: 0px 3% 0px 3%; 
  top: 5%; 
}
.close_btn {
    font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', sans-serif;
    font-weight: 500;
    position: absolute;
    right:0;
    cursor: pointer;
    margin:15px 20px 10px 10px;
}
.book_chose {
  cursor: pointer;
  font-size: 20px;
}
.book_chose_position {
  text-align : right;
}
.inp{
  padding-left: 10px;
    padding-right: 10px;
    font-size:1.2em;
    outline: none;
    /* display: block; */
    height: 33px;
    background-color: white;
    border-radius: 15px;
    color:black;
    border:none;
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
/*배경을 만드는 backgrounding_on*/
@keyframes backgrounding_on {
  from {
  }

  to {
    opacity: 0.3;
  }
}
</style>