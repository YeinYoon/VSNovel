<template>
  <table>
    <tr>
      <td colspan="2" class="exit-title">회원탈퇴를 위해 본인인증을 해야합니다.</td>
    </tr>
    <tr>
      <td class="exit-info">아이디</td>
      <td><input type="text"></td>
    </tr>
    <tr>
      <td class="exit-info">패스워드</td>
      <td><input type="text"></td>
    </tr>
    <tr>
      <td class="exit-info">이름</td>
      <td><input type="text"></td>
    </tr>
    <tr>
      <td class="exit-info">전화번호</td>
      <td><input type="text"></td>
    </tr>
    <tr>
      <td colspan="2"><button id="mypage_exit-pass" @click="$emit('end')">PASS 실행</button></td>
    </tr>
  </table>
</template>

<script>
export default {

}
</script>

<style>
.exit-title{
  font-size: 30px;
  text-align: center;
}
.exit-info{
  text-align: right;
  padding-right: 20px;
  font-size: 30px;
}
table{
  color: white;
  margin-left: 10%;
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
  transform: translateX(250px);
  border-radius: 20px;
  background-color: #FF4C4D;
  color: white;
  font-size: 15px;
  border: 0;
  outline: 0;
}
</style>