<template>
  <div>
    <div v-bind:class="{ contentbackground: true }">
      <excomp v-bind:class="{ excomp: true }"> </excomp>

      <router-view></router-view>
    </div>
  </div>
</template>
<style>
.contentbackground {
  position: absolute;
  background: #353535;
  width: 100%;
  height: 100vh;
  z-index: 2;
  overflow: auto;
}
.excomp {
  position: absolute;
  top: 60px;
  /* left: 10%; */
  width: 100%;
  /* height: calc(100vh - 60px); */
  z-index: 1;
  overflow: auto;
}
</style>
<script>
import excomp from "./MainPage/Main";
export default {
  name: "vsncontent",

  components: {
    excomp,
  },
};
</script>

