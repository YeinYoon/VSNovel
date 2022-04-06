
<template>
  <div class="gall_section">
      <div class="container">
        <div class="lib_first_line">
          <div class="lib_gallery">
            <div class="section_box">
              <div class="list" v-for="Gallery in image" :key="Gallery">
                <img class="img" :src="`${Gallery.link}`" />
                <div class="longbar"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import Gallery from "@/assets/DataJs/data.js";

export default {
  data() {
    return {
      image: Gallery,
    };
  },
};
</script>

<style>
.gall_section {
  padding: 5px;
  font-size: 1.3em;
  color: white;
  position:relative;
  top: 50px;
  margin: 0 auto;
  
}
.container {
  width: 100%;
  height: 100%;
}
.lib_gallery {
  margin: 30px 0 30px 0;
  width: 100%;
  height: 300px;
  padding: 5px 10px;
  border-radius: 20px;
}
.lib_gallery .section_box {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 5px;
  width: 90%;
  margin: 0 auto;
}
.lib_gallery .list .img {
  position: relative;
  top: 20px;
  left: 0.5%;
  width: 150px;
  height: 200px;
  margin: 0 30px;
  z-index: 11;
}
.lib_gallery .list .longbar{
  height: 50px;
  margin: 0px 0 30px 0;
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

</style> 
