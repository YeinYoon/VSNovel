<template>
<div class="tests">
    <div class="header">
      <div class="service">
        <img class="icon" src="../../../assets/icons/white/home.png" alt="logo" />
        <span class="title">마이페이지</span>
        <span class="topic">회원탈퇴</span>
      </div>
    </div>
  <div v-if="next == 0">
    <MyUserDropFir @next="next++"/>
  </div>
  <div v-if="next == 1">
    <MyUserDropSec @end="this.$router.push('/')"/>
  </div>
</div>
</template>

<script>
import MyUserDropFir from './MyUserDropFir';
import MyUserDropSec from './MyUserDropSec';
export default {
  name: 'MyWithdrawal',
  data(){
    return{
      next:0,
    }
  },
  components:{
    MyUserDropFir,
    MyUserDropSec,
  },
}
</script>

<style>
</style>