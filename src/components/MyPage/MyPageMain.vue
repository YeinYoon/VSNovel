<template>
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
          <input id="profilenick" type="text" class="profile-nick-input" disabled>
        </div>

        <div class="profile-image-line">
          <div class="col-one">프로필 이미지</div>
          <div id="profile-image" class="profile-image-input" type="file" :style="`background-image:url(${uploadimg})`"></div>
          <div class="col-three">
            <input @change="upload" type="file" id="input-file" style="display:none" disabled/>
            <label class="input-file-button" for="input-file">Browse</label><br>
            <span>512x512 이상의 이미지가 가장 적합 <br>
            허용 확장자:png,jpeg,jpg,gif | > 2MB</span>
          </div>
        </div>

        <div class="profile-intro-line">
          <div class="col-one">소개</div>
          <textarea id="profileintro" class="profile-introduce-input contents" type="text"  v-model="areaText" :maxlength="500" disabled></textarea>
          <div class="intro-cont-align"><span>{{areaText.length}}</span>/500자</div>
        </div>

      </div>

      <!-- 취소,수정 버튼 -->
      <footer class="mainBtnArea">
        <div id="mypage_main-canc" @click="cancel">취소</div>
        <div id="mypage_main-save" @click="profiledit">수정</div>
      </footer>
      
    </div>


  </div>
</template>

<script>
export default {
  data(){
    return{
      uploadimg:'',
      areaText:'',
      maxlength:500
    }
  },
  methods:{
    // browse버튼을 눌러 이미지를 불러오는 함수
    upload(e){
      let uploadfile = e.target.files
      console.log(uploadfile[0].type);
      
      let url = URL.createObjectURL(uploadfile[0]);
      console.log(url);

      this.uploadimg=url;
      this.uploadimgfile();
    },

    // 불러온 이미지를 프로필 이미지 상에 출력해주는 함수
    uploadimgfile(){
      document.getElementById('profile-image').classList.replace('profile-image-input','profile-image-change');
      if(document.getElementById('profile-image').style.backgroundImage==null){
          document.getElementById('profile-image').style.backgroundImage=this.uploadimg;
      }
    },

    // 프로필 수정버튼을 눌렀을 때 동작하는 함수
    // 비활성이었던 입력박스가 활성화상태로 변경
    profiledit(){
      const nick = document.getElementById('profilenick');
      const intro = document.getElementById('profileintro');
      const browse = document.getElementById('input-file');
      const btn = document.querySelector("#mypage_main-save");
      btn.innerText='저장';
      nick.disabled = false;
      intro.disabled = false;
      browse.disabled = false;
    },

    // 취소 버튼을 눌렀을 때 동작하는 함수
    // 기존에 입력되었던 텍스트들을 null값으로 변경하고 입력박스들을 비활성화 상태로 변경
    cancel(){
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
.profile-image-line,
.profile-intro-line
{
  display: flex;
}

/* browse 버튼 */
.input-file-button{
  width: 120px;
  height: 40px;
  padding-top: 10px;
  margin-bottom: 40%;
  background-color:#2872F9;
  color: white;
  cursor: pointer;
  border-radius: 20px;
  font-size: 1.0em;
  text-align: center;
}

/* 제목,부제목을 제외한 모든 태그들 */
.main-position-container{
  padding: 20px;
  position: relative;
  top: 15%;
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
.col-three{
  position: absolute;
  font-size: 0.8em;
  left: 73%;
}

/* 왼쪽 부분에 있는 텍스트 스타일 */
.col-one{
  vertical-align: top;
  padding-right: 40px;
  width: 150px;
  font-size: 1.0em;
}

/* 소개 글자용량 표시 */
.intro-cont-align{
  margin-top: 80px;
  font-size: 0.8em;
}

/* 프로필 이미지가 들어가기전 공간 */
.profile-image-input{
  height: 160px;
  width: 50%;
  background:#5E5E5E;
  border-radius: 20px;
  z-index: 11;
  margin-right: 15px;
  margin-bottom: 15px;
}

/* 프로필 이미지가 들어왔을 때 변하는 스타일 */
.profile-image-change{
  height: 200px;
  width: 50%;
  background: no-repeat;
  margin-left: 110px;
  margin-bottom: 15px;
  background-size:cover;
  border-radius: 20px;
  z-index: 13;
}

/* 닉네임을 적는 공간 */
.profile-nick-input{
  width: 50%;
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
  width: 50%;
  height: 100px;
  border-radius: 20px;
  background-color: #5E5E5E;
  resize: none;
  color: white;
  font-size: 1em;
  margin-bottom: 15px;
  margin-right: 15px;
  padding: 15px;
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
  transform: translate(350%,0%);
  width: 120px;
  height: 40px;
  border-radius: 15px;
  background-color: #2872F9;
  color: white;
  font-size: 1.0em;
  cursor: pointer;
}
</style>