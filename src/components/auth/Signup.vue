<template>
  <div class="container mt-3">
    <div class="mb-3">
      <input type="email" class="form-control" placeholder="id" v-model="newId">
    </div>
    <div class="mb-3">
      <input type="password" class="form-control" placeholder="pw" v-model="newPw">
    </div>
    <div class="mb-3">
      <input type="email" class="form-control" placeholder="email" v-model="newEmail">
    </div>
    <div class="mb-3">
      <input type="text" class="form-control" placeholder="nickname" v-model="newNickname">
    </div>
    <div class="mb-3">
      <input type="text" class="form-control" placeholder="name" v-model="newName">
    </div>
    <div class="mb-3">
      <select v-model="newSex">
        <option value="M" selected>남</option>
        <option value="F">여</option>
        <option value="">비공개</option>
      </select>
    </div>
    <div class="mb-3">
      <input type="text" class="form-control" placeholder="phone" v-model="newPhone">
    </div>
    <div class="mb-3">
      <input type="text" class="form-control" placeholder="cardnum" v-model="newCardnum">
    </div>
    
    <button class="btn btn-primary" @click="signup()">가입하기</button>
 </div>
</template>

<script>
import axios from 'axios';
export default {
  name:"Signup",
  data() {
    return {
      newId : "",
      newPw: "",
      newEmail : "",
      newNickname : "",
      newName : "",
      newSex : "M",
      newPhone : "",
      newCardnum : ""
    }
  },
  methods : {
    signup() {
      var newUser = {
        newId : this.newId,
        newPw : this.newPw,
        newEmail : this.newEmail,
        newNickname : this.newNickname,
        newName : this.newName,
        newSex : this.newSex,
        newPhone : this.newPhone,
        newCardnum : this.newCardnum
      }

      axios.post('/api/auth/signUp', newUser)
      .then((result)=>{
        if(result.data == 'ok') {
          alert('회원가입 완료');
        } else {
          alert(result.data);
        }
      })
      .catch((err)=>{
        console.error(err);
      })
    }
  },
}
</script>

<style>

</style>