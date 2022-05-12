<template>
  <div class="tests">
    <div class="header">
      <div class="service">
        <img class="icon" src="@/assets/icons/white/bubble_chat.png" alt="logo" />
        <span class="title">커뮤니티</span>
        <span class="topic">TOPIC · {{step}}</span>
      </div>
    </div>
    <div v-if="topicData == 0">
      <TopicCommu @first="topicadd($event)"  @third="topicData = 2" :datasend="community" @deletepost="remove($event)" @indexdata="indexdata = $event"/>
    </div>
    <div v-if="topicData == 1">
      <TopicPostView @second="second()" :topicObject="topicObject" @reloaddata="reload($event)"/>
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
      indexdata: 0,
      writecoments: [],
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
    },
    reload(writecoment) {
      // console.log(writecoments);
      console.log(this.indexdata);
      this.writecoments.push(writecoment);
      this.community[this.indexdata].comentcontents = this.writecoments;
      //this.topicObject.comentcontents = this.writecoments;
      // this.community[this.indexdata].coment += writecoments.length; 
      //console.log(writecoment);
    },
    second() {
      this.topicData=0
      //this.writecoments.length = 0;
      //console.log(this.laterindexdata);
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