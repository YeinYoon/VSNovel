var express = require('express');
var router = express.Router();

const db = require('../database/db');

router.get('/carousel', async (req, res)=>{
  var result = await db.execute(`SELECT * FROM tbl_banner`);
  if(result == "err") {
    console.log("DB쿼리 실패");
  } else {
   res.send(result.rows);
  }
})

// router.get('/getBannerList', async (req, res) => {
//   const result = await db.execute(`SELECT * FROM tbl_`)
// })

module.exports = router;
