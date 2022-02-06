<template>
  <div>

    <div id="bar">
    <router-link to="/" id="main">메인으로 ㄱㄱ</router-link>
    <h5 class="text-center">대충 뭐시기 메인바</h5>
    <div v-if="isLogin == true" class="userName">{{userName}}</div>
    <div v-else class="userName">로그인하면 니 이름 뜨는 자리</div>
    </div>

    <router-view></router-view>
    
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      isLogin : false,
      userName : null
    }
  },
  components: {
    
  }
}
</script>

<style>
#bar {
  background-color: blanchedalmond;
}

#main {
  text-align: left;
}

.userName {
  text-align: right;
}
</style>
