var express = require('express');
var router = express.Router();

const db = require('../database/db');

// 마이페이지 프로필 불러오기
router.get('/mypagemain', async(req, res) => {
    console.log(req.user.USER_ID)
    const result = await db.execute(`SELECT * from tbl_user WHERE user_id = '${req.user.USER_ID}'`)
    if(result == 'err') {
        console.log("sry");
    } else {
        console.log(result)
        res.send(result.rows);
        console.log(result.rows);
    }
})

// 마이페이지 프로필 설정
router.post('/mypagemain', async(req,res)=>{

    const result = await db.execute(`UPDATE tbl_user SET user_nickname = '${req.body.newNickname}', user_img = '${req.body.newImage}' WHERE user_id = '${req.user.USER_ID}'`)
    if(result == 'err') {
        console.log("sry");
    } else {
        console.log("good");
        res.send(result.rows);
    }
})

// 결제정보 불러오기
router.get('/mycard', async (req,res) => {
    const result = await db.execute(`SELECT * from tbl_user WHERE user_id = '${req.user.USER_ID}'`)
    if(result == 'err') {
        console.log('sry');
    } else {
        res.send(result);
        console.log(result);
    }
})

// 결제정보 설정
router.post('/mycard', async(req,res)=>{

    const result = await db.execute(`UPDATE tbl_user SET user_cardnum = '${req.body.newCard}' WHERE user_id='${req.user.USER_ID}'`)
    console.log(req.body.newCard);
    if(result == 'err') {
        console.log('sry');
    } else {
        console.log('good');
        res.send(result.rows);
    }
})

module.exports = router;

    
    // if(req.isAuthenticated()) {
    //     res.send(req.user);
    //   } else {
    //     res.send(null);
    //   }
    
    // UPDATE tbl_user a 
    // SET a.user_nickname = (
    // SELECT a.user_nickname 
    // FROM tbl_user 
    // WHERE 

    // )