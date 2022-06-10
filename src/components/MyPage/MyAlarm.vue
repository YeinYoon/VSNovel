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
      <div v-for="(alarm,i) in alarmData" :key="i">
        <div class="alarm-flex">
          <input class="alarm-check" type="checkbox" @click="noticeChkBox(i)">
          <span class="cont-title">{{alarmData[i].title}}</span><br>
        </div>
          <span class="cont-info">{{alarmData[i].content}}</span>
      </div>
    </div>
    
    <footer class="button-position">
        <button id="mypage_alarm-canc" @click="cancelBtn()">취소</button>
        <button id="mypage_alarm-save" @click="saveBtn()">저장</button>

    </footer>

</div>
</template>

<script>
import alarm from '@/assets/DataJs/alarmdata.js'
import axios from '../../axios'

export default {
  created() {
    this.getAlarm();
  },
  data(){
    return{
      alarmData:alarm,
      pastCheck: null,
      binaryNum: [0,0,0,0,0]
    }
  },
  methods:{
    routerPush(link){
      this.$router.push(link);
    },
    noticeChkBox(i) {
      this.binaryNum[i] == 0 ? this.binaryNum[i] = 1 : this.binaryNum[i] = 0;
      console.log(this.binaryNum);
    },
    getAlarm() {
      console.log('getAlarm')
      axios.get('/api/mypage/getalarm')
      .then((result) => {
        if(result.data == 'err') {
          console.log('load fail')
        } else {
          console.log(result)
          this.binaryNum = result.data;
        }
      })
    },
    saveBtn() {
      let data= {
        noticeChk : this.noticeChk
      }
      axios.post('/api/mypage/postalarm', data)
      .then((result) => {
        if(result.data == 'err') {
          console.log('err')
        } else {
          console.log(result)
          this.noticeChkBox
        }
      })
    },
    cancelBtn() {
      this.check = this.pastCheck
    },
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