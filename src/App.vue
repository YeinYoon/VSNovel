<template>
  <div>

    <div id="bar">
    <router-link to="/" id="main">메인으로</router-link>
    <h5 class="text-center">테스트 메인바</h5>
    <div v-if="isLogin == true" class="userName">{{userName}}</div>
    <div v-else class="userName">로그인이 필요합니다</div>
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
      console.log(result.data.rows);
      result.data.rows.forEach((r, i)=>{
        console.log(`${i+1}행 : ${r.ID}, ${r.PW}`);
      })
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
