 <template>
<div v-if="gModalState">
  <!-- 모달창이 나올떄 뒷 배경을 흐리게 만드는 녀석
  이걸 안쓰고 싶을땐 단순히 modal_opacity만을 주석처리하면 된다.-->
  <div class="modal_opacity" @click="modalClose">
  </div>
  <!-- 모달창의 크기를 결정하는 modal_frame-->
  <div v-bind:class="{[`modal_frame_${this.$store.state.gModalSize}`]:true}" v-bind:style="{backgroundImage: 'url(' + this.$store.state.gModalBg + ')'}">
    <!--모달 내 메세지 및 컨텐츠인 modal_inner, 여기에 단순히 메세지만을 표시할수도 
    작은 컴포넌트를 삽입할수도 있따.-->
    <div class="modal_inner">
      <div id ="contents">
        <span>{{this.$store.state.gModalMsg}}</span>
      </div> <!--메세지를 출력-->
    </div>
      <!--모달을 닫는 버튼과 버튼내 메세지(확인, 취소 등등)-->
    <div v-if="this.$store.state.gModalSize!='ad'" class="modal_close_button">
      
      <span class="modal_close_ok" @click="modalClose()">확인</span>
    </div>
  </div>  
</div>
</template>

<style>
.modal_frame_normal{
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
  z-index: 98;
  opacity: 1;
}
.modal_frame_small{
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
  z-index: 98;
  opacity: 1;
}
.modal_frame_big{
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
  z-index: 98;
  opacity: 1;
}
.modal_frame_ad{
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 1200px;
  height: 700px;
  background: none;
  background-repeat: no-repeat;
  background-size:contain;
  animation-duration: 0.7s;
  animation-name: opening;
  z-index: 98;
  opacity: 1;
}
.modal_inner{
  color: white;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.modal_inner #contents {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.modal_inner span{
  position: absolute;
  top: 50%;
  left: 48%;
  transform: translate(-50%, -50%);
}

.modal_close_button{
  width: 40%;
  height: 15%;
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
.ad_close_button{
  width: 30px;
  height: 30px;
  background: #2872f9;
  border-radius: 20px;
  z-index: 2;
  display: table;
  position: fixed;
  top: 5%;
  left: 95%;
  transform: translate(-50%, -50%);
  cursor: pointer;
}
.modal_close_ok{
  display: table-cell;
  vertical-align: middle;
  text-align: center;
  color: white;
  cursor: pointer;
}

.modal_frame_ad{
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 1200px;
  height: 700px;
  background: none;
  background-repeat: no-repeat;
  background-size:contain;
  animation-duration: 0.7s;
  animation-name: opening;
  z-index: 98;
  opacity: 1;
}
/* 애니메이션들,*/
  /*열리는 애니메이션 opening*/
@keyframes opening {
  from {
    top:150%;
    opacity: 0;
  }

  to {
    top:50%;
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
<script>
export default {
  name: 'GlobalModal',
  methods : {
    modalClose() {
      this.$store.commit('gModalOff');
    }
  },
  props: {
    gModalState: {
      type: Boolean,
      required: true
    }
  }
}
  
</script>

