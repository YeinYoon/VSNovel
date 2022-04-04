<template>
  <div class="team_box">
      <div>
      <Modal
        v-if="open == true"
        :openmodal="open"
        @closemodal="open = false"
        :modaldatasend="(modaldata, datasend)"
        @deletemodal="deletepost"
      ></Modal>
    </div>

        <div class="commu_btn_area">
          <div class="commu_btn_red" @click="manage=true"><span class="commu_btn_manage" >관리자 시점</span></div>
          <div class="commu_btn_red" v-if="manage==true"><span class="commu_btn_manage">관리</span></div>
          <div class="commu_btn_blue"><span class="commu_btn_write" @click="$emit('third')">글쓰기</span></div>
        </div>

    <section class="commu_section">
      <div
        class="commu_post"
        v-for="(a, index) in datasend"
        :key="index"
        @click="decision(a,manage)"
      >
        <img class="commu_thumb" :src="`${a.titleImg}`" />
        <div class="commu_back">
          <div class="commu_back_title">{{ a.title }}</div>
          <div class="commu_back_info">
            {{ a.writer }} | {{ a.date }} | {{ a.like }} | {{ a.coment }}
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Modal from "../Modalvue";
export default {
  data() {
    return {
      manage : false,
      open: false,
      modaldata : {}
    };
  },
  components: {
     Modal,
  },
  methods : {
    decision(a,manage){
      if(manage==false){
        this.$emit('first', a);
      }else {
        this.open = true;
        this.modaldata = a;
      }
    },
    deletepost(index){
      
    }
  },
  props : {
    datasend:Object
  }
};
</script>

<style>
.team_box {
  height: 100vh;
}
.commu_btn_area{
  display:flex;
  justify-content: flex-end;
}
.commu_btn_red{
  top:40px;
  position:relative;
  cursor: pointer;
  width: 100px;
  height: 30px;
  background: red;
  border-radius: 20px;
  display: table;
}
.commu_btn_blue{
  top:40px;
  position:relative;
  cursor: pointer;
  margin-left: 20px;
  width: 100px;
  height: 30px;
  background: #2872f9;
  border-radius: 20px;
  display:table;
}
.commu_btn_manage{
  display: table-cell;
  vertical-align:middle;
  text-align:center;
  color:white;
}
.commu_btn_write{
  display:table-cell;
  vertical-align: middle;
  text-align: center;
  color:white;
}
.commu_section {
  position:relative;
  top:7%;
  width: 800px;
  height: 70%;
  margin: 0 auto;
  overflow-y:scroll;
  -ms-overflow-style:none;
}
.commu_section::-webkit-scrollbar {
  display: none;
}
.commu_post {
  position: relative;
  width: 100%;
  margin-top: 20px;
  height: 130px;
}
.commu_post:hover {
  opacity: 0.7;
}
.commu_thumb {
  width: 80px;
  height: 80px;
  cursor: pointer;
  position: absolute;
  z-index: 1;
  top: 10px;
}
.commu_back {
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
.commu_back_title {
  position: absolute;
  font-size: 20px;
  top: 10px;
  float: left;
  left: 90px;
}
.commu_back_info {
  position: absolute;
  float: right;
  font-size: 17px;
  top: 50px;
  right: 10px;
}
</style>