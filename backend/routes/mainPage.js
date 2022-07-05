var express = require('express');
var router = express.Router();

const db = require('../database/db');

router.get('/carousel', async (req, res)=>{
  var result = await db.execute(`SELECT * FROM tbl_banner`);
  if(result == "err") {
    console.log("DB쿼리 실패");
  } else {
   res.send(result);
 
  }
})
router.get('/topPost', async (req, res)=>{
  var result = await db.execute(`select * from (select * from tbl_post where boar_code < 5 ORDER BY post_view desc ) where ROWNUM <= 51`);
  if(result == "err") {
    console.log("게시글 안뜸");
  } else {
   res.send(result.rows);
 
  }
})


module.exports = router;
