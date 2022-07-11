var express = require('express');
var router = express.Router();

const axios = require('axios');

//인증 토큰 발급에 필요한 아임포트 키값
var tokenReqData  = {
    imp_key : "6377570714305707",
    imp_secret : "ab47548a43e9b0b0658b8f3aea4515108ccad648e517df606b07d5d0139cbe147150ffe0fd8139ea"
}

router.post('/getAccessToken', async (req, res)=>{
    await axios({
        url: "https://api.iamport.kr/users/getToken",
        method: "post",
        headers: { "Content-Type": "application/json" }, // "Content-Type": "application/json"
        data: tokenReqData
    })
    .then((result)=>{
        console.log(result.data);
        res.send(result.data.response.access_token);
    })
    .catch((err)=>{
        console.error(err);
    })

})

router.post('/reqPayResult', async (req, res)=>{
    console.log(`조회요청 : ${req.body.impKey}, ${req.body.token}`);
    axios({
        url: `https://api.iamport.kr/payments/${req.body.impKey}`,
        method: "get",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${req.body.token}` // 발행된 액세스 토큰
        }
      })
      .then((result)=>{
        console.log(result.data);
        res.send(result.data.response);
      })
      .catch((err)=>{
        console.error(err);
      })
})


module.exports = router;