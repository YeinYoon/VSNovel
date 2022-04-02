<template>
<div>
    <div class="tests" v-if="noticeStep == 0">
    <header class="header">
        <div class="service">
            <img class="icon" src="@/assets/icons/white/megaphone.png" alt="community">
            <span class="title">공지사항</span>
            <span class="topic">TOPIC · 전체</span>
            <div class="noticeMain_btn_area">
                <button class="btn_red">관리</button>
                <button class="btn_blue" @click="noticeStep++">글쓰기</button>
            </div>
        </div>
    </header>  
    <section class="notice_section">
        <div class="strong_notice_post"> 
            <div v-for="(notice, i) in noticeData" :key="i">
                <div class="line" v-if="noticeNum == i"></div>
                <div class="strong_notice" @click="noticeEvent(notice)">
                <img class="strong_notice_mark" v-if="notice.emphasis == 0" src="@/assets/icons/white/star.png">
                    <div class="back_title">{{notice.title}}</div>
                    <div class="back_content">내용 - {{notice.content}}</div>
                    <div class="back_date">{{notice.date}}</div>    
                </div>
            </div>
        </div>
    </section>
  </div>
    <div v-if="noticeStep == 1">
        <NoticeWrite @write_cancle="noticeStep = 0"/>
    </div>
    <div v-if="noticeStep == 2">
        <NoticeRead :noticeData="clickNotice" @cancle="noticeStep = 0" @updata="noticeBtnEvent('up')" @notice_cancle="noticeBtnEvent('cancle')"/>
    </div>
</div>
</template>

<script>
import notice from "@/assets/DataJs/notice.js";
import NoticeWrite from "./NoticeWrite";
import NoticeRead from "./NoticeRead";
export default {
    data(){
        return {
            noticeData : notice,
            noticeNum : 0,
            noticeStep : 0,
            clickNotice : {},
            clickNoticeNum : 0,
        }
    },
    components:{
        NoticeWrite,
        NoticeRead,
    },
    mounted() {
    // 공지사항 날짜 순으로 정렬
    this.noticeData.sort(function (a, b) {
      return a.emphasis - b.emphasis;
    });
    // 강조 갯수 세기
    for(let i = 0; i < this.noticeData.length; i++){
        if(this.noticeData[i].emphasis == 0) this.noticeNum++;
    }
    },
    methods:{
        noticeEvent(data){
        //글보기 화면 이동
            this.noticeStep = 2;
            this.clickNotice = data;
        },
        noticeBtnEvent(noticeStep){
        // 글 목록 화면 이동
            this.noticeStep = 0;
            if(noticeStep == 'up')
                this.clickNotice.emphasis = 0;
            else this.clickNotice.emphasis = 1;
        }
    },
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
.noticeMain_btn_area {
    /* float:right; */
    position: fixed;
    top:150px;
    right: 30px;
}
.btn_blue, .btn_red {
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
.btn_blue:hover, .btn_red:hover {opacity:0.8;}

.strong_notice_post {
    cursor: pointer;
    position: relative;
    width: 90%;
    height: 130px;
    margin-top:10px;
    margin: 20px auto;
}
.strong_notice_post:hover {opacity:0.8;}
.strong_notice_mark {
    width:60px;
    height:60px;
    border-radius:100px;
    background-color:#2872f9;
    position: relative;
    top: -20px;
    left: 95%;
    z-index: 12;
}

.mark_star_image{
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
    position: relative;
    width: 100%; 
    height: 100px;
    background-color: #262626;
    border-radius: 12px;
    color:white;
    margin: 30px 0;
}
.strong_notice:hover{opacity:0.8};

.strong_line{
    display:flex;
    background-color: #ddd;
    height: 20px;
    border-radius:10px;
    width: 101%;
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
.back_date{
    position: absolute;
    top: 75%;
    left: 600px;
    z-index: 12;
}
.line{
    margin: 5px auto;
    width: 100%;
    height: 3px;
    border: 2px solid rgba(0, 0, 0, 0.5);
}
</style>