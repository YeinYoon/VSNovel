<template>
    <div id="page">
        VSNovel 테스트 페이지임 <br>
        <router-link to="/signup">회원가입</router-link> <br>
        <router-link to="/signin">로그인</router-link> <br>
        <router-link to="/board">게시판</router-link>
    </div>
</template>

<script>
export default {
  name : "Index",
  data() {
    return {
      
    }
  }
}
</script>

<style>
#page {
  font-family: "나눔스퀘어";
  text-align: center;
  margin-top: 60px;
}
</style>