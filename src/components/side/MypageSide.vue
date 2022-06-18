<template>
  <div>
    <router-view />
    <div class="Temp_LogoutButton" @click="logout()"><button class="mypage_logout">로그아웃</button></div>
  </div>
</template>

<script>
import axios from '../../axios';
export default {
  name: "MypageSide",
  data() {
    return {
      myStep: "프로필 설정",
      sideArrays: [
        {name : "프로필 설정",        url:"mymain"},
        {name : "결제정보 페이지",    url:"mycard"},
        {name : "내가 쓴 게시글",     url:"mypost"},
        {name : "작성 리뷰 관리",     url:"myreview"},
        {name : "선호 / 비선호 설정", url:"prefer"},
        {name : "알림 설정",          url:"myalarm"},
        {name : "회원 탈퇴",          url:"mywithdrawal"},
      ],
      clickNum: 0,
    };
  },

  created() {
    this.$store.commit('sideBarOn');
    this.$store.commit('currentServiceCng', 'U');
  },

  mounted() {
    // 기본 강조 효과
    let id = document.querySelectorAll("#element")
    id[this.clickNum].style.backgroundColor = "#2872f9"
      // 라우터 이동
    this.$router.push('/mypage/mymain');
  },
  methods: {
    clickEvent(index, event, item) {
    // 강조효과 및 메인 화면 변경
      this.myStep = item.name;
      let id = document.querySelectorAll("#element");
      event.target.style.backgroundColor = "#2872f9";
      if (this.clickNum != null) {
        if (this.clickNum != index) {
          id[this.clickNum].style.backgroundColor = "#2c2c2c";
        }
      }
      this.clickNum = index;
      // 라우터 이동
      this.$router.push('/mypage/' + item.url);
    },

    logout() {
      axios.get("/api/auth/logout").then((result) => {
        if (result.data == "ok") {
          this.$store.commit("userLogin", null);
          this.$router.push("/");
        } else {
          this.$store.commit("gModalOn", {
            msg: "ERR : 로그아웃 실패",
            size: "normal",
          });
        }
      })
    }
  },
};
</script>

<style>
.group {
  cursor: pointer;
}
/* -------------------------------------------------------------------- */
.sel div {
  width: 73%;
  height: 40px;
  color: white;
  padding: 5px 10px 5px 20px;
  text-align: left;
  margin: 10px 0 0 50px;
  border-radius: 30px;
  font-weight: 600;
  font-size: 1em;
  cursor: pointer;
}

.Temp_LogoutButton {
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