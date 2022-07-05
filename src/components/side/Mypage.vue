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
        <div class="sel" v-for="(item, i) in sideArrays" :key="i">
          <div @click="clickEvent(i, $event, item)" id="element" class="sel_menu">
            · {{ item.name }}
          </div>
        </div>
      </div>
    </div>
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
        // {name : "결제정보 페이지",    url:"mycard"},
        {name : "내가 쓴 게시글",     url:"mypost"},
        {name : "작성 리뷰 관리",     url:"myreview"},
        {name : "선호 / 비선호 설정", url:"prefer"},
        // {name : "알림 설정",          url:"myalarm"},
        {name : "회원 탈퇴",          url:"mywithdrawal"},
      ],
      clickNum: 0,
    };
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
</style>