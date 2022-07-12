<template>
<CompostModal v-if="postModal == true" @close="closePostModal" :pcode="checkList" :ptitle="checkList"></CompostModal>
<ConfirmModal ref="confirmModal"></ConfirmModal>
    <div v-if="$store.state.currentService == 'C'">
      <div class="RouterView">
        <div class="header">
          <div class="service">
            <img
              class="icon"
              src="@/assets/icons/white/bubble_chat.png"
              alt="logo"
            />
            <span class="title">커뮤니티</span>
            <span class="topic" v-if="communityService == 'F'">TOPIC · 자유</span>
            <span class="topic" v-if="communityService == 'W'">TOPIC · 작가</span>
            <span class="topic" v-if="communityService == 'T'">TOPIC · 팀원모집</span>
            <span class="topic" v-if="communityService == 'R'">TOPIC · 리뷰 & 추천</span>
          </div>
        </div>

        <!-- 글목록 -->
        <div v-if="viewState == 0">
          <div class="team_box">
            <!-- 상단 버튼 프레임 -->
            <div class="commu_btn_area">
              <!-- 관리자 계정만 노출 -->
              <div class="commu_btn_red" @click="openPostModal" v-if="$store.state.userId == 'admin'">
                <span class="commu_btn_manage">관리</span>
              </div>
              <!-- 글쓰기 버튼 -->
              <div class="commu_btn_blue">
                <span class="commu_btn_write" @click="loginCheck()">글쓰기</span>
              </div>
            </div>
            <!-- 상단 버튼 프레임 -->

            <!-- 글 목록 프레임 -->
            <section class="commu_section">
              <div class="commu_post" v-for="(p, i) in postList" :key="i"> <!-- (반복) 글 DB 데이터 반복문 -->
                
                <!-- 글 썸네일 -->
                <img class="commu_thumb" src="@/assets/imgs/noimage.png" @error="'error'" v-if="communityService == 'R'" @click="reviewPostClick(1, p.SCOR_CODE)"/>
                <img class="commu_thumb" src="@/assets/imgs/noimage.png" @error="'error'" v-else @click="postClick(1, p.POST_CODE)"/>
                <!-- <img class="commu_thumb" src="@/assets/imgs/noimage.png" @error="'error'" v-if="p.titleImg == ''"/> -->
                <!-- <img class="commu_thumb" :src="p.titleImg" @error="'error'" v-else/> -->
                
                <!-- 글 정보 및 제목, 검은 블록 -->
                <div class="commu_back">
                  <!-- 글제목 -->
          
                  <div class="commu_back_title" v-if="communityService == 'R'">{{ p.SCOR_TITLE }}</div>
                  <div class="commu_back_title" v-else>{{ p.POST_TITLE }}</div>

                  
                  <div class="commu_back_check"><input type="checkbox" v-model="p.check" value="i" ></div>
                  <!-- (조건) 리뷰 게시판일 경우 별점 -->
                  <!-- <span v-if="$store.state.communityService=='R'" class="commu_str">★★★★★
                    <span class="commu_str_draw">★★★★★</span> 
                  </span> -->

                  <!-- 글정보 -->
                  <div class="commu_back_info" v-if="communityService == 'R'">
                    {{ p.USER_NICKNAME }} | {{p.SCOR_ESTADATE}} 
                  </div>
                  <div class="commu_back_info" v-else>
                    {{ p.USER_NICKNAME }} | {{p.POST_ESTADATE}} 
                  </div>
                </div>
                <!-- 글 정보 및 제목, 검은 블록 -->
              </div>
              <!-- (반복) 글 DB 데이터 반복문 end -->
            </section>
            <!-- 글 목록 프레임 end -->
          </div>
        </div>


<!---------------------------->
<!---------------------------->
<!---------------------------->


        <!-- 본문조회 -->
        <div v-if="viewState == 1">
          <div class="postview_wrap">
            <div class="postview_section">
              <div class="postview_title">

                <!-- 제목 -->
                <div class="postview">
                  <span class="postview_title_span">{{title}}</span>
                </div>
                
                <div class="topic_postview_btn_info">
                  
                  <div class="topic_postview_thumbimg">
                    <!-- 작성자 프로필 이미지 -->
                    <img :src="writerProfileImg">
                  </div>

                  <div>
                    
                    <div>
                      <!-- 작성일자 -->
                      <span>작성일자 : {{createdDate}}</span>
                    </div>
                    
                    <div class="topic_postview_detail_info">
                      
                      <div>
                        <!-- 작성자 -->
                        <span>{{writerNickname}}</span>
                      </div>

                      <!-- 조회수, 댓글수, 추천수, 비추천수 -->
                      <div class="topic_postview_detail_frame">
                        <!-- <div class="topic_postview_detail"><span>{{view}}</span></div>
                        <div class="topic_postview_detail"><span>댓글수</span></div> -->
                      </div>

                      <!-- 수정, 삭제 버튼 -->
                      <div class="topic_postview_btn_area" v-if="writerId == $store.state.userId">
                        <div class="topic_postview_btn_red" @click="getPreContent()"><img src="@/assets/icons/white/editing.png"></div>
                        <div class="topic_postview_btn_blue" @click="deletePost()"><img src="@/assets/icons/white/trash_white.png"></div>
                      </div>
                    </div>
                  </div>
                  

                </div>

              </div>
              <!-- 본문조회 상단부 끝 -->

              <!-- 내용영역 -->
              <div class="postview_frame">

                <!-- 본문 -->
                <div class="postview_content" v-if="this.communityService == 'R'">
                  <span v-html="content"></span>
                </div>
                <div class="postview_content" v-else>
                  <span v-html="content"></span>
                </div>
              </div>

              <div v-if="this.communityService!='R'">
                <div class="comment_bar"></div>

                <!-- 댓글 갯수 Comment() -->
                <div class="postview_comment">
                  <span>Comment</span>
                </div>

                <!-- 댓글 입력 -->
                <div class="postview_comment_area">
                  <!-- 여기에 작성한 글을 해당 게시글의 댓글에 등록 -->
                  <textarea v-model="inputComment"></textarea> 
                  <div class="postview_comment_register"><span @click="commenting()">작성하기</span></div> <!-- 댓글 등록 버튼 -->
                </div>

                <!-- 댓글 목록 -->
                <div class="postview_view_area" v-for="(c, i) in commentList" :key="i"> <!-- (반복) 댓글내용들 -->
                  <div><img class="postview_img" :src="c.userImg"></div>
                  <div class="postview_view_content">
                    <span class="postview_view_nickname">{{c.USER_NICKNAME}}</span>
                    <p class="postview_view_info">{{c.COMM_CONTENT}}</p>
                    <span class="postview_view_estadate">{{c.COMM_ESTADATE}}</span>
                  </div>
                </div>
              </div>
              

            </div>

            <!-- 목록으로 버튼 -->
            <div class="postview_btn_area">
              <div class="postview_btn_list" @click="this.viewState = 0">
                <span>목록으로</span>
              </div>
            </div>
          </div>
        </div>



<!---------------------------->
<!---------------------------->
<!---------------------------->
        <!-- 작품선택 모달창 -->
        <div v-if="novelchoice == true">
              <!--모달 내 메세지 및 컨텐츠인 modal_inner, 여기에 단순히 메세지만을 표시할수도 
            작은 컴포넌트를 삽입할수도 있따.-->
            <div class="commu_novel_modal_opacity"></div>
              <div class="commu_novel_modal">
                <div class="commu_novel_modal_cancel" @click="novelCancel()"><img src="@/assets/icons/white/close.png"></div>
                <div class="commu_novel_modal_search">
                  <div class="commu_novel_modal_img"><img src="@/assets/icons/magnifier.png"></div>
                  <input type="text" :value="novelSearch" @input="novelSearch=$event.target.value">
                </div>
                <div class="commu_novel_modal_text"><span>작품선택</span></div>
                <div class="commu_novel_modal_article_frame" v-if="novelIsON == 1 && novelSearch != ''">
                    <div>
                      <div class="commu_novel_modal_articles" v-for="(n, i) in novelSearchList" :key="i">
                        <img :src="n.NOVE_PATH" alt="" @click="novelClick(i)">
                      </div>
                    </div>
                </div>
                <div class="commu_novel_modal_no" v-if="novelIsON == 0"><span>작품이 존재하지 않습니다</span></div>
            </div>
        </div>


        <div v-if="viewState == 2">
          <div class="commu_write_section">

            <!-- 리뷰게시판 -->
            <div class="commu_review_frame" v-if='this.communityService == "R"'>
              <div class="commu_novel_choice" @click="novelchoice = true">
                <!-- <input type="text" placeholder="여기에 작품명 입력"> -->
                <div v-if="novelPostIsON == false"><span>작품선택</span></div>
                <div v-if="novelPostIsON == true"><span>{{novelCheckPost}}</span></div>
              </div>
    
              <div class="commu_review_title" v-if="editMode == false"><input type="text" v-model="inputTitle"/></div>
              <div class="commu_review_title" v-if='editMode == true'><input type="text" v-model="inputTitle"/></div>

              <!-- 리뷰 수정 상단부 (제목, 별점) -->
              <div class="commu_str_back" v-if='editMode == true && this.communityService == "R"'>
                <select class="commu_str_temp_sel" v-model="selectScore">
                  <option class="commu_str_temp_star1" value="1">★</option>
                  <option class="commu_str_temp_star2" value="2">★★</option>
                  <option class="commu_str_temp_star3" value="3">★★★</option>
                  <option class="commu_str_temp_star4" value="4">★★★★</option>
                  <option class="commu_str_temp_star5" value="5">★★★★★</option>
                </select>
              </div>

                <!-- 리뷰 작성 상단부 -->
              <div class="commu_str_back" v-else-if='this.communityService == "R"'>
                <select class="commu_str_temp_sel" v-model="selectScore">
                  <option class="commu_str_temp_star1" value="1">★</option>
                  <option class="commu_str_temp_star2" value="2">★★</option>
                  <option class="commu_str_temp_star3" value="3">★★★</option>
                  <option class="commu_str_temp_star4" value="4">★★★★</option>
                  <option class="commu_str_temp_star5" value="5">★★★★★</option>
                </select>
              </div>
            </div>

            <!-- 글쓰기 자유/작가/팀원모집 상단부 (제목) -->
            <div class="commu_write_title" v-if="editMode==false && communityService!= 'R' ">
              <input type="text" v-model="inputTitle"/>
            </div>

            <!-- 수정 자유/작가/팀원모집 상단부 (제목) -->
            <div class="commu_write_title" v-if="editMode==true && communityService!= 'R' ">
              <input type="text" v-model="inputTitle"/>
            </div>
            <!-- 내용 입력창 -->
            <div class="commu_write_content">
              <Editor @commitContent="editorContent" ref="editor"/>
            </div>

          </div>
          <!-- 게시물 폼 끝 -->
          
          <!-- 게시물 폼 글쓰기 및 수정버튼 -->
          <div class="write_btn_area">
            <div class="write_btn" @click="registerpost">
              <span v-if="editMode==false && communityService == 'R'" @click="reviewPosting()">글쓰기</span>
              <span v-if="editMode==false && communityService != 'R'" @click="posting()">글쓰기</span>
              <span v-if="editMode==true" @click="editPost()">수정</span>
            </div>
            <div class="write_cancle_btn" @click="editCancel()"><span>취소</span></div>
          </div>
        </div>

      </div>    
    </div>
    <!-- 커뮤니티 끝 -->


    <!-- 빌리지 시작 -->
    <div v-if="$store.state.currentService == 'V'">
      <div class="RouterView">
        123
      </div>
    </div>
</template>

<script>
import Editor from '@/components/community/topic/Editor'
import storage from '../../aws'
import axios from '../../axios'
import ConfirmModal from '../modal/ConfirmModal.vue'
import CompostModal from '../modal/CompostModal.vue';

export default {
  name: "CommunitySide",
  data() {
    return {
      //파일업로드 유무 변수
      fileOn: false,
      viewState : 0,
      step : "",
      manage : false,
      postList : [],
      novelchoice : false, //작품선택 모달창 띄우는 변수
      novelSearch : '', //작품선택 키워드 검색 변수
      novelIsON: null, //모달 검색시 작품이 있는지 없는지 알 수 있는 변수
      novelSearchList : [], //모달 검색시 나오는 정보 리스트 
      novelPostIsON : false, //최종적으로 작품이 클릭시 작품 제목의 유무를 알 수 있는 변수

      checkedvalues : [],
      checkList : [],
      postModal: false,

      // 포스트 보기
      postCode : "",
      title : "",
      content : "",
      view : "",
      writerNickname : "",
      writerId : "",
      writerProfileImg : "",
      createdDate : "",
      inputScore : "",
      inputNovel : "",

      // 댓글 보기
      commentList : [],

      // 새글 작성
      inputTitle : "",
      inputContent : "",
      selectScore : "", //작품선택 별점
      novelCheckPost : "", //작품 선택시 저장되는 작품제목

      // 수정모드
      editMode : false,

      //댓글 작성(코멘트)
      inputComment : "",

    };
  },
  components: {
    Editor,
    ConfirmModal,
    CompostModal
},
  created() {
    this.$store.commit('sideBarOn');
    this.$store.commit('currentServiceCng', 'C');

    this.viewState = 0;
    switch(this.$store.state.communityService) {
      case 'F' :
        this.getPostList('F');
        break;
      case 'W' :
        this.getPostList('W');
        break;
      case 'T' :
        this.getPostList('T');
        break;
      case 'R' :
        this.getPostList('R');
        break;                
    }

    if(this.$route.params.BOAR_CODE!=undefined){
      this.viewState = 1;
      switch(this.$route.params.BOAR_CODE){
        case "1": 
          console.log('1');
          this.$store.commit('communityServiceCng', 'F');
          break;
        case "2":
          console.log('2');
          this.$store.commit('communityServiceCng', 'W');
          break;
        case "3":
          console.log('3');
          this.$store.commit('communityServiceCng', 'T');
          break;
        case "4":
          console.log('4');
          this.$store.commit('communityServiceCng', 'R');
          break;
      }
      this.postClick(1, this.$route.params.POST_CODE);
    }

    if(this.$route.params.REVIEW_CODE != undefined) {
      this.viewState = 1;
      this.$route.params.REVIEW_CODE = 4
      this.$store.commit('communityServiceCng', 'R')
      this.postClick(1, this.$route.params.POST_CODE)
    }
    
    if(this.$route.params.boar_code != undefined){
      this.viewState = 1;
      switch(this.$route.params.boar_code){
        case '1' : 
         this.$store.commit('communityServiceCng', 'F');
         break;
        case '2' : 
         this.$store.commit('communityServiceCng', 'W');
         break;
        case '3' : 
         this.$store.commit('communityServiceCng', 'T');
         break;
        case '4' : 
         this.$store.commit('communityServiceCng', 'R');
         break;
      }
      //데이터 변경
      this.postClick(1, this.$route.params.post_code);
    }
  },
  computed: {
    communityService: function() {
      return this.$store.getters.communityService;
    }
  },
  watch : {
    communityService(cng) {
      this.postList = [];
      this.viewState = 0;
      this.getPostList(cng);
    },

    novelSearch() {
      this.novelPick();
    }
    
  },
  methods: {
    loginCheck() {
      if(this.$store.state.userId == null) {
        this.$store.commit('gModalOn',{size : "normal", msg : "로그인이 필요한 기능입니다."});
        this.$router.push('/signin');
      } else {
        this.viewState = 2;
      }
    },

    getPostList(selectService) {
      if(selectService == 'R') {
        axios.post('/api/community/getReviewList', {select : selectService})
        .then((result)=>{
          if(result.data == "err") {
            this.$store.commit('gModalOn',{size : "normal", msg : "해당 게시판 포스트 불러오기 실패"});
          } else {
            this.postList = result.data;
            for(let i=0;i<this.postList.length;i++){
              this.postList[i].check=false;
            }
          }
        })
      }else {
        axios.post('/api/community/getPostList', {select : selectService})
        .then((result)=>{
          if(result.data == "err") {
            this.$store.commit('gModalOn',{size : "normal", msg : "해당 게시판 포스트 불러오기 실패"});
          } else {
            this.postList = result.data;
            for(let i=0;i<this.postList.length;i++){
              this.postList[i].check=false;
            }
          }
        })
      }

    },
    postClick(val, postCode) {
      this.viewState = val;
      this.postCode = postCode;
      
      var data = {
        select : this.$store.state.communityService,
        postCode : postCode
      }
      axios.post('/api/community/getPost', data)
      .then(async (result)=>{
        if(result.data == "err") {
          this.$store.commit('gModalOn', {size : "normal", msg : "포스트 데이터 불러오기 실패"});
        } else {
          this.title = result.data[0].POST_TITLE;
          this.content = result.data[0].POST_CONTENT;
          this.view = result.data[0].POST_VIEW;
          this.createdDate = result.data[0].POST_ESTADATE;
          this.writerNickname = result.data[0].USER_NICKNAME;
          this.writerId = result.data[0].USER_ID;

          this.writerProfileImg = await storage.getUserProfileImg(result.data[0].USER_ID);
        }
      });

      this.getCommentList();
    },

    reviewPostClick(val, scorCode) {
      this.viewState = val;
      this.scorCode = scorCode;
      
      var data = {
        scorCode : scorCode
      }
      axios.post('/api/community/getReview', data)
      .then(async (result)=>{
        console.log('a');
        if(result.data == "err") {
          this.$store.commit('gModalOn', {size : "normal", msg : "포스트 데이터 불러오기 실패"});
        } else {
          this.title = result.data[0].SCOR_TITLE;
          this.content = result.data[0].SCOR_CONTENT;
          this.view = result.data[0].SCOR_VIEW;
          this.createdDate = result.data[0].SCOR_ESTADATE;
          this.writerNickname = result.data[0].USER_NICKNAME;
          this.writerId = result.data[0].USER_ID;

          this.writerProfileImg = await storage.getUserProfileImg(result.data[0].USER_ID);
        }
      });   
    },

    editorContent(val) {
      this.inputContent = val;
    },

    novelPick() {
      var data = {
        novelSearch : this.novelSearch
      }
      axios.post('/api/community/novelSearch', data)
      .then(async (result)=>{
          if(result.data == "err") {
            console.log('err');
          } else {
            console.log('ok');
            console.log(result.data.length);
            this.novelSearchList = result.data;
            console.log(this.novelSearchList);
            if(result.data.length > 0) {
              this.novelIsON = 1;
            }else {
              this.novelIsON = 0;
            }
          }
        })
    },

    novelCancel() {
      this.novelchoice = false;
    },

    novelClick(i) {
      this.novelCheckPost = this.novelSearchList[i].NOVE_TITLE;
      //console.log(this.novelCheckPost);
      this.novelchoice = false;
      this.novelPostIsON = true;
    },

    posting() {
      if(this.$store.state.userId == null) {
        this.$store.commit('gModalOn', {size : "normal", msg : "로그인이 필요한 기능입니다."});
        this.$router.push('/signin');
      } else if(this.inputTitle == '' || this.inputContent == '') {
        this.$store.commit('gModalOn', {size : "normal", msg : "제목 또는 내용이 비어있습니다."});
      } else {
        var data = {
          title : this.inputTitle,
          content : this.inputContent,
          select : this.$store.state.communityService
        }
        axios.post('/api/community/posting', data)
        .then((result)=>{
          if(result.data == "ok") {
            this.$store.commit('gModalOn', {size : "normal", msg : "새로운 글이 등록되었습니다."});
            this.viewState = 0;
            this.getPostList(this.$store.state.communityService);

            this.inputTitle = "";
            this.inputContent = "";
          } else {
            this.$store.commit('gModalOn', {size : "normal", msg : "게시글 등록 실패"});
          }
        })
      }
    },
    reviewPosting() {
      if(this.$store.state.userId == null) {
        this.$store.commit('gModalOn', {size : "normal", msg : "로그인이 필요한 기능입니다."});
        this.$router.push('/signin');
      } else if(this.inputTitle == '' || this.inputContent == '') {
        this.$store.commit('gModalOn', {size : "normal", msg : "제목 또는 내용이 비어있습니다."});
      } else {
        var data = {
          selectNovel : this.novelCheckPost,
          score : this.selectScore,
          title : this.inputTitle,
          content : this.inputContent,
        }
        axios.post('/api/community/reviewPosting', data)
        .then((result)=>{
          if(result.data == "ok") {
            this.$store.commit('gModalOn', {size : "normal", msg : "새로운 글이 등록되었습니다."});
            this.viewState = 0;
            this.getPostList('R');

            this.inputTitle = "";
            this.inputContent = "";
            //this.novelCheckPost = "";
            this.selectScore = "";
          } else {
            this.$store.commit('gModalOn', {size : "normal", msg : "게시글 등록 실패"});
          }
        })
      }
    },

    edit() {
      if(this.communityService == 'R'){
        this.editMode = true;
        this.viewState = 2;
        this.inputTitle = this.title;
        this.inputScore = this.selectScore;
        this.inputNovel = this.selectNovel;
      }else {
        this.editMode = true;
        this.viewState = 2;
        this.inputTitle = this.title;
      }
    },
    async getPreContent() {
      await this.edit();
      this.$refs.editor.state.content = this.content;
    },

    editPost() {
      if(this.communityService == 'R'){
        var data = {
          scorCode : this.scorCode,
          title : this.inputTitle,
          content : this.inputContent,
          selectNovel : this.selectNovel,
          score : this.selectScore,
        }
        console.log(data);

        axios.post('/api/community/reviewEditPost', data)
        .then((result)=>{
          if(result.data == "ok") {
            this.$store.commit('gModalOn', {size : "normal", msg : "수정되었습니다."});
            this.reviewPostClick(1, this.scorCode);

            this.inputTitle = "";
            this.inputContent = "";
            this.editMode = false;
          } else {
            this.$store.commit('gModalOn', {size : "normal", msg : "게시글 수정 실패"});
          }
        })
      }else {
        data = {
          selectNovel : this.novelCheckPost,
          postCode : this.postCode,
          title : this.inputTitle,
          content : this.inputContent,
          select : this.$store.state.communityService
        }
        console.log(data);

        axios.post('/api/community/editPost', data)
        .then((result)=>{
          if(result.data == "ok") {
            this.$store.commit('gModalOn', {size : "normal", msg : "수정되었습니다."});
            this.postClick(1, this.postCode);

            this.inputTitle = "";
            this.inputContent = "";
            this.editMode = false;
          } else {
            this.$store.commit('gModalOn', {size : "normal", msg : "게시글 수정 실패"});
          }
        })
      }
            
    },

    async deletePost() {
      var result = await this.$refs.confirmModal.show({
        size : "normal",
        msg : "해당 게시글을 삭제하시겠습니까?",
        btn1 : "삭제",
        btn2 : "취소"
      })

      if(result == true) {
        console.log(result);
        if(this.communityService == 'R'){
          var data = {
            scorCode : this.scorCode
          }

          axios.post('/api/community/reviewDeletePost', data)
          .then((result)=>{
            if(result.data == "err") {
              this.$store.commit('gModalOn', {size : "normal", msg : "게시글 삭제 실패"});
            } else {
              this.viewState = 0;
              this.getPostList('R');
            }
          })
        }else {
          data = {
            select : this.$store.state.communityService,
            postCode : this.postCode
          }

          axios.post('/api/community/deletePost', data)
          .then((result)=>{
            if(result.data == "err") {
              this.$store.commit('gModalOn', {size : "normal", msg : "게시글 삭제 실패"});
            } else {
              this.viewState = 0;
              this.getPostList(this.$store.state.communityService);
            }
          })          
        }

      }
    },


    getCommentList() {
      this.commentList = [];
      var data = {
        select : this.$store.state.communityService,
        postCode : this.postCode
      }

      axios.post('/api/community/getCommentList', data)
      .then(async (result)=>{
        if(result.data == "err") {
          this.$store.commit('gModalOn', {size : "normal", msg : "댓글 불러오기 실패"});
        } else {
          var tempList = [];
          tempList = result.data;
          for(var i=0; i < tempList.length; i++) {
            tempList[i].userImg = await storage.getUserProfileImg(tempList[i].USER_ID);
          }

          this.commentList = tempList;
        }
      })
    },

    commenting() {
      if(this.$store.state.userId == null) {
        this.$store.commit('gModalOn', {size : "normal", msg : "로그인이 필요한 기능입니다."});
        this.$router.push('/signin');
      } else if(this.inputComment == '') {
        this.$store.commit('gModalOn', {size : "normal", msg : "내용이 비어있습니다."});
      } else {
        var data = {
          postCode : this.postCode,
          content : this.inputComment
        }

        axios.post('/api/community/commenting', data)
        .then((result)=>{
          if(result.data == "err") {
            this.$store.commit('gModalOn', {size : "normal", msg : "댓글 등록을 실패했습니다."});
          } else {
            this.inputComment = "";
            this.getCommentList();
          }
        })
      }
    },
    openPostModal(){
      this.checkList = null;
      this.checkList = [];
      for(let i=0;i<this.postList.length;i++){
        if(this.postList[i].check){
          this.checkList.push(this.postList[i].POST_CODE)
        }
      }
      this.postModal=true;
    },
    closePostModal(val) {
      this.postModal=val;
    },
    editCancel() {
      this.viewState = 0
      this.inputTitle = '';
      this.inputContent = '';
      this.editMode = false;
      this.inputScore = '';
      this.inputNovel = '';
    }
  }
};
</script>

<style>
#communityElement,
#villageElement {
  width: 73%;
  height: 40px;
  color: white;
  padding: 5px 10px 5px 20px;
  text-align: left;
  margin: 10px 0 0 50px;
  border-radius: 30px;
  font-weight: 600;
  font-size: 1em;
  cursor: pointer;
}

/* 목록조회 */
.team_box {
  height: 80vh;
}
.commu_btn_area{
  display:flex;
  justify-content: flex-end;
}
.commu_btn_red{
  top:20px;
  position:relative;
  cursor: pointer;
  font-size: 0.9em;
  width: 100px;
  height: 30px;
  background: #ff4c4c;
  border-radius: 14px;
  display: table;
  margin-left: 20px;
}
.commu_btn_blue{
  top:20px;
  position:relative;
  cursor: pointer;
  font-size: 0.9em;
  margin-left: 20px;
  width: 100px;
  height: 30px;
  background: #2872f9;
  border-radius: 14px;
  display:table;
}
.commu_btn_manage{
  display: table-cell;
  vertical-align:middle;
  text-align:center;
  color:white;
}
.commu_btn_write{
  display:table-cell;
  vertical-align: middle;
  text-align: center;
  color:white;
}
.commu_section {
  position:relative;
  margin-top: 30px;
  overflow: scroll;
  width: 100%;
  height: calc(100vh - 157px);
  -ms-overflow-style:none;
}
.commu_post {
  position: relative;
  width: 100%;
  height: 120px;
  transition: 0.2s all ease;
}
/* .commu_post:hover {
  opacity: 0.7;
} */
.commu_thumb {
  width: 80px;
  height: 80px;
  cursor: pointer;
  position: absolute;
  top: 10px;
  left: 21px;
  z-index: 11;
  object-fit: cover;
}
.commu_back {
  cursor: pointer;
  display: block;
  position: absolute;
  width: calc(100% - 50px);
  left: 30px;
  height: 80px;
  background-color: #262626;
  border-radius: 12px;
  color: white;
  top: 30px;
}
.commu_back_title {
  position: absolute;
  font-size: 20px;
  top: 10px;
  float: left;
  left: 80px;
}
.commu_back_check {
  position: relative;
  top: 10px;
  float: right;
  right: 10px;
}
.commu_back_check > input[type="checkbox"] {
  width: 25px;
  height: 25px; 
}

.commu_str {
  position:absolute;
  float:right;
  right: 10px;
  top:10px;
  font-size: 1.5em;
}
.commu_back_info {
  position: absolute;
  float: right;
  font-size: 17px;
  top: 50px;
  right: 10px;
}
.commu_str_draw {
  position: absolute;
  color: #2872f9;
  left: 0;
  overflow: hidden;
  font-size : 1.0em;
  -webkit-text-stroke-width:1.2px;
  -webkit-text-stork-color:#2872f9
  }


/* 본문조회 */
.topic_postview_btn_info{
  display:flex;
  position: absolute;
  width: 100%;
  top: 52px;
  margin:5px 5px;
}
.topic_postview_thumbimg{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 55px;
  height: 55px;
  border-radius: 15px;
  margin-right: 10px;
  background-color:#5e5e5e;
}
.topic_postview_thumbimg img{
  width: 50px;
  height: 50px;
  border-radius: 15px;
}
.topic_postview_btn_area{
  display:flex;
  position:absolute;
  float:right;
  right: 62px;
}
.topic_postview_btn_red, .topic_postview_btn_blue{
  /* top:40px; */
  display:flex;
  justify-content: center;
  align-items: center;
  position:relative;
  cursor: pointer;
  font-size: 0.9em;
  width: 50px;
  height: 28px;
  background: #2872f9;
  border-radius: 14px;
  /* display: table; */
  margin-left: 10px;
}
.topic_postview_btn_red img {
  position:relative;
    left:1.5px;
    width:35%; 
    object-fit: cover;
}
.topic_postview_btn_blue img {
  position:relative;
  top:0.5px;
  width:40%; 
  object-fit: cover;
}
.topic_postview_detail_info{
  display:flex;
}
.topic_postview_detail_frame{
  display:flex;
  position:absolute;
  float: right;
  right: 60px;
  top: 22px;
}
.topic_postview_detail{
  padding: 3px 10px;
  background-color: #5e5e5e;
  border-radius: 20px;
  margin-left: 5px;
  
}
.postview_wrap {
  margin: 0 auto;
  width: 95%;
}
.postview_section {
  padding: 10px 15px;
  background-color: #2c2c2c;
  border-radius: 20px;
  position: relative;
  top: 50px;
}
.postview_title {
  color:white;
  margin: 5px auto;
  width: 100%;
  background-color: #494949;
  border-radius: 20px;
  padding: 15px 10px;
  height: 105px;
}
.postview_title_span {
  height: 50px; 
  margin: 0 auto;
  font-size: 1.3em;
  position: absolute;
  top: -7px;
  font-weight: 600;
}
.postview {
  position: relative;
  width: 99%;
  height: 100%;
  border: none;
  background: none;
  margin: 0px 10px;
}

.postview_frame {
  color:white;
  margin: 10px auto;
  width: 100%;
  background-color: #494949;
  border-radius: 20px;
}
.postview_content {
  min-height: 100px;
  background-color: #494949;
  border-radius: 20px;
  padding: 10px 15px;
  overflow-y:scroll;
  word-wrap: break-word;
  
}
.postview_content span {
  margin: 0 auto;

}
.content_vote {
    display:flex;
    justify-content: center;
    position:relative;
    bottom: 20px;
    margin-top: 10px;
    width: 100%;
}
.vote_btn_ok {
  display: inline-block;
  width : 100px;
  text-align: center;
  margin: 0 10px;
  background-color: #2872f9;
  border-radius: 20px;
  color:white;
  font-size: 1.2em;
  cursor:pointer;
}
.vote_btn_ok:hover {
  background-color:#0084ff;
}
.vote_btn_no {
  display: inline-block;
  width : 100px;
  /* line-height: 50px; */
  text-align: center;
  /* height: 100%; */
  margin: 0 10px;
  background-color: #ff4c4c;
  border-radius: 20px;
  color:white;
  font-size: 1.2em;
  cursor:pointer;
}
.vote_btn_no:hover {
  background-color:#f83636;
}
.postview_btn_area {
  position: relative;
  top: 50px;
  height: 50px;
  width: 100px;
  display: table-cell;
  vertical-align: middle;
  color: white;
}
.postview_btn_list{
  text-align: center;
  padding: 5px 10px;
  background-color: #2872f9;
  border-radius: 14px;
  cursor:pointer;
}
.postview_comment {
  color:white;
  font-size: 1.2em;
}
.postview_comment_area textarea {
  width: 100%;
  border-radius: 14px;
  font-size: 1.0em;
  background-color:#494949;
  color:white;
  border: none;
  outline: none;
  padding: 5px 10px;
  resize: none;
}
.postview_comment_register {
  justify-content: flex-end;
  display:flex;
  position:relative;
  color: white;
  text-align: center;
  margin: 3px auto;
}
.postview_comment_register span {
  padding: 5px 10px;
  background-color: #2872f9;
  border-radius: 14px;
  width: 100px;
  cursor:pointer;
}
.postview_view_area{
  display:flex;
  margin-top: 20px;
  margin-bottom : 5px;
}
.postview_img{
  width: 50px;
  height: 50px;
  border-radius: 15px;
  margin-right: 10px;
}
.postview_view_content {
  width: 100%;
  border-radius: 14px;
  font-size: 1.0em;
  background-color:#494949;
  color: white;
}

/* 커뮤니티 모달 */
.commu_novel_modal_opacity {
    position: absolute;
    left: 0px;
    top: 0px;
    background: black;
    width: 100%;
    height: 100%;
    opacity: 0;
    z-index: 99;
    position: fixed;
    animation-duration: 0.3s;
    animation-name: backgrounding_on;
    animation-fill-mode: forwards;
}
.commu_novel_modal {
  position: fixed;
    top: 45%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 900px;
    height: 450px;
    border-radius: 25px;
    background: #2c2c2c;
    -webkit-animation-duration: 0.7s;
    animation-duration: 0.7s;
    -webkit-animation-name: opening;
    animation-name: opening;
    z-index: 100;
    opacity: 1;
}
.commu_novel_modal_cancel {
  position: absolute;
  float: right;
  right: 10px;
  top: 5px;
  width: 20px;
  height: 20px;
  margin: 10px;
  cursor:pointer;
}
.commu_novel_modal_cancel img{
  width: 100%;
  height: 100%;
}
.commu_novel_modal_search{
  position: absolute;
  left: 20px;
  top: 20px;
  width: 270px;
  height: 32px;
  background-color: white;
  border-radius: 15px;
  padding-left: 10px;

}
.commu_novel_modal_img{
  display: inline-block;
  position:relative;
  width: 25px;
  height: 25px;
  cursor:pointer;
}
.commu_novel_modal_img img{
  width: 100%;
  height: 100%;
}
.commu_novel_modal_search input{
  position:relative;
  display: inline-block;
  height: 30px;
  outline: none;
  color: black;
}
.commu_novel_modal_text {
  position: absolute;
  float: right;
  right: 50px;
  color:white;
  font-size: 1.5em;
  top: 50px;
}
.commu_novel_modal_no {
  color:white;
  position: absolute;
  margin-top: 10px;
  top: 50%;
  left: 50%;
  transform: translateX(-50%);
}
.commu_novel_modal_article_frame{
  position: absolute;
  left: 35px;
  top: 80px;
  width: 805px;
  height: 320px;
  margin: 10px 10px;
  overflow:scroll;

}
.commu_novel_modal_articles{
  display: inline-block;
  position: relative;
  width: 151px;
  height: 185px;
   margin-left: 5px;
  margin-right: 5px; 
  /* height: 100%; */
  background-color: #4c4c4c;
  border-radius: 10px;
  overflow: hidden;
  object-fit:cover;
  cursor:pointer;
}
.commu_novel_modal_articles img {
  width: 100%;
  height: 100%;
}

/* 글작성 */

.commu_write_section {
  margin: 0 auto;
  padding: 10px 15px;
  width: 95%;
  height: 65vh;
  background-color: #2c2c2c;
  border-radius: 20px;
  position: relative;
  top: 50px;
}
.commu_review_frame{
  display:flex;
  justify-content: space-between;
  height: 7%;
  margin: 5px auto;
}
.commu_novel_choice {
  display:flex;
  align-items:center;
  justify-content:center;
  flex:1.2;
  height: 100%;
  background-color:#2872f9;
  border-radius: 20px;
  padding: 0 10px;
  margin-right: 10px;
  cursor: pointer;
}
.commu_novel_choice input {
  width: 100%;
  background: none;
  color: white;
}

.commu_novel_choice input::placeholder {
  color: white;
  text-align: center;
}

.commu_novel_choice span {
  color:white;
  font-size: 1.2vw;
}
.commu_review_title {
  flex: 3;
  height: 100%;
  background-color: #5e5e5e;
  border-radius: 20px;
  padding: 0 10px;
}
.commu_review_title input {
  position: relative;
  left: 5px;
  width: 99%;
  height: 100%;
  border: none;
  background: none;
  color:white;
}
.commu_str_back {
  display:flex;
  align-items:center;
  justify-content:center;
  flex:1;
  height: 100%;
  background-color: #ffe342;
  border-radius: 20px;
  padding: 0 10px;
  margin-left: 10px;
  cursor: pointer;
}
.commu_str_back_update{
  display:flex;
  align-items:center;
  justify-content:center;
  flex:1;
  height: 100%;
  background-color: #5e5e5e;
  border-radius: 20px;
  padding: 0 10px;
  margin-left: 10px;
  cursor: pointer;
}
.commu_str_grade{
  font-size: 1.2vw;
}
.str_first {
  border:none;
  position:relative;
  font-size: 1.8vw;
  color: #ddd;
  bottom: -0.5px;
  /* margin-left:2px;
  margin-right:2px; */
}
.str_range {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    /* top: 10px; */
    opacity: 0;
    cursor: pointer;
}
.commu_write_title {
  margin: 5px auto;
  width: 100%;
  height: 7%;
  background-color: #5e5e5e;
  border-radius: 20px;
  padding: 0 10px;
}
.commu_write_title input {
  position: relative;
  left: 5px;
  width: 99%;
  height: 100%;
  border: none;
  background: none;
  color:white;
}
.commu_write_content {
  margin: 9px auto;
  width: 100%;
  height: 89%;
  background-color: #5e5e5e;
  border-radius: 20px;
  padding: 10px 10px;
  color:white;
  overflow: auto;
}
.write_btn_area {
  display:flex;
  justify-content: center;
  position: relative;
  top: 70px;
  width: 100%;
  text-align: center;
  color: white;
}
.write_btn {
  padding: 5px 10px;
  background-color: #2872f9;
  width: 100px;
  border-radius: 20px;
  margin: 0 10px;
}
.write_cancle_btn {
  padding: 5px 10px;
  margin: 0 10px;
  background-color: #5e5e5e;
  width: 100px;
  border-radius: 20px;
}


/* 본문 에디터 속성값 */

/*들여쓰기, 내어쓰기*/
.ql-indent-1:not(.ql-direction-rtl) {
  padding-left: 2em;
}
.ql-indent-1.ql-direction-rtl.ql-align-right {
  padding-right: 2em;
}
.ql-indent-2:not(.ql-direction-rtl) {
  padding-left: 4em;
}
.ql-indent-2.ql-direction-rtl.ql-align-right {
  padding-right: 4em;
}
.ql-indent-3:not(.ql-direction-rtl) {
  padding-left: 6em;
}
.ql-indent-3.ql-direction-rtl.ql-align-right {
  padding-right: 6em;
}
.ql-indent-4:not(.ql-direction-rtl) {
  padding-left: 8em;
}
.ql-indent-4.ql-direction-rtl.ql-align-right {
  padding-right: 8em;
}
.ql-indent-5:not(.ql-direction-rtl) {
  padding-left: 10em;
}
.ql-indent-5.ql-direction-rtl.ql-align-right {
  padding-right: 10em;
}
.ql-indent-6:not(.ql-direction-rtl) {
  padding-left: 12em;
}
.ql-indent-6.ql-direction-rtl.ql-align-right {
  padding-right: 12em;
}
.ql-indent-7:not(.ql-direction-rtl) {
  padding-left: 14em;
}
.ql-indent-7.ql-direction-rtl.ql-align-right {
  padding-right: 14em;
}
.ql-indent-8:not(.ql-direction-rtl) {
  padding-left: 16em;
}
.ql-indent-8.ql-direction-rtl.ql-align-right {
  padding-right: 16em;
}
.ql-indent-9:not(.ql-direction-rtl) {
  padding-left: 18em;
}
.ql-indent-9.ql-direction-rtl.ql-align-right {
  padding-right: 18em;
}

/*글자 크기*/
.ql-size-large {
  font-size: 1.9em;
}
.ql-size-huge {
  font-size: 2.3em;
}

/*문단정렬*/
.ql-align-center {
  text-align: center;
}
.ql-align-justify {
  text-align: justify;
}
.ql-align-right {
  text-align: right;
}


/* 석버미의 클래스들 */

.comment_bar {
  background: #525252;
  border-radius: 50px;
  width: 100%;
  height: 3px;
  margin-top: 20px;
  margin-bottom: 15px;
}

.postview_view_nickname {
  position: relative;
  padding: 5px 10px 5px 10px;
  background: #2872f9;
  border-radius: 10px;
  top: -8px;
  left: -7px;
  width: auto;
}

.postview_view_estadate {
  position: relative;
  border-radius: 10px;
  top: -5px;
  left: calc(100% - 135px);
  font-size: 0.7em;
  margin: 0;
}

.postview_view_info {
  position: relative;
  border-radius: 10px;
  /* top: 10px; */
  left: 15px;
  white-space: normal;
  word-break:break-all;
  width: calc(100% - 30px);
  font-size: 0.9em;
  text-align: left;
  margin: 0;
}

.commu_str_temp_sel {
  width: 100%;
  background: none;
  border: none;
  color: #262626;
}
</style>