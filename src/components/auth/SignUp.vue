<template>
  <div class="FullView">
    <!--컴포넌트 전체영역-->
    <img class="background_img" src="@/assets/imgs/background.png" alt="">
    <div class="sign_box SignUp_Anime"><!--전체 로그인 화면-->
      <div class="sign_title "> <!--로그인 타이틀-->
        <span>SIGN UP</span>
      </div>
      <div class="sign_inner_box"> <!--로그인 타이틀 아래, 기능부의 전체를 감싸는 검은박스-->
      
        <div class="input_box">
          <!--약관동의-->
          <div class="Pagenation" v-if="stepCount == 0">
            <div class="terms_title_position"> <p class="terms_title">이용약관</p>
          </div>
          <div class="terms_frame">
            <div class="terms_inner">
              <p>내용</p>
            </div>
          </div>
        </div>

        <!--1페이지-->
        <div class="Pagenation" v-if="stepCount == 1">
          <p class="use_info_label">사용할 ID</p>
          <input class="use_info_input" type="text" v-model="newId">
          <div class="id_Check_button" @click="existIdCheck()" v-if="newIdCheck == false">
            <span class="button_label">중복체크</span>
          </div>
          <div class="id_Check_button" v-else>
            <span class="button_label">완료</span>
          </div>

          <p class="use_info_label">비밀번호</p>
          <input class="use_info_input" type="password" v-model="newPw">

          <p class="use_info_label">비밀번호 확인</p>
          <input class="use_info_input" type="password" v-model="newPwCheck">
          <div v-if="pwMatch == false">
            <span>비밀번호를 동일하게 입력해주세요.</span>
          </div>

          <div class="next_button" @click="step1()">
            <span class="button_label">다음 단계로</span>
          </div>
        </div>

        <!--2페이지-->
        <div class="Pagenation" v-if="stepCount == 2">
          <p class="use_info_label">이름</p>
          <input class="use_info_input" type="text" v-model="newName">

          <p class="use_info_label">성별</p>
          <div class="use_info_select">
            <label class="use_info_name" >
              남자
              <input class="use_info_radio" name="sex" value="M" type="radio" @change="radioChange($event)">        
            </label>
            <label class="use_info_name" >
              여자
              <input class="use_info_radio" name="sex" value="F" type="radio" @change="radioChange($event)">        
            </label>
            <label class="use_info_name" >
              비공개
              <input class="use_info_radio" name="sex" value="null" type="radio" @change="radioChange($event)">        
            </label>
        </div>

          <!-- <p class="use_info_label">생년월일</p>
          <input class="use_info_input" type="password"> -->
        <p class="use_info_label">전화번호</p>
        <input class="use_info_input" type="text">
          
        <div class="next_button">
          <span class="button_label">다음 단계로</span>
        </div>

      </div>

        <!--3페이지-->
        <div class="Pagenation" v-if="stepCount == 3">
          <p class="use_info_label">닉네임</p>
          <input class="use_info_input" type="text">
          <div class="nick_Check_button"><span class="button_label">니가쓰셈</span></div>
          <!-- <p class="use_info_label">프로필 사진</p>
          <input class="use_info_input" type="password"><div class="img_browse_button"><span class="button_label">Browse</span></div> -->
          <p class="use_info_label">이메일</p>
          <input class="use_info_input" type="email">

          <div class="finish_button">
            <span class="button_label">가입완료</span>
          </div>
        </div>



        </div>
          <p class="cancel_label" @click="this.$router.push('/signin')">다음에 가입하기</p>
            
          <div class="agree_button" v-if="stepCount == 0">
            <span class="button_label" @click="agree()">동의합니다</span>
          </div>

          <!-- 패스 구현됐을때 쓸것 -->
          <!-- <div class="next_button">
            <span class="button_label">PASS 인증</span>
          </div> -->

        </div>
    </div>
 
  </div>
</template>

<script>
import axios from '../../axios';
export default {
  name: 'SignUp',
  data() {
    return {
      stepCount : 1, //가입절차 상태

      //입력값 매치 관련
      newIdCheck : false,
      newPwCheck : "",
      pwMatch : false,

      // 최종가입 데이터
      newId : "",
      newPw: "",
      newEmail : "",
      newNickname : "",
      newName : "",
      newSex : "M",
      newPhone : ""
    }
  },
  watch : {
    newPwCheck(input) {
      if(input != this.newPw) {
        this.pwMatch = false;
      } else {
        this.pwMatch = true;
      }
    }
  },
  methods : {

    //약관동의
    agree(){
      this.stepCount = 1;
    },

    //ID 중복검사
    existIdCheck() {

    },

    // 성별 radio값 체크
    radioChange(event){ 
      this.newSex = event.target.value;
    },

    // 최종 가입 진행
    signup() {
      var newUser = {
        newId : this.newId,
        newPw : this.newPw,
        newEmail : this.newEmail,
        newNickname : this.newNickname,
        newName : this.newName,
        newSex : this.newSex,
        newPhone : this.newPhone,
        newCardnum : null
      }

      axios.post('/api/auth/signUp', newUser)
      .then((result)=>{
        if(result.data == 'ok') {
          this.$router.push('/');
        } else {
          alert(result.data);
        }
      })
      .catch((err)=>{
        console.error(err);
      })
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
.sign_box{
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
.sign_title{
  position:absolute;
  top: 0%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 3em;
  font-weight: 700;
  color:white;
  z-index: 1;
}
.sign_inner_box{
  position:absolute;
  background: #2e2e2e;
  width: 980px;
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
.input_box{
  position:absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -55%);
  font-size: 1.2em;
}
.terms_frame{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -45%);
  width: 850px;
  height: 280px;
  background: #5e5e5e;
  border-radius: 25px;
  overflow: auto;
}

.terms_title_position {
  width: 200px;
  height: 300px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -48%);
}

.terms_inner{
  padding: 10px;
  color: white;
  word-break: break-all;
}

.terms_title {
  font-size: 1.2em;
  position: absolute;
  top: -5%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
}

.use_info_label{
  margin-top: 30px;
  margin-bottom: 0px;
  margin-right: 10px;
  color: white;
}

.use_info_radio{
  display: inline-block;
  transform: scale(1.7);
  border: none;
  margin-left: 10px;
}

.use_info_name{
  display: inline-block;
  padding: 10px;
  font-size: 1em;
}

.use_info_select{
  width: 450px;
  height: 50px;
  color: white;
  /* text-align: center; */
}

.use_info_input{
  width: 450px;
  height: 50px;
  padding-left: 10px;
  border-radius: 25px;
  background: #5e5e5e;
  color: white;
}
.next_button{
  position: absolute;
  background: #2872f9;
  left: 50%;
  top: 118%;
  width: 300px;
  height: 40px;
  transform: translate(-50%, -50%);
  border-radius: 20px;
  text-align: center;
  display: table;
}

.finish_button {
  position: absolute;
  background: #2872f9;
  left: 50%;
  top: 150%;
  width: 300px;
  height: 40px;
  transform: translate(-50%, -50%);
  border-radius: 20px;
  text-align: center;
  display: table;
}

.agree_button{
  position: absolute;
  background: #2872f9;
  left: 50%;
  top: 90%;
  width: 300px;
  height: 40px;
  transform: translate(-50%, -50%);
  border-radius: 20px;
  text-align: center;
  display: table;
}

.button_label{
  display: table-cell;
  vertical-align: middle;
  color: white;
}

.cancel_label{
  position: absolute;
  left: 30px;
  top: 90%;
  color: rgb(122, 122, 122);
  cursor: pointer;
  font-weight: 800;
}

.img_browse_button{
  position: absolute;
  background: #2872f9;
  left: 120%;
  top: 58%;
  width: 150px;
  height: 40px;
  transform: translate(-50%, -50%);
  border-radius: 20px;
  text-align: center;
  display: table;
}
.id_Check_button{
  position: absolute;
  background: #2872f9;
  left: 120%;
  top: 83px;
  width: 120px;
  height: 40px;
  transform: translate(-50%, -50%);
  border-radius: 20px;
  text-align: center;
  display: table;
}
.nick_Check_button{
  position: absolute;
  background: #2872f9;
  left: 120%;
  top: 83px;
  width: 120px;
  height: 40px;
  transform: translate(-50%, -50%);
  border-radius: 20px;
  text-align: center;
  display: table;
}

.SignUp_Anime{
  animation-name: SignUp;
  animation-duration: 0.5s;
  animation-fill-mode: forwards;
}

.Pagenation {
  animation-name: PageUp;
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

@keyframes PageUp {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>


