var express = require('express');
var router = express.Router();

const db = require('../database/db');

// 마이페이지 프로필 불러오기
router.get('/mypagemain', async(req, res) => {
    console.log(req.user.USER_ID)
    const result = await db.execute(`SELECT user_nickname, user_intro from tbl_user WHERE user_id = '${req.user.USER_ID}'`)
    if(result == 'err') {
        console.log("sry");
    } else {
        console.log(result)
        res.send(result.rows);
        console.log(result.rows);
    }
})

// 마이페이지 프로필 설정
router.post('/updateProfile', async(req,res)=>{
    const result = await db.execute(`UPDATE tbl_user SET user_nickname = '${req.body.newNickname}', user_intro = '${req.body.newIntro}' WHERE user_id = '${req.user.USER_ID}'`)
    if(result == 'err') {
        res.send("err");
    } else {
        res.send("ok");
    }
})

// 결제정보 불러오기
router.get('/mycard', async (req,res) => {
    const result = await db.execute(`SELECT USER_CARDNUM from tbl_user WHERE user_id = '${req.user.USER_ID}'`)
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

// 선호비선호 불러오기
router.get('/getprefer', async(req, res) => {
    const favorite = await db.execute(`SELECT cate_code from tbl_favorite_category WHERE user_id = '${req.user.USER_ID}'`)
    const hate = await db.execute(`SELECT cate_code from tbl_hate_category WHERE user_id = '${req.user.USER_ID}'`)
    const result = {
        favorite : favorite.rows,
        hate : hate.rows
    }
    if(favorite == 'err' || hate == 'err') {
        console.log('getprefer Sry');
    } else {
        console.log('getprefer Good');
        res.send(result);
    }
})

// 선호비선호 설정
router.post('/postprefer', async(req, res) => {
    const favorite = req.body.favorite;
    const hate = req.body.hate;
    await db.execute(`DELETE FROM tbl_favorite_category WHERE user_id = '${req.user.USER_ID}'`)
    await db.execute(`DELETE FROM tbl_hate_category WHERE user_id = '${req.user.USER_ID}'`)
    
    Object.keys(favorite).forEach(async function(value){
        await db.execute(`INSERT INTO tbl_favorite_category ( user_id, cate_code ) VALUES ( '${req.user.USER_ID}' , ${value} )`)
        console.log(favorite[value])
    })

    Object.keys(hate).forEach(async function(value) {
        await db.execute(`INSERT INTO tbl_hate_category ( user_id, cate_code ) VALUES ( '${req.user.USER_ID}' , ${value} )`)
    })
    res.send('ok')
})

// 장르 불러오기
router.get('/genre', async(req, res)=>{
    const genre = await db.execute('SELECT * from tbl_category')
    res.send(genre)
    console.log(genre);
})

// 알람 (미정)
router.get('/getalarm', async(req, res) => {
    const result = await db.execute(`select user_noti from tbl_user where user_id = '${req.user.USER_ID}'`)
    if(result == 'err') {
        console.log('sry');
    } else {
        console.log('good');
        this.result = result.rows
        res.send(this.result)
        console.log(this.result)
    }
})

// 알람 (미정)
router.post('/postalarm', async(req, res) => {
    const result = await db.execute(null)
    res.send(result)
})

// 회원 탈퇴
router.post('/postconfirm', async(req, res) => {
    const result = await db.execute(null)
    // `DELETE FROM tbl_user WHERE user_id = '${req.user.USER_ID}'`
    req.logout();
    req.session.destroy()
    res.send(result)
})
// select tbl_board.boar_title, tbl_post.post_title, tbl_post.post_vote, tbl_post.post_view, 
// (select count(*) from tbl_comment where vill_code = -1) "조회수"
// from tbl_post, tbl_board, tbl_village, tbl_novel
// where tbl_post.nove_code = tbl_novel.nove_code and
//                                      tbl_post.cate_code = tbl_novel.cate_code and
//                                      tbl_village.vill_code = tbl_board.vill_code and
//                                      tbl_board.vill_code = tbl_post.vill_code and
//                                      tbl_board.boar_code = tbl_post.boar_code and
//                                      tbl_village.vill_code = -1
// group by tbl_board.boar_title, tbl_post.post_title, tbl_post.post_vote, tbl_post.post_view
// 게시글 불러오기
router.get('/getpost', async(req, res) => {
    var result = await db.execute(`SELECT tbl_board.boar_title, tbl_post.post_title, tbl_post.post_vote, tbl_post.post_view,
                                    (select count(*) from tbl_comment where vill_code = -1) "댓글수"
                                    from tbl_post, tbl_board, tbl_village, tbl_novel
                                    WHERE tbl_post.nove_code = tbl_novel.nove_code and
                                    tbl_post.cate_code = tbl_novel.cate_code and
                                    tbl_village.vill_code = tbl_board.vill_code and
                                    tbl_board.vill_code = tbl_post.vill_code and
                                    tbl_board.boar_code = tbl_post.boar_code and
                                    tbl_village.vill_code = -1 and
                                    user_id = '${req.user.USER_ID}'
                                    group by tbl_board.boar_title, tbl_post.post_title, tbl_post.post_vote, tbl_post.post_view`)
    if(result == 'err') {
        res.send('fail')
    } else {
        result = result.rows
        res.send(result)
        console.log(result)
    }
})
// router.get('/getpost', async(req, res) => {
//     let data = [];
//     let object = await db.execute(`SELECT vill_code, boar_code, post_code FROM tbl_post WHERE user_id = '${req.user.USER_ID}'`);
//     object.rows.forEach(async function(row, index){
//         console.log("row : "+row+"user : "+req.user.USER_ID)
//         const result = await db.execute(`select count(*) as cnt 
//         from tbl_comment 
//         where post_code = '${row.POST_CODE}' 
//         and boar_code = '${row.BOAR_CODE}' 
//         and vill_code = '${row.VILL_CODE}'`)
//         console.log(result.rows[0])
//         console.log(result.rows)
//         object.rows[index].CNT=result.rows[0].CNT //조금만 더 고쳐보셈!!
//         data.push(result.rows[0].CNT)
//         console.log(object)
//     });
//     function clone(obj) {
//         let output = {};
//         for(let i in obj) {
//             output[i] = obj[i];
//         }
//         return output;
//     }
//     let cloned = clone(object.rows)
//     if(object == 'err') {
//         console.log('sry');
//     } else {
//         res.send(JSON.stringify(cloned));
//     }
// })

// 리뷰 불러오기
router.get('/getreview', async(req, res) => {
    var result = await db.execute(`SELECT tbl_post.post_title, tbl_novel.nove_title, tbl_post.post_content, tbl_novel.nove_cover
                                     FROM tbl_novel, tbl_post, tbl_village, tbl_board
                                     where tbl_post.nove_code = tbl_novel.nove_code and
                                     tbl_post.cate_code = tbl_novel.cate_code and
                                     tbl_village.vill_code = tbl_board.vill_code and
                                     tbl_board.boar_code = tbl_post.boar_code and
                                     tbl_village.vill_code = -1 and tbl_board.boar_code = 3 and
                                     user_id = '${req.user.USER_ID}'`)
    if(result == "err") {
        res.send("fail")
    } else {
        result = result.rows;
        console.log(result);
        res.send(result)
    }
})


module.exports = router;