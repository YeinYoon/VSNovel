<template>
<div>
  <!-- 커뮤니티 -->
  <div>

  </div>

  <!-- 마이페이지 -->
  <div>
    <div class="side_search">
      <img src="../../assets/icons/magnifier.png" class="side_icon" />
      <input type="text" />
    </div>
    <div>
      <div class="group" id="main">
        <span>· 마이페이지</span>
      </div>
      <div class="sel" v-for="(item, i) in sideArrays" :key="i">
        <div @click="clickEvent(i, $event, item)" id="element">
          · {{ item.name }}
        </div>
      </div>
    </div>
  </div>

  <!-- 라이브러리 -->
  <div>
    <div class="side_search">
      <img src="../../assets/icons/magnifier.png" class="side_icon" />
      <input type="text" />
    </div>
    <div>
      <div class="group"><span>· 컨텐츠 분류</span></div>
      <div class="novel_div">
        <div class="novel" id="novel" @click="novelEvent($event, 'novel')">
          최근 플레이
        </div>
        <div class="payNovel" id="payNovel" @click="novelEvent($event, 'payNovel')">
          {{payDate}}
        </div>
      </div>
    </div>
    <div class="side_genre_group">
      <div class="side_genre" @click="hidden">· 장르</div>
      <div class="genre_group" v-if="hiddenData">
        <div class="selecter" v-for="(genre, i) in data" :key="i">
          <div class="genre_select" @click="genreEvent(i, $event)">
            <div class="select_btn">· {{ genre.genre }}</div>
          </div>
        </div>
      </div>
    </div>  
  </div>

  <!-- 공지사항 -->
  <div>
    <div class="side_search">
      <img src="@/assets/icons/magnifier.png" class="side_icon" />
      <input type="text" />
    </div>
    <div>
      <div class="group" @click="myStep = '전체'"><span>· TOPIC</span></div>
      <div class="sel" v-for="(array, i) in sideArrays" :key="i">
        <div @click="clickEvent(i, $event, array)" id="element">· {{array}}</div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "sideBar",

  data() {
    return {
    };
  },

  methods: {

  },
};
</script>

<style>
</style>