<template>
<Spinner :loading="$store.state.LoadingStatus"></Spinner>
<GlobalModal :gModalState="$store.state.gModalState"></GlobalModal>
  <div class="content">
    <Menu v-bind:class="{'vsnmenu':true}"></Menu>
    <Side v-bind:class="{'sideBar':true}" v-if="$store.state.sideBarState == true"></Side>
  </div>
  <router-view></router-view>
</template>

<script>
import Spinner from './components/Spinner.vue'
import Menu from './components/Menu';
import Side from './components/sideBar.vue'
import GlobalModal from './components/modal/GlobalModal.vue';
import axios from './axios';
import storage from './aws'
// import vsnside from './components/Side';
// import Vsncontent from './components/Content';
export default {
  name: "App",
  watch :  {
    $route() {
      this.getUserInfo();
    }
  },
  components: {
    Menu,
    GlobalModal,
    Spinner,
    Side
    // vsnside,
    // Vsncontent,
  },
  methods : {
    getUserInfo() {
      axios.get("/api/auth/loginCheck").then(async (result) => {
        if (result.data != "") {
          this.$store.commit("userLogin", {
            nickname: result.data.USER_NICKNAME,
            id: result.data.USER_ID,
            profileImg : await storage.getUserProfileImg(result.data.USER_ID)
          });
        }
      });
    }
  }
};
</script>

<style>
@import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css');
body{
  font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', sans-serif;
  font-weight: 500;
  margin : 0px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

::-webkit-scrollbar{
  display: none;
}

.vsnmenu {
  width: 140px;
  position:fixed;
  height: 100vh;
  left: 0px;
  overflow: auto;
}

.sideBar {
  font-size: 1.2em;
  flex-direction: column;
  padding: 50px 10px 0 10px;
  background: #2c2c2c;
  width: 300px;
  height: 100vh;
  position: fixed;
  top: 0px;
  left: 140px;
  overflow: auto;
}

.FullView {
  position: fixed;
  top: 0px;
  width: 100vw;
  height: 100vh;
  z-index: 4;
}

.RouterView {
  position: fixed;
  left: 440px;
  width: calc(100vw - 440px);
  height: 100vh;
  background: #353535;
  overflow: auto;
  padding: 35px 40px 30px 40px;
}

.RouterView_NonSide {
  position: fixed;
  left: 140px;
  width: calc(100vw - 140px);
  height: 100vh;
  background: #353535;
  overflow: auto;
}

.ContentView {
  background: #353535;
}
</style>
