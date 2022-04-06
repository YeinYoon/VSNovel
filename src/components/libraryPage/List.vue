<template>
  <div class="list_section">
    <div class="work_list" v-for="data in datas" :key="data">
      <img class="list_img" :src="`${data.titleImg}`" />
      <div class="work_list_con">
        <div class="list_span">
          <span class="list_title">{{ data.title }}</span>
          <span class="list_team">{{ data.writer }} / {{ data.team }}</span>
          <span class="list_content">{{ data.content }}</span>
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
.list_section {
  margin: 0 auto;
  padding: 5px;
  font-size: 1.3em;
  color: white;
  width: 800px;
  height: 100%;
  position: relative;
  top: 20px;
  overflow-y: scroll;
  -ms-overflow-style: none;
}
.list_section::-webkit-scrollbar {
  display: none;
}
</style>