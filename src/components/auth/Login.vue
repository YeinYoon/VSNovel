<template>
    <div class="container mt-3">
        <div class="mb-3">
            <input type="text" class="form-control" placeholder="id" v-model="id">
        </div>
        <div class="mb-3">
            <input type="password" class="form-control" placeholder="pw" v-model="pw">
        </div>
        <button class="btn btn-primary" @click="login()">로그인</button> <br><br>
        <button class="btn btn-primary" @click="logout()">로그아웃</button>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name:"Login",
    data(){
        return {
            id : "",
            pw : ""
        }
    },
    methods : {
        login() {
            var loginData = {
                id : this.id,
                pw : this.pw
            }
            axios.post('/api/auth/login', loginData)
            .then((result)=>{
                if(result.data=='ok') {
                    alert("로그인되었습니다.");
                    this.$router.push('/');
                } else {
                    console.log(result);
                    alert(result.data);
                }
            })
            .catch((err)=>{
                console.error(err);
            })
        },

        logout(){
            axios.get('/api/auth/logout')
            .then((result)=>{
                if(result.data=='ok') {
                    alert("로그아웃 되었습니다.");
                } else {
                    console.log(result);
                    alert(result.data);
                }
            })
            .catch((err)=>{
                console.error(err);
            })
        }
    }
}
</script>

<style>

</style>