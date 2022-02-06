<template>
  <div class="container mt-3">
    <div class="mb-3">
      <input type="text" class="form-control" placeholder="name" v-model="newName">
    </div>
    <div class="mb-3">
      <input type="email" class="form-control" placeholder="email" v-model="newEmail">
    </div>
    <div class="mb-3">
      <input type="password" class="form-control" placeholder="pw" v-model="newPw">
    </div>
    <button class="btn btn-primary" @click="signup()">가입하기</button>
 </div>
</template>

<script>
export default {
  name:"Signup",
  data() {
    return {
      newName : "",
      newEmail : "",
      newPw : ""
    }
  },
  methods : {
    signup() {
      alert(`${this.newName}, ${this.newEmail}, ${this.newPw}`);
      
      //window.location.href = '/';
    }
  },
}
</script>

<style>

</style>