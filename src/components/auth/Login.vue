<template>
    <div class="container mt-3">
        <div class="mb-3">
            <input type="email" class="form-control" placeholder="email" v-model="email">
        </div>
        <div class="mb-3">
            <input type="password" class="form-control" placeholder="pw" v-model="pw">
        </div>
        <button class="btn btn-primary" @click="login()">로그인</button> <br><br>
        <button class="btn btn-primary" @click="logout()">로그아웃</button>
    </div>
</template>

<script>
export default {
    name:"Login",
    data(){
        return {
            email : "",
            pw : ""
        }
    },
    methods : {
        login() {
            alert(`${this.email}, ${this.pw}`);

            //window.location.href = '/';
        },

        logout(){
            alert('로그아웃 버튼 눌림');

            //window.location.href = '/';
        }
    }
}
</script>

<style>

</style>