<template>
  <div>
    <div class="sideBar">
      <div class="side_search">
        <img src="../../assets/icons/magnifier.png" class="side_icon" />
        <input type="text" />
      </div>
      <div>
        <div class="group" id="main" @click="eventStep('main', $event)">
          <span>· 마이페이지</span>
        </div>
        <div class="sel" id="mycard" @click="eventStep('mycard', $event)">
          · 결제정보 설정
        </div>
        <div class="sel" id="mypost" @click="eventStep('mypost', $event)">
          · 내가 쓴 게시글
        </div>
        <div class="sel" id="myReview" @click="eventStep('myReview', $event)">
          · 작성 리뷰 관리
        </div>
        <div class="sel" id="prefer" @click="eventStep('prefer', $event)">
          · 선호 / 비선호 설정
        </div>
        <div class="sel" id="myAlarm" @click="eventStep('myAlarm', $event)">
          · 알림 설정
        </div>
        <div
          class="sel"
          id="myWithdrawal"
          @click="eventStep('myWithdrawal', $event)"
        >
          · 회원 탈퇴
        </div>
      </div>
    </div>
    <div v-if="step == 'main'"><MyPage /></div>
    <div v-if="step == 'mycard'"><MyCard /></div>
    <div v-if="step == 'mypost'"><MyPost /></div>
    <div v-if="step == 'myReview'"><Myreview /></div>
    <div v-if="step == 'prefer'"><Prefer /></div>
    <div v-if="step == 'myAlarm'"><MyAlarm /></div>
    <div v-if="step == 'myWithdrawal'"><MyWithdrawal /></div>
  </div>
</template>

<script>
import MyPage from "../MyPage/MyPageMain";
import MyCard from "../MyPage/MyCard";
import MyPost from "../MyPage/MyPost";
import Myreview from "../MyPage/Myreview";
import Prefer from "../MyPage/Prefer";
import MyAlarm from "../MyPage/MyAlarm";
import MyWithdrawal from "../MyPage/withdrawal/MyWithdrawal";
export default {
  name: "StoreSide",
  data() {
    return {
      groupStep: "",
      step: "main",
    };
  },
  methods: {
    eventStep(info, event) {
      this.step = info;
      if (this.step == "main") {
        event.target.style.backgroundColor = "white";
      } else {
        event.target.style.backgroundColor = "#2872f9";
      }
    },
  },
  components: {
    MyPage,
    MyCard,
    MyPost,
    Myreview,
    Prefer,
    MyAlarm,
    MyWithdrawal,
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
  width: 300px;
  height: 100vh;
  /* overflow: auto; */
  position: fixed;
  top: 0px;
  left: 140px;
}
/* -------------------------------------------------------------------- */
.sel {
  width: 90%;
  height: 40px;
  color: white;
  padding: 5px 10px 5px 20px;
  text-align: left;
  margin: 10px 0 0 20px;
  border-radius: 30px;
  font-weight: 600;
  font-size: 1em;
}
</style>