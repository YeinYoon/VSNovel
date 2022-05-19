<template>
<div class="drop-sec-container">

    <div class="drop-sec-title">
      <div class="exit-title">회원탈퇴를 위해 본인인증을 해야합니다.</div>
    </div>

    <div class="drop-sec-row">
      <div class="exit-info-position">아이디</div>
      <input type="text" class="drop-input-cont" v-model="newId">
    </div>

    <div class="drop-sec-row">
      <div class="exit-info-position">패스워드</div>
      <input type="password" class="drop-input-cont" v-model="newPw">
    </div>

    <div class="drop-sec-row">
      <div class="exit-info-position">이름</div>
      <input type="text" class="drop-input-cont" v-model="newName">
    </div>

    <div class="drop-sec-row">
      <div class="exit-info-position">전화번호</div>
      <input type="text" class="drop-input-cont" v-model="newNumber">
    </div>

    <button id="mypage_exit-pass" @click="destroyBtn()">탈퇴</button>

</div>
</template>

<script>
import axios from '../../../axios';
export default {
  data() {
    return {
      newId:"",
      newPw:"",
      newName:"",
      newNumber:""
    };
  },
  methods: {
    destroyBtn() {
      axios.post('/api/mypage/postconfirm')
      .then((result) => {
        if(result.data == 'err') {
          console.log('err')
        } else {
          this.$store.commit("userLogin", null);
          this.$router.push("/");
        }
      })
    }
  }
}
</script>

<style>
/* 전체위치 조정 */
.drop-sec-container{
  padding-top:6%;
  color: white;
  width: 600px;
  height: 450px;
  position: relative;
  top: 70px;
  margin: 0 auto;
  text-align: center;
}

/* 각행의 정렬 */
.drop-sec-row{
  display: flex;
  padding-bottom: 3%;
  width: 100%;
}

/* 페이지 설명(맨윗부분) */
.drop-sec-title{
  margin-left: 5%;
  margin-bottom: 5%;
}

/* 페이지 설명 글자 */
.exit-title{
  font-size: 1.8em;
  text-align: center;
}

/* 아이디,패스워드 등의 글자 정렬 */
.exit-info-position{
  flex: 2;
  font-size: 1.3em;
}

/* 내용입력 부분 */
.drop-input-cont{
  flex: 8;
  background:green;
  color: white;
  width: 400px;
  height: 40px;
  background: #5E5E5E;
  border-radius: 20px;
  margin-right: 10px;
  padding: 15px;
}

/* PASS 실행버튼 */
#mypage_exit-pass{
  width: 120px;
  height: 40px;
  border-radius: 20px;
  background-color: #FF4C4D;
  color: white;
  font-size: 1em;
  text-align: center;
  line-height: 42px;
  cursor: pointer;
  margin-left: 40%;
}
</style>