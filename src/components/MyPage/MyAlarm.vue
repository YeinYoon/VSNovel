<template>
<div class="tests">
    <div class="header">
      <div class="service">
        <img class="icon" src="../../assets/icons/white/home.png" alt="logo" />
        <span class="title">마이페이지</span>
        <span class="topic">알림 설정</span>
      </div>
    </div>
  <table>
    <div v-for="(alarm,i) in alarmdata" :key="i">
      <tr>
        <td><input type="checkbox"></td>
        <td class="cont-title"><span>{{alarmdata[i].title}}</span></td>
      </tr>
      <tr>
        <td></td>
        <td class="cont-info">{{alarmdata[i].content}}</td>
      </tr>
    </div>
  </table>
  <footer>
    <button id="mypage_card-canc">취소</button>
    <button id="mypage_card-save">저장</button>
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
.cont-info{
  padding-bottom: 0%;
  transform: translateY(-20%);
}
.cont-title{
  font-size: 30px;
  transform: translateY(-20%);
}
td{
  padding: 0;
}
table{
  color: white;
  margin-right: 0%;
  margin-top: 10%;
  width: 72%;
}
table input{
  width: 77px;
  height: 50px;
  border-radius: 20px;
}
input::placeholder{
  color: white;
  font-size: 25px;
}
#mypage_card{
  width: 540px;
  height: 50px;
  border-radius: 10px;
  background-color: #5E5E5E;
}
#mypage_card-canc{
  margin-top: 25px;
  width: 120px;
  height: 40px;
  transform: translateX(400%);
  border-radius: 20px;
  background-color: #5E5E5E;
  color: white;
  font-size: 15px;
  border: 0;
  outline: 0;
  margin-right: 30px;
}
#mypage_card-save{
  margin-top: 25px;
  width: 120px;
  height: 40px;
  border-radius: 20px;
  transform: translateX(390%);
  background-color: #2872F9;
  color: white;
  font-size: 15px;
  border: 0;
  outline: 0;
}
</style>