<template>
<div>
  <div v-bind:class="{'contentbackground':true}">
    <excomp v-bind:class="{'excomp':true}">
    </excomp>
  </div>
</div>

</template>
<style>

.contentbackground {
  position: absolute;
  background:#353535;
  width: calc(100vw - 425px);
  height: 100vh;
  overflow:auto;
  
}
.excomp {
  /* background:white; */
  position: absolute;
  top: 60px;
  left: 50px;
  width: calc(100% - 100px);
  height: calc(100vh - 60px);
  overflow:auto;
}
</style>
<script>
// import excomp from './lib_gallery';
// import excomp from './mypage_post';
// import excomp from './mypage_review';
// import excomp from './lib_list.vue';
// import excomp from './mypage_review.vue'
// import excomp from './mypage_prefer.vue'
// import excomp from './mypage_profile';
import excomp from './mypage_card';

export default {
  name: 'vsncontent',

  components: {
    excomp,
  },
}
  
</script>

