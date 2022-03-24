<template>
<div class="tests">
    <div class="header">
      <div class="service">
        <img class="icon" src="../../assets/icons/white/home.png" alt="logo" />
        <span class="title">라이브러리</span>
      </div>
    </div>
  <section>
    <div class="header">
      <img src="../../assets/icons/white/library.png" class="icon">
      <span class="service_title">라이브러리</span>
    </div>
    <div class="work_list" v-for="(list, i) in lists" :key="i">
            <div class="img_box"></div>
            <img class="list_img" :src="`${list.img}`"/>
            <div class="work_list_con">
                <div class="list_span">
                    <span class="list_title">{{list.title}}</span>
                    <span class="list_team">{{list.producer}} / {{list.team}}</span>
                    <span class="list_content">{{list.content}}</span>
                </div>
            </div>
            </div>
  </section>
</div>
</template>

<script>
// import list from '@/assets/gallerylist.js'

export default {
  data(){
    return{
    //   lists : list,
    };
  },
}
</script>

<style>
.lib_cate{
  position: fixed;
  top: 480px;
  left: 112px;
    margin-left: 40px;
    background-color: white;
    border: 1px solid gray;
    border-radius: 18px;
    display: inline-block;
    font: inherit;
    line-height: 1.5em;
    padding: 3px 47px 8px 47px;
    font-size: 20px;
    font-weight: bolder;
    text-align: left;
}
.img_box{
  position: absolute;
  transform: translate(20%,-30%);
  width: 100px;
  height: 150px;
  background: #6D6D6D;
}
.work_list{
  /* width: calc(50%); */
  background-color: #2a2a2a;
  margin: 50px 10px;
  border-radius: 20px;
  height: 125px;
  top: 150px;
  display: flex;
  flex-direction: row;
  position: relative;
    
}
.list_img{
    width: 100px;
    height: 140px;
    margin: 0 10px 0 20px;
    transform : translateY(-25%);
}
.list_span{
    display: flex;
    flex-direction: column;
    width: 100%;
}
.work_list_con{
    color: white;
    width: 70%;
}
.work_list_con::-webkit-scrollbar{
    display:none;
}
.list_title{
    font-size: 1.3em;
    padding-top: 5px;
}
.list_team{
    font-size: 0.9em;
}
.list_content{
    font-size: 0.7em;
    padding-top: 5px;
    height: 50px;
    width: 100%;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
}
  .lib_list-box{
    display: grid;
    margin-top: 8%;
    width: 1100px;
    height: 180px;
    border-radius: 15px;
    background-color: #2C2C2C;
    color: white;
    z-index: 10;
  }
  #lib_image{
    transform: translate(20%,-25%);
    top: 260px;
    left: 520px;
    width: 150px;
    height: 200px;
    background-color: #6D6D6D;
    z-index: 12;
  }
  #lib_title{
    position: flex;
    transform: translate(30%);
    grid-column: 40px;
    font-size: 30px;
    z-index: 12;
  }
  #lib_produce-team{
    display: absolute;
    left: 21%;
    font-size: 30px;
    z-index: 12;
  }
  #lib_con{
    display: absolute;
    left:21%;
    font-size: 15px;
    text-align: left;
    z-index: 12;
    width: 55%;
    height: 80px;
    white-space:nowrap;
    overflow: auto;
    text-overflow: ellipsis;
  }
</style>