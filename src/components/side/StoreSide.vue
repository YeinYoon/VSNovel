<template>
<div>
  <div class="sideBar">
    <div class="side_search">
      <img src="../../assets/icons/magnifier.png" class="side_icon" />
      <input type="text" />
    </div>
    <div>
      <div class="group"><span>· 컨텐츠 분류</span></div>
      <div class="fiction" id="fiction" @click="groupEvent('novel', $event, 'W')">
        · 웹소설
      </div>
      <div class="novel" id="novel" @click="groupEvent('fiction', $event, 'V')">
        · 비주얼 노벨
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
  <Store />
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
  data() {
    return {
      groupStep: "",
      categoryList : [],
      hiddenData: false,
      genreNum: 0,

      novelType : "",
      cateCode : ""
    };
  },
  methods: {
    groupEvent(step, event, type) {
      // 사이드바 강조효과
      let id = document.getElementById(step);
      if (this.groupStep == "") {
        event.target.style.backgroundColor = "#2872f9";
        this.groupStep = step;
      } else {
        event.target.style.backgroundColor = "#2872f9";
        id.style.backgroundColor = "#2c2c2c";
      }
      this.novelType = type;
      console.log(this.novelType);
      this.getNovelList();
    },
    hidden() {
    // 장르 열고 닫기
      if (this.hiddenData) this.hiddenData = false;
      else this.hiddenData = true;
    },
    categoryEvent(num, event, cateCode) {
    // 장르 강조효과
    
      let id = Array.from(document.querySelectorAll(".select_btn"));

      event.target.style.color = "black";
      id[this.genreNum].style.color = "gray";
      this.genreNum = num;
      this.cateCode = cateCode;
      this.getNovelList();
    },

    //노벨 리스트 조회
    getNovelList() {
      var searchData = {
        novelType : this.novelType,
        cateCode : this.cateCode
      }
      axios.post('/api/store/getNovelList', searchData)
      .then((result)=>{
        if(result.data == "err") {
          console.log("스토어 데이터 불러오기 실패");
        } else {
          this.$store.commit('setNovelList', result.data);
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
  margin: 20px 0 0 30px;
}
.group span {
  display: table-cell;
  vertical-align: middle;
}
.novel,
.fiction {
  width: 73%;
  height: 40px;
  color: white;
  padding: 5px 10px 5px 20px;
  text-align: left;
  margin: 10px 0 0 50px;
  border-radius: 30px;
  font-weight: 700;
  cursor: pointer;
}
.side_genre_group {
  width: 80%;
  margin: 20px 0 0 30px;
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
}
</style>