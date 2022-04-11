var express = require('express');
var router = express.Router();

const db = require('../database/db');

router.post('/mypagemain', async(req,res)=>{
    // const pastRow = ; 
    // console.log(req.body)
    // const result = await db.execute(`UPDATE tbl_user SET (user_nickname, user_img)= ('${req.body.newNickname}','${req.body.newImage}') WHERE user_id='${req.user.USER_ID}'`) //프로필 이미지, 소개 없음
    const result = await db.execute(`UPDATE tbl_user SET (user_nickname, user_img)= (SELECT '${req.body.newNickname}','${req.body.newImage}' FROM tbl_user WHERE user_id = '${req.user.USER_ID}')`)
    console.log(req.body.newNickname);
    if(result == 'err') {
        console.log("sry");
    } else {
        console.log("good");
        res.send(result.rows);
    }
})

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