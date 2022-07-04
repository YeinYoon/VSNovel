<template>
  <div class="FullView">
    <div class="admin_background">
        <div class="admin_header">
            <div class="admin_main_btn" @click="$router.go(-1)">메인으로</div>
            <div class="admin_title">VSN ADMIN PANEL</div>
            <div class="admin_info">
                <span>관리자 {{$store.state.userNickname}} 님 환영합니다.</span>
            </div>
        </div>
        <div class="admin_hr"/>
        <div class="admin_section">
            <div class="admin_panel_list">
                <div :class="unit" @click="click_btn('unit')">· 회원 관리</div>
                <div :class="post" @click="click_btn('post')">· 전체 게시글 조회</div>
                <div :class="novel" @click="click_btn('novel')">· 작품 관리</div>
                <div :class="banner" @click="click_btn('banner')">· 배너 관리</div>
            </div>
            <div class="admin_content">
                <!-- 회원관리 -->
                <div class="admin_unit" v-if="btn_click == 'unit'">
                    <div class="admin_unit_title">
                        <span>ID</span>
                        <span>NICKNAME</span>
                        <span>가입일</span>
                        <span>최근 로그인</span>
                        <span>관리메뉴</span>
                    </div>
                    <!-- 반복문 -->
                    <div class="admin_unit_list">
                        <div>ID</div>
                        <div>NICKNAME</div>
                        <div>가입일</div>
                        <div>최근 로그인</div>
                        <div>
                            <div class="block">차단</div>
                            <div class="delete">삭제</div>
                        </div>
                    </div>
                </div>
                <!-- 전체 게시글 조회 -->
                <div class="admin_post" v-if="btn_click == 'post'">
                    <div class="admin_post_title">
                        <span>게시판</span>
                        <span>제목</span>
                        <span>작성자</span>
                        <span>작성일자</span>
                        <span>관리 메뉴</span>
                    </div>
                    <!-- 반복문 -->
                    <div class="admin_post_list">
                        <div>ID</div>
                        <div>NICKNAME</div>
                        <div>가입일</div>
                        <div>최근 로그인</div>
                        <div>
                            <div class="block">차단</div>
                            <div class="delete">삭제</div>
                        </div>
                    </div>
                </div>
                <!-- 작품 관리 -->
                <div class="admin_novel" v-if="btn_click == 'novel'">
                    <div class="admin_novel_title">
                        <span>작품명</span>
                        <span>PJCODE</span>
                        <span>NOVEL CODE</span>
                        <span>최근업로드</span>
                        <span>판매량</span>
                        <span>관리 메뉴</span>
                    </div>
                    <!-- 반복문 -->
                    <div class="admin_novel_list">
                        <div>작품명</div>
                        <div>PJCODE</div>
                        <div>NOVEL CODE</div>
                        <div>최근업로드</div>
                        <div>판매량</div>
                        <div>
                            <div class="block">차단</div>
                            <div class="delete">삭제</div>
                        </div>
                    </div>
                </div>
                <!-- 배너관리 -->
                <div class="admin_banner" v-if="btn_click == 'banner'">
                    <div class="admin_banner_title">
                        <span>종류</span>
                        <span>이미지 경로</span>
                        <span>NOVEL CODE</span>
                        <span>POST CODE</span>
                        <span>게시일자</span>
                        <span>관리 메뉴</span>
                    </div>
                    <!-- 반복문 -->
                    <div class="admin_banner_list">
                        <div>종류</div>
                        <div>이미지 경로</div>
                        <div>NOVEL CODE</div>
                        <div>POST CODE</div>
                        <div>게시일자</div>
                        <div>
                            <div class="delete">삭제</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    name:'admin',
    data(){
        return{
            unit: 'bold',
            post : 'default',
            novel: 'default',
            banner : 'default',

            //눌렀던 값
            btn_click : 'unit'
        }
    },
    methods:{
        click_btn(btn){
            // 과거에 눌렀던 값
            switch(this.btn_click) {
                case 'unit' : 
                    this.unit = 'default';
                    break;
                case 'post' : 
                    this.post = 'default';
                    break;
                case 'novel' : 
                    this.novel = 'default';
                    break;
                case 'banner' : 
                    this.banner = 'default';
                    break;
            }
            // 현재 누른 값
            switch(btn) {
                case 'unit' : 
                    this.unit = 'bold';
                    this.btn_click = 'unit';
                    break;
                case 'post' : 
                    this.post = 'bold';
                    this.btn_click = 'post';
                    break;
                case 'novel' : 
                    this.novel = 'bold';
                    this.btn_click = 'novel';
                    break;
                case 'banner' : 
                    this.banner = 'bold';
                    this.btn_click = 'banner';
                    break;
            }
        }
    }
}
</script>

<style>
.admin_background{
    width: 100%;
    height: 100%;
    background-color: #353535;
    color: white;
}
.admin_main_btn{
    color: white;
    background-color: #2872f9;
    width: 100px;
    height: 30px;
    text-align: center;
    border-radius: 20px;
    line-height: 30px;
    position: relative;
    left: 20px;
    top: 20px;
}
.admin_title{
    font-size: 2.2em;
    text-align: center;
    font-weight: 500;
}
.admin_info{
  position: absolute;
  width: 200px;
  top: 20px;
  right: 20px;
  background: #484848;
  color: white;
  height: 50px;
  border-radius: 20px;
  box-shadow: 0 0 10px 1px #2e2e2e;
}
.admin_info span{
    display: inline-block;
    text-align: center;
    width: 100%;
    line-height: 50px;
}
.admin_hr{
    width: calc(100% - 40px);
    margin: auto;
    height: 5px;
    background-color: #484848;
    position: relative;
    top: 20px;
}
.admin_section{
    width: 100%;
    height: calc( 100% - 150px);
    padding: 20px;
    position: relative;
    top: 20px;
}
.admin_panel_list{
    display: inline-block;
    position: absolute;
    font-size: 1.2em;
    width: 20%;
    height: 100%;
    text-align: left;
    padding: 20px 0 0 0;
}
.admin_panel_list div{
    margin: 30px;
    width: calc(100% - 40px);
    height: 40px;
    line-height: 40px;
    padding: 0 0 0 10px;
}
/* 강조효과 주기 전 */
.default{
    background-color: #353535;
}
/* 강조효과 주는 것 */
.bold{
    background-color: #2872f9;
    border-radius: 20px;
    width: 200px;
}
.admin_content{
    border-radius: 20px;
    display: inline-block;
    position: absolute;
    left: calc(20% + 20px);
    font-size: 1.2em;
    width: calc( 80% - 40px );
    height: 100%;
    background-color: #484848;
    padding: 20px;
}
/* 제목들 */
.admin_unit_title, .admin_post_title,
.admin_novel_title, .admin_banner_title{
    width: 100%;
    display: flex;
}
.admin_unit_title span, .admin_post_title span,
.admin_novel_title span,.admin_banner_title span{
    flex: 1;
    text-align: center;
}
/* 반복문 리스트 */
.admin_unit_list, .admin_post_list, 
.admin_novel_list, .admin_banner_list{
    width: 100%;
    display: flex;
    height: 40px;
    line-height: 40px;
}
.admin_unit_list div, .admin_post_list div, 
.admin_novel_list div, .admin_banner_list div{
    flex: 1;
    text-align: center;
}
.block, .delete{
    display: inline-block;
    background-color: #2e2e2e;
    border-radius: 20px;
    width: 65px;
    height: 30px;
    line-height: 30px;
    margin: 0 2px;
}
</style>