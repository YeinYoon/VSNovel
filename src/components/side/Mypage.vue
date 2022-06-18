<template>
  <div>
    <div class="Temp_LogoutButton" @click="logout()"><button class="mypage_logout">로그아웃</button></div>
  </div>
</template>

<script>
import axios from '../../axios';
export default {
  name: "MypageSide",
  data() {
    return {
    };
  },

  created() {
    this.$store.commit('sideBarOn');
    this.$store.commit('currentServiceCng', 'U');
  },

  methods: {

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