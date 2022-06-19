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


// 커뮤니티 글 불러오기
router.post('/getPostList', async(req,res)=>{
    let boardCode;
    switch(req.body.select) {
        case 'F' :
            boardCode = 1;
            break;
        case 'W' :
            boardCode = 2;
            break;
        case 'T' :
            boardCode = 3;
            break;        
        case 'R' :
            boardCode = 4;
            break;
    }

    var postList = await db.execute(`SELECT * FROM tbl_post WHERE vill_code = -1 AND boar_code = ${boardCode}`);
    if(postList == "err") {
        res.send("err");
    } else {
        res.send(postList.rows);
    }

}),

// 커뮤니티 포스트 조회
router.post('/getPost', async (req,res)=>{
    let boardCode;
    switch(req.body.select) {
        case 'F' :
            boardCode = 1;
            break;
        case 'W' :
            boardCode = 2;
            break;
        case 'T' :
            boardCode = 3;
            break;        
        case 'R' :
            boardCode = 4;
            break;
    }

    var post = await db.execute(`SELECT * FROM tbl_post WHERE vill_code = -1 AND boar_code = ${boardCode} AND post_code=${req.body.postCode}`);
    if(post == "err") {
        res.send("err");
    } else {
        res.send(post.rows);
    }
})


module.exports = router;