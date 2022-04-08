<template>
  <div class="tests">
    <div class="header">
      <div class="service">
        <img class="icon" src="@/assets/icons/white/bubble_chat.png" alt="logo" />
        <span class="title">커뮤니티</span>
        <span class="topic">TOPIC · {{step}}</span>
      </div>
    </div>
    <div v-if="teamonedata == 0">
      <TeamCommu @first="teamadd($event)"  @third="teamonedata = 2" :datasend="community" @deletepost="remove($event)"/>
    </div>
    <div v-if="teamonedata == 1">
      <CommunityPostView @second="teamonedata=0" :teamobject="teamobject"/>
    </div>
    <div v-if="teamonedata == 2">
      <TeamoneWrite @add="teamonedata=0" :datasend="community" @contentdata="addpost($event)"/>
    </div>
  </div>
</template>

<script>
import dummy_data from "@/assets/DataJs/commuData.js";
import TeamCommu from "./TeamCommu.vue";
import CommunityPostView from "./CommunityPostView";
import TeamoneWrite from "./TeamoneWrite.vue";

export default {
  name: "CommunityView",
  props:{
    step: String,
  },
  data() {
    return {
      community: dummy_data,
      teamonedata : 0,
      teamobject : {},
    };
  },
  methods : {
    teamadd(event){
      this.teamonedata = 1;
      this.teamobject = event;
    },
    remove(removedata){
      this.community.splice(removedata,1);
    },
    addpost(addData) {
      this.community.push(addData);
      console.log(this.community);
    }

  },
  components: {
    TeamCommu,
    CommunityPostView,
    TeamoneWrite
  },
};
</script>

<style>
</style>