import { createStore } from 'vuex';

const store = createStore({
    state() {
        return {
            userNickname : null,
            LoadingStatus: false,

            //커뮤니티 사이드 
            cafeSide : [{title : '자유'},{title:'작가'}, {title : '팀원 모집'}, {title : '리뷰 & 추천'}, {title:'카페 메인'}] // 커뮤니티 사이드 
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
                if(state.cafeSide[i] == cafeData.title){
                    alert('이미 가입됐슈');
                    return
                }
            }
            state.cafeSide.push(cafeData);
            console.log(state.cafeSide);
        }
    },
})

export default store;