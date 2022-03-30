<template>
<<<<<<< Updated upstream:src/components/mypage_alarm.vue
<div>
  <table>
=======
<div class="tests">
    <div class="header">
      <div class="service">
        <img class="icon" src="../../assets/icons/white/home.png" alt="logo" />
        <span class="title">마이페이지</span>
        <span class="topic">알림 설정</span>
      </div>
    </div>
  <div class="alarm-section">
>>>>>>> Stashed changes:src/components/MyPage/MyAlarm.vue
    <div v-for="(alarm,i) in alarmdata" :key="i">
      <div class="alarm-flex">
        <input class="alarm-check" type="checkbox">
        <span class="cont-title">{{alarmdata[i].title}}</span><br>
      </div>
        <span class="cont-info">{{alarmdata[i].content}}</span>
    </div>
  </div>
  <footer class="button-position">
      <button id="mypage_alarm-canc">취소</button>
      <button id="mypage_alarm-save">저장</button>
  </footer>
  
</div>
</template>

<script>
import alarm from '@/assets/alarmdata.js'

export default {
  data(){
    return{
      alarmdata:alarm
    }
  }
}
</script>

<style>
.button-position{
  width: 350px;
  height: 45px;
  position: absolute;
  top: 90%;
  left: 55%;
  
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
<<<<<<< Updated upstream:src/components/mypage_alarm.vue
  transform: translateY(-20%);
}
html{
    background-color: #363636;
  }
td{
  padding: 0;
=======
  margin-left: 20px;
>>>>>>> Stashed changes:src/components/MyPage/MyAlarm.vue
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
<<<<<<< Updated upstream:src/components/mypage_alarm.vue
input{
  width: 77px;
  height: 50px;
  border-radius: 20px;
}
input::placeholder{
=======
#mypage_alarm-canc {
  left: 60%;
  background-color: #5e5e5e;
>>>>>>> Stashed changes:src/components/MyPage/MyAlarm.vue
  color: white;
  width: 150px;
  padding: 10px;
  margin: 5px;
  border-radius: 20px;
  border: 0;
  outline: 0;
}
#mypage_alarm-save {
  
  left: 60%;
  background-color: #2872f9;
  color: white;
  width: 150px;
  padding: 10px;
  margin: 5px;
  border-radius: 20px;
  border: 0;
  outline: 0;
  
}
</style>