import { createStore } from 'vuex';

const store = createStore({
    state() {
        return {
            userNickname : null,
            LoadingStatus: false,

            //커뮤니티 사이드 
            cafeSide : ['카페 메인'] // 커뮤니티 사이드 가입카페목록
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
        addCafe(state, title){
            for(let i = 0; i < state.cafeSide.length; i++){
                if(state.cafeSide[i] == title){
                    console.log('아니야~');
                    return
                }
            }
            state.cafeSide.push(title);
        }
    },
})

export default store;