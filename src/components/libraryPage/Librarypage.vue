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
    <div class="listView">
        <img src="@/assets/icons/white/gall_type" alt="">
        <img src="@/assets/icons/white/listType" alt="">
    </div>

  </div>
</template>

<script>
import datas from "@/assets/DataJs/dataHu.js";

export default {
  data() {
    return {
      datas: datas,
    };
  },
};
</script>

<style>
</style>