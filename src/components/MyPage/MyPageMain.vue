<template>
  <div class="tests">
    <div class="header">
      <div class="service">
        <img class="icon" src="../../assets/icons/white/home.png" alt="logo" />
        <span class="title">마이페이지</span>
        <span class="topic">프로필 설정</span>
      </div>
    </div>
    <div>
  <table>
    <tr>
      <td class="col-one">닉네임</td>
      <td><input type="text"></td>
      <td></td>
    </tr>
    <tr>
      <td class="col-one">프로필 이미지</td>
      <td><input class="profile-image-input" type="text"></td>
      <td class="col-three">
        <button id="browse">Browse</button><br>
        <span>512x512 이상의 이미지가 가장 적합 <br>
        허용 확장자:png,jpeg,jpg:gif | > 2MB</span>
        </td>
    </tr>
    <tr>
      <td class="col-one">소개</td>
      <td><input class="introduce-input" type="text"></td>
      <td class="col-three">0/1024 byte</td>
    </tr>
  </table>
  <footer>
    <button id="mypage_card-canc">취소</button>
    <button id="mypage_card-save">저장</button>
  </footer>
</div>

  </div>
</template>

<script>
export default {
  name: "MyPageMain",
  data() {
    return {};
  },
  components: {
  },
};
</script>

<style>

#browse{
  width: 120px;
  height: 40px;
  margin-bottom: 55%;
  border-radius: 20px;
  background-color: #2872F9;
  color: white;
  font-size: 15px;
  border: 0;
  outline: 0;
}
.col-three{
  font-size: 10px;
  vertical-align: bottom;
}
.col-one{
  vertical-align: top;
  padding-right: 40px;
  width: 150px;
}
.profile-image-input{
  height: 160px;
}
.introduce-input{
  height: 160px;
}
html{
    background-color: #363636;
  }
table{
  color: white;
  margin-left: 0%;
  margin-top: 10%;
  border-collapse: separate;
  border-spacing: 0 20px;

}
tr{
  padding: 50px;
}
table input{
  border: 0;
  outline: 0;
  color: white;
  width: 400px;
  height: 40px;
  background: #5E5E5E;
  border-radius: 20px;
  margin-right: 10px;
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