<template>
<<<<<<< Updated upstream:src/components/mypage_exit-first.vue
<div>
  <table>
=======
<div class="drop-position-container">
  <table class="myuser-drop-table">
>>>>>>> Stashed changes:src/components/MyPage/withdrawal/MyUserDropFir.vue
    <tr>
      <td class="exit-font">회원 탈퇴시 회원 정보 및 작성한 게시글에 대한 정보가 모두 지워집니다.
          <br>본 플랫폼에 투고한 작품도 판매 중지 후 데이터가 삭제됩니다.
          <br>소장한 작품에 대한 기록은 1개월 동안 유지되며, 이후 영구히 삭제됩니다
          <br>정말 VSN을 떠나시겠습니까?
      </td>
    </tr>
    <tr>
<<<<<<< Updated upstream:src/components/mypage_exit-first.vue
      <td><button id="mypage_exit-pass">PASS 실행</button></td>
=======
      <td><button id="mypage_exit-pass-btn" @click="$emit('next')">탈퇴</button></td>
>>>>>>> Stashed changes:src/components/MyPage/withdrawal/MyUserDropFir.vue
    </tr>
  </table>
</div>
</template>

<script>
export default {

}
</script>

<style>
<<<<<<< Updated upstream:src/components/mypage_exit-first.vue
.exit-title{
  font-size: 25px;
=======
.drop-position-container{
  width: 750px;
  height: 450px;
  position: relative;
  top: 80px;
  margin: 0 auto;
  
}
.exit-font{
>>>>>>> Stashed changes:src/components/MyPage/withdrawal/MyUserDropFir.vue
  text-align: center;
  font-size: 25px;
}
<<<<<<< Updated upstream:src/components/mypage_exit-first.vue
html{
    background-color: #363636;
  }
table{
=======
.myuser-drop-table{
>>>>>>> Stashed changes:src/components/MyPage/withdrawal/MyUserDropFir.vue
  color: white;
  margin: 0 auto;
  width: 750px;
  border-collapse: separate;
  border-spacing: 0 20px;
<<<<<<< Updated upstream:src/components/mypage_exit-first.vue

}
input{
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
=======
  
>>>>>>> Stashed changes:src/components/MyPage/withdrawal/MyUserDropFir.vue
}

#mypage_exit-pass-btn{
  width: 120px;
  height: 40px;
  transform: translateX(320px);
  border-radius: 20px;
  background-color: #FF4C4D;
  color: white;
  font-size: 15px;
  border: 0;
  outline: 0;
}
</style>