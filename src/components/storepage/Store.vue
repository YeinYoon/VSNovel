<template>
<StoreModal
      @close="modal = false"
      :modalData="modalData"
      :modal="modal"
/>
  <!-- logo  -->
  <div class="tests">
    <div class="header">
      <div class="service">
        <img class="icon" src="@/assets/icons/white/shopping-cart.png" alt="logo"/>
        <span class="title">스토어</span>
      </div>
      <div class="price_div">
        <div @click="priceClick">
          <div class="price" v-if="priceType == 0">
            <span class="free">무료</span>
            <div class="price_btn"></div>
            <span class="charge">유료</span>
          </div>
          <div class="price" v-if="priceType == 1">
            <div class="price_btn_left"></div>
            <span class="charge">유료</span>
          </div>
          <div class="price" v-if="priceType == 2">
            <span class="free">무료</span>
            <div class="price_btn_right"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="store_section">
      <div class="nolist" v-if="storeDatas.length == 0">
        <div class="nolistResult">
          <span>대상이 없습니다!</span>
        </div>
      </div>
      <div v-else>
        <div
          class="work_list"
          v-for="novel in storeDatas"
          :key="novel.NOVE_CODE"
          @click="modalOpen(novel)"
        >
          <img class="list_img" src="@/assets/imgs/noimage.png" alt="소설표지" />
          <div class="work_list_con">
            <div class="list_span">
              <span class="list_title">{{ novel.NOVE_TITLE }}</span>
              <span class="list_team">{{ novel.writer }} / {{ novel.NOVE_TEAMNAME }}</span>
              <span class="list_content">{{ novel.NOVE_SYNOPSIS }}</span>
              <span class="list_content_date">{{ novel.NOVE_RELEASE }}</span>
              <span class="list_content_buy">구매횟수 : {{ novel.NOVE_BOUGHT }}</span>
              <span class="list_content_review">리뷰수 : {{ novel.NOVE_REVIEW }}</span>
            </div>
          </div>
          <div class="list_price">
            <span> {{ novel.NOVE_PRICE }}&#8361; </span>
          </div>
        </div>
      </div>
    </div>
    <div>
    </div>
  </div>
</template>

<script>
import StoreModal from "./StoreModal"; 
import axios from "../../axios";
export default {
  name: "Store",
  data() {
    return {
      priceType: 0,
      modal: false,
      modalData : {},

    };
  },
  props:{
    storeDatas : Array,
    searchData : Object,
    storeCode : Number,
  },
  components: {
    StoreModal,
  },
  watch : {
    searchData : {
      deep : true,
      handler() {
        this.priceCheck();
      }
    },
    priceType() {
      this.priceCheck();
    }
  },
  methods: {
    priceClick() {
    // 유무료 버튼 이벤트
      this.priceType++;
      if (this.priceType > 2) this.priceType = 0;
    },

    priceCheck() {
      switch(this.priceType) {
        case 0 :
          this.$emit("priceCheck", 'none');
          break;
        case 1 :
          this.$emit("priceCheck", 'on');
          break;
        case 2 :
          this.$emit("priceCheck", 'off');
          break;
      }
    },
    
    getNoveInfo(){
      axios.post('/api/store/getStore', {code: this.storeCode})
      .then((result)=>{
        if(result.data == "err") {
          console.log("스토어 데이터 불러오기 실패");
        } else {
          this.modalData = result.data[0];
          this.modalOpen();
        }
    })

    },

    modalOpen(data) {
      if(this.$store.state.userId == null) {
        this.$store.commit('gModalOn', {msg : "작품 상세보기 및 구매는 로그인이 필요합니다.", size : "normal"});
        this.$router.push('/signin');
      } else {
        // 모달 오픈 함수
        this.modalData = data;
        this.modal = true;
      }
    },
  },
  created(){
    if(this.$route.params.NOVE_TITLE!=undefined){
      this.modalData = {
        NOVE_TITLE : this.$route.params.NOVE_TITLE,
        NOVE_SYNOPSIS: this.$route.params.NOVE_SYNOPSIS,
        NOVE_PRICE: this.$route.params.NOVE_PRICE,
        NOVE_TEAMNAME: this.$route.params.NOVE_TEAMNAME,
        CATE_CODE : '이 더미엔 장르 데이터 존재 X'
      };
      this.modal = true;
    }
    
    if(this.storeCode != null){
      this.getNoveInfo();
    }
  }
};
</script>

<style>
.tests {
  background-color: #353535;
  padding: 35px 40px 30px 40px;
  width: calc(100% - 440px);
  height: 100%;
  position: fixed;
  left: 440px;
  overflow: auto;
}
/* price_div 위치 잡는 div /  price 전체 div / 
    free 무료 / price_btn 버튼 /charge 유료*/
.price_div {
  position: absolute;
  left: calc(100% - 160px);
  top: 100px;
  height: 30px;
}
.price {
  display: flex;
  background-color: white;
  border-radius: 20px;
  width: 125px;
  float: right;
  height: 40px;
  cursor: pointer;
}
.price_btn {
  flex: 2;
  width: 40px;
  height: 40px;
  background-color: #2872f9;
  border-radius: 100px;
  top: 50%;
  animation-name: price_btn;
  animation-duration: 0.2s;
  animation-fill-mode: forwards;
  /* transform : translateY(5%); */
}
.price_btn_left {
  flex: 2;
  width: 40px;
  height: 40px;
  background-color: #2872f9;
  border-radius: 100px;
  top: 50%;
  animation-name: price_btn_left;
  animation-duration: 0.2s;
  animation-fill-mode: forwards;
  /* transform : translateY(5%); */
}
.price_btn_right {
  flex: 2;
  width: 40px;
  height: 40px;
  background-color: #2872f9;
  border-radius: 100px;
  top: 50%;
  animation-name: price_btn_right;
  animation-duration: 0.2s;
  animation-fill-mode: forwards;
  /* transform : translateY(5%); */
}

@keyframes price_btn{
  100%{
    flex: 1;
  }
}
@keyframes price_btn_left{
  100%{
    flex: 1;
  }
}
@keyframes price_btn_right{
  100%{
    flex: 1;
  }
}
.free,
.charge {
  flex: 1;
  text-align: center;
  font-size: 18px;
  top: 50%;
  transform: translateY(16%);
  color: black;
}
/* work_list 작품 전체 div / list_img 작품 이미지 / 
    list_title 작품 제목 / list_span 글자들 묶은 div / 
    list_team 작품 팀 / list_content 작품 줄거리 / list_price 작품 가격 */
.store_section{
  margin: 0 auto;
  padding: 5px;
  font-size: 1.3em;
  color: white;
  width: 90%;
  height: 80%;
  position: relative;
  top: 70px;
  overflow-y: scroll;
  -ms-overflow-style: none;
}
.work_list {
  /* width: calc(50%); */
  background-color: #2a2a2a;
  margin: 50px 10px;
  border-radius: 20px;
  height: 125px;
  /* top: 100px; */
  display: flex;
  flex-direction: row;
  position: relative;
  cursor: pointer;
}

.nolist {
position: absolute;
left: 50%;
top: 50%;
transform: translate(-50%, -50%);
}

.nolistResult {
  background-color: #444444;
  width: 300px;
  height: 150px;
  border-radius: 50px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

.nolistResult span {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

.list_img {
  width: 100px;
  height: 140px;
  margin: 0 10px 0 20px;
  transform: translateY(-25%);
}
.list_span {
  display: flex;
  flex-direction: column;
  width: 100%;
}
.work_list_con {
  color: white;
  width: 70%;
}
.list_title {
  font-size: 1.3em;
  padding-top: 5px;
}
.list_team {
  font-size: 0.9em;
}
.list_content {
  font-size: 0.7em;
  padding-top: 5px;
  height: 50px;
  width: 100%;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}

.list_content_date {
  position: absolute;
  top: 98px;
  /* left: calc(100% - 40px); */
  font-size: 0.7em;
}

.list_content_buy {
  position: absolute;
  top: 98px;
  left: 285px;
  font-size: 0.7em;
}

.list_content_review {
  position: absolute;
  top: 98px;
  left: 375px;
  font-size: 0.7em;
}

.list_price {
  background-color: #2872f9;
  padding: 0 20px;
  height: 30px;
  width: 130px;
  text-align: center;
  border-radius: 20px;
  display: table;
  position: absolute;
  bottom: -10px;
  right: 10px;
}
.list_price span {
  color: white;
  display: table-cell;
  vertical-align: middle;
  font-size: 1em;
}
</style>