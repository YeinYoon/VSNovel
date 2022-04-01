/* /* eslint-disable vue/no-duplicate-attributes */
<template>
  <div>
    <section>
      <div class="container">
        <div class="header">
          <img src="../assets/icons/white/library.png" class="icon" />
          <span class="service_title">라이브러리</span>
        </div>
        <div class="lib_first_line">
          <div class="lib_gallery">
            <div class="section_box">
              <div class="list" v-for="Gallery in image" :key="Gallery">
                <img class="img" :src="`${Gallery.img}`" />
                <div class="titles"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Gallery from "@/assets/gallerydata.js";

export default {
  data() {
    return {
      image: Gallery,
    };
  },
};
</script>

<style>
img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.contents-web:hover, .contents-vsn:hover{
  background-color: #2872F9;
  border-radius: 20px;
}
.contents{
  font-size:20px;
  text-align:left;
  line-height:40px;
  font-size:22px;
  font-weight:bold;
  float:left;
  margin-left:20px;
}
#search{
    position: fixed;
    top: 150px;
    left: 147px;
    width: 210px;
    height: 40px;
    background-color: white;
    border-radius: 20px;
  }

.contents-web{
  position: fixed;
  font-size: 20px;
  top: 310px;
  left: 120px;
  width: 210px;
  height: 40px;
  color: white;
}
.contents-vsn{
  position: fixed;
  font-size: 20px;
  top: 360px;
  left: 136px;
  width: 210px;
  height: 40px;
  color: white;
  float:left;
}

  .lib_cate{
    position: fixed;
    top: 480px;
    left: 112px;
      margin-left: 40px;
      background-color: white;
      border: 1px solid gray;
      border-radius: 18px;
      display: inline-block;
      font: inherit;
      line-height: 1.5em;
      padding: 3px 47px 8px 47px;
      font-size: 20px;
      font-weight: bolder;
      text-align: left;
  }

.header .service_title {
  position: absolute;
  top: -12px;
  left: 60px;
  color: white;
  font-size: 50px;
}
.header .icon {
  position: absolute;
  top: 0px;
  left: 0px;
  width: 50px;
  height: 50px;
}
.lib_gallery {
  margin: 30px 0 30px 0;
  width: 100%;
  height: 300px;
  padding: 5px 10px;
  border-radius: 20px;
}
.lib_gallery .section_box {
  padding-top: 100px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 5px;
}
.lib_gallery .list .img {
  position: relative;
  top: 10px;
  width: 200px;
  height: 300px;
  z-index: 11;
}
.lib_gallery .list .titles {
  width: 300px;
  height: 50px;
  margin-right: 0px;
  background-color: #2c2c2c;
  color: white;
  text-align: center;
  padding: 15px 0 0 0;
  font-weight: 500;
}
.lib_image:hover {
  opacity: 0.8;
  cursor: pointer;
}

.container {
  width: 100%;
  height: 100%;
}
</style> */