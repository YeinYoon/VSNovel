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
        <div @click="clickCommunityEvent(i, $event,item)" id="communityElement">· {{item}}</div>
      </div>
    </div>
    <div>
        <div class="group"><span>· Village</span></div>
      <div v-for="(array, i) in sideCafe" :key="i">
        <div @click="clickCafeEvent(i, $event, array.title, array)" id="villageElement">· {{array.title}}</div>
      </div>
  </div>
</div>
<div v-if="$route.path.substr(1) == 'community/'">
  <div class="tests">
    <div class="header">
      <div class="service">
        <img class="icon" src="@/assets/icons/white/bubble_chat.png" alt="logo" />
        <span class="title">커뮤니티</span>
        <span class="topic">TOPIC · {{step}}</span>
      </div>
    </div>
    <div v-if="topicData == 0">
      <TopicCommu  @btnEvent="communityevent($event)" :datasend="community" />
    </div>
    <div v-if="topicData == 1">
      <TopicPostView @second="topicData=0" :topicObject="topicObject" @reloaddata="reload($event)"/>
    </div>
    <div v-if="topicData == 2">
      <TopicWrite @add="topicData=0" :datasend="community" @contentdata="addpost($event)"/>
    </div>
  </div>
</div>
<div v-else>
    <router-view/>
</div>
</div>
</template>

<script>
import dummy_data from "@/assets/DataJs/commuData.js";
import TopicCommu from "../community/topic/TopicCommu";
import TopicPostView from "../community/topic/TopicPostView";
import TopicWrite from "../community/topic/TopicWrite";
export default {
  name: "CommunitySide",
  data() {
    return {
      sideArrays : ['자유', '작가', '팀원 모집', '리뷰 & 추천'],
      sideCafe : this.$store.state.cafeSide,
      clickNum : 0,
      step: '자유',
      registerCafeData : {},
      clickId : [],
      community: dummy_data,
      topicData : 0,
      topicObject : {},
    };
  },
  components:{
    TopicCommu,
    TopicPostView,
    TopicWrite
  },
  mounted(){
    // 기본 강조 효과
    this.clickId = document.querySelectorAll("#communityElement")
    this.clickId[this.clickNum].style.backgroundColor = "#2872f9"

    
    if(this.$route.params.comm_id != null)
      this.topicData = 1;
    console.log(this.topicData);
    console.log(this.$route.params)
  },
  methods:{
    communityevent(event){
      //console.log(event);
      //글쓰기 저장
      if(event.type == 'first'){
        this.topicData = 1;
        this.topicObject = event.item;
      }else 
      //TopicPostView로 감
      if(event == 'third'){
        this.topicData = 2
        //console.log(event);
      }else 
      //글쓰기 삭제
      if(event.type == 'deletepost'){
        console.log(event);
        this.community.splice(event.index,1);
      }
    },
    // topicadd(event){
    //   this.topicData = 1;
    //   this.topicObject = event;
    // },
    // remove(removedata){
    //   this.community.splice(removedata,1);
    // },
    addpost(addData) {
      this.community.push(addData);
    },
    reload(writecoments) {
      this.topicObject.comentcontents = writecoments;
    },

    clickCommunityEvent(index, event, item) {
      if(this.clickId[this.clickNum].id == 'villageElement'){
        this.clickId[this.clickNum].style.backgroundColor = "#2c2c2c";
      }
      else if (this.clickNum != null && this.clickNum != index) {
          this.clickId[this.clickNum].style.backgroundColor = "#2c2c2c";
      }
      // 메인 화면 이동 함수
      this.step = item;
      this.$router.push('/community/')
      // 사이드바 강조효과
        this.clickId = document.querySelectorAll("#communityElement");
        event.target.style.backgroundColor = "#2872f9";
        
        this.clickNum = index;
    },
    // ----------------------------------------------------------------------
    clickCafeEvent(index, event, title, array) {
      if(this.clickId[this.clickNum].id == 'communityElement'){
        this.clickId[this.clickNum].style.backgroundColor = "#2c2c2c";
      }
      else if (this.clickNum != null && this.clickNum != index) {
          this.clickId[this.clickNum].style.backgroundColor = "#2c2c2c";
      }
      //가입된 카페 정보
      this.registerCafeData = array;
      // 메인 화면 이동 함수
      if(title == 'Village Main')
        this.$router.push('/community/villagemain')
      else 
        this.$router.push({name : 'Register', params: this.registerCafeData});
      // 사이드바 강조효과
        this.clickId = document.querySelectorAll("#villageElement");
        event.target.style.backgroundColor = "#2872f9";
        
        this.clickNum = index;
      },
},
}
</script>

<style>
.sideBar{
  overflow: auto;
}
#communityElement, #villageElement{
  width: 90%;
  height: 40px;
  color: white;
  padding: 5px 10px 5px 20px;
  text-align: left;
  margin: 10px 0 0 20px;
  border-radius: 30px;
  font-weight: 600;
  font-size: 1em;
  cursor: pointer;
}
</style>