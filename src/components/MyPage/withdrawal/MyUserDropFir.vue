<template>
  <table>
    <tr>
      <td class="exit-title">회원 탈퇴시 회원 정보 및 작성한 게시글에 대한 정보가 모두 지워집니다.
          <br>본 플랫폼에 투고한 작품도 판매 중지 후 데이터가 삭제됩니다.
          <br>소장한 작품에 대한 기록은 1개월 동안 유지되며, 이후 영구히 삭제됩니다
          <br>정말 VSN을 떠나시겠습니까?
      </td>
    </tr>
    <tr>
      <td><button id="mypage_exit-pass" @click="$emit('next')">탈퇴</button></td>
    </tr>
  </table>
</template>

<script>
export default {

}
</script>

<style>

.exit-title{
  font-size: 25px;
  text-align: center;
}
table{
  color: white;
  margin-left: 5%;
  margin-top: 20%;
  border-collapse: separate;
  border-spacing: 0 20px;

}
table input{
  border: 0;
  outline: 0;
  color: white;
  width: 400px;
  height: 40px;
  background: #5E5E5E;
  border-radius: 20px;
  margin-right: 10px;
}
input::placeholder{
  color: white;
  font-size: 25px;
}
#mypage_card{
  width: 540px;
  height: 50px;
  border-radius: 10px;
  background-color: #5E5E5E;
}
#mypage_exit-pass{
  width: 120px;
  height: 40px;
  transform: translateX(260px);
  border-radius: 20px;
  background-color: #FF4C4D;
  color: white;
  font-size: 15px;
  border: 0;
  outline: 0;
}
</style>