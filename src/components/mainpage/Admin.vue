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
                        <span>이메일</span>
                        <span>이름</span>
                        <span>관리 메뉴</span>
                    </div>
                    <!-- 반복문 -->
                    <div class="admin_unit_list" v-for="(unit,i) in unitList" :key="i">
                        <div>{{unit.USER_ID}}</div>
                        <div>{{unit.USER_NICKNAME}}</div>
                        <div>{{unit.USER_EMAIL}}</div>
                        <div>{{unit.USER_NAME}}</div>
                        <div>
                            <div class="delete" @click="delUnit(unit.USER_ID)">삭제</div>
                        </div>
                    </div>
                </div>
                <!-- 전체 게시글 조회 -->
                <div class="admin_post" v-if="btn_click == 'post'">
                    <div class="admin_post_title">
                        <span>ID</span>
                        <span>제목</span>
                        <span>작성자</span>
                        <span>작성일자</span>
                        <span>관리 메뉴</span>
                    </div>
                    <!-- 반복문 -->
                    <div class="admin_post_list" v-for="(post,i) in postList" :key="i">
                        <div>{{post.USER_ID}}</div>
                        <div>{{post.POST_TITLE}}</div>
                        <div>{{post.USER_NICKNAME}}</div>
                        <div>{{post.POST_ESTADATE.substring(0,10)}}</div>
                        <div>
                            <div class="delete" @click="delPost(post.POST_CODE)">삭제</div>
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
                    <div class="admin_novel_list" v-for="(novel,i) in novelList" :key="i">
                        <div>{{novel.NOVE_TITLE}}</div>
                        <div>{{novel.PROJ_CODE}}</div>
                        <div>{{novel.NOVE_CODE}}</div>
                        <div>{{novel.NOVE_UPDATE}}</div>
                        <div>{{novel.NOVE_BOUGHT}}</div>
                        <div>
                            <!-- <div class="block">차단</div> -->
                            <div class="delete" @click="delNovel(novel.NOVE_CODE)">삭제</div>
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
                        <span>관리 메뉴</span>
                    </div>
                    <!-- 반복문 -->
                    <div class="admin_banner_list" v-for="(banner,i) in bannerData" :key="i">
                        <div>
                            <span v-if="banner.BANN_STATUS == 'N'">소설</span>
                            <span v-if="banner.BANN_STATUS == 'E'">이벤트</span>
                        </div>
                        
                        <div style="overflow:hidden">{{banner.BANN_IMG}}</div>

                        <div v-if="banner.NOVE_CODE != null">
                            {{banner.NOVE_CODE}}
                        </div>
                        <div v-else>null</div>
                        
                        <div v-if="banner.POST_CODE != null">
                            {{banner.POST_CODE}}
                        </div>
                        <div v-else>null</div>

                        <div>
                            <div class="delete" @click="deleteBtn(i)">삭제</div>
                        </div>
                        
                    </div>
                    <!-- <div class="banner_add" @click="addBtn()">+</div> -->
                    <div class="banner_add" @click="modalOpen()">+</div>
                </div>
            </div>
        </div>
        <div v-if="modal">
            <AdminModal @modal="modalOpen()"/>
        </div>
    </div>
  </div>
</template>

<script>
import AdminModal from '../modal/AdminModal'
import axios from '../../axios.js'
export default {
    created() {
        this.getBannerData()
    },
    name:'admin',
    data(){
        return{
            unit: 'bold',
            post : 'default',
            novel: 'default',
            banner : 'default',

            //눌렀던 값
            btn_click : 'unit',

            bannerData : [],

            //db에서 불러온 값
            unitList: [],
            postList: [],
            novelList: [],

            // 모달 오픈
            modal : false,
        }
    },
    components:{
        AdminModal,
    },
    methods:{
        async click_btn(btn){
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

                    // 백 통신
                    this.unitList = await axios.get('/api/admin/allUnitList')
                    this.unitList = this.unitList.data;
                    break;
                case 'post' : 
                    this.post = 'bold';
                    this.btn_click = 'post';

                    // 백 통신
                    this.postList = await axios.get('/api/admin/allPostList')
                    this.postList = this.postList.data;
                    break;
                case 'novel' : 
                    this.novel = 'bold';
                    this.btn_click = 'novel';

                    // 백 통신
                    this.novelList = await axios.get('/api/admin/allNovelList')
                    this.novelList = this.novelList.data;
                    break;
                case 'banner' : 
                    this.banner = 'bold';
                    this.btn_click = 'banner';
                    break;
            }
        },
        async delUnit(unitData){
            const unitDatas = {
                unitId:unitData
            }
            await axios.post('/api/admin/delUnit', unitDatas)
            this.click_btn('unit')
        },
        async delPost(postData){
            const postDatas = {
                "postCd":postData
            }
            await axios.post('/api/admin/delPost', postDatas)
            this.click_btn('post')
        },
        async delNovel(novelData){
            const novelDatas = {
                "novelCd":novelData
            }
            await axios.post('/api/admin/delNovel', novelDatas)
            this.click_btn('novel')
        },

        getBannerData() {
            console.log('aaa');
            axios.get('/api/main/getBanner')
            .then((result) => {
                if(result.data == "err") {
                    console.log("fail")
                } else {
                    this.bannerData = result.data
                    console.log(this.bannerData);
                }
            })
        },

        deleteBtn(i) {
            var bannData = {
                BANN_CODE : this.bannerData[i].BANN_CODE,
            }
            axios.post('/api/main/deleteBanner', bannData)
            .then((result) => {
                if(result.data == "err") {
                    console.log("fail")
                } else {
                    console.log(result)
                    this.getBannerData();
                }
            })
        },

        // addBtn() {
        //     axios.post('/api/main/addBanner')
        //     .then((result) => {
        //         if(result.data == "err") {
        //             console.log("fail")
        //         } else {
        //             console.log(result.data)
        //         }
        //     })

        modalOpen(){
            if(this.modal) 
                this.modal = false;
            else this.modal = true;

        }
    },
    async mounted(){
        this.unitList = await axios.get('/api/admin/allUnitList')
        this.unitList = this.unitList.data;
    },
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
    overflow: auto;
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
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
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
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
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
.delete{cursor: pointer;}
.banner_add{
    text-align: center;
    border-radius: 20px;
    width: 100%;
    background-color: #2872f9;
    height: 30px;
    line-height: 26px;
    font-size: 1.5em;
    font-weight: 900;
}
</style>