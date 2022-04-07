var express = require('express');
var router = express.Router();

const db = require('../database/db');

router.post('/mypagemain', async(req,res)=>{
    // const pastRow = ; 
    console.log(req.body)
    const result = await db.execute(`UPDATE tbl_user SET user_nickname= '${req.body.newNickname}' WHERE user_id='admin'`) //프로필 이미지, 소개 없음
    console.log(req.body.newNickname);
    if(result == 'err') {
        console.log("sry");
    } else {
        console.log("good");
        res.send(result.rows);
    }
    if(req.isAuthenticated()) {
        res.send(req.user);
      } else {
        res.send(null);
      }
    
    // UPDATE tbl_user a 
    // SET a.user_nickname = (
    // SELECT a.user_nickname 
    // FROM tbl_user 
    // WHERE 

    // )
})

module.exports = router;
