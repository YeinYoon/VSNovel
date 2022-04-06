<template>
  <div class="tests">
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
    <div class="library_view">
      <img
        class="gall_icon"
        @click="clickEvent('gall')"
        src="@/assets/icons/white/gall_type.png"
      />
      <img
        class="list_icon"
        @click="clickEvent('list')"
        src="@/assets/icons/white/listType.png"
      />
    </div>
    <div v-if="clickView == 'list'"><List /></div>
    <div v-if="clickView == 'gall'"><Gallery /></div>
  </div>
</template>

<script>
import List from "./List";
import Gallery from "./Gallery";
export default {
  data() {
    return {
      clickView: "list",
    };
  },
  components: {
    List,
    Gallery,
  },
  methods: {
    clickEvent(name) {
      // 갤러리, 리스트 형식 보기 위한 함수
      this.clickView = name;
    },
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