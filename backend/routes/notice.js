var express = require('express');
var router = express.Router();

const db = require('../database/db');
const timestamp = require('../database/timestamp');


// 공지사항 글 불러오기
router.post('/getNoticeList', async(req,res)=>{
    let SQL;
    switch(req.body.select) {
        case 'U' :
            SQL = `SELECT * FROM tbl_post WHERE vill_code = -1 AND boar_code = 5 ORDER BY post_estadate DESC`;
            break;
        case 'E' :
            SQL = `SELECT * FROM tbl_post WHERE vill_code = -1 AND boar_code = 6 ORDER BY post_estadate DESC`;
            break;        
        case 'P' :
            SQL = `SELECT * FROM tbl_post WHERE vill_code = -1 AND boar_code = 7 ORDER BY post_estadate DESC`;
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


//공지사항 포스팅
router.post('/posting', async(req, res)=>{
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

    var newTime = timestamp.getTimestamp();
    var posting = await db.execute(`INSERT INTO tbl_post VALUES(
        '${req.user.USER_ID}', -1, ${boardCode}, tbl_post_main_${boardCode}_seq.NEXTVAL,
        '${req.body.title}', '${req.body.content}', 0, 0, '${newTime}', '${newTime}',
        0, 0, null, null, null, '${req.user.USER_NICKNAME}')`);
    if(posting == "err") {
        res.send("err");
    } else {
        res.send("ok");
    }
})


// 공지사항 수정
router.post('/editPost', async (req,res)=>{
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
    
    var result = await db.execute(`UPDATE tbl_post SET post_title = '${req.body.title}', post_content = '${req.body.content}'
    WHERE vill_code = -1 AND boar_code = ${boardCode} AND post_code = ${req.body.postCode}`);
    if(result == "err") {
        res.send("err");
    } else {
        res.send("ok");
    }    
})



router.post('/deletePost', async(req, res)=>{
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

    var result = await db.execute(`DELETE FROM tbl_post
    WHERE vill_code = -1 AND boar_code = ${boardCode} AND post_code = ${req.body.postCode}`);
    if(result == "err") {
        res.send("err");
    } else {
        res.send("ok");
    }
})


module.exports = router;