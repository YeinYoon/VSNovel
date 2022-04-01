<template>
    <div class="tests">
        
    <!-- <div><Modal v-if="모달창열렸니 == true" :openmodal="모달창열렸니" @closemodal="모달창열렸니 = false"></Modal></div> -->

    <header class="header">
        <div class="service">
            <img class="icon" src="@/assets/icons/white/megaphone.png" alt="community">
            <span class="title">공지사항</span>
            <span class="topic">TOPIC · 전체</span>
            <div class="btn-area">
                <button class="btn-red">관리</button>
                <button class="btn-blue">글쓰기</button>
            </div>
        </div>
    </header>  
    <section class="notice_section">
        <div class="strong_notice_post" @click="모달창열렸니 = true"> 
            <div class="strong_notice_mark"><img src="@/assets/icons/white/star.png" class="mark_star_image"></div>
            <div class="strong_notice">
                <div class="back_title">{{커뮤니티[0].title}}</div>
                <div class="back_content">내용 - {{커뮤니티[0].content}}</div>
                <div class="back_info">{{커뮤니티[0].writer}} | {{커뮤니티[0].date}} | {{커뮤니티[0].like}} | {{커뮤니티[0].comment}}</div>
            </div>
        </div>
        
        
        <div class="strong_line"></div>
        

        <div class="post" v-for = '(a,index) in 커뮤니티' :key="index">
            <div class="back" @click="모달창열렸니 = true">
                <div class="back_title">{{a.title}}</div>
                <div class="back_content">내용 - {{a.content}}</div>
                <div class="back_info">{{a.writer}} | {{a.date}} | {{a.like}} | {{a.comment}}</div>
            </div>
        </div>
    </section>
  </div>
</template>

<script>
import dummy_data from '@/assets/DataJs/commuData.js'
// import Modal from '@/components/Modal_vue'
export default {
    data(){
        return {
            커뮤니티 : dummy_data,
            모달창열렸니 : false
        }
    },
    components : {
        // Modal
    }
}
</script>

<style>
.notice_section{
    width: 800px;
    height: 70%;
    margin: 0 auto;
    position: relative;
    top: 70px;
    overflow-y: scroll;
    -ms-overflow-style: none;
}
.notice_section::-webkit-scrollbar {
  display: none;
}
.btn-area {
    float:right;
}
.btn-blue, .btn_red {
    font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', sans-serif;
    font-weight: 500;
    position: relative;
    bottom: 35px;
    width: 100px;
    height: 30px;
    background-color:#2872f9;
    color: white;
    text-align: center;
    text-decoration: none;
    font-size: 14px;
    border-radius: 12px;
    cursor: pointer;
    margin-left:15px;
}
.btn-blue:hover, .btn_red:hover {opacity:0.8;}

::-webkit-scrollbar {
display: none;
}
.strong_notice_post {
    cursor: pointer;
    position: relative;
    width: 90%;
    height: 130px;
    margin-top:10px;
    margin: 0 auto;
}
.strong_notice_post:hover {opacity:0.8;}
.strong_notice_mark {
    width:60px;
    height:60px;
    border-radius:100px 100px;
    background-color:#2872f9;
    position: absolute;
    z-index:0;
    right:-30px;
    top:-30px;
}

.mark_star_image{
    z-index:14;
    width:35px; 
    height:35px;
    position:absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
.strong_notice {
    cursor: pointer;
    display: block;
    position: absolute;
    width: 100%; 
    height: 100px;
    background-color: #262626;
    border-radius: 12px;
    color:white;
    z-index:-1;
}
.strong_notice:hover{opacity:0.8};

.strong_line{
    display:flex;
    background-color: #ddd;
    height: 20px;
    border-radius:10px;
    width: 101%;
}
.post {
    position: relative;
    width: 90%;
    margin-top: 10px;
    height: 130px; 
    margin: 0 auto;
} 
.post:hover {
    opacity: 0.7;
}
.back {
    cursor: pointer;
    display: block;
    position: absolute;
    width: 100%; 
    height: 100px;
    background-color: #262626;
    border-radius: 12px;
    color:white;
    z-index: 0;
    top: 30px;
}
.back_title {
    position:absolute;
    font-size: 20px;
    top: 10px;
    float:left;
    left: 20px;
}
.back_content {
    position:absolute;
    font-size:19px;
    width:98%;
    text-overflow:ellipsis;
    white-space:nowrap;
    overflow:hidden;
    top: 40px;
    left: 20px;
}
.back_info {
    position: absolute;
    float:right;
    font-size: 17px;
    top: 70px;
    right: 10px; 
}
</style>