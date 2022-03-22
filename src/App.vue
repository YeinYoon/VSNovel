<template>
<div class="content">
    <!-- <Store /> -->
    <Vsnmenu v-bind:class="{'vsnmenu':true}"></Vsnmenu>
    <!-- <vsnside v-bind:class="{'vsnside':true}"></vsnside> -->
    <!-- <Vsncontent v-bind:class="{'vsncontent':true}"></Vsncontent> -->
    <router-view></router-view>
  </div>
</template>

<script>
import Vsnmenu from './components/Menu';
// import vsnside from './components/Side';
// import Vsncontent from './components/Content';
export default {
  name: "App",
  components: {
    // SwiperCarousel: SwiperCarouselVue,
    // Store,
    Vsnmenu,
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
}
.vsnmenu {
  width: 140px;
  position:fixed;
  height: 100vh;
  left: 0px;
  overflow: auto;
  
}
.vsnside {
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
}
</style>
