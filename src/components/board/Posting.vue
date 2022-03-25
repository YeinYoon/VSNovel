<template>
    <div class="container mt-3">
        <input type="text" class="form-control mt-2" v-model="title" placeholder="제목">
        <textarea class="form-control mt-2" v-model="content"></textarea>
        <button class="btn btn-danger mt-3" @click="send()">글 올리기</button> <br>
        <router-link to="/board"><button class="btn btn-primary mt-3">취소</button></router-link>
    </div>
</template>

<script>
export default {
    name:"Posting",
    data(){
        return {
            title : "",
            content : ""
        }
    },
    methods : {
        send() {
            alert('올리기 버튼 눌림');
        }
    }
}
</script>

<style>

</style>