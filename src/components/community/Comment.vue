<template>
  <div class="tests">
    <header class="header">
      <div class="service">
        <img
          class="icon"
          src="@/assets/icons/white/bubble_chat.png"
          alt="logo"
        />
        <span class="title">커뮤니티</span>
        <span class="topic">TOPIC · 리뷰 & 추천</span>
      </div>
    </header>
    <section class="section">
      <div class="editer_frame">
        <div class="editer">
          <div class="editer_flex">
            <div class="inp"><span>123</span></div>
          </div>
          <div class="content_frame">
            <div class="content">
              <div class="content_text"></div>
            </div>
            <div class="content_vote">
              <div class="vote_position">
                <button class="vote_up">추천</button>
                <button class="vote_down">비추천</button>
              </div>
            </div>
          </div>
          <div class="comment_frame">
            <div class="comment_label">
              <span style="color: white; font-size: 25px">Comment (2)</span>
            </div>
            <div class="">
              <textarea class="comment_input"></textarea>
            </div>
            <div class="btn_area">
              <button class="btn_blue1">작성하기</button>
            </div>

            <div class="comment_list">
              <div class="profile"></div>
              <div class="comment_content">내용</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <footer class="footer">
      <div class="btn_area2">
        <button class="btn_blue2">목록으로</button>
      </div>
    </footer>
  </div>
</template>

<script>
export default {};
</script>

<style>
.content_text {
  position: relative;
  width: 100%;
  height: 80%;
  padding: 5px;
  overflow: hidden;
}
.content_vote {
  margin-top: 50px;
  position: relative;
  width: 98%;
  height: 50px;
  left: 50%;
  top: -20px;
  border-radius: 0px 0px 14px 14px;
  transform: translate(-50%);
}
.comment_frame {
  position: relative;
  width: 98%;
  margin: 20px 1% 0px 1%;
}
.content_frame {
  background: #5e5e5e;
  border-radius: 14px;
  width: 98%;
  margin: 0px 1% 0px 1%;
}
.vote_position {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.vote_up {
  font-weight: 500;
  width: 130px;
  height: 50px;
  background-color: #2872f9;
  border: none;
  color: white;
  text-align: center;
  text-decoration: none;
  font-size: 25px;
  border-radius: 12px;
  margin: 10px;
  display: inline-block;
}
.vote_down {
  font-weight: 500;
  width: 130px;
  height: 50px;
  background-color: red;
  border: none;
  color: white;
  text-align: center;
  text-decoration: none;
  font-size: 25px;
  border-radius: 12px;
  margin: 10px;
  display: inline-block;
}

.editer {
  position: relative;
  width: 100%;
  height: 100%;
  /* bottom:10px; */
  border-radius: 12px;
}
.editer_flex {
  transform: translatey(15px);
  width: 98%;
  justify-content: space-between;
  margin: 0px 1% 0px 1%;
}
.editer_topic {
  font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto,
    "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR",
    "Malgun Gothic", sans-serif;
  font-weight: 500;
  overflow: hidden;
  height: 33px;
  flex: 0.58;
  background-color: #2872f9;
  border: none;
  color: white;
  text-align: center;
  text-decoration: none;
  font-size: 1em;
  border-radius: 30px;
  cursor: pointer;
  margin-right: 3px;
}
.editer_topic:hover {
  opacity: 0.8;
}
.editer_frame {
  width: 98%;
  border-radius: 15px;
  margin: 0px 1% 10px 1%;
  background-color: #262626;
  padding-bottom: 20px;
}
.content {
  display: block;
  position: relative;
  width: 98%;
  min-height: 100px;
  border-radius: 14px;
  color: white;
  z-index: 1;
  margin: 30px 1% 0px 1%;
}
.inp {
  font-size: 1.2em;
  outline: none;
  display: block;
  /* flex:1; */
  height: 60px;
  background-color: #5e5e5e;
  border-radius: 30px;
  color: white;
  z-index: 1;
  border: none;
  padding-left: 2px;
}

.footer {
  position: absolute;
}
.btn_area {
  /* background-color:white; */
  position: relative;
  width: 100%;
  height: 30px;
  margin-top: 10px;
  margin-bottom: 10px;
}

.btn_blue1 {
  font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto,
    "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR",
    "Malgun Gothic", sans-serif;
  font-weight: 500;
  position: absolute;
  right: 0;
  width: 100px;
  height: 30px;
  background-color: #2872f9;
  border: none;
  color: white;
  text-align: center;
  text-decoration: none;
  font-size: 14px;
  border-radius: 12px;
  cursor: pointer;
}
.btn_blue1:hover {
  opacity: 0.8;
}

::-webkit-scrollbar {
  display: none;
}
.comment_input {
  font-size: 1.2em;
  outline: none;
  display: block;
  border-radius: 20px;
  height: 80px;
  background-color: #5e5e5e;
  width: 100%;
  color: white;
  border: none;
  padding-left: 10px;
  resize: none;
}
.comment_list {
  display: flex;
}
.profile {
  border-radius: 20px;
  background-color: #5e5e5e;
  width: 70px;
  color: white;
  border: none;
  margin-right: 15px;
}
.comment_content {
  border-radius: 20px;
  height: 70px;
  background-color: #5e5e5e;
  flex: 1;
  color: white;
  border: none;
}
.btn_blue2 {
  font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto,
    "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR",
    "Malgun Gothic", sans-serif;
  font-weight: 500;
  /* position: absolute; */
  width: 100px;
  height: 30px;
  background-color: #2872f9;
  border: none;
  color: white;
  text-align: center;
  text-decoration: none;
  font-size: 14px;
  border-radius: 12px;
  cursor: pointer;
  /* margin:7px 5px 7px 5px; */
}
.btn_blue2:hover {
  opacity: 0.8;
}

.btn_area2 {
  /* margin: 0px 1% 0px 1%;  */
  background-color: white;
  /* position: relative; */
  /* width:98%; */
  /* height: 30px; */
  /* margin-top: 10px;
    margin-bottom: 10px; */
}
</style>