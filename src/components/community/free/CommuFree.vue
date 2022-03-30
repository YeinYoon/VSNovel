<template>
  <div class="tests">
    <div class="header">
      <div class="service">
        <img
          class="icon"
          src="@/assets/icons/white/bubble_chat.png"
          alt="community"
        />
        <span class="title">커뮤니티</span>
        <span class="topic">TOPIC · 자유</span>
      </div>
    </div>
    <div v-if="freeStep == 0">
      <CommuManage @next="freeStep++"/>
    </div>
    <div v-if="freeStep == 1">
      <OnWrite @end="freeStep=0"/>
    </div>
  </div>
</template>

<script>
import CommuManage from "./CommuManage";
import OnWrite from "./OnWrite";
export default {
  name: "CommuFree",
  data() {
    return {
      freeStep : 0,
    };
  },
  components: {
    CommuManage,
    OnWrite,
  },
};
</script>

<style>
</style>