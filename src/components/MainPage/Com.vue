<template>
  <div class="box">
    <div class="community_box">
      <div class="community">
        <div class="header">
          <div class="service">
            <img
              class="icon"
              src="../../assets/icons/white/bubble_chat.png"
              alt="logo"
            />
            <span class="title">커뮤니티</span>
          </div>
        </div>
        <hr class="lines" />
        <div class="list" v-for="commu in commuData" :key="commu" @click="communityView(commu)">
          <div class="content">
            <img class="img" :src="`${commu.titleImg}`" />
            <span class="title">{{ commu.title }}</span>
            <span class="datas"
              >{{ commu.writer }} | {{ commu.date }} | {{ commu.likes }} |
              {{ commu.coment }}</span
            >
          </div>
        </div>
      </div>
    </div>

    <div class="line"></div>

    <div class="notice_box">
      <div class="notice">
        <div class="header">
          <div class="service">
            <img
              class="icon"
              src="../../assets/icons/white/propaganda.png"
              alt="logo"
            />
            <span class="title">공지사항</span>
          </div>
        </div>
        <hr class="lines" />
        <div class="list" v-for="notice in noticeData" :key="notice" @click="noticeView(notice)">
          <span class="titles">{{ notice.title }}</span>
          <span class="con">내용 - {{ notice.content }}</span>
          <span class="date">{{ notice.date }}</span>
        </div>
      </div>
    </div>
    <div class="store">
      <div class="header">
        <div class="service" style="background: $ {}">
          <img
            class="icon"
            src="../../assets/icons/white/shopping-cart.png"
            alt="logo"
          />
          <span class="title">스토어</span>
        </div>
      </div>
      <hr class="lines" />
      <div class="div">
        <div class="list" v-for="store in storeData" :key="store">
          <img class="img" :src="`${store.titleImg}`" @click="storeView(store)"/>
          <div class="titles">
            {{ store.title }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import commuData from "../../assets/DataJs/commuData.js";
import notice from "../../assets/DataJs/notice.js";
import store from "../../assets/DataJs/dataHu.js";
export default {
  name: "Com",
  data() {
    return {
      commuData: commuData,
      noticeData: notice,
      storeData: store,
    };
  },
  mounted() {
    // 공지사항 날짜 순으로 정렬
    this.noticeData.sort(function (a, b) {
      return new Date(a.date) - new Date(b.date);
    });
  },
  methods:{
    // 스토어 게시물 이동 함수
    storeView(data){
      console.log(data.title);
      this.$router.push({path:'/store',name:'Store', params:{ nove_id: data.title}});
    },
    communityView(data){
      console.log(data.title);
      this.$router.push({path:'/community',name:'Community', params:{ comm_id: data.title}});
    },
    noticeView(data){
      console.log(data.title);
      this.$router.push({path:'/notice',name:'Notice', params:{ noti_id: data.title}});
    }
  }
};
</script>
 
<style>
.box {
  width: 1000px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
}
.community_box{
  flex: 4;
  width: 450px;
  background-color: #494949;
  height: 300px;
  padding: 5px 10px;
  border-radius: 20px;
  margin: 20px 0;
}
.notice_box {
  flex: 4;
  width: 450px;
  background-color: #494949;
  height: 300px;
  padding: 5px 10px;
  border-radius: 20px;
  margin: 20px 0;
}
.notice,
.community {
  height: 95%;
  overflow-y: scroll;
  -ms-overflow-style: none;
}
.notice::-webkit-scrollbar,
.community::-webkit-scrollbar {
  display: none;
}
.line {
  width: 5px;
  margin: 0 20px;
  background-color: #494949;
  height: 280px;
  border-radius: 20px;
  transform: translateY(10%);
}
.community .list {
  background-color: #353535;
  border-radius: 10px;
  height: 40px;
  margin: 0 1% 0 2%;
}

.list .content {
  margin: 10px 0;
  display: table;
  width: 98%;
  color: white;
  position: relative;
}
.list .img {
  width: 35px;
  height: 35px;
  display: table-cell;
  position: absolute;
  top: -5px;
  left: -5px;
}
.list .title {
  position: absolute;
  top: 0%;
  left: 40px;
  display: table-cell;
  vertical-align: top;
  font-size: 1.2em;
}
.list .datas {
  position: absolute;
  top: 20px;
  right: 0%;
  float: right;
  font-size: 0.8em;
}
.notice .list {
  background-color: #353535;
  height: 100px;
  margin: 5px 0;
  border-radius: 20px;
  padding: 10px;
  color: white;
  display: flex;
  flex-direction: column;
}
.notice .titles {
  position: relative;
  font-size: 1.5em;
}
.notice .con {
  text-align: left;
  position: relative;
  font-size: 0.8em;
  padding: 5px 0 10px 0;
}
.list .date {
  position: relative;
  text-align: right;
  font-size: 0.8em;
}

.store {
  margin: 30px 0 30px 0;
  width: 100%;
  height: 300px;
  background-color: #494949;
  padding: 5px 10px;
  border-radius: 20px;
}
.store .div {
  display: flex;
  margin: 5px;
  overflow-x: scroll;
  white-space: nowrap;
}
.store .list {
  margin: 0 10px 10px 10px;
}
.store .list .img {
  position: relative;
  left: 50px;
  top: 10px;
  width: 100px;
  height: 150px;
  z-index: 11;
}
.store .list .titles {
  width: 200px;
  height: 40px;
  background-color: #353535;
  color: white;
  text-align: center;
  padding: 15px 0 0 0;
  font-weight: 500;
}
</style>