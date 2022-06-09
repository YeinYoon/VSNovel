<template>
  <div>
    <!-- 모달창의 크기를 결정하는 modal_frame,
  모달창의 크기 또한 파라미터로 받아서 나오게 할수도 있겠다. 쓰는사람 마음대로-->
    <div v-bind:class="{ cafe_modal_frame_big: true }">
      <!--모달 내 메세지 및 컨텐츠인 modal_inner, 여기에 단순히 메세지만을 표시할수도 
    작은 컴포넌트를 삽입할수도 있따.-->
    
        
            <div class="cafe_create_modal_inner">
                <div class="cafe_create_modal_title_inner"><span class="modal_title">개설하기</span></div>
            </div>
            <!-- <div class="modal_content">내용 출력</div> -->
        <!--메세지를 출력하는 예제-->
      
      
      <!--모달을 닫는 버튼과 버튼내 메세지(확인, 취소 등등)-->
      <div class="cafe_create_modal_btn_position">
          <div class="cafe_create_name_cont">
            <span class="cafe_create_name">카페명</span>
            <input class="cafe_create_name_input">
          </div>
          <div class="cafe_create_info_cont">
            <span class="cafe_create_info">설명</span>
            <textarea class="cafe_create_info_text"></textarea>
          </div>
            <div>
                <span class="cafe_create_qna">위 내용으로 카페를 개설하시겠습니까?</span>
            </div>
            <button class="cafe_create_modal_btn" @click="clickEvent()">확인</button>
            <button class="cafe_create_modal_btn"  @click="$emit('close', createModal)">취소</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from '../../../axios.js';
export default {
  name: "vsn_modal_universal",
  data() {
      return{
        createModal:false,
      }
  },
  props: {
    // createModal : Boolean,
    modalData : Object,

  },
  methods:{
    clickEvent(){
      console.log(this.modalData);
      // 카페 가입 함수
      this.joinVillageList();
      this.$emit('close', this.createModal);
    },
    joinVillageList(){
      axios.post('/api/village/joinVillageList', {code : this.modalData.VILL_CODE})
      .then((result)=>{
        if(typeof result.data == String) {
          console.log(result.data);
        } else {
          console.log(typeof result.data);
          alert(result.data);
          this.registerData = result.data[0];
        }
      })
    },
  }
};
</script>
<style>
.cafe_create_name_cont{
  position: relative;
  top: 70px;
  left: 5%;
}
.cafe_create_info_cont{
  position: relative;
  top: 130px;
  left: 5%;
}
.cafe_create_name{
  display: inline-block;
  position: absolute;
  bottom: 200px;
  left: 88px;
  color: white;
}
.cafe_create_name_input{
  position: absolute;
  bottom: 190px;
  left: 150px;
  width: 300px;
  height: 40px;
  background: #5e5e5e;
  border-radius: 20px;
  color: white;
  padding: 0px 15px 0px 15px;
}
.cafe_create_info{
  display: inline-block;
  position: absolute;
  bottom: 215px;
  left: 100px;
  color: white;
}
.cafe_create_info_text{
  position: absolute;
  bottom: 160px;
  left: 150px;
  width: 300px;
  height: 80px;
  background: #5e5e5e;
  border-radius: 20px;
  color: white;
  padding: 5px 15px 0px 15px;
  white-space: normal;
  outline: 0;
  border: 0;
  resize: none;
}
.cafe_banner img {
    width: 100%;
    height: 150px;
    border-radius: 15px;
}
.cafe_create_modal_title_inner{
    text-align:left;
}
.cafe_create_modal_title{
    color:white;
    font-size: 1.3em;
}
.cafe_create_modal_frame_big {
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
.cafe_create_modal_inner {
  color: white;
  position: fixed;
  width: 95%;
  margin: 0px 2.5% 0px 2.5%; 
  top: 5%; 
}
.cafe_create_modal_btn {
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
.cafe_create_modal_btn_position {
  position:relative;
  width: 90%;
  margin: 0px 5% 0px 5%; 
  top: 85%;
  transform: translateY(-50%);
}
.cafe_create_qna {
    color:white;
    margin-left: 32%;
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