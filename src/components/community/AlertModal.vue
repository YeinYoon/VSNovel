<template>
<div>
  <!-- 모달창이 나올떄 뒷 배경을 흐리게 만드는 녀석
  이걸 안쓰고 싶을땐 단순히 modal_opacity만을 주석처리하면 된다.-->
  <!-- <div class="modal_opacity">
  </div> -->
  <!-- 모달창의 크기를 결정하는 modal_frame,
  모달창의 크기 또한 파라미터로 받아서 나오게 할수도 있겠다. 쓰는사람 마음대로-->
  <div v-bind:class="{'alert_modal_frame_small':true}">
    <!--모달 내 메세지 및 컨텐츠인 modal_inner, 여기에 단순히 메세지만을 표시할수도 
    작은 컴포넌트를 삽입할수도 있따.-->

    <!-- 모달창 내용 제목, 댓글, 내용-->
    <div class="alert_modal_inner" v-if="alertcontent == '제목과 내용'">
      <span>{{alertcontent}}을</span> <br><!--메세지를 출력하는 예제-->
      <span>입력해 주세요</span>
    </div>

    <!-- 모달창 제목과 내용 -->
    <div class="alert_modal_inner" v-else>
      <span>{{alertcontent}}을 입력해 주세요</span> <!--메세지를 출력하는 예제-->
    </div>
      <!--모달을 닫는 버튼과 버튼내 메세지(확인, 취소 등등)-->
    <div class="alert_modal_save_button">
      <span class="alert_modal_ok" @click="$emit('closemodal', open)">확인</span>
    </div>
  </div>  
</div>
</template>
<style>
/* .modal_frame_normal{
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
} */
.alert_modal_frame_small{
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
/* .modal_frame_big{
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 700px;
  height: 400px;
  border-radius: 25px;
  background: #2a2a2a;
  animation-duration: 0.7s;
  animation-name: opening;
  z-index: 1;
  opacity: 1;
} */
.alert_modal_inner{
  color: white;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.alert_modal_save_button{
  width: 25%;
  height: 20%;
  background: #2872f9;
  border-radius: 20px;
  z-index: 2;
  display: table;
  position: fixed;
  top: 85%;
  left: 50%;
  transform: translate(-50%, -50%);
  cursor: pointer;
}
.alert_modal_ok{
  display: table-cell;
  vertical-align: middle;
  text-align: center;
  color: white;
}
/* 애니메이션들,*/
  /*열리는 애니메이션 opening*/
/* @keyframes opening {
  from {
    top:150%;
    opacity: 0;
  }

  to {
    top:50%;
    opacity: 1;
  }
} */
  /*배경을 만드는 backgrounding_on*/
/* @keyframes backgrounding_on {
  from {
  }

  to {
    opacity: 0.3;
  }
} */

</style>
<script>
export default {
  name: 'vsn_modal_universal',

  components: {
  },
  props: {
    open : Boolean,
    alertcontent: String
  }
}
  
</script>
