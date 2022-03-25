<template>
  <div>
    <section>
      <div class="main-table">
        <div class="cell cell-nick">
          <span>닉네임</span>
        </div>
        <div class="cell input-box" style="height:10%">
          <input id="content-box">
        </div>
        <div class="cell"></div>
        <div class="row">
          <div class="cell cell-title">
            <span>프로필 이미지</span>
          </div>
          <div class="cell input-box" style="height:45%">
          <div id="content-box"></div>
          </div>
          <div class="cell">
            <button id="profile-image-button">Browse</button>
            <span class="small-text">512x512 이상의 이미지가 가장 적합<br>
            허용 확장자:png,jpej,jpg,gif | > 2MB</span>
            
          </div>
        </div>
        <div class="row">
          <div class="cell cell-title">
            <span>소개</span>
          </div>
          <div class="cell input-box">
            <textarea id="content-box"></textarea>
          </div>
          <div class="cell" style="vertical-align: bottom;">
            <span class="small-text">0/1024byte</span>
          </div>
        </div>
      </div>
      <button id="mypage_profile-canc">취소</button>
      <button id="mypage_profile-save">저장</button>
    </section>
  </div>
</template>

<script>
export default {

};
</script>

<style>
section{
  display: flex;
  
}
button{
  border: none;
}
span{
  
  text-align: left;
}
textarea {
  width: 100%;
  height: 100%;
  margin: 0px;
}
td{
  word-break: break-all;
}
#content-box{
  color: white;
  border:none;
  width: 100%;
  word-wrap:break-word;
  padding:15px 15px;
}

.main-table {
  display: table;
  position: relative;
  transform: translate(10%,20%);
  color: white;
  width: 1000px;
  height: 600px;
}
.small-text{
  display: inline;
  font-size: 12px;
  
}
.heading {
  display: table-row;
  font-weight: bold;
  text-align: center;
}

.row {
  display: table-row;
}

.cell {
  display: table-cell;
  border: solid;
  border-width: thin;
  padding-left: 5px;
  padding-right: 5px;
  width: 20%;
  overflow: hidden;
}
.cell-title{
  font-size: 25px;
  vertical-align: top;
}
.cell-nick{
  font-size: 25px;
  vertical-align: middle;
}
.input-box{
  width: 50%;
  text-overflow: clip;
}
#profile-image-button{
  display: inline-block;
  width: 70%;
  height: 15%;
  transform: translateY(-500%);
  background: #2872f9;
  border-radius: 20px;
  color: white;
}

#content-box{
  width: 100%;
  height: 100%;
  background: #5e5e5e;
  border-radius: 20px;
}

#mypage_profile-canc {
  position: fixed;
  top: 850px;
  left: 1250px;
  width: 120px;
  height: 40px;
  border-radius: 15px;
  background-color: #5e5e5e;
  color: white;
  font-size: 15px;
}
#mypage_profile-save {
  position: fixed;
  top: 850px;
  left: 1400px;
  width: 120px;
  height: 40px;
  border-radius: 15px;
  background-color: #2872f9;
  color: white;
  font-size: 15px;
}
</style>