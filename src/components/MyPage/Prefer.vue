<template>
  <div class="tests">
    <div class="header">
      <div class="service">
        <img class="icon" src="../../assets/icons/white/home.png" alt="logo" />
        <span class="title">마이페이지</span>
        <span class="my_topic">선호 / 비선호 설정</span>
      </div>
    </div>
    <div class="prefer_section">
      <p class="mypage_cate-detail">
        추천 받고싶은 장르를 클릭으로 선택할 수 있습니다. <br />두번 클릭할 시
        해당 장르는 추천에서 제외됩니다.
      </p>
      <div class="mypage_cate-box">
        <button id="color"
          class="mypage_cate-genre"
          :class="{normal:genre.count==0, blue:genre.count==1, red:genre.count==2}"
          v-for="(genre, i) in predata" :key="i"
          @click="prefer(i)"
        >
          {{ genre.CATE_NAME }}
        </button>
      </div>
      <button class="mypage_cate-canc" @click="cancelBtn()">취소</button>
      <button class="mypage_cate-save" @click="saveBtn()">저장</button>
    </div>
  </div>
</template>

<script>
import axios from '../../axios'

export default {
  
  data() {
    return {
      predata: null,
      status: 0,
      count: 0,
      cateCode: "",
      favorite:null,
      hate:null,
      backup: null
    };
  },
  methods: {
    prefer(i) {
      this.predata[i].count++
      this.predata[i].count %= 3;
    },
    getPrefer() {
      console.log("getPrefer")
      axios.get('/api/mypage/getprefer')
      .then((result) => {
        if(result.data=="err") {
          console.log("선호비선호 불러오기 실패");
        } else {
          this.favorite = result.data.favorite;
          this.hate = result.data.hate;
          console.log(this.favorite)
          console.log(this.hate)
          this.getGenre()
        }
      })
    },
    routerPush(link){
      this.$router.push(link);
    },
    getGenre(){
      console.log("getGenre")
      axios.get('/api/mypage/genre')
      .then((result) => {
        console.log(this.hate)
        console.log(this.favorite)
        if(result.data=="err") {
          console.log("LOAD GENRE ERR!");
        } else {
          this.predata = result.data.rows;
          for(let i = 0; i<this.predata.length; i++){
            this.predata[i].count = 0
          }
          if(this.favorite!=null && this.favorite!=undefined){
            for(let i = 0; i<this.favorite.length; i++){
              this.predata[this.favorite[i].CATE_CODE].count=1
            }
          }
          if(this.hate!=null && this.hate!=undefined){
            for(let i = 0; i<this.hate.length; i++){
              this.predata[this.hate[i].CATE_CODE].count=2
            }
          }
          this.backup = JSON.parse(JSON.stringify(this.predata));//backup
          console.log(this.backup)
        }
      })
    },
    cancelBtn(){
      console.log(this.backup)
      this.predata = JSON.parse(JSON.stringify(this.backup))
    },
    saveBtn(){
      let favorite={},hate={};
      for(let i=0;i<this.predata.length;i++){
        if(this.predata[i].count==1){
          favorite[i] = i;
        }
        else if(this.predata[i].count==2){
          hate[i] = i;
        }
      }
      let data = {
        favorite : favorite,
        hate : hate
      }
      axios.post('/api/mypage/postprefer', data)
      .then((result) => {
        if(result.data == 'err') {
          console.log("save fail")
        } else {
          console.log(result)
          console.log(result.data)
        }
      })
    },
  },
  async created() {
    this.getPrefer()
  },
};
</script>

<style>
.preferBtnArea{
  display: flex;
  margin-left: 30%;
}

.prefer_section {
  margin: 0 auto;
  width: 95%;
  position: relative;
  top: 15%;
  text-align: center;
  font-size: 1.3em;
  color: white;
}
.mypage_cate-box {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  background-color: #444444;
  height: 200px;
  border-radius: 20px;
  padding: 5px;
  margin: 10px;
}
.mypage_cate-genre.normal {
  background-color: #5e5e5e;
  color: white;
  width: 23%;
  height: 50px;
  margin: 5px;
  padding: 5px;
  border-radius: 20px;
  cursor: pointer;
}
.mypage_cate-genre.blue {
  background-color: #0078FF;
  color: white;
  width: 23%;
  height: 50px;
  margin: 5px;
  padding: 5px;
  border-radius: 20px;
}

.mypage_cate-genre.red {
  background-color: #EA4235;
  color: white;
  width: 23%;
  height: 50px;
  margin: 5px;
  padding: 5px;
  border-radius: 20px;
}


.mypage_cate-canc {
  background-color: #5e5e5e;
  color: white;
  width: 150px;
  padding: 10px;
  margin: 5px;
  border-radius: 20px;
  cursor: pointer;
}
.mypage_cate-save {
  background-color: #2872f9;
  color: white;
  width: 150px;
  padding: 10px;
  margin: 5px;
  border-radius: 20px;
  cursor: pointer;
}
.mypage_cate-save:hover{
  background:#0084ff;
}
</style>