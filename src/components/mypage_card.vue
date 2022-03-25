<template>
<div>
  <section>
    <div class="grid-container">
      <div>A</div>
      <div class="top-cont">결제시 사용할 카드정보를 등록해<br>
      간편하게 이용할 수 있습니다.</div>
      <div>C</div>
      <div style="text-align:center;">카드번호</div>
      <div><input type="text"></div>
      <div>F</div>
      <div>G</div>
      <div>H</div>
      <div>I</div>
    </div>
  </section>
</div>
</template>

<script>
export default {

}
</script>

<style>
html{
    background-color: #363636;
  }
  
button{
  border: 0;
  outline: 0;
  background-color:transparent;
  cursor: pointer;
}
input{
  border: 0;
  outline: 0;
  color: white;
  width: 100%;
  height: 50px;
  background: #5E5E5E;
  border-radius: 20px;
}
input::placeholder{
  color: white;
  font-size: 25px;
}
td{
  position: relative;
  width: 200px;
}
section{
  display: flex;
}
.grid-container {     
    display: grid;
    color: white;
    transform: translate(40%,40%);
    grid-template-columns: 200px 400px 200px;     
    grid-template-rows: 120px 50px 300px;
    align-items: center;
}
.top-cont{
  padding-top: 5%;
  text-align: center;
  white-space: nowrap;
  font-size: 25px;
}

#mypage_card{
  width: 540px;
  height: 50px;
  border-radius: 10px;
  background-color: #5E5E5E;
}
.mypage_card-detail{
  width: 300px;
  font-size: 13px;
}
#mypage_card-img{
  width: 540px;
  height: 280px;
  border-radius: 10px;
  background-color: #5E5E5E;
}
#mypage_card-canc{
  position: fixed;
  top:850px;
  left:1250px;
  width: 120px;
  height: 40px;
  border-radius: 15px;
  background-color: #5E5E5E;
  color: white;
  font-size: 15px;
}
#mypage_card-save{
  position: fixed;
  top:850px;
  left:1400px;
  width: 120px;
  height: 40px;
  border-radius: 15px;
  background-color: #2872F9;
  color: white;
  font-size: 15px;
}
</style>