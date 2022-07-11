<template>
  <div v-bind:class="{ mainmenu: true }">
    <div v-bind:class="{ menus: true }">
      <div v-bind:class="{ menubox: true }" id="mypage/" @click="$router.push('/signin')" v-if="this.$store.state.userId == null">
        <img class="menubox_icon_mypage" src="@/assets/icons/white/login_req.png" />
      </div>
      <div v-bind:class="{ menubox: true }" id="mypage/" @click="routerPush('/mypage/mymain')" v-else-if="this.$store.state.profileImg=='none'">
        <img class="menubox_icon_mypage" src="@/assets/imgs/noprofile.png" />
      </div>
      <div v-bind:class="{ menubox: true }" id="mypage/" @click="routerPush('/mypage/mymain')" v-else>
        <img class="menubox_icon_mypage" :src="this.$store.state.profileImg" />
      </div>
      <br />
      <div v-bind:class="{ menubox: true }" id="library"  @click="routerPush('/library')">
        <img
          class="menubox_icon_library"
          src="@/assets/icons/white/library.png"
        />
      </div>
      <br />
      <div v-bind:class="{ menubox: true }" id="store" @click="routerPush('/store')">
        <img
          class="menubox_icon_store"
          src="@/assets/icons/white/shopping-cart.png"
        />
      </div>
      <br />
      <div v-bind:class="{ menubox: true }" id="engine"  @click="routerPush('/engine')">
        <img
          class="menubox_icon_engine"
          src="@/assets/icons/white/engineering.png"
        />
      </div>
      <br />
      <div v-bind:class="{ menubox: true }" id="communi" @click="routerPush('/community')">

        <img
          v-if="$store.state.currentService == 'V'"
          class="menubox_icon_community"
          src="@/assets/icons/white/leaf.png"
        />
        <img
          v-else
          class="menubox_icon_community"
          src="@/assets/icons/white/bubble_chat.png"
        />
      </div>
      <br />
      <div v-bind:class="{ menubox: true }" id="notice" @click="routerPush('/notice')">
        <img
          class="menubox_icon_notice"
          src="@/assets/icons/white/megaphone.png"
        />
      </div>
      <br />
      <div v-bind:class="{ menubox: true }" id="main" @click="routerPush('/')">
        <img
          class="menubox_icon_mainscreen"
          src="@/assets/icons/white_logo.png"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "vsnmenu",
  data() {
    return {
      state : (this.$route.path=='/')?'main':this.$route.path.substr(1,7),
      link : (this.$route.path=='/')?'main':this.$route.path.substr(1,7),
    };
  },
  methods: {
    routerPush(link) { 
      this.link = (link=='/')?'main':link.substr(1,7);
      this.state = (this.$route.path=='/')?'main':this.$route.path.substr(1,7);
      this.$router.push(link);
    },
  },
  watch:{
    $route(){
      // 버튼클릭 링크 이동시 if문
      let pathLink = (this.$route.path=='/')?'main':this.$route.path.substr(1,7);
      if(this.link != pathLink && pathLink != 'signin' && pathLink != 'signup' && pathLink != 'admin' ){
        this.state = this.link;
        this.link = pathLink;
        document.getElementById(this.state).style.background = "#353535";
        // document.getElementById(this.link).style.background = "#2872f9";
      }
      if(this.state != this.link && pathLink != 'signup' && pathLink != 'admin'){
          document.getElementById(this.state).style.background = "#353535";
        }
        // document.getElementById(this.link).style.background = "#2872f9";
    }
  }
};
</script>

<style>
.mainmenu {
  display: table;
  background: #262626;
  left: 45px;
  width: 100%;
  height: 100vh;
  text-align: center;
  overflow: auto;
}
.menus {
  display: table-cell;
  vertical-align: middle;
  height: calc(100vh - 4vh);
  overflow: auto;
}
.menubox {
  background: #353535;
  display: inline-table;
  margin: 5% 0;
  width: 75px;
  height: 75px;
  border-radius: 20px;
  cursor: pointer;
}
.menubox:hover {
  background: #5a5a5a;
}
.menubox_icon_mypage {
  position: relative;
  top: 7.5px;
  /* left: 0px; */
  width: 60px;
  height: 60px;
  border-radius: 10px;
}
.menubox_icon_library { 
  position: relative;
  top: 12px;
  left: 1px;
  width: 50px;
  height: 50px;
}
.menubox_icon_store {
  position: relative;
  top: 16px;
  left: -1px;
  width: 45px;
  height: 45px;
}
.menubox_icon_engine {
  position: relative;
  top: 12px;
  left: 1.45px;
  width: 50px;
  height: 50px;
}
.menubox_icon_community {
  position: relative;
  top: 15px;
  left: 1px;
  width: 50px;
  height: 50px;
}
.menubox_icon_notice {
  position: relative;
  top: 11px;
  left: 1.5px;
  width: 50px;
  height: 50px;
}
.menubox_icon_mainscreen {
  position: relative;
  top: 3px;
  left: 1px;
  width: 70px;
  height: 70px;
}
</style>