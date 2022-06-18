<template>
<div>
  <div class="sideBar">
    <div class="side_search">
      <img src="../../assets/icons/magnifier.png" class="side_icon" />
      <input type="text" />
    </div>
    <div>
      <div class="group"><span>· 컨텐츠 분류</span></div>
      <div class="novel_div">
        <div class="novel" id="novel" @click="novelEvent($event, 'novel', '')">
          기본
        </div>
        <div class="newNovel" id="newNovel" @click="novelEvent($event, 'newNovel', 'release')">
          신작
        </div>
        <div class="payNovel" id="payNovel" @click="novelEvent($event, 'payNovel', 'bought')">
          구매↑
        </div>
        <div class="starNovel" id="starNovel" @click="novelEvent($event, 'starNovel', 'review')">
          리뷰↑
        </div>
      </div>
    </div>
    <div class="side_genre_group">
      <div class="side_genre" @click="hidden">· 장르</div>
      <div class="genre_group" v-if="hiddenData">
        <div class="selecter" v-for="(cate, i) in categoryList" :key="cate.CATE_CODE">
          <div class="genre_select" @click="categoryEvent(i, $event, cate.CATE_CODE)">
            <div class="select_btn">· {{ cate.CATE_NAME }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Store :storeDatas = "storeDatas" :searchData = "search" @priceCheck = "getNovelList"/>
</div>
</template>

<script>
import axios from '../../axios'
import Store from '../storepage/Store';
export default {
  name: "StoreSide",
  components:{
    Store,
  },
  created() {
    this.getCateList();
    this.getNovelListFirst();
    this.$router.push('/store');
    this.$store.commit('sideBarOff');
    this.$store.commit('currentServiceCng', 'S');
  },
  mounted(){
    let id = document.getElementById('novel');
    id.style.backgroundColor = "#2872f9";
  },
  data() {
    return {
      categoryList : [],
      hiddenData: false,
      genreNum: 0,
      clickNovel : 'novel',

      storeDatas : [],
      cateCode : "",

      search : {
        contentsType : '',
        category : 0,
        priceType : 'none'
      }
    };
  },
  methods: {
    novelEvent(event, className, contentsType) {
      // 사이드바 강조효과
      let id = document.getElementById(this.clickNovel);
      if (className != this.clickNovel) {
        id.style.animationName = "defaultAnimation"; // 기본
      }
      event.target.style.animationName = "newAnimation"; // 바뀌는 것
      this.clickNovel = className;

      this.search.contentsType = contentsType;
    },
    hidden() {
    // 장르 열고 닫기
      if (this.hiddenData) this.hiddenData = false;
      else this.hiddenData = true;
    },
    categoryEvent(num, event, cateCode) {
    // 장르 강조효과
      let id = document.querySelectorAll(".select_btn");
      id[this.genreNum].style.color = 'gray';
      id[this.genreNum].style.animationName = 'null';
      event.target.style.animationName = 'clickBtn';
      this.genreNum = num;
      this.cateCode = cateCode;
      // this.getNovelList();

      this.search.category = cateCode;
    },

    getNovelListFirst() {
      console.log(this.search);
      axios.post('/api/store/getNovelList', this.search)
      .then((result)=>{
        if(result.data == "err") {
          console.log("스토어 데이터 불러오기 실패");
        } else {
          this.storeDatas = result.data;
        }
      })
    },


    //노벨 리스트 검색 조회
    getNovelList(priceTypeData) {
      this.search.priceType = priceTypeData;
      console.log(this.search);

      axios.post('/api/store/getNovelList', this.search)
      .then((result)=>{
        if(result.data == "err") {
          console.log("스토어 데이터 불러오기 실패");
        } else {
          this.storeDatas = result.data;
        }
      })
    },

    // 카테고리 불러오기
    getCateList() {
      axios.get('/api/store/getCateList')
      .then((result)=>{
        if(result.data=="err"){
          console.log("카테고리 데이터 불러오기 실패");
        } else {
          this.categoryList = result.data;
        }
      })
    }

  },
};
</script>

<style>
</style>