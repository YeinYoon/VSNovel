<template>
  <div class="RouterView"> <!--컴포넌트 전체영역-->
      <div class="Engine_Promo_frame">
        <div class="Promo_title">
          <img class="Promo_title_icon" src="@/assets/icons/vsn_engine.png">
          <p>Visual Studio Novel Engine</p>
        </div>

        <div class="Promo_Setup">
          <div class="Promo_Setup_Button">
            <button>설치</button>
            <!-- <button>실행</button> -->
            <!-- <button>업데이트</button> -->
            </div>
          <div class="Promo_Setup_Info">
            <p>최신 릴리즈 - 2022-04-08</p>
            <p>빌드버전 - 0180</p>
          </div>
        </div>

        <div class="Promo_Content">
          <div class="Promo_Banner">
            <img src="@/assets/imgs/background.png">
          </div>

          <div class="Promo_Info">
            123
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Engine',
  data() {
    return {
      stepCount : 1,
    }
  },

  components: {
  },
}
  
</script>

<style>
.Engine_Promo_frame {
  position: absolute;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 100%;
  overflow: auto;
}

.Engine_Promo_frame::-webkit-scrollbar {
  display: none;
}

.Promo_title {
  position: absolute;
  width: 500px;
  height: 200px;
  left: 297px;
  top: 136px;
  transform: translate(-50%, -50%);
  text-align: center;
  font-size: 2em;
  color: white;
  font-weight: 600;
}

.Promo_title_icon {
  position: absolute;
  top: -1px;
  left: -7px;
  width: 50px;
  height: 50px;
}

.Promo_Setup{
  position: absolute;
  width: 300px;
  height: 200px;
  left: calc(100% - 110px);
  top: 65px;
  transform: translate(-50%, -50%);
  text-align: center;
  color: white;
}

.Promo_Setup_Button {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

.Promo_Setup_Button Button{
  background: #2872f9;
  width: 160px;
  height: 50px;
  color: white;
  font-size: 1.3em;
  border-radius: 15px;
}

.Promo_Setup_Info{
  position: absolute;
  left: -10%;
  top: 100px;
  transform: translate(-50%, -50%);
  background: #808080;
  width: 160px;
  height: 50px;
  font-size: 0.8em;
  line-height: 2px;
  border-radius: 0px 15px 0px 15px;
  padding-top: 16px;
}

.Promo_Content{
  position: absolute;
  width: calc(100% - 50px);
  transform: translate(-50%, -50%);
  top: 110px;
  left: 50%;
}

.Promo_Banner {
  position: absolute;
  width: 100%;
  height: 300px;
  border-radius: 25px;
  overflow: hidden;
}

.Promo_Banner img{
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.Promo_Info {
  position: absolute;
  top: 320px;
  width: 100%;
  height: 900px;
  background: rgb(73, 73, 73);
  border-radius: 25px;
}


.Engine_Anime{
  animation-name: Engine;
  animation-duration: 0.5s;
  animation-fill-mode: forwards;
}

@keyframes Engine {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>


