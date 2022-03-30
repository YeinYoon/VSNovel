<template>
  <div class="tests">
    <section class="section">
      <div class="editer">
        <div class="editer_flex">
          <input id="inp" type="text" />
        </div>
        <div class="content">
        </div>
      </div>
    </section>

    <footer class="footer">
      <button class="save">글쓰기</button>
      <button class="cancel">취소</button>
    </footer>
  </div>
</template>

<script>
export default {
  components: {
  },
};
</script>

<style>
.editer {
  position: relative;
  width: 100%;
  height: calc(100vh - 180px);
  background-color: #262626;
  bottom: 10px;
  border-radius: 12px;
}
.editer_flex {
  transform: translatey(15px);
  display: flex;
  width: 98%;
  margin: 0px 1% 0px 1%;
}
.content {
  display: block;
  width: 98%;
  height: calc(100vh - 260px);
  background-color: #5e5e5e;
  border-radius: 14px;
  color: white;
  top: 40px;
  margin: 25px 1% 0px 1%;
}
#inp {
  padding-left: 10px;
  padding-right: 10px;
  font-size: 1.2em;
  outline: none;
  display: block;
  flex: 1;
  height: 33px;
  background-color: #5e5e5e;
  border-radius: 30px;
  color: white;
  border: none;
}
.footer {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}
.save {
  font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto,
    "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR",
    "Malgun Gothic", sans-serif;
  font-weight: 500;
  top: 5px;
  position: relative;
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
  margin: 7px 5px 7px 5px;
}
.save:hover {
  opacity: 0.8;
}

.cancel {
  font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto,
    "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR",
    "Malgun Gothic", sans-serif;
  font-weight: 500;
  top: 5px;
  position: relative;
  width: 100px;
  height: 30px;
  background-color: #5e5e5e;
  border: none;
  color: white;
  text-align: center;
  text-decoration: none;
  font-size: 14px;
  border-radius: 12px;
  cursor: pointer;
  margin: 7px 5px 7px 5px;
}
.cancel:hover {
  opacity: 0.8;
}

::-webkit-scrollbar {
  display: none;
}

</style>