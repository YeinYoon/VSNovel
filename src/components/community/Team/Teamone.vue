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
    <div v-if="teamonedata == 0">
      <TeamCommu @first="teamadd($event)"  @third="teamonedata = 2" :datasend="originaldata" @deletepost="remove($event)"/>
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
import TeamCommu from "../Team/TeamCommu";
import CommunityPostView from "../Team/CommunityPostView";
import TeamoneWrite from "../Team/TeamoneWrite";

export default {
  name: "Teamone",
  data() {
    return {
      community: [...dummy_data],
      originaldata: [...dummy_data],
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
    }

  },
  components: {
    TeamCommu,
    CommunityPostView,
    TeamoneWrite
  },
  props : {
    step : String
  }
};
</script>

<style>
</style>