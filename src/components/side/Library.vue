<template>
<div>
  <Library />
</div>
</template>

<script>
import Library from '../librarypage/LibraryView';
export default {
  name: "StoreSide",
  data() {
    return {
      groupStep: "",
      hiddenData: false,
      genreNum: 0,
      clickNovel : 'novel',
      payDate : '구매일자↑'
    };
  },

  components:{
    Library,
  },

  created() {
    this.$store.commit('sideBarOn');
    this.$store.commit('currentServiceCng', 'L');
  },

  methods: {
    novelEvent(event, className) {
      // 사이드바 강조효과
      let id = document.getElementById(this.clickNovel);
      if (className != this.clickNovel) {
        id.style.animationName = "defaultAnimation";
      }
      else if(this.clickNovel == 'payNovel'){
        if(this.payDate == '구매일자↑') this.payDate = '구매일자↓';
        else this.payDate = '구매일자↑';
      }
        event.target.style.animationName = "newAnimation";
        this.clickNovel = className;
    },
    hidden() {
    // 장르 열고 닫기
      if (this.hiddenData) this.hiddenData = false;
      else this.hiddenData = true;
    },
    genreEvent(num, event) {
    // 장르 강조 효과
      let id = document.querySelectorAll(".select_btn");
      id[this.genreNum].style.color = 'gray';
      id[this.genreNum].style.animationName = 'null';
      event.target.style.animationName = 'clickBtn';
      this.genreNum = num;
    },
  },
};
</script>

<style>
</style>