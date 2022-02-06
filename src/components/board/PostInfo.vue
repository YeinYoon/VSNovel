<template>
    <div>

        <div class="container my-1">
            <div class="row">
                <table class="table">
                    <thead>
                        <tr class="table-active">
                            <th scope="col" style="width: 60%">대충 제목<br>
                                대충 유저이름</th>
                            <th scope="col" style="width: 40%" class="text-right">조회 : 대충조회수
                                <br> 대충 날짜</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><pre>대충내용</pre></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <router-link to="/board"><button class="btn btn-primary mt-3">뒤로가기</button></router-link>

    </div>
</template>

<script>
export default {
    name:"PostInfo",
    data() {
        return {

        }
    }
}
</script>

<style>

</style>