<template>
<GlobalModalVue :gModalState="$store.state.gModalState"></GlobalModalVue>
<div class="content">
    <Vsnmenu v-bind:class="{'vsnmenu':true}"></Vsnmenu>
    <!-- <vsnside v-bind:class="{'vsnside':true}"></vsnside> -->
    <!-- <Vsncontent v-bind:class="{'vsncontent':true}"></Vsncontent> -->
    <!-- <div class="vsncontainer"> -->
      <router-view></router-view>
    <!-- </div> -->
  </div>
</template>

<script>
import Vsnmenu from './components/Menu';
import GlobalModalVue from './components/modal/GlobalModal.vue';
// import vsnside from './components/Side';
// import Vsncontent from './components/Content';
export default {
  name: "App",
  components: {
    Vsnmenu,
    GlobalModalVue
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
  left: 140px;
  width: calc(100vw - 140px);
  height: 100vh;
  background: #353535;
}

.ContentView {
  background: #353535;
}
</style>
