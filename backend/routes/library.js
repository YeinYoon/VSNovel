var express = require('express');
var router = express.Router();

const db = require('../database/db');
// const timestamp = require('../database/timestamp');

router.get('/getNovelList', async (req, res)=>{
    var result = await db.execute(`SELECT nove_code FROM tbl_possession WHERE user_id = '${req.user.USER_ID}' GROUP BY nove_code`);
    if(result == "err") {
        res.send("err");
    } else {
        res.send(result.rows);
    }
})


router.get('/getEpList', async (req, res)=>{
    var result = await db.execute(`SELECT p.poss_ep, p.poss_recentplay, p.poss_recentep, p.user_id, n.* FROM tbl_possession p, tbl_novel n
    WHERE p.nove_code = n.nove_code AND user_id='${req.user.USER_ID}'`);
    if(result == "err") {
        res.send("err");
    } else {
        res.send(result.rows);
    }
})









module.exports = router;