<template>
  <!-- logo  -->
  <div class="tests">
    <div class="header">
      <div class="service">
        <img class="icon" src="@/assets/icons/white/leaf.png" alt="logo" />
        <span class="title">{{registerData.VILL_NAME}}</span>
      </div>
      <div class="register_user_info_cont">
        <span class="register_user_name">지존정인님 환영합니다.</span>
        <div class="register_user_btn_cont">
          <div class="register_user_btn_pos">카페관리</div>
          <div class="register_user_btn_pos" @click="postmanage">게시글 관리</div>
          <div class="register_user_btn_pos">회원관리</div>
          <span style="position:absolute;cursor:pointer; top:40px; right:20px;">탈퇴</span>
        </div>
      </div>
    </div>
    
    <img class="register_img" :src="`${registerData.VILL_PRO_IMG}`" />
    <div class="register_cafe_container">
      <div class="register_cafe_board_container">
        <div class="register_cafe_board">줄거리</div>
        <div class="register_cafe_board">줄거리</div>
        <div class="register_cafe_board">줄거리</div>
        <div class="register_cafe_board">줄거리</div>
        <div class="register_cafe_board">줄거리</div>
        <div class="register_cafe_board">줄거리</div>
        <div class="register_cafe_board">줄거리</div>
        <div class="register_cafe_board">줄거리</div>
        <div class="register_cafe_board">줄거리</div>
        <div class="register_cafe_board">줄거리</div>
        <div class="register_cafe_board">줄거리</div>
        <div class="register_cafe_board">줄거리</div>
      </div>
      
      <div class="register_cafe_list_container">
        <!-- <div class="vil_post_section"> -->
          <div class="post_line">
            <div class="post_place">작성위치</div>
            <div class="post_title">제목</div>
            <div class="post_like">추천수</div>
            <div class="post_comment">댓글수</div>
            <div class="post_clicks">조회수</div>
          </div>
          <hr class="lines" />
          <div class="post_line" v-for="(post, i) in post" :key="i">
            <div class="post_place">{{ post.position }}</div>
            <div class="post_title" style="cursor:pointer">{{ post.title }}</div>
            <div class="post_like">{{ post.likes }}</div>
            <div class="post_comment">{{ post.coment }}</div>
            <div class="post_clicks">{{ post.look }}</div>
          </div>
        <!-- </div> -->
      </div>
    </div>
    <!-- <div class="register_cafe_section">
        <div class="register_content">
          <div class="info_list">
            <div class="resigster_title">
            <img :src="`${registerData.VILL_PRO_IMG}`" />
            <div class="register_info">
                <span>개설자 : {{ registerData.VILL_CREATER }}</span>
                <span>가입자 : {{ registerData.VILL_USER_COUNT }}</span>
              </div>
            </div>
            <div class="board_list_box">
              <div class="board_list">
                <div class="header">
                  <div class="service">
                    <img class="icon" src="@/assets/icons/white/bubble_chat.png" alt="logo">
                    <span class="title">보드</span>
                  </div>
                </div>
                <hr class="lines" />
                <div class="list" v-for="board in boardData" :key="board">
                  <div class="content">
                    <span class="board_title">{{board.title}}</span>
                    <span class="datas">{{board.date}}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="post_list">
            <div class="register_notice_box">
              <div class="notice">
                <div class="header">
                  <div class="service">
                    <img
                      class="icon"
                      src="@/assets/icons/white/propaganda.png"
                      alt="logo"
                    />
                    <span class="title">공지사항</span>
                  </div>
                </div>
                <hr class="lines" />
                <div class="list" v-for="notice in noticeData" :key="notice">
                  <span class="con">{{ notice.content }}</span>
                  <span class="date">{{ notice.date }}</span>
                </div>
              </div>
            </div>
            <div class="register_community_box">
              <div class="community">
                <div class="header">
                  <div class="service">
                    <img
                      class="icon"
                      src="@/assets/icons/white/bubble_chat.png"
                      alt="logo"
                    />
                    <span class="title">커뮤니티</span>
                  </div>
                </div>
                <hr class="lines" />
                <div class="list" v-for="commu in commuData" :key="commu">
                  <div class="content">
                    <img class="img" :src="`${commu.titleImg}`" />
                    <span class="title">{{ commu.title }}</span>
                    <span class="datas"
                      >{{ commu.writer }} | {{ commu.date }} |
                      {{ commu.likes }} | {{ commu.coment }}</span
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
    </div> -->
  </div>
</template>

<script>
import commuData from "@/assets/DataJs/commuData.js";
import notice from "@/assets/DataJs/notice.js";
import axios from '../../../axios.js';
import board from "@/assets/DataJs/board.js";
import post from "@/assets/DataJs/post.js";
export default {
  name: "RegisterCafe",
  data() {
    return {
      commuData: commuData,
      noticeData: notice,
      registerData : {},
      paramsTitle : this.$route.params.id,
      boardData: board,
      post:post
    };
  },
  mounted(){
    this.infoVillageList();
    console.log(this.paramsTitle);
  },
  methods:{
    // 가입한 카페 정보
    infoVillageList() {
      axios.post('/api/village/infoVillageList', { name : this.paramsTitle })
      .then((result)=>{
        if(result.data == "err") {
          console.log("가입한 카페 정보 불러오기 실패");
        } else {
          this.registerData = result.data[0];
        }
      })
    },
    postmanage(){
      this.$router.push({name:'MyPage'});
    }
  }
};
</script>


<style>
.register_cafe_list_container .post_line {
  text-align: center;
  display: flex;
  height: 30px;
  margin-bottom: 5px;
}
.register_cafe_list_container .post_place,
.register_cafe_list_container .post_like,
.register_cafe_list_container .post_comment,
.register_cafe_list_container .post_clicks {
  width: 15%;
}
.register_cafe_list_container .post_title {
  width: 40%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.register_cafe_list_container{
  position: relative;
  top: 20px;
  padding-bottom: 20px;
  padding-top: 10px;
  width: 95%;
  height: 85%;
  margin-bottom: 30px;
  border-radius: 20px;
  background: #5D5D5D;
  margin: 0 auto;
  color: white;
  overflow: auto;
}
.register_cafe_board_container{
  display: flex;
  width: 95%;
  height: 75px;
  white-space: nowrap;
  overflow-x: auto;
  padding-bottom: 20px;
  margin: 0 auto;
}

.register_cafe_board_container::-webkit-scrollbar {
  display: block;
  height: 10px;
  background: none;
}

.register_cafe_board_container::-webkit-scrollbar-thumb {
  background: #353535;
  border-radius: 25px;
}

.register_cafe_board{
  position: relative;
  top: 15px;
  /* left: 20px; */
  width: 120px;
  height: 35px;
  border-radius: 20px;
  text-align: center;
  color: white;
  background: #6A6A6A;
  cursor: pointer;
  margin-right: 10px;
  padding: 5px 30px 0px 30px;
}

.register_cafe_container{
  position: relative;
  top: 12%;
  width: 100%;
  height: 80%;
  background: #454545;
  border-radius: 20px;
  overflow-x: auto;
  white-space: nowrap;
}
.register_user_name{
  position: absolute;
  top: 10px;
  left: 10px;
}
.register_user_btn_cont{
  display: flex;
  top: 40px;
}
.register_user_btn_pos{
  position: relative;
  top: 38px;
  left: 10px;
  margin-right: 10px;
  width: 60px;
  font-size: 0.8em;
  text-align: center;
  cursor: pointer;
  background: #5D5D5D;
  border-radius: 20px;
}
.register_user_info_cont{
  position: absolute;
  right: 75px;
  width: 300px;
  height: 70px;
  background: #6A6A6A;
  border-radius: 20px;
  color: white;
}
.register_cafe_section {
  margin: 0 auto;
  padding: 5px;
  font-size: 1.3em;
  color: white;
  width: 95%;
  height: 88%;
  position: relative;
  top: 7%;
}
.register_img {
  position: relative;
  width: 100%;
  height: 150px;
  top: 40px;
  border-radius: 20px;
  /* left: -40px; */
}
.register_content{
    display: flex;
    margin: 25px 0 0 0;
    height: 65%;
    overflow-y: scroll;
    -ms-overflow-style: none;
}
.info_list{
  flex:3;
}
.resigster_title{
    flex: 3;
    height: 130px;
    font-size: 0.7em;
    background-color: #494949;
    border-radius: 20px;
    margin: 0 10px 0 0;
    padding: 10px;
    display: flex;
    margin-bottom: 10px;
}
.resigster_title div{
    position: relative;
    top: 5px;
}
.resigster_title img{
    width: 100px;
    height: 100px;
    border-radius: 20px;
    margin: 5px;
}
.register_info{
    display: flex;
    flex-direction: column;
}
.board_title{
  cursor:pointer;
}
.board_list_box{
  flex: 3;
  height: 470px;
  font-size: 0.7em;
  background-color: #494949;
  border-radius: 20px;
  margin: 0 10px 0 0;
  padding: 10px;
  display: flex;
  overflow:scroll;
}
.board_list{
  width: 100%;
}

.vil_post_list{
    flex: 7;
}
.register_notice_box, .register_community_box{
  flex: 7;
  background-color: #494949;
  padding: 10px;
  border-radius: 20px;
  height: 300px;
}
.register_community_box{
  margin: 10px 0 0 0;
}
.register_notice_box .notice .header .title, 
.register_community_box .community .header .title,
.board_list_box .board_list .header .title{
  font-size: 1em;
}
.register_notice_box .notice .header .icon,
.register_community_box .community .header .icon,
.board_list_box .header .icon{
  width: 30px;
  height: 30px;
}
</style>