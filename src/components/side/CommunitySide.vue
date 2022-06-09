<template>
  <div>
    <div class="sideBar">
      <div class="side_search">
        <img src="../../assets/icons/magnifier.png" class="side_icon" />
        <input type="text" />
      </div>
      <div>
        <div class="group"><span>· TOPIC</span></div>
        <div v-for="(item, i) in sideArrays" :key="i">
          <div
            @click="clickCommunityEvent(i, $event, item)"
            id="communityElement"
          >
            · {{ item }}
          </div>
        </div>
      </div>
      <div>
        <div class="group"><span>· Village</span></div>
          <div
            @click="clickVillageEvent(0, $event, 'Village Main')"
            id="villageElement"
          >
          · Village Main
          </div>
        <div v-for="(array, i) in sideCafe" :key="i">
          <div
            @click="clickVillageEvent(i+1, $event, array.VILL_NAME)"
            id="villageElement"
          >
          · {{ array.VILL_NAME }}
          </div>
        </div>
      </div>
    </div>
    <div v-if="$route.path.substr(1) == 'community'">
      <div class="tests">
        <div class="header">
          <div class="service">
            <img
              class="icon"
              src="@/assets/icons/white/bubble_chat.png"
              alt="logo"
            />
            <span class="title">커뮤니티</span>
            <span class="topic">TOPIC · {{ step }}</span>
          </div>
        </div>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           
      <div v-if="topicData == 0">
        <TopicCommu  @btnEvent="communityevent($event)" :datasend="community" :step="step"/>
      </div>
      <div v-if="topicData == 1">
        <TopicPostView @btnpostview="btnpostview($event)" :topicObject="topicObject"/>
      </div>
      <div v-if="topicData == 2">
        <TopicWrite @add="addpost($event)" :topicObject="topicObject" :update="update" :step="step"/>
      </div>
    </div>    
    </div>
    <div v-else>
      <router-view />
    </div>
  </div>
</template>

<script>

//import dummy_data from "@/assets/DataJs/commuData.js";
import commuFree from "@/assets/DataJs/commuFree.js"; //자유커뮤니티데이터
import commujoin from "@/assets/DataJs/commujoin.js"; //팀원모집커뮤니티데이터
import commuRe from "@/assets/DataJs/commuRe.js"; //리뷰&추천커뮤니티데이터
import commuWriter from "@/assets/DataJs/commuWriter.js"; //작가커뮤니티데이터
import TopicCommu from "../community/topic/TopicCommu";
import TopicPostView from "../community/topic/TopicPostView";
import TopicWrite from "../community/topic/TopicWrite";
import axios from "../../axios";

export default {
  name: "CommunitySide",
  data() {
    return {
      sideArrays: ["자유", "작가", "팀원 모집", "리뷰 & 추천"],
      sideCafe: [],
      clickNum: 0,
      step: "자유",
      clickId: [],
      community: commuFree,
      topicData: 0,
      topicObject: {},
      index : 0,
      update: false
    };
  },
  components: {
    TopicCommu,
    TopicPostView,
    TopicWrite,
  },
  mounted() {
    // 기본 강조 효과
    this.clickId = document.querySelectorAll("#communityElement");
    this.clickId[this.clickNum].style.backgroundColor = "#2872f9";

    if (this.$route.params.comm_id != undefined) {
      this.topicData = 1;
      this.topicObject = {
        title: this.$route.params.comm_id,
        content: this.$route.params.comm_content,
      };
    }
    else if (this.$route.params.REVIEW_CODE != undefined) {
      console.log('review')
      this.step == "리뷰 & 추천";
      this.update == true;
      this.community = commuRe;
      this.topicData = 2;
      this.topicObject = {
        title: this.$route.params.comm_id,
        content: this.$route.params.comm_content,
      };
      this.clickId[3].style.backgroundColor = "#2872f9";
      this.clickId[0].style.backgroundColor = "#2c2c2c";
    }
    this.resVillageList();
  },
  methods: {
    // 가입한 카페 리스트
    resVillageList() {
      axios
        .post("/api/village/resVillageList", { id: this.$store.state.userId })
        .then((result) => {
          if (result.data == "err") {
            console.log("가입한 카페 리스트 불러오기 실패");
          } else {
            this.sideCafe = result.data;
            console.log(this.sideCafe);
          }
        });
    },
    // topicadd(event) {
    //   this.topicData = 1;
    //   this.topicObject = event;
    // },
    // remove(removedata) {
    //   this.community.splice(removedata, 1);
    // },
    communityevent(event){
      console.log(event.item.title);
      console.log(event.index);
      //포스트 클릭
      if(event.type == 'first'){
        this.topicData = 1;
        this.topicObject = event.item;
        this.index = event.index;
      }else 
      //TopicPostView로 감
      if(event == 'third'){
        this.topicData = 2
        this.update = false;
        console.log(this.step);
      }else 
      //관리자 글쓰기 삭제
      if(event.type == 'deletepost'){
        console.log(event);
        this.community.splice(event.index,1);
      }
    },
    btnpostview(event) {
      //목록으로
      if(event == 'second'){
        this.topicData = 0
      }else if(event.type == 'reloaddata'){ //댓글 작업
      //댓글 몇개인지 띄우기
        this.topicObject.coment = 1*event.content.length;
        this.topicObject.comentcontents = event.content;
      }else if(event == 'likevote'){ //추천수 올리기
        this.community[this.index].likes += 1;
        //console.log(this.topicObject);
      }else if(event == 'nolikevote'){ //비추천수 올리기
        this.community[this.index].nolike += 1;
        //console.log(this.topicObject);
      }else if(event == 'retouch'){ //글 수정 버튼 클릭
        this.topicData = 2;
        this.update = true;
      }else if(event == 'deletewrite'){ //글 삭제 버튼 클릭
        this.topicData = 0;
        this.community.splice(this.index,1);
      }
    },
    addpost(event) {
      //취소
      if(event == 'add') {
        this.topicData=0;
      }else if(event.type == 'contentdata'){ //글쓰기 저장 작업
        this.community.push(event.content);
      }else if(event.type == 'updatedata'){ //글쓰기 수정 작업
        this.community.splice(this.index,1,event.content);
        //별점 수정 부분
        if(this.step == "리뷰 & 추천"){
          this.community[this.index].str = event.strcount;
        }
      }else if(event.type == 'reviewcontent'){ //리뷰 & 추천 저장 작업
        this.community.push(event.content);
        this.community[this.community.length - 1].str = event.strcount;
        //console.log(this.community);
      }
    },
    clickCommunityEvent(index, event, item) {
      if(this.clickId[this.clickNum].id == 'villageElement'){
        this.clickId[this.clickNum].style.backgroundColor = "#2c2c2c";
      }
      if (this.clickNum != null && this.clickNum != index) {
          this.clickId[this.clickNum].style.backgroundColor = "#2c2c2c";
      }
      // 메인 화면 이동 함수
      this.step = item;
      this.$router.push("/community");
      // 사이드바 강조효과
        this.clickId = document.querySelectorAll("#communityElement");
        event.target.style.backgroundColor = "#2872f9";
        
        this.clickNum = index;
      
      //게시판별 데이터 다르게 띄우기
      if(this.step == '자유') {
        this.community = commuFree;
        this.topicData = 0;
      }else if(this.step == '작가') {
        this.community = commuWriter;
        this.topicData = 0;
      }else if(this.step == '팀원 모집') {
        this.community = commujoin;
        this.topicData = 0;
      }else if(this.step == '리뷰 & 추천') {
        this.community = commuRe;
        this.topicData = 0;
      }
    },
    // ----------------------------------------------------------------------
    clickVillageEvent(index, event, title) {
      if(this.clickId[this.clickNum].id == 'communityElement'){
        this.clickId[this.clickNum].style.backgroundColor = "#2c2c2c";
      }
      if (this.clickNum != null && this.clickNum != index) {
          this.clickId[this.clickNum].style.backgroundColor = "#2c2c2c";
      }
      // 사이드바 강조효과
      this.clickId = document.querySelectorAll("#villageElement");
      event.target.style.backgroundColor = "#2872f9";

      this.clickNum = index;
      // 메인 화면 이동 함수
      if (title == "Village Main") {
        this.$router.push("/community/villagemain");
      }else {
        this.$router.push({ name: "Register", params:{ id: title }});
      }
    },
  },
};
</script>

<style>
.sideBar {
  overflow: auto;
}
#communityElement,
#villageElement {
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
</style>