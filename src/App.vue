<template>
  <div class="RouterView">
    <!-- <Writ_e></Writ_e> -->
    <Re_view></Re_view>
    <!-- <Village_m></Village_m> -->
    <!-- <Commu_m></Commu_m> -->
    <!-- <Commen_t></Commen_t> -->
    <!-- <Cafe_main></Cafe_main> -->
    <!-- <Notic_e></Notic_e> -->
    <!-- <Notice_w></Notice_w> -->
    <!-- <Carouse_l></Carouse_l> -->
  </div>
</template>

<script>
// import Writ_e from './components/Writ_e'
import Re_view from './components/Re_view'
// import Village_m from './components/Village_m'
// import Commu_m from './components/Commu_m'
// import Commen_t from './components/Commen_t'
// import Cafe_main from './components/Cafe_main'
// import Notic_e from './components/Notic_e'
// import Notice_w from './components/Notice_write'
// import Carouse_l from './components/Carouse_l'

export default {
  name: 'App',
  components: {
    // Notic_e,
    // Commen_t
    // Commu_m
    // Writ_e
    Re_view
    // Village_m
    // Cafe_main
    // Notice_w
    // Carouse_l
  }
}
</script>

<style>
@import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css');
body {
  font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', sans-serif;
  font-weight: 500;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
