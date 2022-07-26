<template>
  <div>
    <!-- 모달창이 나올떄 뒷 배경을 흐리게 만드는 녀석
  이걸 안쓰고 싶을땐 단순히 modal_opacity만을 주석처리하면 된다.-->
    <!-- 모달창의 크기를 결정하는 modal_frame,
  모달창의 크기 또한 파라미터로 받아서 나오게 할수도 있겠다. 쓰는사람 마음대로-->
    <div v-bind:class="{ cafe_modal_frame_big: true }">
      <!--모달 내 메세지 및 컨텐츠인 modal_inner, 여기에 단순히 메세지만을 표시할수도 
    작은 컴포넌트를 삽입할수도 있따.-->
      <div class="cafe_modal_inner">
        <div class="cafe_modal_title_inner">
          <span class="modal_title">추가하기</span>
        </div>
        <div>
          <div class="admin_cafe_banner">
            <input @change="fileChoice" type="file" name="file" id="file">
            <!-- <input type="text" name="url" id="url" placeholder="배너 이미지 경로 입력" v-model="banner_img">
            <img class="url_img" :src="banner_img" v-if="banner_img != ''"/>
            <button @click="banner_img = ''">경로 지우기</button> -->
            <select class="select" v-model="banner_sel">
              <option value="novelOpt">스토어 작품</option>
              <option value="eventOpt">이벤트</option>
            </select>
            <input class="codeInput" type="number" placeholder="codeNum" v-model="banner_num"/>
          </div>
        </div>
      </div>
      <!-- <div class="modal_content">내용 출력</div> -->
      <!--메세지를 출력하는 예제-->
      <!--모달을 닫는 버튼과 버튼내 메세지(확인, 취소 등등)-->
      <div class="cafe_modal_btn_position">
        <div>
          <span class="cafe_qna">이 배너를 추가하시겠습니까?</span>
        </div>
        <button  class="cafe_modal_btn" @click="uploadBannerImg()">확인</button>
        <button class="cafe_modal_btn" @click="clickEvent()">취소</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "../../axios.js";
import storage from '../../aws'

export default {
  name: "vsn_modal_universal",
  data() {
    return {
      banner_file: "",
      banner_img : "",
      banner_num : "",
    };
  },
  props: {
  },
  methods: {
    fileChoice(e){
      let file = e.target.files[0]
      let url = URL.createObjectURL(file)
      this.banner_file = url;
    },
    async uploadBannerImg() {
      console.log(this.banner_file)
      var result = await storage.uploadBannerImg(this.banner_file);
      console.log(result)
      if(result == "ok") {
        console.log("hiii")
        this.$store.commit("userLogin", {
          bannerFile : await storage.uploadBannerImg(this.$store.state.banner_file)
        });
      }
    
      var newContent = {
        // newFile: this.banner_file,
        // newImg: this.banner_img,
        newNum: this.banner_num,
        newSel: this.banner_sel
      };
      console.log(newContent);
      axios.post("/api/admin/addBanner", {content : newContent})
      .then((result) => {
        if (result.data == "err") {
          alert('작품 또는 이벤트 게시글이 없습니다.');
        } else {
          this.clickEvent();
        }
      });
    },
    // 엑시오스 통신이 성공했을 경우 클릭이벤트 함수 호출 필수
    clickEvent() {
      this.$emit("modal");
    },
  },
};

</script>
<style>
.cafe_modal_title_inner{
    text-align:left;
}
.cafe_modal_title{
    color:white;
    font-size: 1.3em;
}
.admin_cafe_banner {
  background-color:gray;
  border-radius: 15px;
  height: 150px;
  width: 95%;
  margin: 20px 2.5% 0px 2.5%; 
  padding: 15px 5px;
}
#file, #url{
  display: inline-block;
  width: 100%;
}
#url{
  width: 27%;
  margin: 20px 0;
}
.admin_cafe_banner > button {
  margin: 0 0 0 5px;
  border-radius: 10px;
  background-color: #2a2a2a;
  color: white;
  width: 90px;
}
.url_img{
  display: inline-block;
  width: 50%;
  height: 130px;
  position: absolute;
  top: 57px;
  right: 40px;
  border-radius: 20px;
}
input[type=file]::file-selector-button {
  width: 150px;
  height: 30px;
  background: #fff;
  border: 1px solid rgb(77,77,77);
  border-radius: 10px;
  cursor: pointer;
}
input[type=file]::file-selector-button:hover{
    background: rgb(77,77,77);
    color: #fff;
}
.cafe_modal_frame_big {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 700px;
  height: 310px;
  border-radius: 25px;
  background: #2a2a2a;
  animation-duration: 0.7s;
  animation-name: opening;
  z-index: 20;
  opacity: 1;
}
.cafe_modal_inner {
  color: white;
  position: fixed;
  width: 95%;
  margin: 0px 2.5% 0px 2.5%; 
  top: 5%; 
}
.cafe_modal_btn {
    font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', sans-serif;
    font-weight: 500;
    position: relative;
    width: 100px;
    height: 30px;
    background-color:#2872f9;
    border: none;
    color: white;
    text-align: center;
    text-decoration: none;
    font-size: 14px;
    border-radius: 12px;
    cursor: pointer;
    margin:5px 5px 5px 20px;
    left: 31%;
}
.cafe_modal_btn_position {
  position:relative;
  width: 90%;
  margin: 0px 5% 0px 5%; 
  top: 85%;
  transform: translateY(-50%);
}
.cafe_qna {
    color:white;
    margin-left: 38%;
}
.select{
  position: absolute;
  bottom: 20px;
  left: 20px;
}
.codeInput{
  width: 100px;
  position: absolute;
  bottom: 20px;
  left: 120px;
}
/* 애니메이션들,*/
/*열리는 애니메이션 opening*/
/* @keyframes opening {
  from {
    top: 150%;
    opacity: 0;
  }

  to {
    top: 50%;
    opacity: 1;
  }
} */
/*배경을 만드는 backgrounding_on*/
/* @keyframes backgrounding_on {
  from {
  }

  to {
    opacity: 0.3;
  }
} */
</style>