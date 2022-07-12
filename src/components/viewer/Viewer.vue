<template>
<div class="FullView">
  <div class="ViewerBackground">

    <!-- 백그라운드 -->
    <div class="SceneBackground">
      <img v-if="Now.bg!='' && Now.bg != undefined" :src="this.currentBg"/>
    </div>
    <!-- 백그라운드 끝. -->


    <!-- 선택지 --> 
    <div class="SceneSelectBackground" v-if="status == 'select'">
      <div class="SceneSelectFrame">

        <label for="s1" v-if="s1.use">
        <div class="SelectButton" :class="[{SShape_default: VN.shape=='default'},{SShape_linear: VN.shape=='linear'},{SColor_default: VN.color=='default'},{SColor_red: VN.color=='red'}]"  @click="select(s1.plot, s1.index)" id="s1">
          {{s1.text}}
        </div>
        </label>

        <label for="s2" v-if="s2.use">
        <div class="SelectButton" :class="[{SShape_default: VN.shape=='default'},{SShape_linear: VN.shape=='linear'},{SColor_default: VN.color=='default'},{SColor_red: VN.color=='red'}]" @click="select(s2.plot, s2.index)" id="s2">
          {{s2.text}}
        </div>
        </label>

        <label for="s3" v-if="s3.use">
        <div class="SelectButton" :class="[{SShape_default: VN.shape=='default'},{SShape_linear: VN.shape=='linear'},{SColor_default: VN.color=='default'},{SColor_red: VN.color=='red'}]" @click="select(s3.plot, s3.index)" id="s3">
          {{s3.text}}
        </div>
        </label>
      </div>
    </div>
    <!-- 선택지 끝. -->


    <!-- 좌측 상단 햄버거메뉴 -->
    <div class="ViewerNav">

      <div class="NavItems" title="저장" v-if="isUpload == false">
        <img src="@/assets/icons/white/upcloud.png" @click="uploadVN()">
      </div>
    </div>
    <!-- 좌측 상단 햄버거메뉴 -->

    <!-- 우측 상단 햄버거메뉴 -->
    <div class="ViewerNavRight">
      <div class="NavItems" v-if="bgmState == false" @click="bgmOn(),effectOn()">
        <img src="@/assets/icons/white/speaker-disable_white.png">
      </div>
      <div class="NavItems" v-else-if="bgmState == true" @click="bgmOff(),effectOff()">
        <img src="@/assets/icons/white/speaker_white.png">
      </div>
      <div class="NavItems" @click="resCtrl = !resCtrl">
        <img src="@/assets/icons/white/trash_white.png">
      </div>
    </div>
    <!-- 우측 상단 햄버거메뉴 --> 


  



    <!-- 이미지 -->
    <div class="SceneImg">
      <img :src="currentImg" v-if="Now.img!=''"/>
    </div>
    <!-- 이미지 끝. -->

    <!-- 대사 -->
    <div class="SceneScriptFrame">
      
      <!-- 대사창 배경-->
      <div class="ScriptBackground" :class="[{BShape_default: VN.shape=='default'},{BShape_linear: VN.shape=='linear'},{BColor_default: VN.color=='default'},{BColor_red: VN.color=='red'}]" ></div>

      <!-- 화자 -->
      <label for="name">
        <div class="SceneSpeakerName" :class="[{NShape_default: VN.nameShape=='default'},{NShape_linear: VN.nameShape=='linear'},{NColor_default: VN.color=='default'},{NColor_red: VN.color=='red'}]"  >
          <span id="name">{{Now.name}}</span>
        </div>
      </label>

      <!-- 대사 -->  
      <label for="text">
        <div class="SceneScript">
          <span id="text">{{ Now.text }}</span>
        </div>
      </label>

      <!-- 다음 대사 버튼 -->
      <div class="NextScriptButton" v-if="status!='end'" @click="nextScene">
        <button><span>▶</span></button>
      </div>
      <div v-else class="NextScriptButton">
        <button>End</button>
      </div>

    </div>
    <!-- 대사 끝 -->

  </div>
</div>
</template>

<script>
import {Howl} from 'howler';
import storage from '../../aws'
export default {
  name : "Viewer",
    created() {
        this.$store.commit('currentServiceCng', 'VI');
        console.log($this.store.state.currentService);
        console.log("hi")
        this.pjCode=this.$route.params.pjCode
        this.ep=this.$route.params.ep
        console.log(this.pjCode, this.ep)
        this.getVN

  },
  data() {
    return {
      pjCode : 159,
      ep : 1,
      title : "",
      retouchDate : "",
      stat : "",
      textEdit : false,
      selectEdit : false,
      Now: {},
      s1:{},
      s2:{},
      s3:{},
      resCtrl: false,
      bgmState : false,
      currentBgm : "",
      currentEffect : "",
      bgmId : "",
      effectId : "",
      currentImg : "",
      currentBg : "",

      bgmController : null,
      effectController : null,

      plot:0,
      index:0,
      VN:null
    }
  },
  methods : {
    async getVN() {
        console.log("hi")
      var result = await storage.getVN(`Project/PJ${this.pjCode}/dev/ep${this.ep}.json`); // unit8array(utf16) 형식으로 데이터를 읽어옴
      if(result != "err") {
        var uint8array = new TextEncoder("utf-8").encode(result); // utf8 형식으로 변환
        var string = new TextDecoder().decode(uint8array);
        this.VN = JSON.parse(string);
        console.log(this.VN)
      }
    },
    loadData: async function () {
      if(this.VN.plotList[this.plot].pages[this.index] != undefined){
        this.Now=this.VN.plotList[this.plot].pages[this.index];
        console.log(this.Now)
        if(this.Now.bgm != '') {
          this.currentBgm = await storage.getUrl(this.Now.bgm);
        }
        else if(this.Now.bgm=='none'){
          this.bgmController.stop()
        }
        if(this.Now.effect != '') {
          this.currentEffect = await storage.getUrl(this.Now.effect);
        }
      }
    },              
    nextScene: function () {
      if(this.VN.plotList[this.plot].pages[this.index].type=='n') {
        this.move();
      }else if(this.VN.plotList[this.plot].pages[this.index].type=='e'){
        this.$emit('changeStatus',"end")
      }else {
        console.log(this.VN.plotList[this.plot].pages[this.index])
        this.s1=this.VN.plotList[this.plot].pages[this.index].select[0];
        this.s2=this.VN.plotList[this.plot].pages[this.index].select[1];
        this.s3=this.VN.plotList[this.plot].pages[this.index].select[2];
        this.$emit("changeStatus","select")
      }
    },
    move: function(){
      if(this.VN.plotList[this.plot].pages.length==this.index+1) this.$emit('move',{plot:this.VN.plotList[this.plot].nextPlot,index:0})
      else this.$emit('move',{plot:this.plot,index:this.index+1})
    },
    select:function(plot,index){
      if(!this.selectEdit){
        this.$emit('changeStatus','play')
        this.$emit('move',{plot,index})
      }
    },
    noImage(event){
      event.target.src="@/assets/imgs/e_no_image.png"
    },
    //BGM 관련
    bgmOn() {
      console.log('BGM : ' + this.currentBgm);
      this.bgmState = true;
      this.bgmController = new Howl({
        src: [this.currentBgm],
        volume: 1.0,
        loop : true,
        preload : true,
        onend: ()=>{console.log("BGM END")}
      });
      this.bgmController.play();
    },
    bgmOff() {
      this.bgmState = false;
      this.bgmController.stop();
    },

    //효과음 관련
    effectOn() {
      console.log('effect : ' + this.currentEffect);
      this.bgmState = true;
      this.effectController = new Howl({
        src: [this.currentEffect],
        volume : 1.0,
        loop : false,
        preload : true,
        onend: ()=>{console.log("EFFECT END")}
      })
      this.effectController.play();
    },
    effectOff() {
      this.bgmState = false;
      this.effectController.stop();
    }
  },  
  watch : {
    $route() {
      if(this.bgmController != null) {
        this.bgmController.stop();
      }
      if(this.effectController != null) {
        this.effectController.stop();
      }
    },

    index: function(){
      this.loadData()
    },
    plot: function(){
      this.loadData()
    },
    VN:{
      deep:true,
      handler(){
        this.loadData()
      }
    },
    Now : {
      deep:true,
      async handler(){
        var checkArr = [{bg : this.Now.bg}, {img : this.Now.img}, {bgm : this.Now.bgm}, {effect : this.Now.effect}];
        var existKey = checkArr.filter(item => item.bg != '' && item.img != '' && item.bgm != '' && item.effect != '');
        if(existKey.length == 0) {
          this.currentBg = ''
          this.currentImg = ''
          this.currentBgm = ''
          this.currentEffect = ''
        } else {

          for(var i=0; i<existKey.length; i++) {
            var x = Object.keys(existKey[i]);
            console.log(x);
            switch(x[0]) {
              case 'bg' :
                this.currentBg = await storage.getUrl(this.Now.bg);
                break;
              case 'bgm' :
                if(this.bgmState == true) {
                  console.log(this.Now.bgm);
                  this.bgmOff();
                  this.currentBgm = await storage.getUrl(this.Now.bgm);
                  this.bgmOn();
                } else {
                  console.log(this.Now.bgm);
                  this.currentBgm = await storage.getUrl(this.Now.bgm);
                }
                break;
              case 'img' :
                this.currentImg = await storage.getUrl(this.Now.img);
                break;
              case 'effect' :
                if(this.bgmState == true) {
                  this.effectOff();
                  this.currentEffect = await storage.getUrl(this.Now.effect);
                  this.effectOn();
                } else {
                  console.log(this.Now.effect);
                  this.currentEffect = await storage.getUrl(this.Now.effect);
                }
                break;
            }

          }
        }
      }
    }
  },
}
</script>

<style>
label {
  display: block;
}
.ViewerBackground {
  background: #5e5e5e;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.font_default {

}
.font_cursive {
  
}
.SceneBackground {
  position: absolute;
  left: 0px;
  width: 100%;
  height: 100%;
  z-index: 1;
  overflow: hidden;
}

.ScenePauseBackground {
  position: absolute;
  z-index: 9;
  background: rgba(0, 0, 0, 0.8);
  width: 100%;
  height: 100%;
}

.VisualNovelLabel {
  position: absolute;
  top: 0px;
  width: 50%;
  height: 100%;
  /* background: rgba(34, 34, 34, 0.7); */
  z-index: 10;
}

.VisualNovelIcon {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: calc(100% - 10%);
  height: calc(100% - 10%);
  border-radius: 20px;
  /* background: white; */
}

.VisualNovelIcon img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.VisualNovelName {
  position: absolute;
  left: 100%;
  top: calc(0% + 40px);
  transform: translate(0, -50%);
  width: 200px;
  height: 40px;
  color: white;
  font-size: 1.5em;
}

.PauseMenusFrame {
  position: absolute;
  top: 0px;
  left: 50%;
  width: 50%;
  height: 100%;
  /* background: white; */
}

.PauseMenuButtonPosition {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  /* height: 80px; */
}

.PauseMenuButton {
  display: inline-table;
  width: 25%;
  margin: 0px 1.5% 0px 1.5%;
  height: 80px;
  border-radius: 20px;
  background: #2872f9;
  cursor: pointer;
}
.PauseMenuButton span {
  display: table-cell;
  vertical-align: middle;
  text-align: center;
  color: white;
  font-size: 1.2em;
  padding: 20px;
}
.PauseMenuButton span img {
  width: 90%;
}

.SceneSaveBackground {
  position: absolute;
  z-index: 9;
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
}

.SceneSaveBackground {
  color: white;
  font-size: 1.8em;
  position: fixed;
}

.SaveSlotsFrame {
  position: absolute;
  width: 70%;
  height: 60%;
  padding: 40px;
  left: 50%;
  top: 55%;
  transform: translate(-50%, -50%);
  background: rgba(134, 134, 134, 0.9);
  border-radius: 15px;
}

.SaveSlot {
  display: inline-block;
  width: calc(33% - 45px);
  margin: 15px;
  height: calc(100% - 30px);
  background: rgb(212, 212, 212);
  border-radius: 15px;
}

.SceneBackground img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.SceneSelectBackground {
  position: absolute;
  z-index: 9;
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
}

.SceneSelectFrame {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  width: 50%;
  z-index: 10;
}
.SelectButton {
  position: relative;
  display: inline-block;
  width: 80%;
  height: 100px;

  box-shadow: 0px 0px 10px #252525;
  margin: 10px 0px 10px 0px;
  cursor: pointer;
  overflow: hidden;
}
.SShape_default {
  border-radius: 50px;
}

.SShape_linear {
  border-radius: 0px;
}

.SColor_default {
  background: #2872f9;
}

.SColor_red {
  background: rgb(239, 154, 154);
}
.SelectButton span {
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: white;
  white-space: normal;
  word-break: keep-all;
}

.ViewerNav {
  position: absolute;
  left: 10px;
  top: 10px;
  z-index: 89;
}

.NavItems{
  position: relative;
  width: 40px;
  height: 40px;
  border-radius: 10px;
  margin: 2px;
  display: table;
  transition: background-color 0.3s ease-out 100ms;
  cursor: pointer;
}

.NavItems:hover {
  background: #2872f9;
  transition: 0.3s;
}

.NavItems img{
  margin: 10px;
  height: 30px;
}

.ViewerNavRight {
  position: absolute;
  left: calc(100% - 65px);
  top: 10px;
  z-index: 89;
}

.ResControl {
  position: absolute;
  left: calc(100% - 243px);
  top: 120px;
  z-index: 89;
  width: 230px;
  height: 270px;
  background: #4b4b4b;
  border-radius: 10px;
  padding: 15px;
  /* text-align: center; */

}

.ResControl_img {
  display: inline-block;
  width: 100%;
  height: 70px;
  background: #818181;
  padding-left: 15px;
  border-radius: 10px;
  overflow: hidden;
}

.ResControl_img_thum {
  display: inline-block;
  position: relative;
  top: 8px;
  left: -5px;
  width: 50px;
  background: #0084ff;
  object-fit: cover;
  border-radius: 10px;
  overflow: hidden;
}

.ResControl_img_thum img{
  width: 50px;
}

.ResControl_img_title {
  display: inline-block;
  position: relative;
  top: -35px;
  left: 52px;
  width: 73px;
  font-size: 0.8em;
  text-align: right;
}

.ResControl_mu {
  display: inline-block;
  width: 100%;
  height: 40px;
  background: #818181;
  overflow: hidden;
  padding-left: 15px;
  border-radius: 10px;
}

.ResControl_mu_thum {
  display: inline-block;
  position: relative;
  top: 7px;
  left: -5px;
  width: 25px;
  background: #0084ff;
  object-fit: cover;
  border-radius: 10px;
  overflow: hidden;
}

.ResControl_mu_thum img{
  width: 25px;
}

.ResControl_mu_title {
  display: inline-block;
  position: relative;
  top: -3px;
  left: 2px;
  width: 73px;
  font-size: 0.8em;
  text-align: left;
}

.ResControl_btn {
  position: relative;
  top: -25px;
  left: 115px;
}

.ResControl_btn button {
  display: inline-block;
  border-radius: 10px;
  border: none;
  background: #2872f9;
  color: white;
  width: 29px;
  height: 29px;
  object-fit: cover;
  margin-left: 2px;
}
.ResControl_btn button img {
  position: relative;
  left: 0px;
  top: 0px;
  width: 15px;
}

.ResControl_btn_mu {
  position: relative;
  top: -27px;
  left: 115px;
}

.ResControl_btn_mu button {
  display: inline-block;
  border-radius: 10px;
  border: none;
  background: #2872f9;
  color: white;
  width: 29px;
  height: 29px;
  object-fit: cover;
  margin-left: 2px;
}
.ResControl_btn_mu button img {
  position: relative;
  left: 0px;
  top: 0px;
  width: 15px;
}



.SceneImg {
  position: absolute;
  left: 50%;
  top: 60%;
  width: 100%;
  height: 100%;
  transform: translate(-50%, -50%);
  z-index: 2;
}

.SceneImg img {
  position: absolute;
  left: 50%;
  top: 40%;
  transform: translate(-50%, -50%);
  width: 80%;
  height: 80%;
  object-fit: contain;
}

.SceneScriptFrame {
  position: absolute;
  left: 50%;
  top: calc(100% - 80px);
  transform: translate(-50%, -50%);
  width: 90%;
  height: 50%;
  z-index: 2;
}

.ScriptEditingButton {
  position: absolute;
  left: calc(100% - 60px);
  width: 40px;
  height: 40px;
  border-radius: 10px;
  margin: 10px;
  background: #4b4b4b;
  transition: all ease 0.2s;
  cursor: pointer;
  opacity: 0.8;
}

.ScriptEditingButton:hover {
  background: #0084ff;
  opacity: 1;
}

.ScriptEditingButton img {
  position: absolute;
  width: 50%;
  left: 50%;
  top: 50%;
  transform: translate(-44%, -50%);
}

.SelectEditingButton {
  position: absolute;
  left: calc(50% - 55px);
  width: 100px;
  height: 50px;
  border-radius: 10px;
  margin: 10px;
  background: #868686;
  transition: all ease 0.2s;
  cursor: pointer;
  opacity: 0.8;
}

.SelectEditingButton:hover {
  background: #0084ff;
  opacity: 1;
}

.SelectEditingButton img {
  position: absolute;
  width: 30%;
  left: 50%;
  top: 50%;
  transform: translate(-44%, -50%);
}

.SelectVisibleButton {
  position: absolute;
  left: calc(0% - 35px);
  transform: translate(0%, -300%);
  width: 30px;
  height: 30px;
  border-radius: 10px;
  margin: 10px;
  background: #0084ff;
  transition: all ease 0.2s;
  cursor: pointer;
  opacity: 0.8;
}

.SelectVisibleButton:hover {
  background: #868686;
  opacity: 1;
}

.SelectVisibleButton img {
  position: absolute;
  width: 50%;
  left: 50%;
  top: 50%;
  transform: translate(-47%, -50%);
}

.SelectVisibleButtonDisable {
  position: absolute;
  left: calc(0% - 35px);
  transform: translate(0%, -300%);
  width: 30px;
  height: 30px;
  border-radius: 10px;
  margin: 10px;
  background: #ff4c4c;
  transition: all ease 0.2s;
  cursor: pointer;
  opacity: 0.8;
}

.SelectVisibleButtonDisable:hover {
  background: #868686;
  opacity: 1;
}

.SelectVisibleButtonDisable img {
  position: absolute;
  width: 50%;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}



.ScriptToolBar {
  position: absolute;
  height: 40px;
  left: calc(100% - 250px);
  top: 10px;
}

.ToolBarEl {
  position: relative;
  display: inline;
  width: 10%;
  margin: 0px 1.5px 1.5px 0px;
  padding: 3px;
  cursor: pointer;
  color: rgb(172, 172, 172);
}

.ScriptBackground {
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  opacity: 0.9;
  box-shadow: 0px 0px 10px #252525;
}
/* SHAPE */
.BShape_default {
  border-radius: 20px;
}
.BShape_linear {
  border-radius: 0px;
}
.BColor_default {
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 1) 40%,
    rgba(0, 0, 0, 0) 100%
  );
}
.BColor_red {
  background: linear-gradient(
    to bottom,
    rgb(239, 154, 154) 40%,
    rgba(0, 0, 0, 0) 100%
  );
}
/* SHAPE */
.SceneSpeakerName {
  position: absolute;
  left: -10px;
  top: -20px;
  width: 200px;
  height: 60px;
  display: table;
  box-shadow: 0px 0px 10px #252525;
}
/* NAME */
.NShape_default {
  border-radius: 25px;
}

.NShape_linear {
  border-radius: 0px;
}

.NColor_default {
  background: rgb(75, 147, 255);
}

.NColor_red {
  background: rgb(239, 154, 154);
}
/* NAME */
.SceneSpeakerName span {
  display: table-cell;
  vertical-align: middle;
  text-align: center;
  font-size: 1.3em;
  color: white;
}

.SceneScript {
  position: absolute;
  left: 0px;
  top: 60px;
  width: calc(100% - 40px);
  height: calc(100% - 200px);
  overflow: hidden;
  padding-left: 20px;
  padding-right: 20px;
  /* display: table; */
}

.SceneScript span {
  display: table-cell;
  color: white;
  text-align: left;
  overflow: hidden;
  font-size: 1.5em;
}

/* 반응형 레이아웃 for 모바일 */
@media ( max-width: 800px ) {
.SceneSpeakerName {
  position: absolute;
  left: -10px;
  top: -20px;
  width: 45%;
  height: 50px;
  background: rgb(75, 147, 255);
  display: table;
  border-radius: 25px;
  box-shadow: 0px 0px 10px #252525;
}

  .VisualNovelLabel {
  position: absolute;
  top: 0px;
  width: 100%;
  height: 70%;
  background: rgba(34, 34, 34, 0.7);
  z-index: 10;
  }

  .VisualNovelIcon {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: calc(100% - 10%);
    height: calc(100% - 10%);
    border-radius: 20px;
    /* background: white; */
  }

  .VisualNovelIcon img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  .VisualNovelName {
    position: absolute;
    left: 0%;
    top: calc(0% + 40px);
    transform: translate(0, -50%);
    width: 200px;
    height: 40px;
    color: white;
    font-size: 1.5em;
  }

  .PauseMenusFrame {
    position: absolute;
    top: 70%;
    left: 0px;
    width: 100%;
    height: 30%;
    /* background: white; */
  }

  .PauseMenuButtonPosition {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 80%;
    text-align: center;
  }

  .PauseMenuButton {
    display: inline-table;
    width: 25%;
    margin: 0px 1.5% 0px 1.5%;
    height: 50px;
    border-radius: 20px;
    /* background: #2872f9; */
    cursor: pointer;
  }
  .PauseMenuButton span {
    display: table-cell;
    vertical-align: middle;
    text-align: center;
    color: white;
    font-size: 1.2em;
    
  }
  .PauseMenuButton span img {
    width: 100%;
  }
}
/* 반응형 레이아웃 for 모바일 */


.NextScriptButton {
  position: absolute;
  left: calc(100% - 70px);
  top: 48%;
  width: 150px;
  height: 90px;
  transform: translate(-50%, -50%);
  animation-name: NextScriptButtonMove;
  animation-iteration-count: infinite;
  animation-direction: alternate;
  animation-duration: 0.8s;
  cursor: pointer;
}

.NextScriptButton button {
  position: absolute;
  left: 30%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 50%;
  height: 50%;
  background: rgba(44, 44, 44, 0.4);
  text-align: center;
  border: none;
  border-radius: 20px;
  color: white;
  font-size: 1.1em;
  text-shadow: 0px 0px 8px #ffffff;
  box-shadow: 0 0 15px 6px #2b2b2b;
}

@keyframes NextScriptButtonMove {
  0% {
  }

  100% {
    /* top: 50%; */
    left: calc(100% - 65px);
  }
}
</style>