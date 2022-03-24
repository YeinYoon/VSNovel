<template>
<div class="tests">
    <div class="header">
      <div class="service">
        <img class="icon" src="../../assets/icons/white/home.png" alt="logo" />
        <span class="title">마이페이지</span>
        <sapn class="topic">작성 리뷰 관리</sapn>
      </div>
    </div>
  <section>
    <div class="work_list" v-for="(review, i) in reviews" :key="i">
      <div class="img_box"></div>
      <img class="list_img" :src="`${review.img}`"/>
      <div class="work_list_con">
          <div class="list_span">
              <span class="list_title">{{review.title}}</span>
              <span class="list_team">{{review.producer}} / {{review.team}}</span>
              <span class="list_content">{{review.content}}</span>
          </div>
      </div>
      <button id="review_edit">리뷰수정</button>
    </div>
  </section>
</div>
</template>

<script>
import review from '@/assets/review.js'

export default {
  data(){
    return{
      reviews :review,
    };
  },
}
</script>

<style>
#review_edit{
  display: flex;
    flex-direction: row;
    position: relative;
  transform: translateY(80%);
  flex-grow: 1;
  width: 10px;
  height: 30px;
  background: #2872F9;
  border-radius: 20px;
  color: white;
}
.lib_cate{
  position: fixed;
  top: 480px;
  left: 112px;
    margin-left: 40px;
    background-color: white;
    border: 1px solid gray;
    border-radius: 18px;
    display: inline-block;
    font: inherit;
    line-height: 1.5em;
    padding: 3px 47px 8px 47px;
    font-size: 20px;
    font-weight: bolder;
    text-align: left;
}
.img_box{
  position: absolute;
  transform: translate(20%,-30%);
  width: 100px;
  height: 150px;
  background: #6D6D6D;
}
.work_list{
    /* width: calc(50%); */
    background-color: #2a2a2a;
    margin: 50px 10px;
    border-radius: 20px;
    height: 125px;
    top: 150px;
    display: flex;
    flex-direction: row;
    position: relative;
}
.list_img{
    width: 100px;
    height: 140px;
    margin: 0 10px 0 20px;
    transform : translateY(-25%);
}
.list_span{
    display: flex;
    flex-direction: column;
    width: 100%;
}
.work_list_con{
    color: white;
    width: 70%;
}
.work_list_con::-webkit-scrollbar{
    display:none;
}
.list_title{
    font-size: 1.3em;
    padding-top: 5px;
}
.list_team{
    font-size: 0.9em;
}
.list_content{
    font-size: 0.7em;
    padding-top: 5px;
    height: 50px;
    width: 100%;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
}
.list_container{
  transform: translateY(18%);
}
.lib_list-box{
  display: flex;
  margin-top: 8%;
  margin-left: 3%;
  width: 1100px;
  height: 180px;
  border-radius: 15px;
  background-color: #2C2C2C;
  color: white;
  z-index: 10;
}
#lib_image{
  transform: translate(20%,-25%);
  top: 260px;
  left: 520px;
  width: 150px;
  height: 200px;
  background-color: #6D6D6D;
  z-index: 12;
}
#lib_title{
  display: flex;
  transform: translateX(45px);
  font-size: 30px;
  z-index: 12;
}
#lib_produce-team{
  position: absolute;
  transform: translate(5px,40px);
  left: 21%;
  font-size: 30px;
  z-index: 12;
}
#lib_con{
  position: absolute;
  left:21%;
  transform: translate(10px,80px);
  font-size: 15px;
  text-align: left;
  z-index: 12;
}
.lib_list-box2{
  position: fixed;
  top: 600px;
  left: 480px;
  width: 1100px;
  height: 180px;
  border-radius: 15px;
  background-color: #2C2C2C;
  z-index: 0;
  overflow: hidden; 
  text-overflow: ellipsis;
  white-space: nowrap; 
  width: 100px;
}
#lib_image2{
  position: fixed;
  top: 540px;
  left: 520px;
  width: 150px;
  height: 200px;
  background-color: #6D6D6D;
  z-index: 1;
}
#lib_title2{
  position: fixed;
  top: 590px;
  left: 700px;
  font-size: 30px;
  z-index: 1;
}
#lib_con2{
  position: fixed;
  top: 640px;
  left: 700px;
  font-size: 20px;
  z-index: 1;
}
#lib_produce-team2{
  position: fixed;
  top: 680px;
  left: 700px;
  font-size: 15px;
  z-index: 1;
}
.lib_list-box3{
  position: fixed;
  top: 870px;
  left: 480px;
  width: 1100px;
  height: 180px;
  border-radius: 15px;
  background-color: #2C2C2C;
  z-index: 0;
}
#lib_image3{
  position: fixed;
  top: 820px;
  left: 520px;
  width: 150px;
  height: 200px;
  background-color: #6D6D6D;
  z-index: 1;
}
#lib_title3{
  position: fixed;
  top: 860px;
  left: 700px;
  font-size: 30px;
  z-index: 1;
}
#lib_con3{
  position: fixed;
  top: 910px;
  left: 700px;
  font-size: 20px;
  z-index: 1;
}
#lib_produce-team3{
  position: fixed;
  top: 950px;
  left: 700px;
  font-size: 15px;
  z-index: 1;
}
</style>