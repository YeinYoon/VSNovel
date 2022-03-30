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
    <div
      class="work_list"
      v-for="data in datas"
      :key="data"
    >
      <img class="list_img" :src="`${data.titleImg}`" />
      <div class="work_list_con">
        <div class="list_span">
          <span class="list_title">{{ data.title }}</span>
          <span class="list_team">{{ data.writer }} / {{ data.team }}</span>
          <span class="list_content">{{ data.content }}</span>
        </div>
      </div>
      <div class="list_price">
        <span> {{ data.pay }}&#8361; </span>
      </div>
    </div>
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