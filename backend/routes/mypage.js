var express = require('express');
var router = express.Router();

router.post('/mypagemain', async(req,res)=>{
    const pastRow = ; 
    const result = await db.execute(`UPDATE tbl_user SET user_nickname= '${req.body.newNickname}' WHERE user_id='admin'`) //프로필 이미지, 소개 없음
    
    
    UPDATE tbl_user a 
    SET a.user_nickname = (
    SELECT a.user_nickname 
    FROM tbl_user 
    WHERE 

    )
})

module.exports = router;
