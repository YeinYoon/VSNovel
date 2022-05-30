var express = require('express');
var router = express.Router();

const db = require('../database/db');

// 커뮤니티 리스트 불러오기
router.get('/getcommulist', async (req,res)=>{
    var allNovel = await db.execute(`SELECT * FROM tbl_post`);
    if(allNovel=="err") {
        res.send("err");
    } else {
        allNovel = allNovel.rows;
        console.log(allNovel);
        res.send(allNovel);
    }
})
// 커뮤니티 글쓰기 
// router.post('/setcommupost', async (req,res)=>{
//     console.log("req : " + req);
//     var postInsert = await db.execute(`INSERT INTO tbl_post (user_id, vill_code, boar_code, post_code, post_title, post_content) VALUES ('${req.user.USER_ID}', 0, 0, 0, '${req.title}', '${req.content}')`);
//     if(postInsert == "err") {
//       console.log('DB쿼리 실패');
//     } else {
//       res.send("ok");
//     }
// })
module.exports = router;