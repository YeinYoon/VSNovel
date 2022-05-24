<template>
  <!-- logo  -->
  <div class="tests">
    <div class="header">
      <div class="service">
        <img class="icon" src="@/assets/icons/white/leaf.png" alt="logo" />
        <span class="title">{{registerData.VILL_NAME}}</span>
      </div>
    </div>
    <div class="register_cafe_section">
      <img class="register_img" :src="`${registerData.VILL_PRO_IMG}`" />
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
    </div>
  </div>
</template>

<script>
import commuData from "@/assets/DataJs/commuData.js";
import notice from "@/assets/DataJs/notice.js";
import axios from '../../../axios.js';
import board from "@/assets/DataJs/board.js";
export default {
  name: "Register",
  data() {
    return {
      commuData: commuData,
      noticeData: notice,
      registerData : {},
      boardData : board,
    };
  },
  mounted(){
    this.infoVillageList();
  },
  watch:{
    $route(){
      this.infoVillageList();
    }
  },
  methods:{
    // 가입한 카페 정보
    infoVillageList() {
      axios.post('/api/village/infoVillageList', { code : this.$route.fullPath.split('/')[3] })
      .then((result)=>{
        if(result.data == "err") {
          console.log("가입한 카페 정보 불러오기 실패");
        } else {
          this.registerData = result.data[0];
        }
      })
    }
  }
};
</script>

<style>
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
  width: 100%;
  height: 150px;
  border-radius: 20px;
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

.post_list{
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