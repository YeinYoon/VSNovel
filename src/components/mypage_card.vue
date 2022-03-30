<template>
<<<<<<< Updated upstream:src/components/mypage_card.vue
<div>
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
=======
<div class="tests">
    <div class="header">
      <div class="service">
        <img class="icon" src="../../assets/icons/white/home.png" alt="logo" />
        <span class="title">마이페이지</span>
        <span class="topic">결제정보 설정</span>
      </div>
    </div>
  <div class="card-position-container">
    <table class="card-table">
      <tr>
        <td></td>
        <td class="top-info">결제시 사용할 카드정보를 등록해<br>
        간편한게 이용할 수 있습니다.</td>
        <td></td>
      </tr>
      <tr>
        <td class="card-num-name">카드번호</td>
        <td><input class="card-input" type="text"></td>
        <td class="card-num-info">16자리 숫자만 입력</td>
      </tr>
      <tr>
        <td class="bottom-smallfont">저장한 정보는 안전하게 암호화 되어<br>
        당사 DB에 보관됩니다.<br>
        보관근거-개인정보보호정책 및 이용약관</td>
        <td><img class="card-img" src="https://img1.kbcard.com/ST/img/cxc/kbcard/upload/img/product/04240_img.png" alt=""></td>
      </tr>
    </table>
    <footer class="card-footer">
      <button id="mypage_card-canc">취소</button>
      <button id="mypage_card-save">저장</button>
    </footer>
  </div>
>>>>>>> Stashed changes:src/components/MyPage/MyCard.vue
</div>
</template>

<script>
export default {

}
</script>

<style>
.card-position-container{
  width: 700px;
  height: 450px;
  position: relative;
  top: 7%;
  margin: 0 auto;
}
.card-table{
  margin: 0 auto;
  color: white;
  border-collapse: separate;
  border-spacing: 0 20px;
  width: 650px;
}
.card-img{
  width: 356px;
  height: 240px;
}

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
<<<<<<< Updated upstream:src/components/mypage_card.vue
html{
    background-color: #363636;
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
input{
=======

.card-input{
>>>>>>> Stashed changes:src/components/MyPage/MyCard.vue
  border: 0;
  outline: 0;
  text-align: center;
  color: white;
  width: 100%;
  height: 40px;
  background: #5E5E5E;
  border-radius: 20px;
}
.card-footer{
  background: none;
  border: 0px;
}
#mypage_card-canc{
  transform: translateX(350%);
  width: 120px;
  height: 40px;
  border-radius: 15px;
  background-color: #5E5E5E;
  color: white;
  font-size: 15px;
  border: 0;
  outline: 0;
  margin-right: 30px;
  margin-top:0;
}
#mypage_card-save{
  transform: translateX(350%);
  width: 120px;
  height: 40px;
  border-radius: 15px;
  background-color: #2872F9;
  color: white;
  font-size: 15px;
  border: 0;
  outline: 0;
}
</style>