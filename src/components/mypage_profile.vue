<template>
<<<<<<< Updated upstream:src/components/mypage_profile.vue
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
=======
  <div class="tests">
    <div class="header">
      <div class="service">
        <img class="icon" src="../../assets/icons/white/home.png" alt="logo" />
        <span class="title">마이페이지</span>
        <span class="topic">프로필 설정</span>
      </div>
    </div>
    <div class="main-position-container">
      <table class="mypage-main-table">
        <tr>
          <td class="col-one">닉네임</td>
          <td><input type="text"></td>
          <td></td>
        </tr>
        <tr>
          <td class="col-one">프로필 이미지</td>
          <td><div class="profile-image-input" type="file" accept="image/*"></div></td>
          <td class="col-three">
            <label class="input-file-button" for="input-file">
              Browse</label>
              <input type="file" id="input-file" style="display:none" accept=".jpg,.jpeg,.png,.gif"/><br>
            <span>512x512 이상의 이미지가 가장 적합 <br>
            허용 확장자:png,jpeg,jpg,gif | > 2MB</span>
            </td>
        </tr>
        <tr>
          <td class="col-one">소개</td>
          <td><textarea class="introduce-input" type="text"></textarea></td>
          <td class="col-three">0/1024 byte</td>
        </tr>
      </table>
      <footer>
        <button id="mypage_main-canc">취소</button>
        <button id="mypage_main-save">저장</button>
      </footer>
    </div>
  </div>
>>>>>>> Stashed changes:src/components/MyPage/MyPageMain.vue
</template>

<script>
export default {
<<<<<<< Updated upstream:src/components/mypage_profile.vue

}
</script>

<style>
#browse{
=======
  name: "MyPageMain",
  data() {
    return {};
  },
  components: {
  },
  methods:{
    upload:function(){
    const realUpload = document.querySelector('.real-upload');
    const upload = document.querySelector('.upload');

    upload.addEventListener('click', () => realUpload.click());
    }
  }
};
</script>

<style>
.input-file-button{
>>>>>>> Stashed changes:src/components/MyPage/MyPageMain.vue
  width: 120px;
  height: 40px;
  padding-top: 10px;
  margin-bottom: 55%;
  background-color:#2872F9;
  border-radius: 4px;
  color: white;
  cursor: pointer;
  border-radius: 20px;
  font-size: 15px;
  text-align: center;
}
.main-position-container{
  width: 700px;
  height: 450px;
  top: 5%;
  position: relative;
  margin: 0 auto;
}
.mypage-main-table{
  margin: 0 auto; 
  color: white;
  border-collapse: separate;
  border-spacing: 0 20px;
  width: 105%;
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
  width: 400px;
  background:#5E5E5E;
  border-radius: 20px;
}
.introduce-input{
<<<<<<< Updated upstream:src/components/mypage_profile.vue
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
input{
  border: 0;
  outline: 0;
  color: white;
=======
>>>>>>> Stashed changes:src/components/MyPage/MyPageMain.vue
  width: 400px;
  height: 160px;
  border-radius: 20px;
  background-color: #5E5E5E;
  border: none;
  outline: none;
  resize: none;
  color: white;
  font-size: 15px;
}
.introduce-input::-webkit-scrollbar {
  display: none;
}
#mypage_main-canc{
  transform: translate(350%,50%);
  width: 120px;
  height: 40px;
  border-radius: 15px;
  background-color: #5E5E5E;
  color: white;
  font-size: 15px;
  border: 0;
  outline: 0;
  margin-right: 30px;
  margin-top:0;
}
#mypage_main-save{
  transform: translate(350%,50%);
  width: 120px;
  height: 40px;
  border-radius: 15px;
  background-color: #2872F9;
  color: white;
  font-size: 15px;
  border: 0;
  outline: 0;
}
</style>