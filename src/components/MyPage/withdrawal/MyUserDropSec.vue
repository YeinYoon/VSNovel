<template>
<div class="drop-sec-container">

    <div class="drop-sec-title">
      <div class="exit-title">회원탈퇴를 위해 본인인증을 해야합니다.</div>
    </div>

    <div class="drop-sec-row">
      <div class="exit-info-position">아이디</div>
      <input type="text" class="drop-input-cont">
    </div>

    <div class="drop-sec-row">
      <div class="exit-info-position">패스워드</div>
      <input type="password" class="drop-input-cont">
    </div>

    <div class="drop-sec-row">
      <div class="exit-info-position">이름</div>
      <input type="text" class="drop-input-cont">
    </div>

    <div class="drop-sec-row">
      <div class="exit-info-position">전화번호</div>
      <input type="text" class="drop-input-cont">
    </div>

    <div id="mypage_exit-pass" @click="$emit('end')">PASS 실행</div>

</div>
</template>

<script>
export default {

}
</script>

<style>
/* 전체위치 조정 */
.drop-sec-container{
  padding-top:6%;
  color: white;
  width: 95%;
  height: 450px;
  position: relative;
  top: 70px;
  margin: 0 auto;
  text-align: center;

}

/* 각행의 정렬 */
.drop-sec-row{
  display: flex;
  padding-bottom: 20px;
  width: 100%;
}

/* 페이지 설명(맨윗부분) */
.drop-sec-title{
  margin-left: 5%;
  margin-bottom: 20px;
}

/* 페이지 설명 글자 */
.exit-title{
  font-size: 1.4em;
  text-align: center;
}

/* 아이디,패스워드 등의 글자 정렬 */
.exit-info-position{
  flex: 3;
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
#mypage_exit-pass:hover{
  background: #f83636;
}
</style>