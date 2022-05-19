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
    console.log(req.body.id);
    var resVillage = await db.execute(`SELECT DISTINCT tbl_village.VILL_NAME FROM tbl_village_join, tbl_village WHERE tbl_village_join.USER_ID = '${req.body.id}'`);
    if(resVillage=="err") {
        res.send("err");
    } else {
        resVillage = resVillage.rows;
        res.send(resVillage);
        console.log(resVillage);
    }
})
// 가입한 카페 정보
router.post('/infoVillageList', async (req,res)=>{
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
    console.log(req.body.code);
    var userVillageCheck = await db.execute(`select * from tbl_village_join where VILL_CODE = ${req.body.code} and USER_ID='${req.user.USER_ID}'`);
    console.log(userVillageCheck.rows.length);
    console.log(userVillageCheck.rows.length==0);
    if(userVillageCheck.rows.length == 0){ // 이미 가입된 카페인지 확인
        var joinVillage = await db.execute(`INSERT INTO tbl_village_join(USER_ID, VILL_CODE, VJOI_STATUS) 
        VALUES ('${req.user.USER_ID}', ${req.body.code},'d')`);
        //에러가 안뜰대
        if(joinVillage!="err") {
            console.log('에러가 안 뜰 때');
            joinVillage = joinVillage.rows;
            var addVillageUnit = await db.execute(`UPDATE tbl_village SET VILL_USER_COUNT = VILL_USER_COUNT+1 WHERE VILL_CODE=${req.body.code}`);
            if(addVillageUnit != "err"){
                console.log("가입 완료 : " + joinVillage);
                res.send("가입 완료");
            }
        } else {
            console.log('끝');
            res.send(joinVillage);
        }
    }else{
        res.send("이미 가입된 카페입니다.");
    }
})

module.exports = router;