<template>
<ConfirmModal ref="confirmModal"></ConfirmModal>
  <!-- 로고쪽 -->
  <div>
    <div class="header">
      <div class="service">

        <!-- 프로젝트 대표 이미지 가져오기 -->
        <img class="icon" src="@/assets/icons/white/cart.png" alt="logo" />
        <span class="title">상세 페이지</span>
      </div>
    </div>
    <div class="Store_Content">

      <div class="Store_Novel_title">{{ modalData.NOVE_TITLE }}</div>

      <div class="Store_Novel_info">

        <!-- 데이터 값 채워주기 -->
        팀 {{ modalData.NOVE_TEAMNAME }} 제작
        장르 {{modalData.CATE_CODE}}
        최근 업데이트 {{modalData.NOVE_UPDATE}}
        최초 발매일 {{modalData.NOVE_UPDATE}}
        에피소드당 가격{{modalData.NOVE_PRICE}}
        총 회차 {{this.epList.length}}
      </div>

      <div class="Store_Novel_Img"><img src="@/assets/imgs/adver.jpg"></div>

      <div class="Store_Novel_Buy" @click="$emit('next')">

        <div class="Store_Novel_Buy_Content" v-if="isPossession == false" @click="epBuy(epList[0])">
          <p>1화 소장</p>
          <p>{{ modalData.NOVE_PRICE }} ₩</p>
        </div>

        <div class="Store_Novel_Buy_Content" v-else @click="epBuy(epList[latestEp])">
          <p>이어보기</p>
          <p>{{latestEp+1}}화</p>
          <p>{{ modalData.NOVE_PRICE }} ₩</p>
        </div>

      </div>

      <div class="Store_Novel_Synop">
        <div class="Store_Novel_Synop_title">줄거리</div>
        <div class="Store_Novel_Synop_content">{{ modalData.NOVE_SYNOPSIS }}</div>
      </div>

      
      <div class="Store_Novel_EP">
        <div class="Store_Novel_EP_title">에피소드 목록</div>
        <div class="Store_Novel_EP_list">
          <!-- Store_Novel_EP_list_item 반복 -->
          <div class="Store_Novel_EP_list_item" v-for="(ep, i) in epList" :key="i">
            <span>{{ep.ep}}화</span>
            <span>{{ep.title}}</span>

            <button v-if="ep.poss" disabled>소장중</button>
            <button v-else @click="epBuy(ep)">구매</button>
          </div>
        </div>
      </div>

      <div class="Store_Novel_review">
        리뷰
      </div>

    </div>
  </div>
</template>

<script>
// import SwiperCarouselVue from "./SwiperCarousel";
import ConfirmModal from '../modal/ConfirmModal.vue'
import axios from '../../axios'
import storage from '../../aws'
export default {
  name: "StoreVue",
  created() {
    this.getEpList();
  },
  data() {
    return {
      epList : [],
      possessionList : [],
      latestEp : null,
      epSelect : null,
      isPossession : false // 유저가 한 회차라도 소유하고 있는가?
    }
  },
  methods : {

    getUserPossession() {
      axios.post('/api/store/getUserPossession', {noveCode : this.modalData.NOVE_CODE})
      .then((result)=>{
        if(result.data.length == 0) {
          this.isPossession = false;
        } else {
          this.isPossession = true;
          this.possessionList = result.data;
          console.log(this.possessionList);
        }
        
        var findMaxList = [];
        for(var i=0; i<this.possessionList.length; i++) {
          findMaxList.push(this.possessionList[i].POSS_EP);

          if(this.epList[i].ep == this.possessionList[i].POSS_EP) {
            this.epList[i].poss = 'Y';
          }
        }
        var max = Math.max(...findMaxList);
        this.latestEp = max;
      })
    },

    async getEpList() {
      let epExport = await storage.getEpList(`Project/PJ${this.modalData.PROJ_CODE}/episode/`)
      for(let i=0; i<epExport.length; i++){
        if(epExport[i].ex=="json"){
          var result = await storage.getVN(epExport[i].key)
          var uint8array = new TextEncoder("utf-8").encode(result)
          var VN = new TextDecoder().decode(uint8array)
          VN = await JSON.parse(VN)
          this.epList.push(VN)
        }
      }
      this.getUserPossession();
    },

    epBuy(ep) {
      this.epSelect = ep;
      const {IMP} = window;
      IMP.init('imp56365386'); // 가맹점 식별코드

      const data = {
        pg: 'html5_inicis',                           // PG사
        pay_method: 'card',                           // 결제수단
        merchant_uid: `mid_${new Date().getTime()}`,   // 주문번호
        amount: this.modalData.NOVE_PRICE,               // 결제금액
        name: `[${this.modalData.NOVE_TITLE}] ${ep.ep}화 ${ep.title}`, // 주문명
        buyer_name: this.$store.state.userId,                           // 구매자 이름
        buyer_tel: '-',                     // 구매자 전화번호
        buyer_email: this.$store.state.userEmail,               // 구매자 이메일
        buyer_addr: '-',                    // 구매자 주소
        buyer_postcode: '-',                      // 구매자 우편번호,
      }
      IMP.request_pay(data, this.onPayCallback);
    },
    onPayCallback(response) {
      const {
        success,
        imp_uid,
        merchant_uid,
        error_msg,
      } = response;

      if(success) {
        console.log(`결제번호 : ${imp_uid} ,주문번호 : ${merchant_uid}`);

        var data = {
          ep : this.epSelect.ep,
          noveCode : this.modalData.NOVE_CODE,
          price : this.modalData.NOVE_PRICE,
          payCode : imp_uid
        }
        axios.post('/api/store/addUserPossession', data)
        .then(async (result)=>{
          if(result.data == "err") {
            console.log("DB 데이터 입력중 오류 발생");
          } else {
            console.log("유저 소유 데이터 갱신 완료");
            var answer = await this.$refs.confirmModal.show({
              msg : "결제가 완료되었습니다! 라이브러리에서 확인하시겠습니까?",
              btn1 : "예",
              btn2 : "아니오",
              size : "normal"
            })
            if(answer) {
              this.$router.push('/library');
            }

            this.getUserPossession();
          }
        })

      } else {
        this.$store.commit('gModalOn', {msg : `결제 실패 : ${error_msg}`, size : "normal"});
      }
    },
  },
  props: {
    modalData: Object,
  },
  components: {
    // SwiperCarousel: SwiperCarouselVue,
    ConfirmModal
  },
};
</script>

<style>
.Store_Novel_info {
  position: absolute;
  left: 450px;
  top: 0px;
  width: 500px;
  height: 80px;
  border-radius: 20px;
  background: #424242; 
}

.Store_Novel_title {
  position: absolute;
  left: 0px;
  top: 0px;
  color: white;
  font-size: 1.3em;
  z-index: 1;
  width: 430px;
  height: 80px;
  padding: 4px 12px;
  border-radius: 20px;
  background: #565656;
}

.Store_Novel_Buy {
  position: absolute;
  right: 0px;
  top: 0px;
  background: #2872f9;
  width: 220px;
  height: 80px;
  border-radius: 20px;
  text-align: center;
  cursor: pointer;
  line-height: 5px;
  padding-top: 25px;
  color: white;
}

.Store_Novel_Img {
  position: absolute;
  left: 0px;
  top: 40px;
  width: 250px;
  height: 270px;
  background: white;
  border-radius: 20px;
  object-fit: cover;
  overflow: hidden;
  z-index: 2;
}

.Store_Novel_Synop {
  position: absolute;
  left: 210px;
  top: 40px;
  width: 220px;
  height: 270px;
  z-index: 1;
  background: #424242;
  border-radius: 20px;
  object-fit: cover;
  overflow: hidden;
  color: white;
}

.Store_Novel_Synop_title {
  position: absolute;
  top: 10px;
  left: 50px;
  font-size: 1.2em;
}

.Store_Novel_Synop_content {
  position: absolute;
  top: 40px;
  left: 50px;
  width: calc(100% - 55px);
  height: calc(100% - 55px);
  overflow: auto;
}

.Store_Novel_Img img {
  width: 100%;
}

.Store_Novel_EP {
  position: absolute;
  left: 450px;
  top: 90px;
  height: 220px;
  width: 735px;
  background: #424242;
  border-radius: 20px;
}

.Store_Novel_EP_title {
  position: absolute;
  left: 12px;
  top: 8px;
  color: white;
  font-size: 1.3em;
  z-index: 1;
}

.Store_Novel_EP_list {
  position: absolute;
  left: 12px;
  top: 40px;
  width: calc(100% - 24px);
  height: 160px;
  overflow: auto;
  color: white;
  font-size: 1.3em;
  z-index: 1;
  padding: 5px;
}

.Store_Novel_EP_list_item {
  position: relative;
  width: 100%;
  display: inline-block;
  background: #565656;
  border-radius: 10px;
  padding: 0px 5px 0px 5px;
  margin-bottom: 4px;
}

.Store_Novel_EP_list_item_disable {
  position: relative;
  width: 100%;
  display: inline-block;
  opacity: 0.5;
  background: #565656;
  border-radius: 10px;
  padding: 0px 5px 0px 5px;
  margin-bottom: 4px;
}

.Store_Novel_review {
  position: absolute;
  left: 0px;
  top: 330px;
  width: 800px;
  height: 180px;
  border-radius: 20px;
  background: #565656;
}

.Store_Content {
  position: absolute;
  top: 90px;
  width: calc(100% - 40px);
  height: calc(100% - 110px);
}
</style>

<style>
</style>