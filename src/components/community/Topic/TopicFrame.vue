<template>
  <div class="tests">
    <div class="header">
      <div class="service">
        <img class="icon" src="@/assets/icons/white/bubble_chat.png" alt="logo" />
        <span class="title">커뮤니티</span>
        <span class="topic" v-if="step=='자유'">TOPIC · 자유</span>
        <span class="topic" v-if="step=='작가'">TOPIC · 작가</span>
        <span class="topic" v-if="step=='팀원 모집'">TOPIC · 팀원 모집</span>
        <span class="topic" v-if="step=='리뷰 & 추천'">TOPIC · 리뷰 & 추천</span>
      </div>
    </div>
    <div v-if="topicData == 0">
      <TopicCommu @first="topicadd($event)"  @third="topicData = 2" :datasend="community" @deletepost="remove($event)"/>
    </div>
    <div v-if="topicData == 1">
      <TopicPostView @second="topicData=0" :topicObject="topicObject"/>
    </div>
    <div v-if="topicData == 2">
      <TopicWrite @add="topicData=0" :datasend="community" @contentdata="addpost($event)"/>
    </div>
  </div>
</template>

<script>
import dummy_data from "@/assets/DataJs/commuData.js";
import TopicCommu from "../Topic/TopicCommu";
import TopicPostView from "../Topic/TopicPostView";
import TopicWrite from "../Topic/TopicWrite";

export default {
  name: "TopicFrame",
  data() {
    return {
      community: dummy_data,
      topicData : 0,
      topicObject : {},
    };
  },
  methods : {
    topicadd(event){
      this.topicData = 1;
      this.topicObject = event;
    },
    remove(removedata){
      this.community.splice(removedata,1);
    },
    addpost(addData) {
      this.community.push(addData);
    }

  },
  components: {
    TopicCommu,
    TopicPostView,
    TopicWrite
  },
  props : {
    step : String
  }
};
</script>

<style>
</style>