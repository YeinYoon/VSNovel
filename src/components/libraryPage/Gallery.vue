
<template>
  <div class="gall_section">
    <section>
      <div class="container">
        <div class="lib_first_line">
          <div class="lib_gallery">
            <div class="section_box">
              <div class="list" v-for="Gallery in image" :key="Gallery">
                <img class="img" :src="`${Gallery.link}`" />
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
}
.lib_gallery .list .img {
  position: relative;
  top: 10px;
  width: 150px;
  height: 200px;
  margin: 0 10px;
  z-index: 11;
}
.lib_gallery .list .titles {
  width: 100%;
  height: 50px;
  margin: 0px 0 20px 0;
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