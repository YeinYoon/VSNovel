<template>
  <div class="tests">
    <div class="header">
      <div class="service">
        <img class="icon" src="../../assets/icons/white/home.png" alt="logo" />
        <span class="title">마이페이지</span>
        <span class="my_topic">프로필 설정</span>
      </div>
    </div>
    <div>
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
.my_topic{
  display: block;
  width: 150px;
  color: white;
  position: relative;
  top: 30px;
  left: calc(100% - 350px);
  font-size: 1.2em;
}
.input-file-button{
  width: 120px;
  height: 40px;
  padding-top: 10px;
  margin-bottom: 55%;
  background-color:#2872F9;
  color: white;
  cursor: pointer;
  border-radius: 20px;
  font-size: 15px;
  text-align: center;
}
.main-position-container{
  width: 700px;
  height: 450px;
  top: 20%;
  position:absolute;
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
  width: 400px;
  height: 160px;
  border-radius: 20px;
  background-color: #5E5E5E;
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
}
</style>