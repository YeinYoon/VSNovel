<template>
  <div v-bind:class="{'sidebackground':true}">
    <StoreSide/>
  </div>
</template>

<script>
import StoreSide from './StorePage/StoreSide'
  export default {
    name: 'vsnside',
    data(){
      return{
      }
    },
    components:{
      StoreSide,
    }
  }
</script>

<style>
.sidebackground {
  background:#2c2c2c;
  width: 200px;
  height: 100vh;
  overflow:auto;
  position:fixed;
  top: 0px;
  left: 140px;
}
.sidecontent {
  background:#8a8a8a;
  position: absolute;
  left:30px;
  right:30px;
  top: 60px;
  width: calc(100% - 60px);
  height: calc(100vh - 60px);
  
  overflow:auto;
}
</style>