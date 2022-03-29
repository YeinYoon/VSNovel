<template>
  <div class="tests">
    <div class="header">
      <div class="service">
        <img class="icon" src="@/assets/icons/white/home.png" alt="logo" />
        <span class="title">공지사항</span>
        <span class="topic">TOPIC · 전체</span>
      </div>
    </div>
            
    <section class="section">
        <div class="editer">
            <div class="editer_flex">
                <button class="editer_topic">말머리 선택</button>
                <input id="inp" type="text">
            </div>
            <div class="content">
                <!-- <QuillEditor theme="snow"/> -->
            </div>
            <div class="editer_info">
                주의! 당신은 현재 공지사항 게시판에서 작성중입니다.
                <br>강조로 발행 버튼을 누르면 '강조공지'로 상단에 우선 노출됩니다.
                <br>공지사항의 말머리를 선택하여 '해당 TOPIC' 에 맞게 작성하세요.
            </div>
            
        </div>

    </section>

    <footer class="footer">
        <button class="btn_red">강조로 발행</button>
        <button class="save">글쓰기</button>
        <button class="cancel">취소</button>
    </footer>
  </div>
</template>

<script>
// import { QuillEditor } from '@vueup/vue-quill'
// import '@vueup/vue-quill/dist/vue-quill.snow.css';

export default {
    components: {
    // QuillEditor
    }

}
</script>

<style>

body {
    margin: 0; padding: 0; height: 100%;
    background-color: #353535;
    
}
.icon {
    margin-top: 10px;
    width:35px; height:35px;
    display: inline-block;
    vertical-align: middle;
}
.title {
    margin-top: 10px;
    display: inline-block;
    vertical-align: middle;
    color: white;
    font-size: 2em;
}
#commu_title {
    margin-left: 10px;
}
.topic {
    position: relative;
    bottom: 7px;
    font-size: 1.2em;
    color: white;
}
.editer {
    position: relative;
    width: 100%;
    height: calc(100vh - 180px);
    background-color: #262626;
    bottom:10px;
    border-radius: 12px;
    display:table;
}
.editer_flex{
    transform: translatey(15px);
    display: flex;
    width:98%;
    margin: 0px 1% 0px 1%; 
}
.editer_topic {
    font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', sans-serif;
    font-weight: 500;
    overflow: hidden;
    height:33px;
    flex:0.58;
    background-color:#2872f9;
    border: none;
    color: white;
    text-align: center;
    text-decoration: none;
    font-size: 1em;
    border-radius: 30px;
    cursor: pointer;
    margin-right: 3px;
}
.editer_topic:hover {opacity:0.8;}
.content {
    display:block;
    width: 98%; 
    height: calc(100vh - 340px);
    background-color: #5e5e5e;
    border-radius: 14px;
    color:white;
    top:40px;
    margin: 25px 1% 0px 1%;
    overflow:scroll;
}
#inp {
    padding-left: 10px;
    padding-right: 10px;
    font-size:1.2em;
    outline: none;
    display: block;
    flex:6;
    height: 33px;
    background-color: #5e5e5e;
    border-radius: 30px;
    color:white;
    border:none;
    margin-left:10px;
}
.editer_info {
    color:white;
    width:98%;
    margin: 20px 1% 0px 1%;
}
.footer {
    position: absolute; 
    left: 50%;
    transform: translateX(-50%);

}
.btn_red {
    font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', sans-serif;
    font-weight: 500;
    top:5px;
    position: relative;
    width: 100px;
    height: 30px;
    background-color:rgb(255, 71, 71);
    border: none;
    color: white;
    text-align: center;
    text-decoration: none;
    font-size: 14px;
    border-radius: 12px;
    cursor: pointer;
    margin:7px 5px 7px 5px;

}
.btn_red:hover {opacity: 0.8;}
.save {
    font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', sans-serif;
    font-weight: 500;
    top:5px;
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
    margin:7px 5px 7px 5px;
}
.save:hover {opacity: 0.8;}

.cancel {
    font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', sans-serif;
    font-weight: 500;
    top:5px;
    position: relative;
    width: 100px;
    height: 30px;
    background-color:#5e5e5e;
    border: none;
    color: white;
    text-align: center;
    text-decoration: none;
    font-size: 14px;
    border-radius: 12px;
    cursor: pointer;
    margin:7px 5px 7px 5px;
}
.cancel:hover {opacity:0.8;}

::-webkit-scrollbar {
display: none;
}

.ql-toolbar.ql-snow{
    border-radius: 10px;
    background-color: #868686;
    border:none;
}
.ql-container.ql-snow{
    border: none;
    height: Calc(100% - 40px);
}
</style>