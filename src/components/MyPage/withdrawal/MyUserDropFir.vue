<template>

<!-- 내용과 버튼의 위치,크기조정 -->
<div class="drop-position-container">

  <!-- 탈퇴내용 -->
  <div class="exit-font">회원 탈퇴시 회원 정보 및 작성한 게시글에 대한 정보가 모두 지워집니다.
      <br>본 플랫폼에 투고한 작품도 판매 중지 후 데이터가 삭제됩니다.
      <br>소장한 작품에 대한 기록은 1개월 동안 유지되며, 이후 영구히 삭제됩니다
      <br>정말 VSN을 떠나시겠습니까?
  </div>

  <!-- 탈퇴버튼 -->
  <div>
    <div id="mypage_exit-pass-btn" @click="$emit('next')">탈퇴</div>
  </div>

</div>
</template>

<script>
export default {

}
</script>

<style>
/* 내용과 버튼의 위치,크기조정 */
.drop-position-container{
  padding-top: 12%;
  width: 800px;
  height: 450px;
  position: relative;
  top: 80px;
  margin: 0 auto;
}

/* 탈퇴내용 */
.exit-font{
  text-align: center;
  font-size: 1.3em;
  padding-bottom: 5%;
  color: white;
}

/* 탈퇴버튼 */
#mypage_exit-pass-btn{
  width: 120px;
  height: 40px;
  transform: translateX(350px);
  border-radius: 20px;
  background-color: #FF4C4D;
  color: white;
  font-size: 15px;
  cursor: pointer;
  text-align: center;
  line-height: 42px;
}
#mypage_exit-pass-btn:hover{
  background: #f83636;
}
</style>