<template>
  <div class="all">
    <!-- 로고쪽 -->
    <div class="header">
      <div class="service">
        <img class="icon" src="@/assets/icons/white/cart.png" alt="logo" />
        <span class="title">결제 페이지</span>
      </div>
    </div>
    <!-- 주문 쪽 -->
    <div class="modal_in">
      <div class="order">
        <span class="order_id">주문자 ID</span>
        <input class="order_box" type="text" />
      </div>
      <div class="info_flex">
        <div class="info">
          <div class="check_line">
            <input type="checkbox" class="order_check" id="chk" />
            <label for="chk" class="order_font">저장된 결제정보로 결제</label>
            <select class="order_sel">
              <option class="order_option">카드결제</option>
              <option class="order_option">무통장 입금</option>
              <option class="order_option">휴대폰 결제</option>
            </select>
          </div>
          <div class="card_info_num">
            <span class="card_num">카드번호</span>
            <input type="text" class="card_box" maxlength="16">
          </div>
          <div class="date_info">
            <span class="date_info_id">유효기간</span>
            <input type="date" class="date_info_box">
            <span class="date_cvc">CVC</span>
            <input type="text" class="date_cvc_box">
          </div>
          <div class="name_info">
            <span class="name_id">회원이름</span>
            <input type="text" class="name_box">
          </div>
        </div>
        <div class="add_flex">
          <span class="add_text">주문상품 정보</span>
          <div class="add_box_data">주문상품 상자</div>
          <div class="add_pay" @click="$emit('next')">
            <span>총가격 <br />
              결제하기
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "StoreCard",
  data() {
    return {};
  },
  methods: {},
};
</script>

<style>
.all {
  color: white;
}
.modal_in {
  width:95%;
  height: 90%;
  position:absolute;
  top: 70%;
  left: 50%;
  transform: translate(-50%, -50%);
  /* background-color: antiquewhite; */
}
/* 주문자 id div */
.order {
  display: flex;
  width: 50%;
  margin: 10px 0 10px 0;
}
/* 주문자 id */
.order_id {
  /* flex: 4; */
  width: 120px;
  font-size: 1.4em;
  font-weight: 800;
  padding: 5px 0 0 5px;
  transform: translate(15px);
}
/* 주문자 input */
.order_box {
  background-color: #5e5e5e;
  border-radius: 15px;
  height: 40px;
  flex: 8;
}
/* 아래 전체 */
.info_flex {
  display: flex;
  height: 300px;
}
/* 모달 안의 상자 박스 */
.info {
  background-color: #353535;
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px 20px 20px 20px;
  margin: 15px;
  border-radius: 10px;
}
/* 체크박스 라인 div */
.check_line {
  display: flex;
  align-items: center;
}
/* 체크박스 */
.order_check {
  width: 30px;
  height: 30px;
}
/* 체크박스 옆 글자 */
.order_font {
  font-size: 1.1em;
  flex: 3;
  margin: 0 0 0 10px;
}
/* 셀렉트 */
.order_sel {
  flex: 3;
  border-radius: 10px;
  background-color: #5e5e5e;
  /* color: white;  */
  height: 40px;
  text-align: right;
  padding-left: 10px;
  /* -webkit-appearance: none; */
}
select:focus {
  outline: none;
}
.order_option::-ms-expand {
  display: none;
}
/* 셀렉트 옵션 */
.order_option {
  background-color: gray;
}
/* 카드 번호 라인 */
.card_info_num {
  display: flex;
  align-items: center;
  margin: 30px 0 5px 0;
}
/* 카드 번호 고정 글 */
.card_num {
  font-size: 1.2em;
  font-weight: 800;
  text-align: center;
  flex: 2;
}
/* 카드 번호 상자 */
.card_box {
  flex: 8;
  background-color: white;
  color: black;
  height: 40px;
  line-height: 40px;
  padding: 0 5px;
  border-radius: 10px;
}
/* 유효기간 라인 */
.date_info {
  display: flex;
  align-items: center;
  margin: 10px 0 5px 0;
}
/* 유효기간 고정 글 */
.date_info_id {
  flex: 2;
  font-size: 1.2em;
  font-weight: 800;
  text-align: center;
  height: 40px;
  line-height: 40px;
}
/* 유효기간 박스 */
.date_info_box {
  flex: 3;
  background-color: white;
  color: black;
  display: table-cell;
  height: 30px;
  padding: 0 5px;
  border-radius: 10px;
  height: 40px;
  line-height: 40px;
}
/* cvc 고정 글 */
.date_cvc {
  flex: 2;
  font-size: 1.2em;
  font-weight: 800;
  text-align: center;
}
/* cvc 박스 */
.date_cvc_box {
  flex: 3;
  background-color: white;
  color: black;
  height: 30px;
  padding: 0 5px;
  border-radius: 10px;
  height: 40px;
  line-height: 40px;
}
/* 이름 라인 */
.name_info {
  display: flex;
  align-items: center;
  margin: 10px 0 0 0;
}
/* 이름 고정 글 */
.name_id {
  flex: 2;
  font-size: 1.2em;
  font-weight: 800;
  text-align: center;
}
/* 이름 박스 */
.name_box {
  flex: 8;
  background-color: white;
  color: black;
  display: table-cell;
  height: 30px;
  padding: 0 5px;
  border-radius: 10px;
  height: 40px;
  line-height: 40px;
}
/* 오른쪽 플렉스 설정 */
.add_flex {
  display: flex;
  flex-direction: column;
  float: right;
  width: 30%;
  margin: 0 10px;
  transform: translateY(-5%);
}
/* 오른쪽 위 글자*/
.add_text {
  font-size: 1.1em;
  margin: 0 0 5px 0;
  font-weight: 800;
  transform: translateX(38%);
}
/* 오른쪽 박스 */
.add_box_data {
  background-color: #6e6e6e;
  border-radius: 10px;
  padding: 10px;
  height: 220px;
  margin: 5px 0;
}
/* 오른쪽 가격 */
.add_pay {
  font-size: 1.2em;
  display: table;
  background-color: #2872f9;
  padding: 5px 20px;
  height: 50px;
  text-align: center;
  border-radius: 10px;
}
.add_pay .span {
  display: table;
  vertical-align: middle;
}
</style>