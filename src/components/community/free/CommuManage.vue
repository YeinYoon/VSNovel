<template>
  <div class="team_box">
    <div>
      <Modal
        v-if="open == true"
        :openmodal="open"
        @closemodal="open = false"
      ></Modal>
    </div>
        <div class="free_btn_area">
          <div class="free_btn_red" @click="manage=true"><span class="free_btn_manage" >관리자 시점</span></div>
          <div class="free_btn_red" @click="manage=false" v-if="manage==true"><span class="free_btn_manage">관리</span></div>
          <div class="free_btn_blue"><span class="free_btn_write" @click="$emit('next')">글쓰기</span></div>
        </div>

    <section class="free_section">
      <div
        class="free_post"
        v-for="(a, index) in community"
        :key="a"
        @click="decision(a,manage,index)"
      >
        <img class="free_thumb" :src="`${a.titleImg}`" />
        <div class="free_back">
          <div class="free_back_title">{{ a.title }}</div>
          <div class="free_back_info">
            {{ a.writer }} | {{ a.date }} | {{ a.like }} | {{ a.coment }}
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import dummy_data from "@/assets/DataJs/commuData.js";
import Modal from "../Modalvue";
export default {
  data() {
    return {
      manage : false,
      community: dummy_data,
      open: false,
    };
  },
  methods: {
    
  },
  components: {
    Modal,
  },
};
</script>

<style>
.free_section{
 position:relative;
  top:10%;
  width: 800px;
  height: 90%;
  margin: 0 auto;
  overflow-y:scroll;
  -ms-overflow-style:none;
}
.free_section::-webkit-scrollbar {
  display: none;
}
.free_btn_area{
  display:flex;
  justify-content: flex-end;
}
.free_btn_red{
  top:20px;
  position:relative;
  cursor: pointer;
  font-size: 0.9em;
  width: 100px;
  height: 30px;
  background: rgb(255, 71, 71);
  border-radius: 14px;
  display: table;
  margin-left: 20px;
}
.free_btn_blue{
  top:20px;
  position:relative;
  cursor: pointer;
  font-size: 0.9em;
  margin-left: 20px;
  width: 100px;
  height: 30px;
  background: #2872f9;
  border-radius: 14px;
  display:table;
}
.free_btn_manage{
  display: table-cell;
  vertical-align:middle;
  text-align:center;
  color:white;
}
.free_btn_write{
  display:table-cell;
  vertical-align: middle;
  text-align: center;
  color:white;
}


.free_post {
  position: relative;
  width: 100%;
  height: 130px;
}
.free_post:hover {
  opacity: 0.7;
}
.free_thumb {
  width: 80px;
  height: 80px;
  cursor: pointer;
  position: absolute;
  z-index: 1;
  top: 10px;
}
.free_back {
  cursor: pointer;
  display: block;
  position: absolute;
  width: 100%;
  height: 80px;
  background-color: #262626;
  border-radius: 12px;
  color: white;
  z-index: 0;
  top: 30px;
}
.free_back_title {
  position: absolute;
  font-size: 20px;
  top: 10px;
  float: left;
  left: 90px;
}
.free_back_info {
  position: absolute;
  float: right;
  font-size: 17px;
  top: 50px;
  right: 10px;
}
</style>