<template>
<ConfirmModal ref="confirmModal"></ConfirmModal>
<!-- 헤더부분(아이콘~부제목) -->
  <div class="tests">
    <div class="header">
      <div class="service">
        <img class="icon" src="../../assets/icons/white/home.png" alt="logo" />
        <span class="title">마이페이지</span>
        <span class="my_topic">프로필 설정</span>
      </div>
    </div>
  
  <!-- 닉네임~버튼까지 감싸는 박스 -->
  <div class="main-position-container">
    <!-- 취소,수정버튼을 제외한 내용을 감싸는 박스 -->
      <div class="profile-container-box">

        <div class="profile-nick-line">
          <div class="col-one">닉네임</div> 
          <input id="profilenick" type="text" class="profile-nick-input" v-model="newNickname" :disabled="nicknameCng == false">

          <div v-if="nicknameCng == false">
            <button class="mypage_main-savebtn" @click="nicknameCng = true; newNickCheck = false;">변경</button>
          </div>
          <div v-else-if="newNickCheck == false">
            <button class="mypage_main-savebtn" @click="newNicknameCheck()">중복검사</button>
          </div>

        </div>


        <div class="profile-intro-line">
          <div class="col-one">소개</div>
          <textarea id="profileintro" class="profile-introduce-input" type="text" maxlength="500" v-model="newIntro"></textarea>
          <!-- <div class="intro-cont-align"><span>{{newIntro.length}}</span>/500자</div> -->
        </div>

        <!-- <button id="mypage_main-canc" @click="cancelBtn">취소</button> -->
        <button v-if="isSave" id="mypage_main-save" @click="editBtn()">수정</button>
        <button v-else id="mypage_main-save" @click="saveBtn()">저장</button>

        <hr>

        <div class="profile-image-line">
          <div class="col-one">프로필 이미지</div>

          <div class="profile-image-input" v-if="uploadImg == false">
            <img class="profile-image-input" src="@/assets/imgs/noprofile.png">
          </div>
          <div v-else>
            <img id="profile-image" class="profile-image-input" :src="newImage">
          </div>
          
          <div class="col-three">
            <input @change="upload" type="file" id="input-file" style="display:none" />
            <label class="input-file-button" for="input-file">Browse</label><br>
            <button class="mypage_main-save_img" @click="uploadProfileImg()">업로드</button>
            <!-- <span>512x512 이상의 이미지가 가장 적합 <br>
            허용 확장자:png,jpeg,jpg,gif | > 2MB</span> -->
          </div>
        </div>



      </div>

      <!-- 취소,수정 버튼 -->
      <footer>

      </footer>
      
    </div>


  </div>
</template>

<script>
import axios from '../../axios';
import storage from '../../aws'
import ConfirmModal from '../modal/ConfirmModal.vue'
export default {
  created() {
    this.getProfile()
  },
  watch : {
    newImage() {
      if(this.newImage == 'none' || this.newImage == null) {
        this.uploadImg = false;
      } else {
        this.uploadImg = true;
      }
    }
  },
  data(){
    return{
      uploadImg: false,
      newImage : "",
      profileImg : '',

      preNickname : "",
      newNickname: "",
      newIntro: "",

      isSave : true,
      nicknameCng : false,
      newNickCheck : false
    }
  },
  methods:{
    // browse버튼을 눌러 이미지를 불러오는 함수
    upload(e){
      this.uploadImg = true;

      this.profileImg = e.target.files[0]
      var reader = new FileReader();
      reader.onload = e => {
        const previewImage = document.getElementById("profile-image")
        previewImage.src = e.target.result
      }
      reader.readAsDataURL(this.profileImg);
    },

    async uploadProfileImg() {
      var result = await storage.uploadProfileImg(this.$store.state.userId, this.profileImg);
      if(result == "ok") {
        this.$store.commit("userLogin", {
          nickname: this.$store.state.userNickname,
          id: this.$store.state.userId,
          profileImg : await storage.getUserProfileImg(this.$store.state.userId)
        });
      }
    },

    saveBtn() {
      var newContent = {
        newNickname : this.newNickname,
        newIntro : this.newIntro
      }
      axios.post('/api/mypage/mypagemain', newContent)
      .then((result) => {
        
        if(result.data.length != 0) {
          console.log(result.data)
          console.log('his')
        }
      }).catch((err) => {
        console.log(err);
      })
      this.isSave=true
    },
    // 데이터 불러오기
    getProfile() {
      axios.get('/api/mypage/mypagemain')
      .then((result)=>{
        if(result.data=="err"){
          console.log("프로필 데이터 불러오기 실패");
        } else {
          this.newImage = this.$store.state.profileImg;
          this.newNickname = result.data[0].USER_NICKNAME
          this.newIntro = result.data[0].USER_INTRO
          this.preNickname = result.data[0].USER_NICKNAME;
        }
      })
    },

    newNicknameCheck() { // 닉네임 중복검사
      if(this.newNickname == "") {
        this.$store.commit('gModalOn', {msg : "닉네임을 입력해주세요.", size : "normal"});
      } else if(this.newNickname == this.preNickname) {
        this.$store.commit('gModalOn', {msg : "이전 닉네임과 동일합니다.", size : "normal"});
      } else {

        axios.post('/api/auth/existNicknameCheck', {newNickname : this.newNickname})
        .then(async (result)=>{
          if(result.data == "exist") {
            this.$store.commit('gModalOn', {msg : "이미 존재하는 닉네임입니다.", size : "normal"});
            this.newNickCheck = false;
          } else {
            var confirm = await this.$refs.confirmModal.show({
              msg : `닉네임 [${this.newNickname}]을(를) 사용하시겠습니까?`,
              size : "normal",
              btn1 : "확인",
              btn2 : "취소"
            });
            if(confirm) {
              this.newNickCheck = true;
              this.nicknameCng = false;
            } else {
              this.newNickCheck = false;
              this.nicknameCng = true;
            }
          }
        })
        .catch((err)=>{
          console.error(err);
        })

      }
    },

    // 프로필 수정버튼을 눌렀을 때 동작하는 함수
    editBtn(){
      if(this.newNickname == '' || this.newNickCheck != true) {
        this.$store.commit('gModalOn', {msg : "닉네임이 비어있거나 중복검사를 진행하지 않았습니다.", size : "normal"});
      } else {
        var data = {
          newNickname : this.newNickname,
          newIntro : this.newIntro
        }
        axios.post('/api/mypage/updateProfile', data)
        .then((result)=>{
          if(result.data == "err") {
            this.$store.commit('gModalOn', {msg : "ERR : 프로필 수정 실패", size : "normal"});
          } else {
            this.$store.commit('gModalOn', {msg : "프로필이 수정되었습니다.", size : "normal"});
            this.newNickCheck = false;
            this.nicknameCng = false;
          }
        })
      }
    },

    // 취소 버튼을 눌렀을 때 동작하는 함수
    cancelBtn(){
      const nick = document.getElementById('profilenick');
      const intro = document.getElementById('profileintro');
      const browse = document.getElementById('input-file');
      const btn = document.querySelector("#mypage_main-save");
      
      btn.innerText='수정';
      nick.disabled = true;
      intro.disabled = true;
      browse.disabled = true;
      
      nick.value='';
      intro.value='';
      this.areaText = '';
      
      document.getElementById('profile-image').classList.replace('profile-image-change','profile-image-input');
      document.getElementById('profile-image').style.backgroundImage= "url('')";
      
    },

    routerPush(link){
      this.$router.push(link);
    },
    
  },
  components : {
    ConfirmModal
  }
}

</script>

<style>

.mainBtnArea{
  display: flex;
  text-align: center;
  margin-top: 2%;
  line-height: 42px;
}

.my_topic{
  display: block;
  width: 150px;
  color: white;
  position: relative;
  top: 30px;
  left: calc(100% - 350px);
  font-size: 1.2em;
}
/* 한줄씩 정렬 */
.profile-nick-line,
.profile-image-line
{
  display: flex;
}
.profile-intro-line {
  position: relative;
}

/* browse 버튼 */
.input-file-button{
  width: 120px;
  height: 40px;
  padding-top: 10px;
  margin-bottom: 20px;
  background-color:#2872F9;
  color: white;
  cursor: pointer;
  border-radius: 20px;
  font-size: 1.0em;
  text-align: center;
}
.input-file-button:hover{
  background: #0084ff;
}

/* 제목,부제목을 제외한 모든 태그들 */
.main-position-container{
  padding: 20px;
  position: absolute;
  top: 150px;
  width: 95%;
  height: 450px;
  margin: 0 auto;
}

/* 취소,수정 버튼을 제외한 모든 내용 */
.profile-container-box{
  margin: 0 auto; 
  color: white;
  width: 105%;
}

/* 오른쪽 부분에 있는 텍스트 스타일 */

/* 왼쪽 부분에 있는 텍스트 스타일 */
.col-one{
  position: relative;
  vertical-align: top;
  display: inline-block;
  padding-right: 40px;
  width: 150px;
  font-size: 1.0em;
}

/* 소개 글자용량 표시 */
.intro-cont-align{
  display: inline-block;
  font-size: 0.8em;
}

/* 프로필 이미지가 들어가기전 공간 */
.profile-image-input{
  position: relative;
  display: inline-block;
  height: 160px;
  width: 160px;
  background:#5E5E5E;
  border-radius: 20px;
  z-index: 11;
  margin-right: 15px;
  margin-bottom: 15px;
}

/* 프로필 이미지가 들어왔을 때 변하는 스타일 */
.profile-image-change{
  position: relative;
  display: inline-block;
  height: 160px;
  width: 160px;
  background: no-repeat;
  margin: 0 75px 15px 80px;
  background-size:cover;
  border-radius: 20px;
  z-index: 13;
}

/* 닉네임을 적는 공간 */
.profile-nick-input{
  position: relative;
  display: inline-block;
  width: 380px;
  height: 50px;
  border-radius: 20px;
  background-color: #5E5E5E;
  border: none;
  outline: none;
  resize: none;
  color: white;
  font-size: 1.0em;
  margin-right: 15px;
  margin-bottom: 15px;
  padding: 15px;
}

/* 소개 내용이 들어가는 공간 */
.profile-introduce-input{
  position: relative;
  width: 380px;
  height: 100px;
  border-radius: 20px;
  background-color: #5E5E5E;
  resize: none;
  color: white;
  font-size: 1em;
  margin-bottom: 15px;
  margin-right: 15px;
  padding: 15px;
  border: none;
  outline: none;
}

/* 취소버튼 */
#mypage_main-canc{
  transform: translate(350%,0%);
  width: 120px;
  height: 40px;
  border-radius: 15px;
  background-color: #5E5E5E;
  color: white;
  font-size: 1.0em;
  margin-right: 30px;
  margin-top:0;
  cursor: pointer;
}

/* 저장 버튼 */
#mypage_main-save{
  transform: translateX(455%);
  width: 120px;
  height: 40px;
  border-radius: 15px;
  background-color: #2872F9;
  color: white;
  font-size: 1.0em;
  cursor: pointer;
  transition: 0.2s all ease;
}

.mypage_main-savebtn{
  position: relative;
  /* width: 120px; */
  height: 50px;
  border-radius: 15px;
  background-color: #2872F9;
  color: white;
  font-size: 1.0em;
  cursor: pointer;
  transition: 0.2s all ease;
  padding-left: 20px;
  padding-right: 20px;
}

.mypage_main-save_img{
  display: inline-block;
  vertical-align: top;
  width: 90px;
  height: 40px;
  border-radius: 15px;
  background-color: #2872F9;
  color: white;
  font-size: 1.0em;
  cursor: pointer;
  transition: 0.2s all ease;
}

.mypage_main-save:hover{
  background: #0084ff;
}
</style>