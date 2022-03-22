<template>
<div>
  <!-- <aside class="menubar">
    <nav class="nav">
      <div id="img_box"></div>
      <div id="img_box"></div>
      <div id="img_box"></div>
      <div id="img_box"></div>
      <div id="img_box"></div>
      <div id="img_box"></div>
      <div id="img_box"></div> 
    </nav>
  </aside>
  <aside class="sidebar">
    <input id="search">
    <div class="side_first-title">
      <p class="side_first-title-font">· 컨텐츠 분류</p>
    </div>
    <button class="side-second-title-webnovel">
      <p class="side-second-title-webnovel-font">· 웹 소설</p>
    </button>
    <button class="side-second-title-visualnovel">
      <p class="side-second-title-visualnovel-font">· 비주얼 노벨</p>
    </button>
    <select class="lib_cate">
      <option>· 장르</option>
      <option value="추리">· 추리</option>
      <option value="스릴러">· 스릴러</option>
      <option value="공포">· 공포</option>
      <option value="과학">· 과학</option>
      <option value="판타지">· 판타지</option>
      <option value="무협">· 무협</option>
      <option value="게임">· 게임</option>
      <option value="로맨스">· 로맨스</option>
      <option value="드라마">· 드라마</option>
      <option value="서브컬쳐">· 서브컬쳐</option>
      <option value="동화">· 동화</option>
      <option value="기타">· 기타</option>
  </select>
  </aside> -->
  <section>
    <div class="container">
    <img src="../assets/icons/white/library.png" class="lib_icon">
    <p class="service_title">라이브러리</p>
      <div class="lib_first_line">
        <div class="lib_image_frame">
          
          <div class="lib_image" v-for="(Gallery, i) in image" :key="i">
            <!-- <span v-if="i % 4==0"><br></span> -->
            <!-- <img class="gallery_image" :src="`${Gallery.img}`"/> -->
            <div class="lib_image-under"></div>
          </div>
          <!-- <div class="lib_image">
            <div class="lib_image-under"></div>
          </div>
          <div class="lib_image">
            <div class="lib_image-under"></div>
          </div>
          <div class="lib_image">
            <div class="lib_image-under"></div>
          </div> -->
        </div>
      </div>
    </div>
  </section>
</div>
</template>

<script>
import Gallery from '@/assets/gallerydata.js';

export default {
  data(){
    return{
      image : Gallery,
    }
  },
}
</script>

<style>
  img{
    width: 100%;
    height: 100%;
  }
  .service_title{
    position: absolute;
    top: -12px;
    left: 60px;
    color: white;
    font-size: 50px;
  }
  .lib_icon{
    position:absolute;
    left: 0px;
    width: 50px;
    height: 50px;
  }
  .lib_image_frame{
    position: relative;
    left: 2%;
  }
  .lib_first_line{
    position: absolute;
    top: 100px;
    width: 100%;
    height: 300px;
  }
  .lib_image{
    position: relative;
    display: inline-block;
    margin-right: 7%;
    margin-top: 70px;
    width: 170px;
    height: 250px;
    background-color: #6D6D6D;
    z-index: 13;
  }
  /* .lib_image:hover{
    opacity: 0.8;
    cursor: pointer;
  } */
  .lib_image-under{
    position: relative;
    top: 200px;
    left: 50%;
    transform: translate(-50%); 
    width: 160%;
    height: 50px;
    background-color: #2C2C2C;
    z-index: 12;
  }
  .container{
    width: 100%;
    height: 100%;
  }
</style>