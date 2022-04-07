import { createStore } from 'vuex';

const store = createStore({
    state() {
        return {
            userNickname : null,
            LoadingStatus: false,
            //커뮤니티 사이드 
            cafeSide : [{title:'Village Main'}] // 커뮤니티 사이드 
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
    },
})

export default store;