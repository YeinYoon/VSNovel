var express = require('express');
var router = express.Router();

const db = require('../database/db');
const timestamp = require('../database/timestamp');


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

    var postList = await db.execute(`SELECT * FROM tbl_post WHERE boar_code = ${boardCode} ORDER BY post_estadate DESC`);
    if(postList == "err") {
        res.send("err");
    } else {
        res.send(postList.rows);
    }

})

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

    var viewUp = await db.execute(`UPDATE tbl_post SET post_view = post_view + 1
    WHERE boar_code = ${boardCode} AND post_code = ${req.body.postCode}`);
    if(viewUp == "err") {
        console.log("조회수 증가 실패...");
    } else {
        console.log("해당 포스트에 대한 조회수 증가");
    }    

    var post = await db.execute(`SELECT * FROM tbl_post WHERE boar_code = ${boardCode} AND post_code=${req.body.postCode}`);
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
        tbl_post_seq.NEXTVAL, '${req.user.USER_ID}', ${boardCode},
        '${req.body.title}', '${req.body.content}', 0, null, '${newTime}', '${req.user.USER_NICKNAME}')`);
    if(posting == "err") {
        res.send("err");
    } else {

        var postCode = await db.execute(`SELECT post_code FROM tbl_post WHERE
        post_title = '${req.body.title}' AND user_id = '${req.user.USER_ID}' AND
        post_estadate = '${newTime}'`);

        console.log(postCode.rows);
        var createCommentSeq = await db.execute(`CREATE SEQUENCE tbl_comment_${postCode.rows[0].POST_CODE}_seq
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



// 포스트 수정
router.post('/editPost', async (req,res)=>{
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
    
    var result = await db.execute(`UPDATE tbl_post SET post_title = '${req.body.title}', post_content = '${req.body.content}'
    WHERE boar_code = ${boardCode} AND post_code = ${req.body.postCode}`);
    if(result == "err") {
        res.send("err");
    } else {
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
    WHERE boar_code = ${boardCode} AND post_code = ${req.body.postCode}`);
    if(result == "err") {
        res.send("err");
    } else {
        var dropCommentSeq = await db.execute(`DROP SEQUENCE tbl_comment_${req.body.postCode}_seq`);
        if(dropCommentSeq == "err") {
            console.log("해당 포스트에 대한 댓글 시퀀스 삭제 실패...");
        } else {
            console.log("해당 포스트에 대한 댓글 시퀀스 삭제 성공");
        }
        res.send("ok");
    }
})



router.post('/getCommentList', async(req, res)=>{
    var result = await db.execute(`SELECT * FROM tbl_comment WHERE post_code = ${req.body.postCode}`);
    if(result == "err") {
        res.send("err");
    } else {
        res.send(result.rows);
    }
})


router.post('/commenting', async(req, res)=>{
    var newTime = timestamp.getTimestamp();
    var result = await db.execute(`INSERT INTO tbl_comment VALUES(
        ${req.body.postCode}, tbl_comment_${req.body.postCode}_seq.NEXTVAL, '${req.user.USER_ID}',
        '${req.body.content}', null, '${newTime}', '${req.user.USER_NICKNAME}'
    )`);

    if(result == "err") {
        res.send("err");
    } else {
        res.send("ok");
    }
})

router.post('/communityModal',async(req,res)=>{
    var list = []
    for(let i = 0; i<req.body.pcode.length; i++){
        var modalpost = await db.execute(`SELECT POST_TITLE FROM tbl_post WHERE post_code=${req.body.pcode[i]}`);
        list.push(modalpost.rows[0].POST_TITLE)
    }
    res.send(list)
})

router.post('/novelSearch',async(req,res)=>{
    var result = await db.execute(`SELECT nove_path, nove_title FROM tbl_novel where nove_title like '${req.body.novelSearch}%' 
    AND nove_code = (SELECT nove_code FROM tbl_possession WHERE USER_ID = '${req.user.USER_ID}')`);

    if(result == "err") {
        res.send("err");
    } else {
        res.send(result.rows);
    }
})


router.post('/getReviewList', async(req,res)=>{

    var ReviewList = await db.execute(`SELECT * FROM tbl_score ORDER BY scor_estadate DESC`);
    if(ReviewList == "err") {
        res.send("err");
    } else {
        console.log(ReviewList)
        res.send(ReviewList.rows);
    }

})


router.post('/getReview', async (req,res)=>{

    // 조회수 증가
    var ReviewUp = await db.execute(`UPDATE tbl_score SET scor_view = scor_view + 1 WHERE scor_code = ${req.body.scorCode}`); 
    if(ReviewUp == "err") {
        console.log("조회수 증가 실패...");
    } else {
        console.log("해당 포스트에 대한 조회수 증가");
    }    

    // 본문조회 리뷰
    var Reviewpost = await db.execute(`SELECT * FROM tbl_score WHERE scor_code = ${req.body.scorCode}`);
    if(Reviewpost == "err") {
        console.log("err");
        res.send("err");
    } else {
        console.log(Reviewpost);
        res.send(Reviewpost.rows);
    }

})


router.post('/reviewPosting', async(req, res)=>{

    var newTime = timestamp.getTimestamp();
    var ReviewPosting = await db.execute(`INSERT INTO tbl_score VALUES(
        tbl_score_seq.NEXTVAL, '${req.user.USER_ID}', (select nove_code from tbl_novel WHERE nove_title = '${req.body.selectNovel}'),
        '${req.body.content}', '${req.body.score}', '${req.body.title}', 0, '${req.user.USER_NICKNAME}', '${newTime}')`);
    if(ReviewPosting == "err") {
        res.send("err");
    } else {
        res.send("ok");
    }
})

// 포스트 수정
router.post('/reviewEditPost', async (req,res)=>{
    
    var result = await db.execute(`UPDATE tbl_score SET nove_code = (select nove_code from tbl_novel WHERE nove_title = '${req.body.selectNovel}') ,scor_title = '${req.body.title}', scor_content = '${req.body.content}', scor_score = '${req.body.score}' WHERE scor_code = '${req.body.scorCode}'`) ;
    if(result == "err") {
        res.send("err");
    } else {
        res.send("ok");
    }    
})

//포스트 삭제
router.post('/reviewDeletePost', async(req, res)=>{

    var result = await db.execute(`DELETE FROM tbl_score WHERE scor_code = '${req.body.scorCode}'`);
    if(result == "err") {
        res.send("err");
    } else {
        res.send("ok");
    }
})

module.exports = router;
