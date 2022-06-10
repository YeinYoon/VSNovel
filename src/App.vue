<template>
<Spinner :loading="$store.state.LoadingStatus"></Spinner>
<GlobalModal :gModalState="$store.state.gModalState"></GlobalModal>
<div class="content">
    <Menu v-bind:class="{'vsnmenu':true}"></Menu>
    <!-- <vsnside v-bind:class="{'vsnside':true}"></vsnside> -->
    <!-- <Vsncontent v-bind:class="{'vsncontent':true}"></Vsncontent> -->
    <!-- <div class="vsncontainer"> -->
      <router-view></router-view>
    <!-- </div> -->
</div>
</template>

<script>
import Spinner from './components/Spinner.vue'
import Menu from './components/Menu';
import GlobalModal from './components/modal/GlobalModal.vue';
// import vsnside from './components/Side';
// import Vsncontent from './components/Content';
import axios from './axios'
export default {
  name: "App",
  created() {
    axios.get("/api/auth/loginCheck").then((result) => {
      if (result.data != "") {
        console.log(result.data);
        this.$store.commit("userLogin", {
          nickname: result.data.USER_NICKNAME,
          id: result.data.USER_ID,
        });
        console.log(this.$store.state.userId);
      }
    });
  },
  components: {
    Menu,
    GlobalModal,
    Spinner
    // vsnside,
    // Vsncontent,
  },
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
/* .vsnside {
  position:fixed;
  width: 305px;
  left: 140px;
  height: 100vh;
  overflow: auto;
}
.vsncontent {
  position:fixed;
  width: calc(100vw - 140px); 
  left: 140px;
  height: 100vh;
  overflow: auto;
} */
.vsncontainer{
  background: #353535;
  position: fixed;
  width: calc(100vw - 140px);
  height: 100vh;
  left: 140px;
  
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
