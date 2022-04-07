import { createStore } from 'vuex';

const store = createStore({
    state() {
        return {
            userNickname : null,
            LoadingStatus: false,

            //커뮤니티 사이드 
            cafeSide : [{title : '자유'},{title:'작가'}, {title : '팀원 모집'}, {title : '리뷰 & 추천'}, {title:'카페 메인'}], // 커뮤니티 사이드 
             //전역(Global) 모달
            gModalState : false,
            gModalMsg : "",
            gModalSize : "",
            gModalBg : ""
 
        }
    },
    mutations : {
        //유저 로그인
        userLogin(state, name) {
            state.userNickname = name;
        },
        
        //로딩
        startSpinner(state){
            state.LoadingStatus = true;
        },
        endSpinner(state){
            state.LoadingStatus = false;
        },
        //사이드 카페 가입 배열 추가
        addCafe(state, cafeData){
            for(let i = 0; i < state.cafeSide.length; i++){
                if(state.cafeSide[i].title == cafeData.title){
                    alert('이미 가입된 카페입니다.');
                    return
                }
            }
            state.cafeSide.push(cafeData);
            console.log(state.cafeSide);
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
    },
})

export default store;