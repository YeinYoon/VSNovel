`<template>
<div>


  <!-- 커뮤니티 -->
  <div v-if="$store.state.currentService == 'C'">
    <div class="side_search">
      <img src="@/assets/icons/magnifier.png" class="side_icon" />
      <input type="text" />
    </div>
    <div>
      <div class="group" @click="myStep = '전체'"><span>· 커뮤니티</span></div>
      <div class="sel">
        <div class="sel_menu" @click="$store.commit('communityServiceCng', 'F')">· 자유</div>
        <div class="sel_menu" @click="$store.commit('communityServiceCng', 'W')">· 작가</div>
        <div class="sel_menu" @click="$store.commit('communityServiceCng', 'T')">· 팀원모집</div>
        <div class="sel_menu" @click="$store.commit('communityServiceCng', 'R')">· 리뷰 & 추천</div>
        <div class="active_comm_Menu_F" v-if="$store.state.communityService == 'F'"></div>
        <div class="active_comm_Menu_W" v-if="$store.state.communityService == 'W'"></div>
        <div class="active_comm_Menu_T" v-if="$store.state.communityService == 'T'"></div>
        <div class="active_comm_Menu_R" v-if="$store.state.communityService == 'R'"></div>
      </div>
      <br>
      <div class="group" @click="myStep = '전체'"><span>· 빌리지</span></div>
      <div class="sel">
        <div class="sel_menu">· 빌리지 메인</div>
        <div class="sel_menu">· 가입카페 목록</div>
      </div>
    </div>
  </div>


  <!-- 마이페이지 -->
  <div v-if="$store.state.currentService == 'U'">
    <div class="side_search">
      <img src="@/assets/icons/magnifier.png" class="side_icon" />
      <input type="text" />
    </div>
    <div>
      <div class="group" id="main">
        <span>· 마이페이지</span>
      </div>
      <div class="sel">
        <div class="sel_menu">· 프로필 설정</div>
        <div class="sel_menu">· 결제정보 설정</div>
        <div class="sel_menu">· 내가 쓴 게시글</div>
        <div class="sel_menu">· 작성 리뷰 관리</div>
        <div class="sel_menu">· 선호 / 비선호 설정</div>
        <div class="sel_menu">· 결제정보 설정</div>
        <div class="sel_menu">· 내가 쓴 게시글</div>
        <div class="sel_menu">· 작성 리뷰 관리</div>
      </div>
    </div>
  </div>


  <!-- 라이브러리 -->
  <div v-if="$store.state.currentService == 'L'">
    <div class="side_search">
      <img src="@/assets/icons/magnifier.png" class="side_icon" />
      <input type="text" />
    </div>
    <div>
      <div class="group"><span>· 컨텐츠 분류</span></div>
      <div class="novel_div">
        <div class="novel" id="novel" @click="novelEvent($event, 'novel')">
          최근 플레이
        </div>
        <div class="payNovel" id="payNovel" @click="novelEvent($event, 'payNovel')">
          {{payDate}}
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


  <!-- 공지사항 -->
  <div v-if="$store.state.currentService == 'N'">
    <div class="side_search">
      <img src="@/assets/icons/magnifier.png" class="side_icon" />
      <input type="text" />
    </div>
    <div>
      <div class="group" @click="myStep = '전체'"><span>· TOPIC</span></div>
      <div class="sel">
        <div class="sel_menu">· 전체</div>
        <div class="sel_menu">· 업데이트 내역</div>
        <div class="sel_menu">· 이벤트</div>
        <div class="sel_menu">· 정책</div>
      </div>
    </div>
  </div>


</div>
</template>

<script>
import axios from '../axios'
export default {
  name: "sideBar",

  data() {
    return {
      categoryList : [],
      hiddenData: false,
      payDate : '구매일자↑',
      clickNovel : 'novel',
      genreNum: 0,
    };
  },

  created() {
    this.getCateList();
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
    getCateList() {
      axios.get('/api/store/getCateList')
      .then((result)=>{
        if(result.data=="err"){
          console.log("카테고리 데이터 불러오기 실패");
        } else {
          this.categoryList = result.data;
        }
      })
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
  },
};
</script>

<style>
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
    margin: 10px 0 10px 30px;
    cursor: pointer;
  }
  .group span {
    display: table-cell;
    vertical-align: middle;
  }
  .sel_menu {
    position: relative;
    z-index: 11;
    width: 73%;
    height: 40px;
    color: white;
    padding: 5px 10px 5px 20px;
    text-align: left;
    margin: 10px 0 0 50px;
    border-radius: 30px;
    font-weight: 600;
    font-size: 1em;
    cursor: pointer;
  }

  .Temp_LogoutButton {
    position: absolute;
    left: 160px;
    top: 90%;
  }

  .mypage_logout {
    width: 100px;
    height: 50px;
    border-radius: 10px;
    background: #2872f9;
    color: white;
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
    animation-name: groupon;
    animation-duration: 0.3s;
    animation-fill-mode: forwards;
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

  .active_comm_Menu_F {
    position: absolute;
    width: 203px;
    background: #2872f9;
    top: 164px;
    left: 60px;
    height: 40px;
    border-radius: 50px;
    z-index: 10;
    animation-name: groupon;
    animation-duration: 0.2s;
    animation-fill-mode: forwards;
  }

  .active_comm_Menu_W {
    position: absolute;
    width: 203px;
    background: #2872f9;
    top: 214px;
    left: 60px;
    height: 40px;
    border-radius: 50px;
    z-index: 10;
    animation-name: groupon;
    animation-duration: 0.2s;
    animation-fill-mode: forwards;
  }

  .active_comm_Menu_T {
    position: absolute;
    width: 203px;
    background: #2872f9;
    top: 264px;
    left: 60px;
    height: 40px;
    border-radius: 50px;
    z-index: 10;
    animation-name: groupon;
    animation-duration: 0.2s;
    animation-fill-mode: forwards;
  }

  .active_comm_Menu_R {
    position: absolute;
    width: 203px;
    background: #2872f9;
    top: 314px;
    left: 60px;
    height: 40px;
    border-radius: 50px;
    z-index: 10;
    animation-name: groupon;
    animation-duration: 0.2s;
    animation-fill-mode: forwards;
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

@keyframes groupon {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>