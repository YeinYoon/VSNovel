<template>
<ConfirmModal ref="confirmModal"></ConfirmModal>
    <div class="RouterView">
        <div class="header">
            <div class="service">
                <img
                class="icon"
                src="@/assets/icons/white/bubble_chat.png"
                alt="logo"
                />
                <span class="title">공지사항</span>
                <span class="topic">TOPIC · {{ noticeService }}</span>
            </div>
        </div>


        <div v-if="viewState == 0">
            <div class="team_box">
                <!-- 상단 버튼 프레임 -->
                <div class="noticeMain_btn_area">
                    <!-- 관리자 계정만 노출 -->
                    <div class="noticeMain_btn_red" v-if="manage == true">
                    <span class="noticeMain_btn_manage">관리</span>
                </div>
                <!-- 글쓰기 버튼 -->
                <div class="noticeMain_btn_blue">
                    <span class="noticeMain_btn_write" @click="this.viewState = 2">글쓰기</span>
                </div>
                <!-- 상단 버튼 프레임 -->
    
                <!-- 공지사항 목록 -->
                <section class="notice_section">
                    <div class="strong_notice_post">
                        <div v-for="(n, i) in noticeList" :key="i" @click="PostClick(1, n.POST_CODE)">
                            <div class="strong_notice">
                                <div class="notice_back_title"><span>{{ n.POST_TITLE }}</span></div>            <!-- 제목 -->
                                <div class="notice_back_content"><span v-html="n.POST_CONTENT"></span></div>  <!-- 내용 -->
                                <div class="notice_back_date"><span>{{n.POST_ESTADATE}}</span></div>              <!-- 날짜 -->
                            </div>
                        </div>
                    </div>
                </section>
                </div>
            </div>
        </div>



<!---------------------------->
<!---------------------------->
<!---------------------------->



    <div v-if="viewState == 1">
        <!-- 쓰기는 전체적인 수정 필요 -->
        <div class="notice_write_section">
        <div class="notice_write_title">
            <span>{{title}}</span>
            <div class="notice_title_info">
            <span>작성일자 : {{createdDate}}</span>
            <div class="notice_title_btn" v-if="writerId == $store.state.userId">
                <div @click="editPost()" class="notice_update_btn"><img src="@/assets/icons/white/editing.png"></div>
                <div @click="deletePost()" class="notice_delete_btn"><img src="@/assets/icons/white/trash_white.png"></div>
            </div>
        
            </div>
        </div>

        <div class="notice_write_contents">
            <span v-html="content">
            </span>
        </div>
        </div>
        <div class="notice_cancle_area">
        <div class="cancle_btn" @click="this.viewState = 0"><span>목록으로</span></div>
        </div>
    </div>



<!---------------------------->
<!---------------------------->
<!---------------------------->




    <div v-if="viewState == 2">
        <div class="write_section">
            <!-- 글제목 입력부, 수정시 글정보 불러오기 -->
        <div class="write_title">
            <input id="input" type="text" :value="`${noticeData.title}`" v-if="writeModify == true"/>
            <input id="input" type="text" v-if="writeModify == false"/>
        </div>
        <div class="write_content">
            <!-- 에디터 수정필요 -->
            <!-- <Editor :noticeData="noticeData" :writeModify="writeModify" @up="content = $event"/> -->
        </div>
        <div class="editer_info">
            주의! 당신은 현재 공지사항 게시판에서 작성중입니다.
            <br>강조로 발행 버튼을 누르면 '강조공지'로 상단에 우선 노출됩니다.
            <br>공지사항의 말머리를 선택하여 '해당 TOPIC' 에 맞게 작성하세요.
        </div>
        </div>
        <div class="notice_btn_area">
        <div class="write_btn" @click="pushEvent(0)">
            <span v-if="writeModify == false">글쓰기</span> <!-- 작성한 공지를 일반공지로 발행 -->
            <span v-if="writeModify == true">수정</span> <!-- 수정모드 -->
        </div>
        <div class="cancle_btn" @click="$emit('writebtn', 'cancle')"><span>취소</span></div>
        </div>
    </div>
</div>
</template>

<script>
import axios from '../../axios'
import ConfirmModal from '../modal/ConfirmModal.vue'
export default {
    name: "NoticeSide",
    data() {
        return {
            viewState : 0,
            step : "",
            manage : false,
            noticeList : [], // 공지사항 리스트
            update: false,


            // 포스트 보기
            postCode : "",
            title : "",
            content : "",
            view : "",
            writerNickname : "",
            writerId : "",
            writerProfileImg : "",
            createdDate : "",

            // 댓글 보기
            commentList : [],

            // 새글 작성
            inputTitle : "",
            inputContent : "",

        };
    },
    components:{
        ConfirmModal
    },
    mounted(){

    },
    created(){
        this.$store.commit('sideBarOn');
        this.$store.commit('currentServiceCng', 'N');
        this.getNoticeList('U');
    },
    computed: {
        noticeService: function() {
            return this.$store.getters.noticeService;
        }
    },
    watch : {
        noticeService(cng) {
            console.log(cng);
            this.postList = [];
            this.viewState = 0;
            this.getNoticeList(cng);
        }
        
    },
    methods: {
        getNoticeList(selectService) {
            axios.post('/api/notice/getNoticeList', {select : selectService})
            .then((result)=>{
                if(result.data == "err") {
                    this.$store.commit('gModalOn',{size : "normal", msg : "공지사항 목록 불러오기 실패"});
                } else {
                    this.noticeList = result.data;
                }
            })
        },
        PostClick(val, postCode) {
            this.viewState = val;
            this.postCode = postCode;
            var data = {
                select : this.$store.state.noticeService,
                postCode : this.postCode
            }
            console.log(data);
            axios.post('/api/notice/getNotice', data)
            .then(async (result)=>{
                if(result.data == "err") {
                    this.$store.commit('gModalOn', {size : "normal", msg : "공지사항 데이터 불러오기 실패"});
                } else {
                    this.title = result.data[0].POST_TITLE;
                    this.content = result.data[0].POST_CONTENT;
                    this.view = result.data[0].POST_VIEW;
                    this.createdDate = result.data[0].POST_ESTADATE;
                    this.writerNickname = result.data[0].USER_NICKNAME;
                    this.writerId = result.data[0].USER_ID;
                }
            });
        },
    
        posting() {
            var data = {
                title : this.inputTitle,
                content : this.inputContent,
                select : this.$store.state.noticeService
            }
            axios.post('/api/notice/posting', data)
            .then((result)=>{
                if(result.data == "ok") {
                this.$store.commit('gModalOn', {size : "normal", msg : "새로운 글이 등록되었습니다."});
                this.viewState = 0;
                this.getPostList(this.$store.state.noticeService);

                this.inputTitle = "";
                this.inputContent = "";
                } else {
                this.$store.commit('gModalOn', {size : "normal", msg : "게시글 등록 실패"});
                }
            })
        }
    }
}
</script>

<style>

/* 공지목록 */
.notice_section{
    position:fixed;
    top: 100px;
    left: 440px;
    width: calc(100% - 440px);
    padding: 60px;
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
    position: fixed;
    left: calc(100% - 280px);
    width: 300px;
    display: inline;
}
.noticeMain_btn_red {
    top:20px;
    position:absolute;
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
    left: calc(100% - 180px);
    position:absolute;
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
    /* cursor: pointer; */
    position: relative;
    width: 100%;
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
.notice_back_title {
    position:absolute;
    font-size: 20px;
    top: 10px;
    float:left;
    left: 20px;
}
.notice_back_content {
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
.notice_back_info {
    position: absolute;
    float:right;
    font-size: 17px;
    top: 70px;
    right: 10px; 
}
.notice_back_date{
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
    height: 5px;
    border-radius: 5px;
    background-color:#262626;
    border: 2px solid #262626;
}


/* 공지 읽기 */

.notice_write_section {
  padding: 10px 15px;
  background-color: #2c2c2c;
  border-radius: 20px;
  position: relative;
  top: 50px;
  width: 95%;
  margin: 0 auto;
  color:white;
}
.notice_write_title {
  margin: 5px auto;
  width: 100%;
  /* height: 7%; */
  background-color: #5e5e5e;
  border-radius: 20px;
  padding: 10px 10px;
  font-size: 1.2em;
  /* display:flex; */
  display: table;
}
/* .notice_write_title span{
  display: table-cell;
  vertical-align: middle;
} */
.notice_title_info{
  display: flex;
}
.notice_title_btn{
  display: flex;
  position:absolute;
  float:right;
  right:30px;
}
.notice_update_btn, .notice_delete_btn{
  display:flex;
  justify-content:center;
  align-items: center;
  width: 55px;
  height: 28px;
  background-color: #2872f9;
  border-radius: 20px;
  margin: 0 5px;
  transition: 0.2s all ease;
  cursor: pointer;
}
.notice_update_btn:hover, .notice_delete_btn:hover{
  background-color: #0084ff;
}
.notice_update_btn img{
    position:relative;
    left:1.5px;
    width:35%; 
    object-fit: cover;
}
.notice_delete_btn img{
    position:relative;
    top:0.5px;
    width:40%; 
    object-fit:cover;
}
.notice_write_contents {
  margin: 5px auto;
  width: 100%;
  min-height: 400px;
  background-color: #5e5e5e;
  border-radius: 20px;
  font-size: 1.4em;
  padding: 10px 10px;
  overflow-y: scroll;
}
.notice_write_contents span{
  word-wrap: break-word;
}
.editer_info {
  color: white;
  margin: 5px 0 0 0;
  font-size: 0.8em;
}

.strong_btn {
  display:flex;
  /* padding: 5px 10px; */
  /* display: table; */
  background-color: red;
  width: 70px;
  height: 28px;
  border-radius: 20px;
  margin: 0 5px;
}
.strong_btn span {
  font-size: 13px;
}
/* .write_btn {
  padding: 5px 10px;
  background-color: #2872f9;
  width: 100px;
  border-radius: 20px;
  margin: 0 10px;
} */
.notice_cancle_area {
  /* position:relative; */
  position:relative;
  top: 50px;
  height: 50px;
  /* width: 97%; */
  /* left: 10px; */
  /* display: table-cell; */
  /* vertical-align: middle; */
  color:white;
  /* margin: 0 auto; */
}
.cancle_btn {
  padding: 5px 10px;
  margin: 0 10px;
  background-color: #5e5e5e;
  width: 100px;
  border-radius: 14px;
  display: table;
  
}
.cancle_btn span {
  display:table-cell;
  text-align: center;
}


/* 공지 쓰기 */
.write_section {
  margin: 0 auto;
  padding: 10px 15px;
  width: 95%;
  height: 75%;
  background-color: #2c2c2c;
  border-radius: 20px;
  position: relative;
  top: 50px;
}
.write_title {
  margin: 5px auto;
  width: 100%;
  height: 7%;
  background-color: #5e5e5e;
  border-radius: 20px;
  padding: 0 10px;
}
.write_title input {
  position: relative;
  left: 5px;
  width: 99%;
  height: 100%;
  border: none;
  background: none;
  color: white;
}
.write_content {
  margin: 0 auto;
  width: 100%;
  height: 77%;
  background-color: #5e5e5e;
  border-radius: 20px;
}
.write_content textarea {
  background: none;
  border: none;
  position: relative;
  top: 5px;
  resize: none;
  width: 100%;
  height: 95%;
}
.editer_info{
  color: white;
  margin: 5px 0 0 0;
  font-size: 0.8em;
}
.notice_btn_area {
  width: 100%;
  text-align: center;
  color: white;
  display: flex;
  justify-content: center;
  position: relative;
  top: 70px;
}
.strong_btn {
  padding: 5px 10px;
  background-color: red;
  width: 100px;
  border-radius: 20px;
  margin: 0 10px;
}
.write_btn {
  padding: 5px 10px;
  background-color: #2872f9;
  width: 100px;
  border-radius: 20px;
  margin: 0 10px;
}
.cancle_btn {
  padding: 5px 10px;
  margin: 0 10px;
  background-color: #5e5e5e;
  width: 100px;
  border-radius: 20px;
}
</style>