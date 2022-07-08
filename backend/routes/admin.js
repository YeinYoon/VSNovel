var express = require('express');
var router = express.Router();

const db = require('../database/db');

// 카페 리스트 불러오기
router.get('/allUnitList', async (req,res)=>{
    var allUnit = await db.execute(`SELECT * FROM tbl_user`);
    if(allUnit=="err") {
        res.send("err");
        console.log('error');
    } else {
        allUnit = allUnit.rows;
        console.log(allUnit);
        res.send(allUnit);
    }
})

router.get('/allPostList', async (req,res)=>{
    var allPost = await db.execute(`SELECT * FROM tbl_post`);
    if(allPost=="err") {
        res.send("err");
        console.log('error');
    } else {
        allPost = allPost.rows;
        res.send(allPost);
    }
})

router.get('/allNovelList', async (req,res)=>{
    var allNovel = await db.execute(`SELECT * FROM tbl_novel`);
    if(allNovel=="err") {
        res.send("err");
        console.log('error');
    } else {
        allNovel = allNovel.rows;
        res.send(allNovel);
    }
})

router.post('/delUnit', async (req,res)=>{
    console.log(req.body.unitId)
    const result = await db.execute(`DELETE FROM tbl_user WHERE USER_ID = ${req.body.unitId}`);
    res.send(result)
})

router.post('/delPost', async (req,res)=>{
    console.log(req.body.postCd)
    const result = await db.execute(`DELETE FROM tbl_post WHERE POST_CODE = ${req.body.postCd}`);
    res.send(result)
})

router.post('/delNovel', async (req,res)=>{
    console.log(req.body.novelCd)
    const result = await db.execute(`DELETE FROM tbl_novel WHERE NOVE_CODE = ${req.body.novelCd}`);
    res.send(result)
})

module.exports = router;
