<template>
  <div class="RouterView_NonSide">
      <!-- 헤더 -->

      <div class="header">
        <div class="service">
          <img src="../../assets/icons/vsn_platform.png" class="icon" />
          <span class="title">Visual Studio Novel</span>
        </div>
        <div class="userHeader"  v-if="$store.state.userId != null">
          <div>
            <!-- <div class="UH_profilebox"><img :src="this.$store.state.profileImg"></div> -->
            <span class="UH_hello">{{$store.state.userNickname}} 님 반갑습니다</span>
            <!-- <span class="UH_recentdate">최근 접속 : 2022-07-02</span> -->
            <div class="UH_funcBtn">
              <button @click="$router.push('/mypage/mymain')">내 정보</button>
              <!-- <button>뭔가잇음</button> -->
              <button v-if="$store.state.userId == 'admin'" @click="$router.push('/admin')">관리자 패널</button>
            </div>
          </div>
        </div>
      </div>
      <div class="section">
        <!-- 메인 배너 -->
        <div class="banner">
          <SwiperCarousel />
        </div>
        <div class="widget">
          <!-- 커뮤니티 -->
          <div class="comunity">
            <div class="title">
              <span>
                인기 게시글
              </span>
            </div>
            <div class="content">
              <!-- 반복문이 들어올 div 클래스 (list) -->
              <div class="list" v-for="post in topPost" :key="post">
                <div class="list_title">
                 {{post.POST_TITLE}}
                </div>
                <div class="list_btn" v-if="post.BOAR_CODE == 1">자유</div>
                <div class="list_btn" v-if="post.BOAR_CODE == 2">작가</div>
                <div class="list_btn" v-if="post.BOAR_CODE == 3">팀원모집</div>
                <div class="list_btn" v-if="post.BOAR_CODE == 4">리뷰&추천</div>
              </div>
            </div>
          </div>
          <!-- 공지사항 -->
          <div class="notice">
            <div class="title">
              <span>
                공지사항
              </span>
            </div>
            <div class="content">
              <!-- 반복문이 들어올 div 클래스 (list) -->
              <div class="list">
                <div class="list_title">
                리스트 제목
                </div>
                <div class="list_btn">게시판 이름</div>
              </div>
            </div>
          </div>
          <!-- 스토어  -->
          <div class="store">
            <div class="title">
              <span>
                스토어
              </span>
            </div>
            <div class="content">
              <!-- 반복문이 들어올 div 클래스 (list) -->
              <div class="list" v-for="data in 10" :key="data">
                <div class="store_list_img">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr class="lines" />
      <div class="footer">
      </div>
    </div>
</template>

<script>
import SwiperCarouselVue from "./MainCarousel";
import axios from '../../axios'
import storage from '../../aws'
export default {
  name: "MainScreen",
  created() {
    axios.get("/api/auth/loginCheck").then(async (result) => {
      if(result.data != "") {
        this.$store.commit("userLogin", {
          nickname: result.data.USER_NICKNAME,
          id: result.data.USER_ID,
          profileImg : await storage.getUserProfileImg(result.data.USER_ID)
        });
      }
    });
    this.$store.commit('sideBarOff');
    this.$store.commit('currentServiceCng', 'M');
  },
  mounted() {
    axios.get("/api/main/topPost").then(async (result) => {
      if(result.data != "") {
        this.topPost = result.data;
        console.log(this.topPost);
      }
    });
  },
  data() {
    return {
      topPost : [],
    };
  },

  components: {
    SwiperCarousel: SwiperCarouselVue,
  },
  methods: {
    // 스토어 게시물 이동 함수
  },
};
</script>

<style>
.lines {
  margin: 10px 0 15px 0;
  border: 1px solid white;
}
.main {
  width: 100%;
  position: absolute;
  left: 5%;
}
.header {
  display: flex;
  width: calc(100%);
}
.service {
  display: table;
}
.service .icon {
  display: table-cell;
  width: 50px;
  height: 50px;
  margin-right: 10px;
}
.service .title {
  display: table-cell;
  vertical-align: middle;
  color: white;
  font-weight: 600;
  font-size: 2em;
}
.service .topic {
  display: block;
  width: 200px;
  color: white;
  position: relative;
  top: 30px;
  left: calc(100% - 370px);
  font-size: 1.2em;
}
.userHeader {
  position: absolute;
  width: 175px;
  top: 60px;
  left: calc(100% - 130px);
  background: #484848;
  color: white;
  height: 70px;
  border-radius: 20px;
  transform: translate(-50%,-50%);
  box-shadow: 0 0 10px 1px #2e2e2e;
}

.UH_profilebox {
  position: absolute;
  left: 10px;
  top: 10px;
  width: 47px;
  border-radius: 10px;
  overflow: hidden;
}

.UH_hello {
  position: absolute;
  left: 10px;
  top: 10px;
  width: 155px;
  text-overflow: ellipsis;
  background: #383838;
  padding-left: 5px;
  border-radius: 5px;
  overflow: hidden;
  white-space: nowrap;
}

.UH_recentdate {
  position: absolute;
  left: 60px;
  top: 31px;
  font-size: 0.85em;
}

.UH_funcBtn {
  position: absolute;
  left: 10px;
  top: 36px;
  width: 200px;
}

.UH_funcBtn button {
  border: none;
  background: #2872f9;
  font-size: 0.75em;
  color: white;
  border-radius: 7px;
  margin-right: 3px;
}

.UH_profilebox img {
  width: 100%;
}

button {
  border: none;
  outline: none;
}
input {
  border: none;
  outline: none;
}
.input:focus {
  outline: 0px;
}
button {
  border: none;
  outline: none;
}
.section {
  width: 100%;
  position: relative;
  top: 30px;
  margin: 0 auto;
}
.section .banner {
  margin: 0 auto;
  width: 100%;
  height: 200px;
  border-radius: 25px;
  border: 2px solid rgb(52, 52, 52);
  overflow: hidden;
  box-shadow: 0 0 15px 4px #272727;
}
.footer {
  width: 100%;
  height: 160px;
  color: white;
  padding: 5px 0 0 5px;
}
.widget{
  width: 100%;
  height: 600px;
  margin: 20px 0 40px 0;
}
.widget .comunity, .widget .notice{
  width: 49%;
  border-radius: 20px;
  height: 280px;
  overflow: hidden;
  color: white;
  font-weight: 600;
  box-shadow: 0 0 10px 1px #2e2e2e;
}
.widget .comunity {
  float: left;
}
.widget .notice {
  float: right;
}
.widget .comunity .title, .widget .notice .title{
  line-height: 50px;
  position: relative;
  width: 100%;
  height: 50px;
  background-color: #2c2c2c;
  padding: 0 10px;
  box-shadow: 0 0 20px 1px #242424;
}
.widget .comunity .content, .widget .notice .content{
  height: 230px;
  background-color: #484848;
  padding: 10px 20px;
}
/* 반복문 틀  */
.widget .comunity .content .list{
  width: 100%;
  height: 50px;
  background-color: #2c2c2c;
  border-radius: 10px;
  margin-bottom: 5px;
}
.widget .notice .content .list{
  width: 100%;
  height: 50px;
  background-color: #2c2c2c;
  border-radius: 10px;
}
/* 반복문 안의 제목 */
.widget .comunity .content .list_title,
.widget .notice .content .list_title{
  font-size: 0.9em;
  float: left;
  position: relative;
  left: 10px;
}
/* 반복문 안의 게시판 이름 퍼렁이 */
.widget .comunity .content .list_btn,
.widget .notice .content .list_btn{
  font-size: 0.9em;
  background-color: #2872f9;
  width: 70px;
  text-align: center;
  border-radius: 20px;
  float: right;
  position: relative;
  top: 5px;
  right: 5px;
}
/* 스토어 */
.widget .store{
  width: 100%;
  border-radius: 20px;
  height: 280px;
  overflow: hidden;
  color: white;
  font-weight: 600;
  box-shadow: 0 0 10px 1px #2e2e2e;
  position: relative;
  top: 25px;
}
.widget .store .title{
  line-height: 50px;
  position: relative;
  width: 100%;
  height: 50px;
  background-color: #2c2c2c;
  padding: 0 10px;
  box-shadow: 0 0 20px 1px #242424;
}
.widget .store .content{
  height: 230px;
  background-color: #484848;
  padding: 10px 20px;
  text-align: center;
  overflow: auto;
}
.widget .store .content .list{
  display: inline-block;
}
.widget .store .content .list .store_list_img{
  background-color: #2872f9;
  width: 150px;
  height: 200px;
  border-radius: 20px;
  margin: 0 3px;
}
</style>