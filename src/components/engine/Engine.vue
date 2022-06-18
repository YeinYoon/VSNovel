<template>
  <div class="RouterView_NonSide"> <!--컴포넌트 전체영역-->
      <div class="Engine_Promo_frame">
        <div class="Promo_title">
          <img class="Promo_title_icon" src="@/assets/icons/vsn_engine.png">
          <p>Visual Studio Novel Engine</p>
        </div>

        <div class="Promo_Setup">



          <div class="Promo_Setup_Button">
            <button @click="setupMenu()">설치</button>
            <!-- <button>실행</button> -->
            <!-- <button>업데이트</button> -->
          </div>

          <div class="Promo_Setup_Dropdown" v-if="DropDownOn == true">
            <div @click="engineDownloadWin()" class="Promo_Setup_Choice">
              <img src="@/assets/imgs/windows.png">
              <p>Windows</p>
            </div>
            <div @click="engineDownloadMac()" class="Promo_Setup_Choice">
              <img src="@/assets/imgs/mac.png">
              <p>OS X</p>
            </div>
            <div @click="engineDownloadLinux()" class="Promo_Setup_Choice">
              <img src="@/assets/imgs/linux.png">
              <p>Linux</p>
            </div>
          </div>

          <div class="Promo_Setup_Info">
            <p>최신 릴리즈 - 2022-04-08</p>
            <p>빌드버전 - 0180</p>
          </div>
        </div>

        <div class="Promo_Content">
          <div class="Promo_Banner">
            <img src="@/assets/imgs/background.png">
          </div>

          <div class="Promo_Info">
            <div class="Promo_Card_Frame">
              <div class="Promo_Cards">

                <div class="Promo_Card">
                  <div class="Promo_Card_Content">
                    <img src="@/assets/icons/white/editing.png">
                    <p>가장 간편한 소설컨텐츠<br>제작 도구</p>
                  </div>
                </div>

                <div class="Promo_Card">
                  <div class="Promo_Card_Content">
                    <img src="@/assets/icons/white/thumbs_up.png">
                    <p>누구나 사용할 수 있어요!</p>
                  </div>                  
                </div>

                <div class="Promo_Card">
                  <div class="Promo_Card_Content">
                    <img src="@/assets/icons/white/text.png">
                    <p>사용자 친화적인 UI/UX</p>
                  </div>
                </div>

                <div class="Promo_Card">
                  <div class="Promo_Card_Content">
                    <img src="@/assets/icons/white/sharing.png">
                    <p>외부 프로그램 호환성 제공</p>
                  </div>
                </div>

              </div>
            </div> <!--카드 끝-->

            <div class="Promo_Book_Frame">
              <div class="Promo_Book_Title">
                VSN 쇼케이스
              </div>
              <div class="Promo_Book_Shelf">

                <div class="Promo_Books">
                  <div class="Promo_Book_Thumbnail">
                    <img>
                  </div>
                  <div class="Promo_Book_info">
                    <p>줄거리</p>
                    <button>스토어에서 확인</button>
                  </div>
                </div>

                <div class="Promo_Books">
                  <div class="Promo_Book_Thumbnail">
                    <img>
                  </div>
                  <div class="Promo_Book_info">
                    <p>줄거리</p>
                    <button>스토어에서 확인</button>
                  </div>
                </div>

                <div class="Promo_Books">
                  <div class="Promo_Book_Thumbnail">
                    <img>
                  </div>
                  <div class="Promo_Book_info">
                    <p>줄거리</p>
                    <button>스토어에서 확인</button>
                  </div>
                </div>

                <div class="Promo_Books">
                  <div class="Promo_Book_Thumbnail">
                    <img>
                  </div>
                  <div class="Promo_Book_info">
                    <p>줄거리</p>
                    <button>스토어에서 확인</button>
                  </div>
                </div>

                <div class="Promo_Books">
                  <div class="Promo_Book_Thumbnail">
                    <img>
                  </div>
                  <div class="Promo_Book_info">
                    <p>줄거리</p>
                    <button>스토어에서 확인</button>
                  </div>
                </div>

                <div class="Promo_Books">
                  <div class="Promo_Book_Thumbnail">
                    <img>
                  </div>
                  <div class="Promo_Book_info">
                    <p>줄거리</p>
                    <button>스토어에서 확인</button>
                  </div>
                </div>

                <div class="Promo_Books">
                  <div class="Promo_Book_Thumbnail">
                    <img>
                  </div>
                  <div class="Promo_Book_info">
                    <p>줄거리</p>
                    <button>스토어에서 확인</button>
                  </div>
                </div>

              </div> <!--책장 끝-->
            </div> <!--쇼케이스 끝-->

            <div class="Promo_Third_Frame">
              <div class="Promo_Third_Title">
                VSN과 함께합니다
              </div>

              <div class="Promo_Third_Shelf"> <!--서드파티 로고들-->
                <div class="Promo_Third_Shelf_Position">
                  
                  <div class="Promo_Third_List">
                    <img src="@/assets/imgs/vuelogo.png">
                  </div>

                  <div class="Promo_Third_List">
                    <img src="@/assets/imgs/nodelogo.png">
                  </div>

                  <div class="Promo_Third_List">
                    <img src="@/assets/imgs/aladinlogo.jpg">
                  </div>

                  <div class="Promo_Third_List">
                    <img src="@/assets/imgs/yeslogo.png">
                  </div>

                  <div class="Promo_Third_List">
                    <img src="@/assets/imgs/ypbookslogo.jpg">
                  </div>

                  <div class="Promo_Third_List">
                    <img src="@/assets/imgs/kyobobooklogo.png">
                  </div>

                  <div class="Promo_Third_List">
                    <img src="@/assets/imgs/yjplogo.png">
                  </div>

                  <div class="Promo_Third_List">
                    <img src="@/assets/imgs/daegulogo.jpg">
                  </div>
                </div>
              </div> <!--서드파티 로고들 끝-->

            </div> <!-- 서드파티 끝 -->

          </div> <!-- 인포 끝 -->
        </div> <!-- 컨텐츠 끝(인포,배너) -->
      </div><!-- 전체 끝 -->
  </div> <!-- 라우터뷰 -->
</template>

<script>
export default {
  name: 'Engine',
  data() {
    return {
      stepCount : 1,
      DropDownOn : false,
    }
  },

  created() {
    this.$store.commit('currentServiceCng', 'E');
    this.$store.commit('sideBarOff');
  },

  components: {
  },

  methods:{
      engineDownloadWin(){
          try {
              let downloadFileLink = '/engine_install/VSNovel-Engine_Setup_0.1.0.exe';//download 경로
              let element = document.createElement('a');
              element.setAttribute('href', downloadFileLink);
              element.setAttribute('download', '');
              element.click()
          }catch(e){
              console.log(e)
          }
      },

      engineDownloadMac(){
          try {
              let downloadFileLink = '/engine_install/VSNovel-Engine_Setup_0.1.0.exe';//download 경로
              let element = document.createElement('a');
              element.setAttribute('href', downloadFileLink);
              element.setAttribute('download', '');
              element.click()
          }catch(e){
              console.log(e)
          }
      },

      engineDownloadLinux(){
          try {
              let downloadFileLink = '/engine_install/VSNovel-Engine_Setup_0.1.0.exe';//download 경로
              let element = document.createElement('a');
              element.setAttribute('href', downloadFileLink);
              element.setAttribute('download', '');
              element.click()
          }catch(e){
              console.log(e)
          }
      },

      setupMenu() {
        this.DropDownOn = !this.DropDownOn;
      }
  }
}
  
</script>

<style>
.Engine_Promo_frame {
  position: absolute;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 100%;
  overflow: auto;
}

.Engine_Promo_frame::-webkit-scrollbar {
  display: none;
}

.Promo_title {
  position: absolute;
  width: 500px;
  height: 200px;
  left: 297px;
  top: 136px;
  transform: translate(-50%, -50%);
  text-align: center;
  font-size: 2em;
  color: white;
  font-weight: 600;
}

.Promo_title_icon {
  position: absolute;
  top: -1px;
  left: -7px;
  width: 50px;
  height: 50px;
}

.Promo_Setup{
  position: absolute;
  width: 300px;
  height: 200px;
  left: calc(100% - 110px);
  top: 65px;
  transform: translate(-50%, -50%);
  text-align: center;
  color: white;
  z-index: 4;
}

.Promo_Setup_Button {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 5;
}

.Promo_Setup_Button Button{
  background: #2872f9;
  width: 160px;
  height: 50px;
  color: white;
  font-size: 1.3em;
  border-radius: 15px;
}

.Promo_Setup_Info{
  position: absolute;
  left: -10%;
  top: 100px;
  transform: translate(-50%, -50%);
  background: #808080;
  width: 160px;
  height: 50px;
  font-size: 0.8em;
  line-height: 2px;
  border-radius: 0px 15px 0px 15px;
  padding-top: 16px;
}

.Promo_Setup_Dropdown{
  position: absolute;
  left: 50%;
  top: 220px;
  transform: translate(-50%, -50%);
  width: 160px;
  height: 240px;
  background: rgb(77, 77, 77);
  padding-top: 40px;
  border-radius: 15px;
  /* animation-name: DropDownOn;
  animation-duration: 0.5;
  animation-fill-mode: forwards; */
}

.Promo_Setup_Choice{
  width: 160px;
  height: 40px;
  display: inline-block;
  cursor: pointer;
  
}

.Promo_Setup_Choice:hover{
  opacity: 0.9;
}

.Promo_Setup_Choice img{
  height: 40px;
  padding: 5px;
}

.Promo_Setup_Choice p{
  font-size: 0.8em;
}

.Promo_Content{
  position: absolute;
  width: calc(100% - 50px);
  transform: translate(-50%, -50%);
  top: 110px;
  left: 50%;
}

.Promo_Banner {
  position: absolute;
  width: 100%;
  height: 300px;
  border-radius: 25px;
  overflow: hidden;
}

.Promo_Banner img{
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.Promo_Info {
  position: absolute;
  color: white;
  top: 320px;
  width: 100%;
  height: 1200px;
  background: rgb(73, 73, 73);
  border-radius: 25px;
  overflow: auto;
}

.Promo_Card_Frame {
  position: absolute;
  background: rgb(113, 113, 113);
  width: 100%;
  height: 360px;
  padding: 20px;
  border-radius: 25px;
}

.Promo_Cards{
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 1000px;
  height: 300px;
}

.Promo_Card {
  position: relative;
  width: 230px;
  height: 100%;
  display: inline-block;
  background: #343434;
  margin: 0px 10px 0px 10px;
  border-radius: 10px;
  transform: scale(1);
  transition: all ease 0.2s;
}

.Promo_Card:hover {
  transform: scale(1.05);
  
}

.Promo_Card_Content {
  position: absolute;
  top: 115px;
  color: white;
  font-size: 1em;
  width: 100%;
  left: 50%;
  transform: translate(-50%);
}

.Promo_Card_Content img{
  position: relative;
  width: 120px;
  height: 120px;
  left: 50%;
  top: 10px;
  transform: translate(-50%, -50%);
}

.Promo_Card_Content p{
  text-align: center;
  font-size: 1em;
}

.Promo_Book_Frame{
  position: absolute;
  top: 370px;
  width: 100%;
  height: 400px;
  padding: 20px;
}

.Promo_Book_Title {
  font-size: 1.8em;
  color: white;
}

.Promo_Book_Shelf {
  position: absolute;
  width: calc(100% - 40px);
  margin-top: 10px;
  padding-left: 20px;
  border-radius: 10px;
  height: 350px;
  background: rgb(109, 109, 109);
  overflow-x: auto;
  overflow-y: hidden;
  white-space: nowrap;
}

.Promo_Book_Shelf::-webkit-scrollbar {
  display: block;
  width: 10px;
}

.Promo_Book_Shelf::-webkit-scrollbar-thumb {
  background: #5e5e5e;
  border-radius: 25px;
}

.Promo_Books {
  display: inline-block;
  width: 250px;
  height: 300px;
  margin: 20px 20px 0px 0px;
  position: relative;
}

.Promo_Book_Thumbnail {
  width: 250px;
  height: 300px;
  background: rgb(149, 149, 149);
  border-radius: 10px;
}

.Promo_Book_info {
  position: absolute;
  width: 250px;
  height: 100px;
  background: rgb(130, 130, 130);
  border-radius: 10px;
  opacity: 1;
  padding: 10px;
  top: 200px;
}

.Promo_Book_info p {
  position: relative;
  color: white;
}

.Promo_Book_info button {
  background: #2872f9;
  color: white;
  width: 160px;
  height: 30px;
  border-radius: 10px;
  position: absolute;
  left: 90px;
  top: 70px;
}

.Promo_Third_Frame{
  position: absolute;
  top: 810px;
  width: 100%;
  height: 400px;
  overflow: hidden;
  padding: 20px;
}

.Promo_Third_Title {
  font-size: 1.8em;
  color: white;
}

.Promo_Third_Shelf {
  position: absolute;
  width: calc(100% - 40px);
  margin-top: 10px;
  border-radius: 10px;
  overflow: auto;
  height: 250px;
}

.Promo_Third_Shelf_Position{
  position: absolute;
  text-align: center;
  width: 100%;
}

.Promo_Third_List{
  width: 245px;
  height: 100px;
  border-radius: 10px;
  background: white;
  display: inline-block;
  margin: 2px 5px 0px 5px;
  overflow: hidden;
  transform: scale(1);
  transition: all ease 0.2s;
}

.Promo_Third_List:hover {
  transform: scale(1.05);
}

.Promo_Third_List img{
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.Engine_Anime{
  animation-name: Engine;
  animation-duration: 0.5s;
  animation-fill-mode: forwards;
}

@keyframes Engine {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>

