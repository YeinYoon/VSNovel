<template>
  <div class="team_box">
      <div>
      <Modal
        v-if="open == true"
        :openmodal="open"
        @closemodal="open = false"
        :modaldatasend="modaldata"
        :datasend="datasend"
        @deletedata="communitybtn({type : 'modal',indexdata : indexdata})"
      ></Modal>
    </div>

        <div class="commu_btn_area">
          <div class="commu_btn_red" >
            <span class="commu_btn_manage" @click="manage=true" v-if="manage==false">관리자 시점</span>
            <span class="commu_btn_manage" @click="manage=false" v-if="manage==true">관리</span>
          </div>
          <div class="commu_btn_blue" v-if="manage==false"><span class="commu_btn_write" @click="communitybtn({type:'third'})">글쓰기</span></div>
        </div>

    <section class="commu_section">
      <div
        class="commu_post"
        v-for="(a, index) in datasend"
        :key="a"
        @click="communitybtn({manage : manage, index : index , item : a})"
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
    communitybtn(step = {}){
      //step의 길이가 3일때, 글쓰기 저장
      if(Object.keys(step).length == 3) {
        if(step.manage == false) {
          const eventBtn = {type:'first', item:step.item};
          this.$emit('btnEvent', eventBtn)
        }else {
          //모달창 인덱스정보와 내용 받아내기
          this.open = true;
          this.modaldata = step.item;
          this.indexdata = step.index;
          console.log(this.indexdata);
        }
      }
      //step의 길이가 2일때, 모달창으로 글쓰기 삭제
      else if(Object.keys(step).length == 2) {
        if(step.type == 'modal'){
          const modal = {type: 'deletepost' , index:step.indexdata}
          console.log(modal);
          this.$emit('btnEvent', modal)
        }
      }
      //step의 길이가 1일때, post로 나타내기
      if(Object.keys(step).length == 1) {
        if(step.type == 'third') {
          this.$emit('btnEvent', 'third')
        }
      }
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
  width: 800px;
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