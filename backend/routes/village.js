var express = require('express');
var router = express.Router();

const db = require('../database/db');

// 카페 리스트 불러오기
router.get('/getVillageList', async (req,res)=>{
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
router.post('/resVillageList', async (req,res)=>{
    var resVillage = await db.execute(`SELECT DISTINCT tbl_village.VILL_NAME FROM tbl_village_join, tbl_village WHERE tbl_village_join.USER_ID = '${req.body.id}'`);
    if(resVillage=="err") {
        res.send("err");
    } else {
        resVillage = resVillage.rows;
        res.send(resVillage);
    }
})
// 가입한 카페 정보
router.post('/infoVillageList', async (req,res)=>{
    console.log('호출');
    var resInfoVillage = await db.execute(`select * from tbl_village where vill_name = '${req.body.name}'`);
    if(resInfoVillage=="err") {
        res.send("err");
    } else {
        resInfoVillage = resInfoVillage.rows;
        console.log(resInfoVillage);
        res.send(resInfoVillage);
    }
})
// 유저가 카페 가입할 때
router.post('/joinVillageList', async (req,res)=>{

    var joinVillage = await db.execute(`INSERT INTO tbl_village_join(USER_ID, VILL_CODE, VJOI_STATUS) 
                                        VALUES ('${req.user.USER_ID}', ${req.body.code},'d');`);
    if(joinVillage=="err") {
        res.send("err");
    } else {
        joinVillage = joinVillage.rows;
        console.log(joinVillage);
        res.send(joinVillage);
    }
})

module.exports = router;