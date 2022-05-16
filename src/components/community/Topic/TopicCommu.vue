<template>
  <div class="team_box">
      <div>
      <Modal
        v-if="open == true"
        :openmodal="open"
        @closemodal="open = false"
        :modaldatasend="modaldata"
        :datasend="datasend"
        @deletedata="deletepost(indexdata)"
      ></Modal>
    </div>

        <div class="commu_btn_area">
          <div class="commu_btn_red" >
            <span class="commu_btn_manage" @click="manage=true" v-if="manage==false">관리자 시점</span>
            <span class="commu_btn_manage" @click="manage=false" v-if="manage==true">관리</span>
          </div>
          <div class="commu_btn_blue" v-if="manage==false"><span class="commu_btn_write" @click="$emit('third')">글쓰기</span></div>
        </div>

    <section class="commu_section">
      <div
        class="commu_post"
        v-for="(a, index) in datasend"
        :key="a"
        @click="decision(a,manage,index)"
      >
        <img class="commu_thumb" :src="`${a.titleImg}`" @error="replaceimg"/>
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
import img from "@/assets/imgs/noimage.png";
export default {
  data() {
    return {
      manage : false,
      open: false,
      modaldata : {},
      indexdata: '',
    };
  },
  components: {
     Modal,
  },
  methods : {
    decision(a,manage,index){
      if(manage==false){
        this.$emit('first', a);

        //topicpostviewdata 댓글을 위한 인덱스데이터
        this.indexdata = index;
        this.$emit('indexdata', this.indexdata);
      }else {
        this.open = true;
        this.modaldata = a;
        this.indexdata = index;
      }
    },
    deletepost(indexdata){
      this.$emit('deletepost',indexdata);
    },
    replaceimg(e){
      e.target.src=img
    }
  },
  props : {
    datasend:Object
  }
};
</script>

<style>
.team_box {
  height: 80vh;
}
.commu_btn_area{
  display:flex;
  justify-content: flex-end;
}
.commu_btn_red{
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
.commu_btn_blue{
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
  top:10%;
  width: 95%;
  height: 90%;
  margin: 0 auto;
  overflow-y:scroll;
  -ms-overflow-style:none;
}
.commu_post {
  position: relative;
  width: 100%;
  height: 120px;
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