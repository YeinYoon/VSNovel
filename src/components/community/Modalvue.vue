<template>
  <div>
    <!-- 모달창이 나올떄 뒷 배경을 흐리게 만드는 녀석
  이걸 안쓰고 싶을땐 단순히 modal_opacity만을 주석처리하면 된다.-->
    <!-- <div class="modal_opacity"></div> -->
    <!-- 모달창의 크기를 결정하는 modal_frame,
  모달창의 크기 또한 파라미터로 받아서 나오게 할수도 있겠다. 쓰는사람 마음대로-->
    <div v-bind:class="{ modal_frame_big: true }">
      <!--모달 내 메세지 및 컨텐츠인 modal_inner, 여기에 단순히 메세지만을 표시할수도 
    작은 컴포넌트를 삽입할수도 있따.-->
      <div class="post_modal_inner">
        <span>선택한 게시물을..</span>
        <div class="post_modal_content">{{modaldatasend.content}}</div>
        <!--메세지를 출력하는 예제-->
      </div>
      <!--모달을 닫는 버튼과 버튼내 메세지(확인, 취소 등등)-->
      <div class="post_modal_btn_position">
        <button class="post_modal_btn">이동</button>
        <button class="post_modal_btn">비공개</button>
        <button class="post_modal_btn_red" @click="modalremove">삭제</button>
        <button class="post_modal_btn" id="cancel" @click="$emit('closemodal', open)">취소</button>
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
  background-color:gray;
  border-radius: 15px;
  height: 200px;
  margin-top: 10px;
  overflow-y:scroll;
}
.post_modal_frame_normal {
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
.post_modal_frame_small {
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
.post_modal_frame_big {
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
}
.post_modal_inner {
  color: white;
  position: fixed;
  width: 90%;
  margin: 0px 5% 0px 5%; 
  top: 5%; 
}
.post_modal_btn {
    font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', sans-serif;
    font-weight: 500;
    position: relative;
    width: 100px;
    height: 30px;
    background-color:#2872f9;
    border: none;
    color: white;
    text-align: center;
    text-decoration: none;
    font-size: 14px;
    border-radius: 12px;
    cursor: pointer;
    margin:7px 5px 7px 5px;
}
.post_modal_btn_red {
    font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', sans-serif;
    font-weight: 500;
    position: relative;
    width: 100px;
    height: 30px;
    background-color:red;
    border: none;
    color: white;
    text-align: center;
    text-decoration: none;
    font-size: 14px;
    border-radius: 12px;
    cursor: pointer;
    margin:7px 5px 7px 5px;
}
.post_modal_btn_position {
  position:relative;
  width: 90%;
  margin: 0 auto; 
  top: 90%;
  transform: translateY(-50%);
}
#cancel {
  float:right;
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