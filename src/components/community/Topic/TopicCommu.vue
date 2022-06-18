<template>
  <div class="team_box">
    <!-- 상단 버튼 프레임 -->
    <div class="commu_btn_area">
      <!-- 관리자 계정만 노출 -->
      <div class="commu_btn_red" >
        <span class="commu_btn_manage" @click="manage=true" v-if="manage==false">관리자 시점</span>
        <span class="commu_btn_manage" @click="manage=false" v-if="manage==true">관리</span>
      </div>
      <!-- 글쓰기 버튼 -->
      <div class="commu_btn_blue" v-if="manage==false">
        <span class="commu_btn_write" @click="communitybtn({type:'third'})">글쓰기</span>
      </div>
    </div>
    <!-- 상단 버튼 프레임 -->

    <!-- 글 목록 프레임 -->
    <section class="commu_section">
      <div class="commu_post" v-for="(p, i) in postList" :key="i"> <!-- (반복) 글 DB 데이터 반복문 -->
        
        <!-- 글 썸네일 -->
        <img class="commu_thumb" :src="p.titleImg" @error="'error'"/>
        
        <!-- 글 정보 및 제목, 검은 블록 -->
        <div class="commu_back">
          <!-- 글제목 -->
          <div class="commu_back_title">{{ p.POST_TITLE }}</div>

          <!-- (조건) 리뷰 게시판일 경우 별점 -->
          <span v-if="$store.state.communityService=='R'" class="commu_str">★★★★★
            <span class="commu_str_draw" :style="{width : p.str*20 + '%'}">★★★★★</span>
          </span>

          <!-- 글정보 -->
          <div class="commu_back_info">
            {{ p.USER_NICKNAME }} | 생성일 | {{ p.POST_FAVORITE }} | 댓글 수
          </div>
        </div>
        <!-- 글 정보 및 제목, 검은 블록 -->
      </div>
      <!-- (반복) 글 DB 데이터 반복문 end -->
    </section>
    <!-- 글 목록 프레임 end -->
  </div>
</template>

<script>
import axios from '../../../axios'
export default {
  created() {
    this.getPostList('F');
  },
  watch : {
    communityService(cng) {
      this.getPostList(cng);
    }
  },
  data() {
    return {
      manage : false,

      postList : [],
    };
  },
  methods : {
    getPostList(selectService) {
      axios.post('/api/community/getPostList', {select : selectService})
      .then((result)=>{
        if(result.data == "err") {
          this.$store.commit('gModalOn',{size : "normal", msg : "해당 게시판 포스트 불러오기 실패"});
        } else {
          this.postList = result.data;
          console.log(this.postList);
        }
      })
    }
  },
  props : {
    communityService : String
  }
};
</script>

<style>
</style>