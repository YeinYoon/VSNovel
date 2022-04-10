<template>
  <div>
    <div class="sideBar">
      <div class="side_search">
        <img src="../../assets/icons/magnifier.png" class="side_icon" />
        <input type="text" />
      </div>
      <div>
        <div class="group" id="main">
          <span>· 마이페이지</span>
        </div>
        <div class="sel" v-for="(array, i) in sideArrays" :key="i">
          <div @click="clickEvent(i, $event, array)" id="element">
            · {{ array }}
          </div>
        </div>
      </div>
    </div>
      <div v-if="myStep == '프로필 설정'"><MyPage /></div>
      <div v-if="myStep == '결제정보 페이지'"><MyCard /></div>
      <div v-if="myStep == '내가 쓴 게시글'"><MyPost /></div>
      <div v-if="myStep == '작성 리뷰 관리'"><Myreview /></div>
      <div v-if="myStep == '선호 / 비선호 설정'" @save="myStep = '프로필 설정'"><Prefer /></div>
      <div v-if="myStep == '알림 설정'"><MyAlarm /></div>
      <div v-if="myStep == '회원 탈퇴'">
        <MyWithdrawal @myMain="myStep = '프로필 설정'" />
      </div>
      <div class="Temp_LogoutButton" @click="logout()"><button class="mypage_logout">로그아웃</button></div>
  </div>
</template>

<script>
import axios from '../../axios'
import MyPage from "../MyPage/MyPageMain";
import MyCard from "../MyPage/MyCard";
import MyPost from "../MyPage/MyPost";
import Myreview from "../MyPage/Myreview";
import Prefer from "../MyPage/Prefer";
import MyAlarm from "../MyPage/MyAlarm";
import MyWithdrawal from "../MyPage/withdrawal/MyWithdrawal";
export default {
  name: "MypageSide",
  data() {
    return {
      myStep: "프로필 설정",
      sideArrays: [
        "프로필 설정",
        "결제정보 페이지",
        "내가 쓴 게시글",
        "작성 리뷰 관리",
        "선호 / 비선호 설정",
        "알림 설정",
        "회원 탈퇴",
      ],
      clickNum: 0,
    };
  },
  mounted(){
    // 기본 강조 효과
    let id = document.querySelectorAll("#element")
    id[this.clickNum].style.backgroundColor = "#2872f9"
  },
  methods: {
    clickEvent(index, event, array) {
    // 강조효과 및 메인 화면 변경
      this.myStep = array;
      let id = document.querySelectorAll("#element");
      event.target.style.backgroundColor = "#2872f9";
      if (this.clickNum != null) {
        if (this.clickNum != index) {
          id[this.clickNum].style.backgroundColor = "#2c2c2c";
        }
      }
      this.clickNum = index;
    },

    logout() {
      axios.get('/api/auth/logout')
      .then((result)=>{
        if(result.data == "ok") {
          this.$store.commit('userLogin', null);
          this.$router.push('/');
        } else {
          this.$store.commit('gModalOn', {msg : "ERR : 로그아웃 실패", size : "normal"});
        }
      })
    }
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
  width: 250px;
  height: 100vh;
  position: fixed;
  top: 0px;
  left: 140px;
}

/* -------------------------------------------------------------------- */
.sel div {
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

.Temp_LogoutButton{
  position: absolute;
  left: 160px;
  top: 90%;
}

.mypage_logout {
  width: 100px;
  height: 50px;
  border-radius: 10px;
  background: #2872f9;
  color: white;
}

</style>