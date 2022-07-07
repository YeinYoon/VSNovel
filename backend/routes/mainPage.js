var express = require('express');
var router = express.Router();

const db = require('../database/db');

router.get('/carousel', async (req, res)=>{
  var result = await db.execute(`SELECT * FROM tbl_banner ORDER BY bann_code ASC `);
  if(result == "err") {
    console.log("DB쿼리 실패");
  } else {
    console.log(result.rows)
   res.send(result.rows);
  }
})
router.get('/topPost', async (req, res)=>{
  var result = await db.execute(`select * from (select * from tbl_post where boar_code < 5 ORDER BY post_view desc ) where ROWNUM <= 4`);
  if(result == "err") {
    console.log("게시글 안뜸");
  } else {
   res.send(result.rows);
 
  }
})
router.get('/recentNotice', async (req, res)=>{
  var result = await db.execute(`select * from ( select * from tbl_post where boar_code >= 5 ORDER BY post_estadate desc ) where ROWNUM <= 4`);
  if(result == "err") {
    console.log("공지사항 안뜸");
  } else {
   res.send(result.rows);
 
  }
})

// 관리자 배너 조회
router.get('/getBanner', async(req, res) => {
  var result = await db.execute(`SELECT * FROM tbl_banner`);
  if(result == "err") {
    console.log("banner's not exist")
  } else {
    console.log(result.rows)
    res.send(result.rows)
  }
})

router.post('/addBanner', async(req, res) => {
  var result = await db.execute(`INSERT INTO tbl_banner(bann_code, nove_code, post_code, bann_img, bann_date) VALUES()`)
  if(result == "err") {
    console.log("do not function insert banner")
  } else {
    res.send("ok")
  }
})

router.post('/deleteBanner', async(req, res) => {
  var result = await db.execute(`DELETE FROM tbl_banner WHERE bann_code = '${req.body.BANN_CODE}'`)
  if(result == "err") {
    console.log("delete not function")
  } else {
    res.send("ok")
  }
})

// router.get('/getBannerList', async (req, res) => {
//   const result = await db.execute(`SELECT * FROM tbl_`)
// })

module.exports = router;
