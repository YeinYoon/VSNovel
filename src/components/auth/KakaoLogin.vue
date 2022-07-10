<template>
<div class="RouterView">
    카카오 로그인 처리 진행중
</div>
</template>

<script>
import axios from '../../axios'
export default {
    name : "kakao-login",
    async created() {
        console.log(this.$route.query);
        await this.getKakaoToken(this.$route.query.code);
        await this.getKakaoUserInfo();
    },
    data() {
        return {
            token : null,
            kakaoUserData : null
        }
    },
    methods : {
        async getKakaoToken(code) {
            console.log('loginWithKakao');

            const kakaoHeader = {
                'Authorization': '7b2598222d5ad74e9fe34983e9489697',
                'Content-type': 'application/x-www-form-urlencoded;charset=utf-8',
            };

            try {
                const data = {
                    grant_type: 'authorization_code',
                    client_id: '94e5cc4ef87631f2970dd5f10c395642',
                    redirect_uri: 'http://localhost:8080/auth/kakao',
                    code: code,
                };
                const queryString = Object.keys(data)
                    .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(data[k]))
                    .join('&');
                const result = await axios.post('https://kauth.kakao.com/oauth/token', queryString, { headers: kakaoHeader });
                console.log('카카오 토큰', result);
                this.token = result.data.access_token;
                return result;
            } catch (e) {
                return e;
            }
        },

        async getKakaoUserInfo() {

            window.Kakao.Auth.setAccessToken(this.token);   

            let data = '';
            await window.Kakao.API.request({
                url: "/v2/user/me",
                success: function (response) {
                    data = response;
                    this.kakaoUserData = response;
                    
                    axios.post('/api/auth/existIdCheck', {newId : this.kakaoUserData.id})
                    .then((result)=>{
                        if(result.data == "exist") {
                            // db에 값 입력할 필요가 없음
                        
                            var loginData = {
                                id : this.kakaoUserData.id,
                                pw : 'KAKAO'
                            }
                            axios.post('/api/auth/login', loginData)
                            .then((result)=>{
                                if(result.data=='ok') {
                                    window.location.href = '/';
                                } else {
                                    console.log("카카오 로그인 실패");
                                }
                            })
                            .catch((err)=>{
                                console.error(err);
                            })

                        } else {

                            // db에 값 입력시키고 로그인
                            var data = {
                                newId : this.kakaoUserData.id,
                                newEmail : this.kakaoUserData.kakao_account.email,
                                newNickname : this.kakaoUserData.kakao_account.profile.nickname,
                                newName : this.kakaoUserData.kakao_account.profile.nickname,
                                newSex : this.kakaoUserData.kakao_account.gender
                            }
                            if(data.newSex == 'female') {
                                data.newSex = 'F';
                            } else if(data.newSex == 'male'){
                                data.newSex = 'M';
                            }

                            axios.post('/api/auth/kakaoSignUp', data)
                            .then((result)=>{
                                if(result.data == "err") {
                                    console.log("카카오 계정 등록 중 DB 오류 발생");
                                } else {

                                    var loginData = {
                                        id : this.kakaoUserData.id,
                                        pw : 'KAKAO'
                                    }
                                    axios.post('/api/auth/login', loginData)
                                    .then((result)=>{
                                        if(result.data=='ok') {
                                            window.location.href = '/';
                                        } else {
                                            console.log("카카오 로그인 실패");
                                        }
                                    })
                                    .catch((err)=>{
                                        console.error(err);
                                    })

                                }
                            })
                        }
                    })                   

                },
                fail: function (error) {
                    console.log(error);
                },
            });
            console.log('카카오 계정 정보', data);
            return data;
        },

        userLogin() {

        }
    }
}
</script>

<style>

</style>