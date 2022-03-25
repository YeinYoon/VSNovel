<template>
  <div>


    <h1 class="text-center">테스트 게시판</h1>

    <div id="mainTable">
      <table class="table table-hover table-striped text-center" style="1px solid;">
        <thead>
          <th>번호</th>
          <th>제목</th>
          <th>작성자</th>
          <th>날짜</th>
          <th>조회수</th>
        </thead>
        <tbody>
          <tr @click="goToInfo()">
            <td>나중에</td>
            <td>DB데이터갖다가</td>
            <td>v-for</td>
            <td>돌리면된다</td>
            <td>이거야</td>
          </tr>
        </tbody>
      </table>
    </div>
    <router-link to="/posting" id="postingBt"><button>글쓰기</button></router-link>


  </div>
</template>

<script>
export default {
  name : "MainBoard",
  data(){
    return {
      goToInfo() {
        window.location.href="/post/testId";
      }
    }
  }
}
</script>

<style>

h1, #mainTable {
  margin-top: 30px;
}

#postingBt { 
  float: right;
}

</style>