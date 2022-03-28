<template>
<div class="tests">
    <div class="header">
      <div class="service">
        <img class="icon" src="../../assets/icons/white/home.png" alt="logo" />
        <span class="title">마이페이지</span>
        <span class="topic">결제정보 설정</span>
      </div>
    </div>
  <table>
    <tr>
      <td></td>
      <td class="top-info">결제시 사용할 카드정보를 등록해<br>
      간편한게 이용할 수 있습니다.</td>
      <td></td>
    </tr>
    <tr>
      <td class="card-num-name">카드번호</td>
      <td><input type="text"></td>
      <td class="card-num-info">16자리 숫자만 입력</td>
    </tr>
    <tr>
      <td class="bottom-smallfont">저장한 정보는 안전하게 암호화 되어<br>
      당사 DB에 보관됩니다.<br>
      보관근거-개인정보보호정책 및 이용약관</td>
      <td><img src="https://www.bccard.com/images/individual/card/renew/list/card_228028.png" alt=""></td>
    </tr>
  </table>
  <footer>
    <button id="mypage_card-canc">취소</button>
    <button id="mypage_card-save">저장</button>
  </footer>
</div>
</template>

<script>
export default {

}
</script>

<style>
.top-info{
  text-align: center;
  font-size: 25px;
}
.bottom-smallfont{
  font-size: 12px;
  vertical-align: bottom;
}
.card-num-name{
  text-align: right;
  padding-right: 15px;
}
.card-num-info{
  font-size: 12px;
  vertical-align: bottom;
}
table{
  color: white;
  margin-left: 5%;
  margin-top: 10%;
  border-collapse: separate;
  border-spacing: 0 20px;
}
tr{
  padding: 50px;
}
table input{
  border: 0;
  outline: 0;
  color: white;
  width: 100%;
  height: 40px;
  background: #5E5E5E;
  border-radius: 20px;
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
#mypage_card-canc{
  width: 120px;
  height: 40px;
  transform: translateX(400%);
  border-radius: 15px;
  background-color: #5E5E5E;
  color: white;
  font-size: 15px;
  border: 0;
  outline: 0;
  margin-right: 30px;
}
#mypage_card-save{
  width: 120px;
  height: 40px;
  border-radius: 15px;
  transform: translateX(390%);
  background-color: #2872F9;
  color: white;
  font-size: 15px;
  border: 0;
  outline: 0;
}
</style>