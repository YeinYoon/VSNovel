<template>
<div class="tests">
    <div class="header">
      <div class="service">
        <img class="icon" src="../../assets/icons/white/home.png" alt="logo" />
        <span class="title">마이페이지</span>
        <span class="topic">선호 / 비선호 설정</span>
      </div>
    </div>
  <section>
    <p id="mypage_cate-detail">추천 받고싶은 장르를 클릭으로 선택할 수 있습니다.
      <br>두번 클릭할 시 해당 장르는 추천에서 제외됩니다.</p>
    <div class="mypage_cate-box">
    <button :style="buttonStyles" id="mypage_cate-genre" v-for="(genre,i) in predata" :key="i"  @click="prefer({genre}, $event)">{{genre.name}}</button>
    </div>
    <button id="mypage_cate-canc">취소</button>
    <button id="mypage_cate-save">저장</button>
  </section>
</div>
</template>

<script>
import genre from '../../assets/preferdata.js';

export default {
  data(){
    return{
      predata : genre,
      status : 0
    }
  },
  methods:{
    prefer: function(genre, event){
      genre = genre.genre
      genre.count++
      genre.count%=3
      this.status = genre.count;
      event.target.style.backgroundColor= (this.status==0) ? '#5E5E5E' : (this.status==1 ? '#0078FF' : '#EA4235')
    }
  },
}
</script>

<style>
  #mypage_cate-detail{
    position: fixed;
    top: 200px;
    left: 650px;
    font-size: 25px;
    color: white;
    text-align: center;
  }
  .mypage_cate-box{
    position: fixed;
    top: 350px;
    left: 500px;
    width: 850px;
    height: 260px;
    background-color: #444444;
    border-radius: 20px;
  }
  #mypage_cate-genre{
    margin-top: 18px;
    margin-left: 14px;
    width: 180px;
    height: 60px;
    background-color: #5E5E5E;
    color: white;
    font-size: 30px;
    border-radius: 20px;
  }
  
  #mypage_cate-canc{
    position: fixed;
    top:700px;
    left:1140px;
    width: 120px;
    height: 40px;
    border-radius: 15px;
    background-color: #5E5E5E;
    color: white;
    font-size: 15px;
  }
  #mypage_cate-save{
    position: fixed;
    top:700px;
    left:1300px;
    width: 120px;
    height: 40px;
    border-radius: 15px;
    background-color: #2872F9;
    color: white;
    font-size: 15px;
  }
</style>