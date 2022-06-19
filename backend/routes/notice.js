var express = require('express');
var router = express.Router();

const db = require('../database/db');
const timestamp = require('../database/timestamp');


// 공지사항 글 불러오기
router.post('/getNoticeList', async(req,res)=>{
    let SQL;
    switch(req.body.select) {
        case 'U' :
            SQL = `SELECT * FROM tbl_post WHERE vill_code = -1 AND boar_code = 5`;
            break;
        case 'E' :
            SQL = `SELECT * FROM tbl_post WHERE vill_code = -1 AND boar_code = 6`;
            break;        
        case 'P' :
            SQL = `SELECT * FROM tbl_post WHERE vill_code = -1 AND boar_code = 7`;
            break;
    }

    var noticeList = await db.execute(SQL);
    if(noticeList == "err") {
        res.send("err");
    } else {
        res.send(noticeList.rows);
    }

}),

// 공지사항 포스트 조회
router.post('/getNotice', async (req,res)=>{
    let boardCode;
    switch(req.body.select) {
        case 'U' :
            boardCode = 5;
            break;
        case 'E' :
            boardCode = 6;
            break;        
        case 'P' :
            boardCode = 7;
            break;
    }

    var notice = await db.execute(`SELECT * FROM tbl_post WHERE vill_code = -1 AND boar_code = ${boardCode} AND post_code = ${req.body.postCode}`);
    if(notice == "err") {
        res.send("err");
    } else {
        res.send(notice.rows);
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