<template>
  <div class="RouterView">
    <header class="header">
        <div class="service">
            <img class="icon" src="../assets/icons/white/leaf.png" alt="community"><span class="title" id="commu_title">카페</span>
            <p class="topic">FPS게임 카페</p>
            <div class="btn-area">
                <button class="btn-blue">가입카페 관리</button>
                <button class="btn-blue">개설하기</button>
            </div>
        </div>
    </header>  

    <section class="section">
        <div class="car">
            <SwiperCarousel></SwiperCarousel>
        </div>
        
        
    </section>
  </div>
</template>

<script>
import dummy_data from '../assets/dummydata/dummy.js';
import SwiperCarouselVue from "./Carouse_l";
export default {
    data(){
        return {
            커뮤니티 : dummy_data
        }
    },
    component: {
        SwiperCarousel: SwiperCarouselVue,
    }
}
</script>

<style>

body {
    margin: 0; padding: 0; height: 100%;
    background-color: #353535;;
}
.car {
    position: fixed;
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

::-webkit-scrollbar {
display: none;
}

</style>