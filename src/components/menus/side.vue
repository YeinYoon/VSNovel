<template>
  <div v-bind:class="{'sidebackground':true}">
    <!-- <Exside v-bind:class="{'sidecontent':true}">
    </Exside> -->
  </div>
</template>

<script>
// import Exside from './exside.vue';
  export default {
    name: 'vsnside',
    components: {
      // Exside,
    },
  }
</script>

<style>
.sidebackground {
  background:#2c2c2c;
  width: 100%;
  height: 100vh;
  overflow:auto;
}
.sidecontent {
  background:#8a8a8a;
  position: absolute;
  left:30px;
  right:30px;
  top: 60px;
  width: 245px;
  height: calc(100vh - 60px);
  overflow:auto;
}
</style>