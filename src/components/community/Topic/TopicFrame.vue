<template>
  <div class="tests">
    <div class="header">
      <div class="service">
        <img class="icon" src="@/assets/icons/white/bubble_chat.png" alt="logo" />
        <span class="title">커뮤니티</span>
        <span class="topic">TOPIC · {{$route.params.id}}</span>
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
import TopicCommu from "../topic/TopicCommu";
import TopicPostView from "../topic/TopicPostView";
import TopicWrite from "../topic/TopicWrite";

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
};
</script>

<style>
</style>