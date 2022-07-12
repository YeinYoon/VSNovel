var express = require('express');
var router = express.Router();

const db = require('../database/db');
// const timestamp = require('../database/timestamp');

router.get('/getNovelList', async (req, res)=>{
    var result = await db.execute(`SELECT nove_code, (SELECT nove_title FROM tbl_novel WHERE tbl_novel.nove_code=tbl_possession.nove_code) as nove_title, (SELECT proj_code FROM tbl_novel WHERE tbl_possession.nove_code=tbl_novel.nove_code) as proj_code, (SELECT count(*) FROM tbl_novel WHERE tbl_novel.nove_code=tbl_possession.nove_code) as length FROM tbl_possession WHERE user_id = '${req.user.USER_ID}' GROUP BY nove_code`);
    if(result == "err") {
        res.send("err");
    } else {
        res.send(result.rows);
    }
})


router.get('/getEpList', async (req, res)=>{
    var result = await db.execute(`SELECT * FROM tbl_possession WHERE user_id='${req.user.USER_ID}'`);
    if(result == "err") {
        res.send("err");
    } else {
        res.send(result.rows);
    }
})









module.exports = router;