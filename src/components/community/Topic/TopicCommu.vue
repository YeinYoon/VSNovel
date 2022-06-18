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

    <!-- 상단 버튼 프레임 -->
    <div class="commu_btn_area">
      <!-- 관리자 계정만 노출 -->
      <div class="commu_btn_red" >
        <span class="commu_btn_manage" @click="manage=true" v-if="manage==false">관리자 시점</span>
        <span class="commu_btn_manage" @click="manage=false" v-if="manage==true">관리</span>
      </div>
      <!-- 글쓰기 버튼 -->
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
          <!-- 글제목 -->
          <div class="commu_back_title">{{ a.title }}</div>

          <!-- (조건) 리뷰 게시판 별점 -->
          <span v-if="step=='리뷰 & 추천'" class="commu_str">★★★★★
            <span class="commu_str_draw" :style="{width : a.str*20 + '%'}">★★★★★</span>
          </span>

          <!-- 글정보 -->
          <div class="commu_back_info">
            {{ a.writer }} | {{ a.date }} | {{ a.likes }} | {{ a.coment }}
          </div>
        </div>

      </div>
    </section>
  </div>
</template>

<script>
import Modal from "../Modalvue";
import axios from '../../../axios'
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
  props : {
    datasend:Object,
    step: String
  },
  created(){
    this.getcommulist();
  },
  methods : {
    communitybtn(step = {}){
      //step의 길이가 3일때, 글쓰기 저장
      if(Object.keys(step).length == 3) {
        if(step.manage == false) {
          const eventBtn = {type:'first', item:step.item , index:step.index};
          this.$emit('btnEvent', eventBtn)
        }else {
          //모달창 인덱스정보와 내용 받아내기
          this.open = true;
          this.modaldata = step.item;
          this.indexdata = step.index;
          //console.log(this.indexdata);
        }
      }
      //step의 길이가 2일때, 모달창으로 글쓰기 삭제
      else if(Object.keys(step).length == 2) {
        if(step.type == 'modal'){
          const modal = {type: 'deletepost' , index:step.indexdata}
          //console.log(modal);
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
    },
    
    //커뮤 리스트 조회
    getcommulist() {
      axios.get('/api/community/getcommulist')
      .then((result)=>{
        if(result.data == "err") {
          console.log("커뮤니티 데이터 불러오기 실패");
        } else {
        //  console.log(result.data);
        }
      })
    },
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
  background: #ff4c4c;
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
  margin-top: 30px;
  overflow: scroll;
  width: 100%;
  height: calc(100vh - 157px);
  -ms-overflow-style:none;
}
.commu_post {
  position: relative;
  width: 100%;
  height: 120px;
  transition: 0.2s all ease;
}
.commu_post:hover {
  opacity: 0.7;
}
.commu_thumb {
  width: 80px;
  height: 80px;
  cursor: pointer;
  position: absolute;
  top: 10px;
  left: 21px;
  z-index: 11;
}
.commu_back {
  cursor: pointer;
  display: block;
  position: absolute;
  width: calc(100% - 50px);
  left: 30px;
  height: 80px;
  background-color: #262626;
  border-radius: 12px;
  color: white;
  top: 30px;
}
.commu_back_title {
  position: absolute;
  font-size: 20px;
  top: 10px;
  float: left;
  left: 80px;
}
.commu_str {
  position:absolute;
  float:right;
  right: 10px;
  top:10px;
  font-size: 1.5em;
}
.commu_back_info {
  position: absolute;
  float: right;
  font-size: 17px;
  top: 50px;
  right: 10px;
}
.commu_str_draw {
  position: absolute;
  color: #2872f9;
  left: 0;
  overflow: hidden;
  font-size : 1.0em;
  -webkit-text-stroke-width:1.2px;
  -webkit-text-stork-color:#2872f9
  }
</style>