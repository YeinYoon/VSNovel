<template>
  <div>
    <!-- 모달창이 나올떄 뒷 배경을 흐리게 만드는 녀석
  이걸 안쓰고 싶을땐 단순히 modal_opacity만을 주석처리하면 된다.-->
    <!-- 모달창의 크기를 결정하는 modal_frame,
  모달창의 크기 또한 파라미터로 받아서 나오게 할수도 있겠다. 쓰는사람 마음대로-->
    <div v-bind:class="{ cafe_modal_frame_big: true }">
      <!--모달 내 메세지 및 컨텐츠인 modal_inner, 여기에 단순히 메세지만을 표시할수도 
    작은 컴포넌트를 삽입할수도 있따.-->
    
        
            <div class="cafe_modal_inner">
                <div class="cafe_modal_title_inner"><span class="modal_title">가입하기</span></div>
                <div>
                    <div class="cafe_banner"><img :src="datas[dataNum].link"></div>
                </div>
                
            </div>
            <!-- <div class="modal_content">내용 출력</div> -->
        <!--메세지를 출력하는 예제-->
      
      
      <!--모달을 닫는 버튼과 버튼내 메세지(확인, 취소 등등)-->
      <div class="cafe_modal_btn_position">
            <div>
                <span class="cafe_qna">이 카페에 가입하시겠습니까?</span>
            </div>
            <button class="cafe_modal_btn" @click="clickEvent()">확인</button>
            <button class="cafe_modal_btn"  @click="$emit('close', openModal)">취소</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "vsn_modal_universal",
  data() {
      return{
      }
  },
  components: {},
  props: {
    openModal : Boolean,
    datas: Array,
    dataNum : Number,

  },
  methods:{
    clickEvent(){
      // 카페 가입 함수
      this.$store.commit('addCafe',this.datas[this.dataNum]);
      this.$emit('close', this.openModal);
    }
  }
};
</script>
<style>
.cafe_banner img {
    width: 100%;
    height: 150px;
    border-radius: 15px;
}
.cafe_modal_title_inner{
    text-align:left;
}
.cafe_modal_title{
    color:white;
    font-size: 1.3em;
}
.cafe_banner {
  background-color:gray;
  border-radius: 15px;
  height: 150px;
  width: 95%;
  margin: 20px 2.5% 0px 2.5%; 
}
.cafe_modal_frame_big {
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
  z-index: 20;
  opacity: 1;
}
.cafe_modal_inner {
  color: white;
  position: fixed;
  width: 95%;
  margin: 0px 2.5% 0px 2.5%; 
  top: 5%; 
}
.cafe_modal_btn {
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
    margin:5px 5px 5px 20px;
    left: 31%;
}
.cafe_modal_btn_position {
  position:relative;
  width: 90%;
  margin: 0px 5% 0px 5%; 
  top: 85%;
  transform: translateY(-50%);
}
.cafe_qna {
    color:white;
    margin-left: 38%;
}
/* 애니메이션들,*/
/*열리는 애니메이션 opening*/
/* @keyframes opening {
  from {
    top: 150%;
    opacity: 0;
  }

  to {
    top: 50%;
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