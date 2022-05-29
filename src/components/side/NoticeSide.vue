<template>
<div>
  <div class="sideBar">
    <div class="side_search">
      <img src="@/assets/icons/magnifier.png" class="side_icon" />
      <input type="text" />
    </div>
    <div>
      <div class="group" @click="myStep = '전체'"><span>· TOPIC</span></div>
      <div class="sel" v-for="(array, i) in sideArrays" :key="i">
        <div @click="clickEvent(i, $event, array)" id="element">· {{array}}</div>
      </div>
    </div>
  </div>
  <!-- 공지사항 메인 -->
  <div class="tests" v-if="noticeStep == 0">
    <header class="header">
        <div class="service">
            <img class="icon" src="@/assets/icons/white/megaphone.png" alt="community">
            <span class="title" @click="adminEvent">공지사항</span>
            <span class="topic">TOPIC · {{myStep}}</span>
            <!-- <div class="noticeMain_btn_area">
                <button class="btn_red" v-if="admin">관리</button>
                <button class="btn_blue" v-if="admin" @click="noticeStep++">글쓰기</button>
            </div> -->
        </div>
    </header>  
    
    <div class="team_box">
    <!-- 관리 글쓰기 부분 -->
    <div class="noticeMain_btn_area">
        <div class="noticeMain_btn_red">
            <span @click="admin=true" v-if="admin==false">관리자 시점</span>
            <span @click="admin=false" v-if="admin==true">관리</span>
        </div>
        <div class="noticeMain_btn_blue" v-if="admin==false" @click="noticeStep += 1"><span>글쓰기</span></div>
     </div>
    
    <section class="notice_section">
        <div class="strong_notice_post"> 
            <div v-for="(notice, i) in noticeData" :key="i">
                <div class="notice_line" v-if="noticeNum == i"></div>
                <div class="strong_notice" @click="noticeEvent(notice, i)">
                <div class="strong_notice_mark" v-if="notice.emphasis == 0"><img src="@/assets/icons/white/star.png" class="mark_star_image"></div>
                    <div class="back_title">{{notice.title}}</div>      <!-- 제목 -->
                    <div class="back_content">{{notice.content}}</div>  <!-- 내용 -->
                    <div class="back_date">{{notice.date}}</div>        <!-- 날짜 -->
                </div>
            </div>
        </div>
    </section>
    </div>
  </div>
    <div v-if="noticeStep == 1">
        <NoticeWrite :writeModify="writeModify" :noticeData="clickNotice" @write_cancle="noticeBtnEvent($event)" @arrUp="writePushEvent($event)"/>
    </div>
    <div v-if="noticeStep == 2">
        <NoticeRead :admin="admin" :noticeData="clickNotice" @btnEvent="noticeBtnEvent($event)"/>
    </div>
</div>
</template>

<script>
import notice from "@/assets/DataJs/notice.js";
import NoticeWrite from "../notice/NoticeWrite";
import NoticeRead from "../notice//NoticeRead";
export default {
  name: "NoticeSide",
  data() {
    return {
        sideArrays : ['전체', '업데이트 내역', '이벤트', '정책'],
        myStep: '전체',
        clickNum : 0,
        // 공지 화면 부분 변수
            noticeData : notice,
            noticeNum : 0,
            noticeStep : 0,
            clickNotice : {},
            writeModify : false,
            admin : false,
    };
  },
  components:{
        NoticeWrite,
        NoticeRead,
  },
  mounted(){
    // 기본 강조효과
    let id = document.querySelectorAll("#element");
    id[this.clickNum].style.backgroundColor = "#2872f9";
    // 공지사항 화면 부분 
        // 공지사항 강조 순으로 정렬
        this.noticeData.sort(function (a, b) {
            return a.emphasis - b.emphasis;
        });
        // 강조 갯수 세기
        for(let i = 0; i < this.noticeData.length; i++){
            if(this.noticeData[i].emphasis == 0) this.noticeNum++;
        }
  },
    created(){
        // console.log(this.$route)
        if(this.$route.params.noti_id!=undefined){
            this.noticeStep = 2;
            this.clickNotice = { title : this.$route.params.noti_id,
                                 content : this.$route.params.noti_content};
            this.writeModify = true;
        }
    },
  methods:{
    clickEvent(index, event, array) {
    // 강조효과 및 메인 화면 변경
      this.myStep = array;
      let id = document.querySelectorAll("#element");
      event.target.style.backgroundColor = "#2872f9";
      if (this.clickNum != null) {
        if (this.clickNum != index) {
          id[this.clickNum].style.backgroundColor = "#2c2c2c";
        }
      }
      this.clickNum = index;
    },
    // 공지사항 메인 함수
        adminEvent(){
            if(this.admin) this.admin = false;
            else this.admin = true;
        },
        noticeEvent(data, i){
        //글보기 화면 이동
            this.noticeStep = 2;
            this.clickNotice = data;
            this.clickNoticeNum = i;
            this.writeModify = true;
        },
        noticeBtnEvent(event){
        // 글 목록 화면 이동
            //강조 발행일 때
            if(event == 'updata')
                this.clickNotice.emphasis = 0;
            //강조 취소일 때
            else if(event == 'notice_cancle') 
                this.clickNotice.emphasis = 1;
            //삭제일 때
            else if(event == 'delete') 
                this.noticeData.splice(this.clickNoticeNum, 1);
            //수정일 때
            else if(event == 'modify') {
                this.noticeStep = 1;
                this.writeModify = true;
                return
            }
            //아닐 때
            this.writeModify = false;
            this.noticeStep = 0;
        },
        writePushEvent(data){
            this.noticeData.push(data);
            // console.log(this.noticeData);
            this.noticeStep = 0;
        }
  }
};
</script>

<style>
.notice_section{
    position:relative;
    top:10%;
    width: 100%;
    height: 87%;
    margin: 0 auto;
    overflow-y:scroll;
    -ms-overflow-style:none;
    /* width: 100%;
    height: 70%;
    margin: 0 auto;
    position: relative;
    top: 60px;
    overflow-y: scroll;
    -ms-overflow-style: none; */
}
.noticeMain_btn_area {
    display:flex;
    justify-content: flex-end;
}
.noticeMain_btn_red {
    top:20px;
    position:relative;
    cursor: pointer;
    font-size: 0.9em;
    width: 100px;
    height: 30px;
    background: #ff4c4c;
    border-radius: 14px;
    display: table;
    margin-left: 20px;
}
.noticeMain_btn_blue {
    top:20px;
    position:relative;
    cursor: pointer;
    font-size: 0.9em;
    margin-left: 20px;
    width: 100px;
    height: 30px;
    background: #2872f9;
    border-radius: 14px;
    display:table;
}
.noticeMain_btn_red span, .noticeMain_btn_blue span {
    display: table-cell;
    vertical-align:middle;
    text-align:center;
    color:white;
}

.strong_notice_post {
    cursor: pointer;
    position: relative;
    width: 90%;
    height: 120px;
    margin-top:10px;
    margin: 20px auto;
}
.strong_notice_mark {
    width:60px;
    height:60px;
    border-radius:100px;
    background-color:#2872f9;
    position: relative;
    top: -20px;
    left: 95%;
    z-index: 12;
}

.mark_star_image{
    width:35px; 
    height:35px;
    position:absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
.strong_notice {
    cursor: pointer;
    display: block;
    position: relative;
    width: 100%; 
    height: 80px;
    background-color: #262626;
    border-radius: 12px;
    color:white;
    margin: 30px 0;
}
.strong_notice:hover{opacity:0.8};

/*.strong_line{
    display:flex;
    background-color: #ddd;
    height: 20px;
    border-radius:10px;
    width: 101%;
}*/
.back {
    /*display:flex;*/
    cursor: pointer;
    position: absolute;
    width: 100%; 
    /*height: 100px;*/
    background-color: #262626;
    border-radius: 12px;
    color:white;
    z-index: 11;
    top: 30px;
}
.back_title {
    position:absolute;
    font-size: 20px;
    top: 10px;
    float:left;
    left: 20px;
}
.back_content {
    position:absolute;
    font-size:19px;
    width:98%;
    /*height: 100px;*/
    text-overflow:ellipsis;
    white-space:nowrap;
    overflow:hidden;
    top: 40px;
    left: 20px;
}
.back_info {
    position: absolute;
    float:right;
    font-size: 17px;
    top: 70px;
    right: 10px; 
}
.back_date{
    position: absolute;
    float:right;
    top: 75%;
    right:10px;
    top:50px;
    /*left: 89%;*/
    z-index: 12;
}
.notice_line{
    margin: 5px auto;
    width: 100%;
    height: 3px;
    border-radius: 5px;
    border: 2px solid #262626;
    /*padding: 3px;*/
}
</style>