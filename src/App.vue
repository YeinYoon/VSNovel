<template>
<Spinner :loading="$store.state.LoadingStatus"></Spinner>
  <div>

    <div id="bar">
    <router-link to="/" id="main">메인으로</router-link>
    <h5 class="text-center">테스트 메인바</h5>
    <div v-if="$store.state.userNickname != null" class="userName">
      {{$store.state.userNickname}}
      <button @click="logout()">로그아웃</button>
    </div>
    <div v-else class="userName">로그인이 필요합니다</div>
    </div>

    <router-view></router-view>
    
  </div>
</template>

<script>
import axios from './axios'
import Spinner from './components/Spinner.vue'
export default {
  name: 'App',
  components: {
    Spinner
  },
  methods : {
    logout(){
      axios.get('/api/auth/logout')
      .then((result)=>{
        if(result.data=='ok') {
          alert("로그아웃 되었습니다.");
          this.$store.commit('userLogin', null);
        } else {
          console.log(result);
          alert(result.data);
        }
      })
      .catch((err)=>{
        console.error(err);
      })
    }
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
