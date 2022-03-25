<template>
  <div class="tests">
    <div class="header">
      <div class="service">
        <img class="icon" src="../../assets/icons/white/home.png" alt="logo" />
        <span class="title">마이페이지</span>
        <span class="topic">프로필 설정</span>
      </div>
    </div>
    <section>
      <table class="mypage_profile_table">
        <tr>
          <td>닉네임</td>
          <td><input id="mypage_profile-nickname" type="text" /></td>
          <td></td>
        </tr>
        <tr>
          <td rowspan="2" valign="top">프로필 이미지</td>
          <td rowspan="2"><div id="mypage_profile-img"></div></td>
          <td valign="top">
            <button id="mypage_profile-browse">Browse</button>
          </td>
        </tr>
        <tr>
          <td class="mypage_profile-detail">
            512 x 512 이상의 이미지가 가장 적합<br />허용
            확장자:png,jpeg,jpg,gif | > 2MB
          </td>
        </tr>
        <tr>
          <td valign="top">소개</td>
          <td><input id="mypage_profile-info" type="text" /></td>
          <td class="mypage_profile-detail" valign="bottom">0/1024</td>
        </tr>
      </table>
      <button id="mypage_profile-canc">취소</button>
      <button id="mypage_profile-save">저장</button>
    </section>
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
button {
  border: 0;
  outline: 0;
  background-color: transparent;
  cursor: pointer;
}
.side_first-title {
  position: fixed;
  top: 250px;
  left: 150px;
  width: 210px;
  height: 40px;
  background-color: white;
  border-radius: 18px;
}
.side_first-title-font {
  margin-top: 5px;
  float: left;
  padding-left: 20px;
  font-size: 20px;
  text-align: left;
  font-weight: bolder;
}
#mypage_sidebar-profile {
  position: fixed;
  top: 310px;
  left: 173px;
  width: 190px;
  height: 40px;
  font-size: 20px;
  text-align: left;
  font-weight: bolder;
  color: white;
  border-radius: 18px;
  background-color: #2872f9;
}
#mypage_sidebar-pay {
  position: fixed;
  top: 360px;
  left: 173px;
  width: 190px;
  height: 40px;
  border-radius: 18px;
  font-size: 20px;
  font-weight: bolder;
  text-align: left;
  color: white;
}
#mypage_sidebar-post {
  position: fixed;
  top: 410px;
  left: 173px;
  width: 190px;
  height: 40px;
  border-radius: 18px;
  font-size: 20px;
  font-weight: bolder;
  text-align: left;
  color: white;
}
#mypage_sidebar-review {
  position: fixed;
  top: 460px;
  left: 173px;
  width: 190px;
  height: 40px;
  border-radius: 18px;
  font-size: 20px;
  font-weight: bolder;
  text-align: left;
  color: white;
}
#mypage_sidebar-prefer {
  position: fixed;
  top: 510px;
  left: 173px;
  width: 190px;
  height: 40px;
  border-radius: 18px;
  font-size: 20px;
  font-weight: bolder;
  text-align: left;
  color: white;
}
#mypage_sidebar-alarm {
  position: fixed;
  top: 560px;
  left: 173px;
  width: 190px;
  height: 40px;
  border-radius: 18px;
  font-size: 20px;
  font-weight: bolder;
  text-align: left;
  color: white;
}
#mypage_sidebar-exit {
  position: fixed;
  top: 610px;
  left: 173px;
  width: 190px;
  height: 40px;
  border-radius: 18px;
  font-size: 20px;
  font-weight: bolder;
  text-align: left;
  color: white;
}
.service_title {
  position: fixed;
  top: 10px;
  left: 550px;
  color: white;
  font-size: 50px;
}
.service_subtitle {
  position: fixed;
  top: 110px;
  left: 470px;
  color: white;
  font-size: 30px;
}
.mypage_profile_table {
  position: fixed;
  top: 250px;
  left: 500px;
  border: 1px;
  border: white;
  font-size: 30px;
  color: white;
  border-spacing: 20px;
}
td {
  position: relative;
  width: 200px;
}
#mypage_profile-nickname {
  width: 540px;
  height: 50px;
  border-radius: 10px;
  background-color: #5e5e5e;
}
#mypage_profile-img {
  width: 540px;
  height: 220px;
  border-radius: 10px;
  background-color: #5e5e5e;
}
#mypage_profile-browse {
  width: 120px;
  height: 40px;
  border-radius: 15px;
  background-color: #2872f9;
  font-size: 18px;
  color: white;
}
.mypage_profile-detail {
  width: 300px;
  font-size: 13px;
}
#mypage_profile-info {
  width: 540px;
  height: 220px;
  border-radius: 10px;
  background-color: #5e5e5e;
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