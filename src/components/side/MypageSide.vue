<template>
  <div>
    <div class="sideBar">
      <div class="side_search">
        <img src="../../assets/icons/magnifier.png" class="side_icon" />
        <input type="text" />
      </div>
      <div>
        <div class="group" id="main">
          <span>· 마이페이지</span>
        </div>
        <div class="sel" v-for="(array, i) in sideArrays" :key="i">
          <div @click="clickEvent(i, $event, array)" id="element">
            · {{ array }}
          </div>
        </div>
      </div>
    </div>
    <!-- --------------------------------------------------------------- -->
    <div v-if="myStep == '프로필 설정'">
      <MyPage />
    </div>
    <!-- --------------------------------------------------------------- -->
    <div v-if="myStep == '결제정보 페이지'">
      <div class="tests">
        <div class="header">
          <div class="service">
            <img class="icon" src="@/assets/icons/white/home.png" alt="logo" />
            <span class="title">마이페이지</span>
            <span class="my_topic">결제정보 설정</span>
          </div>
        </div>

        <div class="card-position-container">
          <!-- 1행 이용가이드 -->
          <div class="card-container1">
            <div class="top-info">
              결제시 사용할 카드정보를 등록해<br />
              간편한게 이용할 수 있습니다.
            </div>
          </div>

          <!-- 2행 카드번호 입력 -->
          <div class="card-container2">
            <div class="card-num-name">카드번호</div>
            <input
              class="card-input"
              type="number"
              oninput="if(value.length>11)value=value.slice(0,19)"
              onkeyup="cardnum"
            />
            <div class="card-num-info">16자리 숫자만 입력</div>
          </div>

          <!-- 3행 카드 이미지 표시 -->
          <div class="card-container3">
            <div class="bottom-smallfont">
              저장한 정보는 안전하게 암호화 되어<br />
              당사 DB에 보관됩니다.<br />
              보관근거-개인정보보호정책 및 이용약관
            </div>
            <img
              class="card-img"
              src="https://img1.kbcard.com/ST/img/cxc/kbcard/upload/img/product/04240_img.png"
              alt=""
            />
          </div>

          <!-- 취소,저장버튼 -->
          <footer class="card-footer">
            <button id="mypage_card-canc">취소</button>
            <button id="mypage_card-save" @click="this.$router.push('/')">
              저장
            </button>
          </footer>
        </div>
      </div>
    </div>
    <div v-if="myStep == '내가 쓴 게시글'">
      <div class="tests">
        <div class="header">
          <div class="service">
            <img
              class="icon"
              src="../../assets/icons/white/home.png"
              alt="logo"
            />
            <span class="title">마이페이지</span>
            <span class="my_topic">내가 쓴 게시글</span>
          </div>
        </div>
        <div class="post_section">
          <div class="post_line">
            <div class="post_place">작성위치</div>
            <div class="post_title">제목</div>
            <div class="post_like">추천수</div>
            <div class="post_comment">댓글수</div>
            <div class="post_clicks">조회수</div>
          </div>
          <hr class="lines" />
          <div class="post_line" v-for="(post, i) in post" :key="i">
            <div class="post_place">{{ post.position }}</div>
            <div class="post_title" style="cursor: pointer">
              {{ post.title }}
            </div>
            <div class="post_like">{{ post.prefer }}</div>
            <div class="post_comment">{{ post.comment }}</div>
            <div class="post_clicks">{{ post.look }}</div>
          </div>
        </div>
      </div>
    </div>
    <!-- --------------------------------------------------------------- -->
    <div v-if="myStep == '작성 리뷰 관리'">
      <div class="tests">
        <div class="header">
          <div class="service">
            <img
              class="icon"
              src="../../assets/icons/white/home.png"
              alt="logo"
            />
            <span class="title">마이페이지</span>
            <span class="my_topic">작성 리뷰 관리</span>
          </div>
        </div>
        <div class="review_section">
          <div class="work_list" v-for="(review, i) in reviews" :key="i">
            <div class="img_box"></div>
            <img class="list_img" :src="`${review.img}`" />
            <div class="work_list_con">
              <div class="list_span">
                <span class="list_title">{{ review.title }}</span>
                <span class="list_team"
                  >{{ review.producer }} / {{ review.team }}</span
                >
                <span class="list_content">{{ review.content }}</span>
              </div>
            </div>
            <button class="review_edit">리뷰수정</button>
          </div>
        </div>
      </div>
    </div>
    <!-- --------------------------------------------------------------- -->
    <div v-if="myStep == '선호 / 비선호 설정'" @save="myStep = '프로필 설정'">
      <Prefer />
    </div>
    <!-- --------------------------------------------------------------- -->
    <div v-if="myStep == '알림 설정'">
      <div class="tests">
        <div class="header">
          <div class="service">
            <img class="icon" src="@/assets/icons/white/home.png" alt="logo" />
            <span class="title">마이페이지</span>
            <span class="my_topic">알림 설정</span>
          </div>
        </div>

        <div class="alarm-section">
          <div v-for="(alarm, i) in alarmdata" :key="i">
            <div class="alarm-flex">
              <input class="alarm-check" type="checkbox" />
              <span class="cont-title">{{ alarmdata[i].title }}</span
              ><br />
            </div>
            <span class="cont-info">{{ alarmdata[i].content }}</span>
          </div>
        </div>

        <footer class="button-position">
          <button id="mypage_alarm-canc">취소</button>
          <button id="mypage_alarm-save" @click="routerPush('/')">저장</button>
        </footer>
      </div>
    </div>
    <!-- --------------------------------------------------------------- -->
    <div v-if="myStep == '회원 탈퇴'">
      <MyWithdrawal @myMain="myStep = '프로필 설정'" />
    </div>
    <div class="Temp_LogoutButton" @click="logout()">
      <button class="mypage_logout">로그아웃</button>
    </div>
  </div>
</template>

<script>
import axios from "../../axios";
import MyPage from "../mypage/MyPageMain";
// import MyCard from "../mypage/MyCard";
// import MyPost from "../mypage/MyPost";
// import Myreview from "../mypage/Myreview";
import Prefer from "../mypage/Prefer";
// import MyAlarm from "../mypage/MyAlarm";
import MyWithdrawal from "../mypage/withdrawal/MyWithdrawal";
export default {
  name: "MypageSide",
  data() {
    return {
      myStep: "프로필 설정",
      sideArrays: [
        "프로필 설정",
        "결제정보 페이지",
        "내가 쓴 게시글",
        "작성 리뷰 관리",
        "선호 / 비선호 설정",
        "알림 설정",
        "회원 탈퇴",
      ],
      clickNum: 0,
    };
  },
  mounted() {
    // 기본 강조 효과
    let id = document.querySelectorAll("#element");
    id[this.clickNum].style.backgroundColor = "#2872f9";
  },
  methods: {
    clickEvent(index, event, array) {
      // 강조효과 및 메인 화면 변경
      this.myStep = array;
      let id = document.querySelectorAll("#element");
      event.target.style.backgroundColor = "#2872f9";
      if (this.clickNum != null) {
        if (this.clickNum != index) {
          id[this.clickNum].style.backgroundColor = "#2c2c2c";
        }
      }
      this.clickNum = index;
    },

    logout() {
      axios.get("/api/auth/logout").then((result) => {
        if (result.data == "ok") {
          this.$store.commit("userLogin", null);
          this.$router.push("/");
        } else {
          this.$store.commit("gModalOn", {
            msg: "ERR : 로그아웃 실패",
            size: "normal",
          });
        }
      });
    },
  },
  components: {
    MyPage,
    // MyCard,
    // MyPost,
    // Myreview,
    Prefer,
    // MyAlarm,
    MyWithdrawal,
  },
};
</script>

<style>
.sideBar {
  font-size: 1.2em;
  display: flex;
  flex-direction: column;
  padding: 50px 10px 0 10px;
  background: #2c2c2c;
  width: 250px;
  height: 100vh;
  position: fixed;
  top: 0px;
  left: 140px;
}
.group {
  cursor: pointer;
}
/* -------------------------------------------------------------------- */
.sel div {
  width: 90%;
  height: 40px;
  color: white;
  padding: 5px 10px 5px 20px;
  text-align: left;
  margin: 10px 0 0 20px;
  border-radius: 30px;
  font-weight: 600;
  font-size: 1em;
  cursor: pointer;
}

.Temp_LogoutButton {
  position: absolute;
  left: 160px;
  top: 90%;
}

.mypage_logout {
  width: 100px;
  height: 50px;
  border-radius: 10px;
  background: #2872f9;
  color: white;
}
</style>