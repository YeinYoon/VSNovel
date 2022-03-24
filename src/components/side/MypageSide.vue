<template>
<div>
  <div class="sideBar">
    <div class="side_search">
      <img src="../../assets/icons/magnifier.png" class="side_icon" />
      <input type="text" />
    </div>
    <div>
      <div class="group" @click="step = 'main'"><span>· 마이페이지</span></div>
      <div class="sel">
        · 결제정보 설정
      </div>
      <div class="sel"  @click="step = 'mypost'">
        · 내가 쓴 게시글
      </div>
      <div class="sel"  @click="step = 'myReview'">
        · 작성 리뷰 관리
      </div>
      <div class="sel" @click="step = 'prefer'">
        · 선호 / 비선호 설정
      </div>
      <div class="sel">
        · 알림 설정
      </div>
      <div class="sel">
        · 회원 탈퇴
      </div>
    </div>
  </div>
  <div v-if="step == 'main'">  <MyPage /> </div>
  <div v-if="step == 'mypost'">  <MyPost /> </div>
  <div v-if="step == 'myReview'">  <Myreview /> </div>
  <div v-if="step == 'prefer'">  <Prefer /> </div>
 
</div>
</template>

<script>
import MyPage from '../MyPage/MyPageMain';
import MyPost from '../MyPage/MyPost';
import Myreview from '../MyPage/Myreview';
import Prefer from '../MyPage/Prefer';
export default {
  name: "StoreSide",
  data() {
    return {
      groupStep: "",
      step: 'main',
    };
  },
  components:{
    MyPage,
    MyPost,
    Myreview,
    Prefer,
  },
};
</script>

<style>
.sideBar {
  font-size: 1.2em;
  display: flex;
  flex-direction: column;
  padding: 50px 10px 0 10px;
  background: #2c2c2c;
  width: 200px;
  height: 100vh;
  /* overflow: auto; */
  position: fixed;
  top: 0px;
  left: 140px;
}
/* -------------------------------------------------------------------- */

.side_search {
  background-color: white;
  width: 180px;
  height: 40px;
  padding: 5px 10px;
  border: 1px solid black;
  border-radius: 30px;
  margin: 0 0 25px 0;
  top: 45px;
}
.side_search .side_icon {
  position: relative;
  top: -0px;
  left: -5px;
  width: 30px;
  height: 30px;
}
.side_search input {
  width: 120px;
  border: none;
  font-size: 100%;
}
.side_search input:focus {
  outline: 0px;
}
.group {
  width: 180px;
  height: 40px;
  background-color: white;
  padding: 5px 10px 5px 20px;
  border: none;
  border-radius: 30px;
  font-weight: 700;
  display: table;
}
.group span {
  display: table-cell;
  vertical-align: middle;
}
.sel {
  width: 160px;
  height: 40px;
  color: white;
  padding: 5px 10px 5px 20px;
  text-align: left;
  margin: 10px 0 0 20px;
  border-radius: 30px;
  font-weight: 600;
  font-size: 0.8em;
}
</style>