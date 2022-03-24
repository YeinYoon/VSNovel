<template>
  <div class="RouterView">
    <header class="header">
        <div class="service">
            <img class="icon" src="../assets/icons/white/leaf.png" alt="community"><span class="title" id="commu_title">카페</span>
            <p class="topic">FPS게임 카페</p>
            <div class="btn-area">
                <button class="btn-red">관리</button>
                <button class="btn-blue">글쓰기</button>
            </div>
        </div>
    </header>  

    <section class="section">
        <div class="post" v-for = "(a,index) in 커뮤니티" :key="index">
            <img class="thumb" src="../assets/image/good.png">
            <div class="back">
                <div class="back_title">{{a.title}}</div>
                <div class="back_info">{{a.writer}} | {{a.date}} | {{a.good}} | {{a.comment}}</div>
            </div>
        </div>
    </section>
  </div>
</template>

<script>
import dummy_data from '../assets/dummydata/dummy.js'
export default {
    data(){
        return {
            커뮤니티 : dummy_data
        }
    }
}
</script>

<style>
body {
    margin: 0; padding: 0; height: 100%;
    background-color: #353535;;
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
.post {
    position: relative;
    width: 100%;
    margin-top: 10px;
    height: 130px; 
} 
.post:hover {
    opacity: 0.7;
}
.thumb {
    width:80px;
    height:80px;
    cursor: pointer;
    position : absolute;
    z-index: 1;  
    top: 10px;

} 
.back {
    cursor: pointer;
    display: block;
    position: absolute;
    width: 100%; 
    height: 80px;
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
    left: 90px;
}
.back_info {
    position: absolute;
    float:right;
    font-size: 17px;
    top: 50px;
    right: 10px; 
}
</style>