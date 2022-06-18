<template>
  <div class="RouterView">
    <div class="header">
      <div class="service">
        <img
          class="icon"
          src="../../assets/icons/white/library.png"
          alt="logo"
        />
        <span class="title">라이브러리</span>
      </div>
    </div>
    <div v-if="clickView == 'list'"><List /></div>
  </div>
</template>

<script>
import List from "./List";
export default {
  data() {
    return {
      clickView: "list",
    };
  },
  components: {
    List,
  },
};
</script>

<style>
.library_view {
  float: right;
}
.library_view .gall_icon {
  width: 50px;
  height: 50px;
  margin: 0 10px;
  border-radius: 5px;
}
.library_view .list_icon {
  width: 50px;
  height: 50px;
  margin: 0 0 0 10px;
  border-radius: 5px;
}
</style>