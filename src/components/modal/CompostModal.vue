<template>
  <div>
    
    <div v-bind:class="{ cafe_modal_frame_big: true }">
      
      <div class="comm_post_modal_inner">
          <div class="comm_post_modal_title_inner"><span class="comm_post_modal_title">선택한 게시물을...</span></div>
      </div>
      <!-- <div class="modal_content">내용 출력</div> -->
    <!--메세지를 출력하는 예제-->
      
      <!--모달을 닫는 버튼과 버튼내 메세지(확인, 취소 등등)-->
      <div class="comm_post_modal_btn_position">

        <!--선택한 포스트 출력-->
        <div class="comm_post_modal_cont_box">
          
          <div class="comm_post_modal_check" v-for="(p, i) in titleList" :key="i"><input type="checkbox"><span>{{p}}</span><br></div>
          
        </div>
            
        <button class="comm_post_modal_btn_remo">삭제</button>
        <button class="comm_post_modal_btn_canc" @click="$emit('close', postModal)">취소</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from '../../axios'
export default {
  data() {
    return{
      titleList:[],
      postModal:false
    }
  },
  created(){
    console.log(this.titleList)
  },
  props: {
    pcode: Object,
    ptitle: Object
  },
  async mounted(){
    console.log(this.pcode)
    const pcode =  {
      pcode:this.pcode
    }
      this.titleList = await axios.post('/api/community/communityModal',pcode)
      this.titleList = this.titleList.data;
    }
  }

</script>

<style>
.comm_post_modal_check > input[type="checkbox"]{
    position: relative;
    width: 20px;
    height: 20px;
    top: 4px;
}
.comm_post_modal_check > span{
    color: white;
    margin-left: 10px;
}
.comm_post_modal_cont_box{
    position:relative;
    bottom: 90px;
    right: 10px;
    width: 650px;
    height: 180px;
    background-color: #6a6a6a;
    border-radius: 20px;
    padding: 10px 20px;
    overflow: auto;
    text-overflow: ellipsis;
}
.comm_post_modal_title_inner{
    text-align:left;
}
.comm_post_modal_title{
    color:white;
    font-size: 1.3em;
}

.comm_post_modal_inner {
  color: white;
  position: fixed;
  width: 95%;
  margin: 0px 2.5% 0px 2.5%; 
  top: 5%; 
}
.comm_post_modal_btn_canc {
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
    left: 30%;
    bottom: 78px;
}
.comm_post_modal_btn_remo {
    font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', sans-serif;
    font-weight: 500;
    position: relative;
    width: 100px;
    height: 30px;
    background-color:#ff4c4c;
    border: none;
    color: white;
    text-align: center;
    text-decoration: none;
    font-size: 14px;
    border-radius: 12px;
    cursor: pointer;
    margin:5px 5px 5px 20px;
    left: 30%;
    bottom: 78px;
}
.comm_post_modal_btn_position {
  position:relative;
  width: 90%;
  margin: 0px 5% 0px 5%; 
  top: 85%;
  transform: translateY(-50%);
}
</style>