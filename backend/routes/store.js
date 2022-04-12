var express = require('express');
var router = express.Router();

const db = require('../database/db');

//카테고리 불러오기
router.get('/getCateList', async (req,res)=>{
    var result = await db.execute(`SELECT * FROM tbl_category`);
    if(result == "err") {
        res.send("err");
    } else {
        result = result.rows;
        console.log(result);
        res.send(result);
    }
})

//소설 리스트 불러오기
router.post('/getNovelList', async (req,res)=>{
    if(req.body.novelType == "" && req.body.cateCode == "") { //조건 없이 전체 조회
        var allNovel = await db.execute(`SELECT * FROM tbl_novel`);
        if(allNovel=="err") {
            res.send("err");
        } else {
            allNovel = allNovel.rows;
            console.log(allNovel);
            res.send(allNovel);
        }
    } else if(req.body.cateCode=="") { // 노벨 타입만 있을 때
        var typeNovel = await db.execute(`SELECT * FROM tbl_novel WHERE nove_form = '${req.body.novelType}'`);
        if(typeNovel == "err") {
            res.send("err");
        } else {
            typeNovel = typeNovel.rows;
            console.log(typeNovel);
            res.send(typeNovel);
        }
    } else if(req.body.novelType == ""){ // 카테고리 타입만 있을 때 
        var cateNovel = await db.execute(`SELECT * FROM tbl_novel WHERE cate_code = '${req.body.cateCode}'`)
        if(cateNovel == "err") {
            res.send("err");
        } else {
            cateNovel = cateNovel.rows;
            console.log(cateNovel);
            res.send(cateNovel);
        }
    } else { // 두개의 조건이 모두 있을 때
        var searchNovel = await db.execute(`SELECT * FROM tbl_novel
        WHERE nove_form = '${req.body.novelType}' AND cate_code = '${req.body.cateCode}'`);
        if(searchNovel == "err") {
            res.send("err");
        } else {
            searchNovel = searchNovel.rows;
            console.log(searchNovel);
            res.send(searchNovel);
        }
    }

    
})


module.exports = router;