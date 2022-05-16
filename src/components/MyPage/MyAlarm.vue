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
          <input class="alarm-check" type="checkbox" @click="noticeChk(i)">
          <span class="cont-title">{{alarmdata[i].title}}</span><br>
        </div>
          <span class="cont-info">{{alarmdata[i].content}}</span>
      </div>
    </div>
    
    <footer class="button-position">
        <button id="mypage_alarm-canc">취소</button>
        <button id="mypage_alarm-save" @click="saveBtn()">저장</button>
    </footer>

</div>
</template>

<script>
import alarm from '@/assets/DataJs/alarmdata.js'
import axios from '../../axios'

export default {
  data(){
    return{
      alarmdata:alarm,
      check:false,

    }
  },
  methods:{
    routerPush(link){
      this.$router.push(link);
    },
    noticeChk(i) {
      this.alarmdata[i] = true;
    },
    getAlarm() {
      console.log('getAlarm')
      axios.get('api/mypage/getalarm')
      .then((result) => {
        if(result.data == 'err') {
          console.log('load fail')
        } else {
          console.log(result)
        }
      })
    },
    saveBtn() {
      let data= {
        check : this.check
      }
      axios.post('/api/mypage/postalarm', data)
      .then((result) => {
        if(result.data == 'err') {
          console.log('err')
        } else {
          console.log(result)
        }
      })
    }
  },
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
  padding: 10px;
  margin: 5px;
  border-radius: 20px;
}
#mypage_alarm-save {
  
  left: 60%;
  background-color: #2872f9;
  color: white;
  width: 150px;
  padding: 10px;
  margin: 5px;
  border-radius: 20px;
  
}

</style>