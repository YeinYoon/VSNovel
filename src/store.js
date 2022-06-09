import { createStore } from 'vuex';

const store = createStore({
    state() {
        return {
            // 로그인 및 로딩 관련
            userId : null,
            userNickname : null,
            LoadingStatus: false,


            //전역(Global) 모달
            gModalState : false,
            gModalMsg : "",
            gModalSize : "",
            gModalBg : "",


        }
    },
    mutations : {
        //유저 로그인
        userLogin(state, user) {
            if(user == null) {
                state.userNickname = null;
                state.userId = null;
            } else {
                state.userNickname = user.nickname;
                state.userId = user.id;
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
    },
})

export default store;