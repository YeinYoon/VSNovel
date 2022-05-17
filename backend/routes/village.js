var express = require('express');
var router = express.Router();

const db = require('../database/db');

// 카페 리스트 불러오기
router.get('/getvillagelist', async (req,res)=>{
    var allVillage = await db.execute(`SELECT * FROM tbl_village`);
    if(allVillage=="err") {
        res.send("err");
        console.log('error');
    } else {
        allVillage = allVillage.rows;
        console.log(allVillage);
        res.send(allVillage);

    }
})
// 가입한 카페 리스트
router.post('/resvillagelist', async (req,res)=>{
    console.log("aaaaaaaaaaaaaaaaaa : " + req.body.id);
    var resVillage = await db.execute(`SELECT * FROM tbl_village_join, tbl_village WHERE tbl_village_join.USER_ID = ${req.body.id}`);
    if(resVillage=="err") {
        res.send("err");
    } else {
        resVillage = resVillage.rows;
        res.send(resVillage);
    }
})
module.exports = router;