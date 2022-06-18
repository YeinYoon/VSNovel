<template>

    <div v-if="$store.state.currentService == C">
      <div class="RouterView">
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
          <TopicCommu/>
        </div>
        <div v-if="topicData == 1">
          <TopicPostView/>
        </div>
        <div v-if="topicData == 2">
          <TopicWrite/>
        </div>    
      </div>
    </div>

    <div v-if="$store.state.currentService == V">
      <div class="RouterView">
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
          <CafeMain/>  
      </div>
    </div>

    <div v-if="$store.state.currentService == VI">
      <div class="RouterView">
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
          <InsideCafe/>
        </div>
        <div v-if="topicData == 1">
          <TopicPostView/>
        </div>
        <div v-if="topicData == 2">
          <TopicWrite/>
        </div>   
      </div>
    </div>
    
</template>

<script>
import TopicCommu from "../community/topic/TopicCommu";
import TopicPostView from "../community/topic/TopicPostView";
import TopicWrite from "../community/topic/TopicWrite";
import CafeMain from "../community/cafe/CafeMain";
import InsideCafe from "../community/cafe/RegisterCafe";
export default {
  name: "CommunitySide",
  data() {
    return {
      topicData: 0,
    };
  },
  components: {
    TopicCommu,
    TopicPostView,
    TopicWrite,
    CafeMain,
    InsideCafe,

  },
  mounted() {
  },
  created() {
    this.$store.commit('sideBarOn');
    this.$store.commit('currentServiceCng', 'C');
  },
  methods: {
  },
};
</script>

<style>
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