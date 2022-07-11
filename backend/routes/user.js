var express = require('express');
var router = express.Router();

const db = require('../database/db');

// 유저 이용가이드 체크
router.get('/tutorialCheck', async (req, res)=>{
    var data = await db.execute(`SELECT user_phelp FROM tbl_user WHERE user_id = '${req.user.USER_ID}'`);
    if(data == "err") {
        res.send("err");
    } else {
        res.send(data.rows[0]);
    }
})

router.get('/tutorialDisable', async (req, res)=>{
    var data = await db.execute(`UPDATE tbl_user SET user_phelp = 'Y' WHERE user_id = '${req.user.USER_ID}'`);
    if(data == "err") {
        res.send("err");
    } else {
        res.send("ok");
    }
})

module.exports = router;