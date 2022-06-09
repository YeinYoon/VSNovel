<template>
<div class="tests">
    <div class="header">
      <div class="service">
        <img class="icon" src="@/assets/icons/white/home.png" alt="logo" />
        <span class="title">마이페이지</span>
        <span class="my_topic">알림 설정</span>
      </div>
    </div>

    <div class="alarm-section">
      <div v-for="(alarm,i) in alarmdata" :key="i">
        <div class="alarm-flex">
          <input class="alarm-check" type="checkbox">
          <span class="cont-title">{{alarmdata[i].title}}</span><br>
        </div>
          <span class="cont-info">{{alarmdata[i].content}}</span>
      </div>
    </div>
    
    <footer class="button-position">
        <div id="mypage_alarm-canc">취소</div>
        <div id="mypage_alarm-save" @click="routerPush('/')">저장</div>
    </footer>

</div>
</template>

<script>
import alarm from '@/assets/DataJs/alarmdata.js'

export default {
  data(){
    return{
      alarmdata:alarm
    }
  },
  methods:{
    routerPush(link){
      this.$router.push(link);
    }
  },
}
</script>

<style>
.button-position{
  width: 350px;
  height: 45px;
  position: absolute;
  display: flex;
  top: 90%;
  left: 55%;
  text-align: center;
  line-height: 18px;
  
}
.alarm-flex{
  display: flex;
}
input[type="checkbox"]{
  width: 40px; /*Desired width*/
  height: 40px; /*Desired height*/
  cursor: pointer;
  -webkit-appearance: none;
  appearance: none;
  background-color: #929292;
  border-radius: 5px;
  }
  input[type='checkbox']:checked{
      -webkit-appearance: none;
      -moz-appearance: none;
      -o-appearance: none;
      appearance:none;
      box-shadow: none;
      background-color: #2872F9;
  }
.cont-info{
  margin-left: 60px;
  padding-top: 40px;

}
.cont-title{
  font-size: 30px;
  margin-left: 20px;
}
.alarm-section{
  color: white;
  margin: 0 auto;
  position: fixed;
  top: 180px;
  left: 550px;
  width: 700px;
  height: 950px;
  /* background: #2872F9; */
}
#mypage_alarm-canc {
  left: 60%;
  background-color: #5e5e5e;
  color: white;
  width: 150px;
  height: 40px;
  padding: 10px;
  margin: 5px;
  border-radius: 20px;
  cursor: pointer;
}
#mypage_alarm-save {
  
  left: 60%;
  background-color: #2872f9;
  color: white;
  width: 150px;
  height: 40px;
  padding: 10px;
  margin: 5px;
  border-radius: 20px;
  cursor: pointer;
}
#mypage_alarm-save:hover{
  background: #0084ff;
}

</style>