var express = require('express');
var router = express.Router();

const db = require('../database/db');
const timestamp = require('../database/timestamp');

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
    let manuelSQL;
    switch(req.body.select) {
        case 'A' :
            manuelSQL = `SELECT * FROM tbl_post WHERE vill_code = -1 AND boar_code = 5 AND boar_code = 6 AND boar_code = 7`;
            break;
        case 'D' :
            manuelSQL = `SELECT * FROM tbl_post WHERE vill_code = -1 AND boar_code = 5`;
            break;
        case 'E' :
            manuelSQL = `SELECT * FROM tbl_post WHERE vill_code = -1 AND boar_code = 6`;
            break;        
        case 'P' :
            manuelSQL = `SELECT * FROM tbl_post WHERE vill_code = -1 AND boar_code = 7`;
            break;
    }

    var postList = await db.execute(manuelSQL);
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
        case 'A' :
            boardCode = 1;
            break;
        case 'D' :
            boardCode = 2;
            break;
        case 'E' :
            boardCode = 3;
            break;        
        case 'P' :
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

//커뮤니티 포스팅
router.post('/posting', async(req, res)=>{
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

    var newTime = timestamp.getTimestamp();
    var posting = await db.execute(`INSERT INTO tbl_post VALUES(
        '${req.user.USER_ID}', -1, ${boardCode}, tbl_post_main_${boardCode}_seq.NEXTVAL,
        '${req.body.title}', '${req.body.content}', 0, 0, '${newTime}', '${newTime}',
        0, 0, null, null, null, '${req.user.USER_NICKNAME}')`);
    if(posting == "err") {
        res.send("err");
    } else {

        var postCode = await db.execute(`SELECT post_code FROM tbl_post WHERE
        post_title = '${req.body.title}' AND user_id = '${req.user.USER_ID}' AND
        vill_code = -1 AND post_estadate = '${newTime}' AND post_retouchdate = '${newTime}'`);

        console.log(postCode.rows);
        var createCommentSeq = await db.execute(`CREATE SEQUENCE tbl_comment_main_${boardCode}_${postCode.rows[0].POST_CODE}_seq
        MINVALUE      1
        MAXVALUE      9999999999
        INCREMENT BY  1
        START WITH    1
        NOCACHE
        NOORDER
        NOCYCLE`)
        if(createCommentSeq == "err") {
            console.log("새로운 글에 대한 댓글 시퀀스 생성 실패...");
        } else {
            console.log("새로운 글에 대한 댓글 시퀀스 생성 성공!")
        }

        res.send("ok");
    }
})

router.post('/deletePost', async(req, res)=>{
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

    var result = await db.execute(`DELETE FROM tbl_post
    WHERE vill_code = -1 AND boar_code = ${boardCode} AND post_code = ${req.body.postCode}`);
    if(result == "err") {
        res.send("err");
    } else {
        var dropCommentSeq = await db.execute(`DROP SEQUENCE tbl_comment_main_${boardCode}_${req.body.postCode}_seq`);
        if(dropCommentSeq == "err") {
            console.log("해당 포스트에 대한 댓글 시퀀스 삭제 실패...");
        } else {
            console.log("해당 포스트에 대한 댓글 시퀀스 삭제 성공");
        }
        res.send("ok");
    }
})



router.post('/getCommentList', async(req, res)=>{
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

    var result = await db.execute(`SELECT * FROM tbl_comment WHERE vill_code = -1 AND boar_code = ${boardCode} AND post_code = ${req.body.postCode}
    ORDER BY comm_estadate DESC`);
    if(result == "err") {
        res.send("err");
    } else {
        res.send(result.rows);
    }
})


router.post('/commenting', async(req, res)=>{
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

    var newTime = timestamp.getTimestamp();
    var result = await db.execute(`INSERT INTO tbl_comment VALUES(
        '${req.user.USER_ID}', ${boardCode}, -1, ${req.body.postCode}, tbl_comment_main_${boardCode}_${req.body.postCode}_seq.NEXTVAL,
        '${req.body.content}', '${newTime}', '${newTime}', null
    )`);

    if(result == "err") {
        res.send("err");
    } else {
        res.send("ok");
    }
})


module.exports = router;