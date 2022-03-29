<template>
  <div class="tests">
      <div><ReviewModal v-if="openmodal == true" @close="openmodal = false"></ReviewModal></div>
    <div class="header">
      <div class="service">
        <img class="icon" src="@/assets/icons/white/bubble_chat.png" alt="logo" />
        <span class="title">커뮤니티</span>
        <span class="topic">TOPIC · 리뷰 & 추천</span>
      </div>
    </div>
    <section class="section">
        <div class="editer">
            <div class="editer_flex">
                <button class="editer_topic" @click="openmodal = true">작품선택</button>
                <input id="inp" type="text">
                <div class="str_back">
                    <span class="str_first">★★★★★
                        <span :style="str_draw">★★★★★</span>
                        <input type="range" class="str_range" @input="draw(value)" v-model="value" step="1" min="0" max="10">
                    </span>
                </div>
            </div>
            <span style="display:none">{{count}}</span>
            <div class="content">
                <QuillEditor theme="snow"/>
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
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css';
import ReviewModal from '../components/ReviewModal'

export default {
    watch: {
        value(val) {
            this.count = val * 0.5;
        }
    },
    data() {
        return{
            openmodal: false,
            count: 0, 
            value : 1,
            str_draw: {
                position: 'absolute',
                color: '#2872f9',
                left: 0,
                width: 0,
                overflow: 'hidden',
                '-webkit-text-stroke-width':'1.2px',
                '-webkit-text-stork-color':'#2872f9'
            }
        }
    },
    methods : {
        draw(value){
            this.str_draw.width = value*10 + '%';
        }

    },
    components: {
    QuillEditor,
    ReviewModal
    }

}
</script>

<style>
.editer {
    position: relative;
    width: 100%;
    height: calc(100vh - 180px);
    background-color: #262626;
    bottom:10px;
    border-radius: 12px;
}
.editer_flex{
    transform: translatey(15px);
    display: flex;
    width:98%;
    justify-content: space-between;
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
    display: block;
    width: 98%; 
    height: calc(100vh - 260px);
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
    flex:4;
    height: 33px;
    background-color: #5e5e5e;
    border-radius: 30px;
    color:white;
    border:none;
    margin-left:10px;
    margin-right:10px;
}
.str_back{
    padding:1px;
    flex:0.6;
    display: flex;
    height:33px;
    background-color: #5e5e5e;
    border-radius: 30px;
    color:white;
    border:none;
    margin-left: 3px; 
    justify-content: center;
}
.str_first {
    border:none;
    position:relative;
    font-size: 1.8em;
    color: #ddd;
    bottom: 0px;
    margin-left:2px;
    margin-right:2px;
    }

.str_range {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 10px;
    opacity: 0;
    cursor: pointer;

}

.footer {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);

}

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