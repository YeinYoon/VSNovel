import { createStore } from 'vuex';

const store = createStore({
    state() {
        return {
            // 로그인 및 로딩 관련
            userId : null,
            userNickname : null,
            userEmail : null,
            profileImg : null,
            LoadingStatus: false,


            //전역(Global) 모달
            gModalState : false,
            gModalMsg : "",
            gModalSize : "",
            gModalBg : "",

            // 사이드바 상태
            sideBarState : true, // 상황에 따라 보일지 말지 결정
            currentService : "M",  
            // 커뮤니티 : C , 메인 : M, 
            // 마이페이지 : U , 스토어 : S, 
            // 공지사항 : N , 엔진 : E, 
            // 라이브러리 : L , 빌리지 : V , 빌리지 내부 : VI

            communityService : 'F',
            // 자유 : F, 작가 : W,
            // 팀원모집 : T, 리뷰&추천 : R

            noticeService : 'U',
            // 업데이트 : U, 이벤트 : E , 정책 : P

            // 유저 가이드
            tutorialState : false, // 튜토리얼 가이드 상태값
            tutorialType : null

        }
    },
    mutations : {
        //유저 로그인
        userLogin(state, user) {
            if(user == null) {
                state.userNickname = null;
                state.userId = null;
                state.userEmail = null;
                state.profileImg = null;
            } else {
                state.userNickname = user.nickname;
                state.userId = user.id;
                state.userEmail = user.email;
                state.profileImg = user.profileImg;
            }
            
        },
        
        //로딩
        startSpinner(state){
            state.LoadingStatus = true;
        },
        endSpinner(state){
            state.LoadingStatus = false;
        },


        // Modal
        gModalOn(state, info){
            state.gModalSize = info.size;
            state.gModalMsg = info.msg;
            state.gModalBg = info.bg;
            state.gModalState = true;
        },
        gModalOff(state){
            state.gModalState = false;
        },

        // 스토어 관련
        setNovelList(state, data) {
            state.novelList = data;
        },

        //사이드바 상태 변경
        sideBarOn(state) {
            state.sideBarState = true;
        },
        sideBarOff(state) {
            state.sideBarState = false;
        },
        
        //현재 유저가 선택한 서비스(페이지)
        currentServiceCng(state, val) { 
            state.currentService = val;
        },

        communityServiceCng(state, val) {
            console.log('스토어 왔음');
            state.communityService = val;
        },

        noticeServiceCng(state, val) {
            state.noticeService = val;
        },

        // 유저 이용 가이드
        tutorialOn(state, val) {
            state.tutorialState = true;
            state.tutorialType = val;
        },

        tutorialOff(state) {
            state.tutorialState = false;
        },

    },
    getters: {
        communityService(state) {
            return state.communityService;
        },

        noticeService(state) {
            return state.noticeService;
        }
    }
})

export default store;