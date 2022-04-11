<template>
<div class="tests">
    <div class="header">
      <div class="service">
        <img class="icon" src="@/assets/icons/white/home.png" alt="logo" />
        <span class="title">마이페이지</span>
        <span class="my_topic">결제정보 설정</span>
      </div>
    </div>

  <div class="card-position-container">
    
      <!-- 1행 이용가이드 -->
      <div class="card-container1">
        <div class="top-info">결제시 사용할 카드정보를 등록해<br>
        간편한게 이용할 수 있습니다.</div>
      </div>

      <!-- 2행 카드번호 입력 -->
      <div class="card-container2">
        <div class="card-num-name">카드번호</div>
        <input class="card-input" type="number" oninput="if(value.length>11)value=value.slice(0,15)" v-model="newCard" />
        <div class="card-num-info">16자리 숫자만 입력</div>
      </div>

      <!-- 3행 카드 이미지 표시 -->
      <div class="card-container3">
        <div class="bottom-smallfont">저장한 정보는 안전하게 암호화 되어<br>
        당사 DB에 보관됩니다.<br>
        보관근거-개인정보보호정책 및 이용약관</div>
        <img class="card-img" src="https://img1.kbcard.com/ST/img/cxc/kbcard/upload/img/product/04240_img.png" alt="">
      </div>

    <!-- 취소,저장버튼 -->
    <footer class="card-footer">
      <button id="mypage_card-canc">취소</button>
      <button id="mypage_card-save" @click="routerPush(myCard)">저장</button>
    </footer>

  </div>

  </div>
</template>

<script>
import axios from '../../axios';
export default {
  name: "MyCard",
  data() {
    return {
      myCard : "",
      myUser : "",
      newCard :""
    }
  },
  methods:{
    routerPush(myCard){
      this.myCard = myCard;
      this.register();
    },
    register() {
      var newInfo = {
        newCard : this.newCard
      }
      axios.post('/api/mypage/mycard', newInfo)
      .then((result) => {
        if(result.data.length != 0) {
          console.log(result)
        }
      }).catch((err) => {
        console.log(err);
      });
    }
  }
}
</script>

<style>

/* input type="number" 증감버튼 삭제 */
input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

/* 제목,부제목을 제외한 전체적인 위치 */
.card-position-container{
  width: 800px;
  height: 450px;
  position: relative;
  top: 15%;
  margin: 0 auto;
  
}

/* 1행(페이지 설명부분) 전체정렬 */
.card-container1{
  transform: translateX(3%);
  display: flex;
}

/* 2행(카드번호 입력부분) 전체정렬 */
.card-container2{
  transform: translateX(3%);
  display: flex;
}

/* 3행(카드이미지 부분) 전체정렬 */
.card-container3{
  transform: translateX(1%);
  display: flex;
}

/* 페이지 이용설명 */
.top-info{
  text-align: center;
  font-size: 1.2em;
  color: white;
  margin-left: 30%;
  margin-bottom: 2%;
}

/* 카드번호 글자 */
.card-num-name{
  width: 100px;
  text-align: right;
  color: white;
  margin-top: 10px;
  margin-right: 10px;
}

/* 카드번호 입력내용 */
.card-input{
  text-align: center;
  color: white;
  width: 500px;
  height: 40px;
  background: #5E5E5E;
  border-radius: 20px;
  padding: 15px;
}

/* 16자리 숫자입력 공지 */
.card-num-info{
  margin-top: 10px;
  margin-left: 10px;
  width: 200px;
  color: white;
  vertical-align: bottom;
}

/* 3행 왼쪽 이용약관 */
.bottom-smallfont{
  margin-top: 27%;
  margin-right: 10px;
  color: white;
  font-size: 0.8em;
}

/* 카드이미지가 들어갈 공간 */
.card-img{
  width: 356px;
  height: 240px;
  margin-top: 30px;
}

/* footer부분 */
.card-footer{
  background: none;
  border: 0px;
}

/* 취소버튼 */
#mypage_card-canc{
  transform: translateX(350%);
  width: 120px;
  height: 40px;
  border-radius: 15px;
  background-color: #5E5E5E;
  color: white;
  font-size: 15px;
  margin-right: 30px;
  margin-top:0;
}

/* 저장버튼 */
#mypage_card-save{
  transform: translateX(350%);
  width: 120px;
  height: 40px;
  border-radius: 15px;
  background-color: #2872F9;
  color: white;
  font-size: 15px;
}

</style>