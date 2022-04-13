<template>
  <div class="FullView">
      <!--컴포넌트 전체영역-->
      <img class="background_img" src="@/assets/imgs/background.png" alt="">
        <div class="helpUp_Anime">
          <div class="help_box"><!--전체 화면-->
            <div class="help_title"> <!-- 타이틀-->
              <span>로그인 문제 해결
              </span>
            </div>
            <div class="help_inner_box"> <!--타이틀 아래, 기능부의 전체를 감싸는 검은박스-->
              
              <div class="help_helper_frame"> <!--로그인 문제 해결 관련 기능들은 이안에 -->
                1234567
              
              
              </div> <!--기능 요까지-->

            <p class="cancel_label" @click="this.$router.push('/signin')">기존 페이지로 돌아가기</p>
            </div>
          </div>
        </div>
  </div>
</template>

<script>
export default {
  name: 'SignUp',
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
.contentbackground {
  background:#353535;
  width: 100vw;
  height: 100vh;
  z-index: -100;
  overflow: auto;
}
.help_box{
  position:absolute;
  width: 70%;
  height: 70%;
  padding-top: 3vh;
  padding-bottom: 3vh;
  padding-left: 3vh;
  padding-right: 3vh;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.background_img {
  position:absolute;
  top: 50%;
  left: 50%;
  object-fit: cover;
  width: 100vw;
  height: 100vh;
  transform: translate(-50%, -50%);
}
.help_title{
  position:absolute;
  top: 0%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 2.5em;
  font-weight: 700;
  color:white;
  z-index: 1;
}
.help_inner_box{
  position:absolute;
  background: #2e2e2e;
  width: 1100px;
  height: 450px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -40%);
  padding-top: 50px;
  padding-left: 50px;
  padding-right: 50px;
  padding-bottom: 50px;
  border-radius: 25px;
}

.help_helper_frame{
  position:absolute;
  background: white;
  width: 90%;
  height: 75%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -53%);
  padding: 20px;
  border-radius: 20px;
}



.helpUp_Anime{
  animation-name: SignUp;
  animation-duration: 0.5s;
  animation-fill-mode: forwards;
}

@keyframes SignUp {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>


