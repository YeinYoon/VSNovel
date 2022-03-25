<template>
  <!-- <Gallery/> -->
  <MenuBar class="vsnmenu"></MenuBar>
  <SideBar class="vsnside"></SideBar>
  <Contents class="vsncontent"></Contents>
</template>

<script>

// import Gallery from './components/lib_gallery.vue'
import MenuBar from './components/menus/menu.vue'
import SideBar from './components/menus/side.vue'
import Contents from './components/content.vue'
// import Review from './components/mypage_review.vue'
export default {
  name: 'App',
  components: {
    // Gallery,
    Contents,
    SideBar,
    MenuBar,
  }
}
</script>

<style>
@import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css');
body{
font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', sans-serif;
font-weight: 500;
margin: 0px;
}
::-webkit-scrollbar { display: none; }
#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
  color: #2c3e50;
}
.vsnmenu {
  width: 120px;
  position:fixed;
  height: 100vh;
  left: 0px;
  overflow: auto;
  
}
.vsnside {
  position:fixed;
  width: 305px;
  left: 120px;
  height: 100vh;
  overflow: auto;
}
.vsncontent {
  position:fixed;
  width: calc(100vw - 425px); 
  left: 425px;
  height: 100vh;
  overflow: auto;
}
</style>
