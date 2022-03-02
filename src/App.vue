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
import axios from 'axios';
export default {
  name: 'App',
  created() {
    axios.post('/api/user/test', {id:123, pw:123})
    .then((result)=>{
      console.log("DB접근 및 접속 성공");
      console.log(result);
    })
    .catch((err)=>{
      console.log(err);
    })
  },
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
