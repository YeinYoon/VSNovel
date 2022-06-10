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
        <div class="novel" id="novel" @click="novelEvent($event, 'novel')">
          기본
        </div>
        <div class="newNovel" id="newNovel" @click="novelEvent($event, 'newNovel')">
          신작
        </div>
        <div class="payNovel" id="payNovel" @click="novelEvent($event, 'payNovel')">
          구매↑
        </div>
        <div class="starNovel" id="starNovel" @click="novelEvent($event, 'starNovel')">
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
  <Store :storeDatas = "storeDatas"/>
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
    this.getNovelList();
    this.$router.push('/store');
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
      cateCode : ""
    };
  },
  methods: {
    novelEvent(event, className) {
      // 사이드바 강조효과
      let id = document.getElementById(this.clickNovel);
      if (className != this.clickNovel) {
        id.style.animationName = "defaultAnimation"; // 기본
      }
        event.target.style.animationName = "newAnimation"; // 바뀌는 것
        this.clickNovel = className;
        
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
      this.getNovelList();
    },

    //노벨 리스트 조회
    getNovelList() {
      axios.post('/api/store/getNovelList', {cateCode : this.cateCode})
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
/* -------------------------------------------------------------------- */

.side_search {
  background-color: white;
  width: 80%;
  height: 40px;
  padding: 5px 10px;
  border: 1px solid black;
  border-radius: 30px;
  margin: 0 0 25px 30px;
  top: 45px;
}
.side_search .side_icon {
  position: relative;
  top: -2px;
  left: -5px;
  width: 30px;
  height: 30px;
}
.side_search input {
  width: 85%;
  font-size: 100%;
}
.side_search input:focus {
  outline: 0px;
}
.group {
  width: 80%;
  height: 40px;
  background-color: white;
  padding: 5px 10px 5px 20px;
  border-radius: 30px;
  font-weight: 700;
  display: table;
  margin: 20px 0 10px 30px;
}
.group span {
  display: table-cell;
  vertical-align: middle;
}
.novel_div{
  margin: 0 auto;
  display: grid;
  width: 80%;
  background-color: #494949;
  border-radius: 15px;
  overflow: hidden;
}
.novel{
  grid-column: 1;
  grid-row: 1;
}
.newNovel{
  grid-column: 2;
  grid-row: 1;
}
.payNovel{
  grid-column: 1;
  grid-row: 2;
}
.starNovel{
  grid-column: 2;
  grid-row: 2;
}
.newNovel, .novel, .payNovel, .starNovel  {
  color: white;
  padding: 5px 0;
  text-align: center;
  font-weight: 700;
  cursor: pointer;
  width: 100%;
  animation-fill-mode: forwards;
  animation-duration: 0.5s;
}
.side_genre_group {
  width: 80%;
  margin: 10px 0 0 30px;
  font-weight: 700;
}
.side_genre {
  background-color: white;
  padding: 5px 10px 5px 20px;
  border-radius: 30px;
  position: relative;
  z-index: 12;
  box-shadow: 0px 3px 4px 1px rgba(65, 65, 65, 0.5);
  cursor: pointer;
}
.genre_group {
  margin: 10px 0 0 0;
  background-color: white;
  border-radius: 20px;
  padding: 40px 10px 5px 30px;
  position: relative;
  z-index: 11;
  top: -40px;
  font-size: 0.9em;
}
.selecter {
  font-weight: 700;
  color: #8a8a8a;
  cursor: pointer;
}
.select_btn {
  font-weight: 700;
  color: #8a8a8a;
  cursor: pointer;
  animation-fill-mode: forwards;
  animation-duration: 0.5s;
}
@keyframes clickBtn {
  0%{
    opacity: 0.7;
  }
  100%{
    opacity: 1;
    color: black;
    font-weight: 800;
  }
}
@keyframes defaultAnimation {
  /* 되돌리는 것 */
  0%{
  }
  100%{
    background-color: #494949;
  }
}
@keyframes newAnimation {
  /* 클릭한 것 */
  0%{
    background-color: #494949;
  }
  100%{
    background-color : #2872f9;
  }
}
</style>