<template>
  <div class="RouterView">
    <header class="header">
        <div class="service">
            <img class="icon" src="../assets/icons/white/megaphone.png" alt="community"><span class="title" id="commu_title">공지사항</span>
            <p class="topic">TOPIC · 전체</p>
            <div class="btn-area">
                <button class="btn-red">관리</button>
                <button class="btn-blue">글쓰기</button>
            </div>
        </div>
    </header>  
    <section class="section">
        <div class="strong_notice_post" @click="openModal()"> 
            <div class="strong_notice_mark"><img src="../assets/icons/white/star.png" class="mark_star_image"></div>
            <div class="strong_notice">
                <div class="back_title">{{커뮤니티[0].title}}</div>
                <div class="back_content">내용 - {{커뮤니티[0].content}}</div>
                <div class="back_info">{{커뮤니티[0].writer}} | {{커뮤니티[0].date}} | {{커뮤니티[0].good}} | {{커뮤니티[0].comment}}</div>
            </div>
        </div>
        
        <hr class="strong_line">
        

        <div class="post" v-for = "(a,index) in 커뮤니티" :key="index">
            <div class="back">
                <div class="back_title">{{a.title}}</div>
                <div class="back_content">내용 - {{a.content}}</div>
                <div class="back_info">{{a.writer}} | {{a.date}} | {{a.good}} | {{a.comment}}</div>
            </div>
        </div>
    </section>
    
    <Modal_Vue :isOpen="isOpen"></Modal_Vue>
  </div>
</template>

<script>
import dummy_data from '../assets/dummydata/dummy.js'
import Modal_Vue from '@/components/Modal_vue.vue'
export default {
    data(){
        return {
            커뮤니티 : dummy_data,
            isOpen: false
        }
    },
    component : {
        Modal_Vue
    },
    methods: {
        openModal(){
            this.isOpen = true;
            console.log("Do it")
        },
    }
}
</script>

<style>
body {
    margin: 0; padding: 0; height: 100%;
    background-color: #353535;
}
.service{
    width:100%;
    height:140px;
}
.icon {
    margin-top: 10px;
    width:35px; height:35px;
    display: inline-block;
    vertical-align: middle;
}
.title {
    margin-top: 10px;
    display: inline-block;
    vertical-align: middle;
    color: white;
    font-size: 2em;
}
#commu_title {
    margin-left: 10px;
}
.topic {
    position: relative;
    bottom: 7px;
    font-size: 1.2em;
    color: white;
}
.btn-area {
    float:right;
}
.btn-blue {
    font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', sans-serif;
    font-weight: 500;
    position: relative;
    bottom: 35px;
    width: 100px;
    height: 30px;
    background-color:#2872f9;
    border: none;
    color: white;
    text-align: center;
    text-decoration: none;
    font-size: 14px;
    border-radius: 12px;
    cursor: pointer;
    margin-left:15px;
}
.btn-blue:hover {opacity:0.8;}

.btn-red {
    font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', sans-serif;
    font-weight: 500;
    position: relative;
    bottom: 34px;
    width: 100px;
    height: 30px;
    background-color:rgb(255, 71, 71);
    border: none;
    color: white;
    text-align: center;
    text-decoration: none;
    font-size: 14px;
    border-radius: 12px;
    cursor: pointer;
}
.btn-red:hover {opacity:0.8;}

::-webkit-scrollbar {
display: none;
}
.strong_notice_post {
    position: relative;
    width: 100%;
    height: 130px;
    margin-top:10px;
}
.strong_notice_mark {
    width:60px;
    height:60px;
    border-radius:100px 100px;
    background-color:#2872f9;
    position: absolute;
    z-index:13;
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
}
.strong_notice:hover{opacity:0.8};

.strong_line{
    /* height: 20px; */
    border:2px solid #ddd;
    border-radius:10px;
    /* width: 101%; */
}
.post {
    position: relative;
    width: 100%;
    margin-top: 10px;
    height: 130px; 
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