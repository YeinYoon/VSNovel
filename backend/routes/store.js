var express = require('express');
var router = express.Router();

const db = require('../database/db');

const timestamp = require('../database/timestamp');

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
    if(req.body.contentsType == '' && req.body.category == 0) {

        if(req.body.priceType == 'on') {
            var price = await db.execute(`SELECT * FROM tbl_novel WHERE nove_price > 0`);
            if(price == "err") {
                res.send("err");
            } else {
                res.send(price.rows);
            }
        } else if(req.body.priceType == 'off') {
            var nonPrice = await db.execute(`SELECT * FROM tbl_novel WHERE nove_price = 0`);
            if(nonPrice == "err") {
                res.send("err");
            } else {
                res.send(nonPrice.rows);
            }       
        } else {
            var all = await db.execute(`SELECT * FROM tbl_novel`);
            if(all == "err") {
                res.send("err");
            } else {
                res.send(all.rows);
            }
        }

    } else if(req.body.contentsType == '' && req.body.category != 0) {

        if(req.body.priceType == 'on') {
            var catePrice = await db.execute(`SELECT * FROM tbl_novel WHERE nove_price > 0 AND cate_code = ${req.body.category}`);
            if(catePrice == "err") {
                res.send("err");
            } else {
                res.send(catePrice.rows);
            }
        } else if(req.body.priceType == 'off') {
            var nonPriceCate = await db.execute(`SELECT * FROM tbl_novel WHERE nove_price = 0 AND cate_code = ${req.body.category}`);
            if(nonPriceCate == "err") {
                res.send("err");
            } else {
                res.send(nonPriceCate.rows);
            }       
        } else {
            var cateAll = await db.execute(`SELECT * FROM tbl_novel WHERE cate_code = ${req.body.category}`);
            if(cateAll == "err") {
                res.send("err");
            } else {
                res.send(cateAll.rows);
            }
        }

    } else {

        var existCategory = false;
        if(req.body.category != 0) {
            existCategory = true;
        }

        var priceSql;
        switch(req.body.priceType) {
            case 'none' :
                priceSql = '';
                break;
            case 'on' :
                priceSql = ' nove_price > 0 ';
                break;
            case 'off' :
                priceSql = ' nove_price = 0 ';
                break;
        }

        var SQL; 
        switch(req.body.contentsType) {
            case 'release' :
                if(existCategory == false && priceSql == '') {
                    SQL = `SELECT * FROM tbl_novel ORDER BY nove_release DESC`;
                } else if(existCategory == true && priceSql == '') {
                    SQL = `SELECT * FROM tbl_novel
                    WHERE cate_code = ${req.body.category}
                    ORDER BY nove_release DESC`
                } else {
                    SQL = `SELECT * FROM tbl_novel
                    WHERE cate_code = ${req.body.category} AND`
                    + priceSql +
                    `ORDER BY nove_release DESC`
                }
                break;
            case 'bought' :
                if(existCategory == false && priceSql == '') {
                    SQL = `SELECT * FROM tbl_novel ORDER BY nove_bought DESC`;
                } else if(existCategory == true && priceSql == '') {
                    SQL = `SELECT * FROM tbl_novel
                    WHERE cate_code = ${req.body.category}
                    ORDER BY nove_bought DESC`
                } else {
                    SQL = `SELECT * FROM tbl_novel
                    WHERE cate_code = ${req.body.category} AND`
                    + priceSql +
                    `ORDER BY nove_bought DESC`
                }
                break;
            case 'review' :
                if(existCategory == false && priceSql == '') {
                    SQL = `SELECT * FROM tbl_novel ORDER BY nove_review DESC`;
                } else if(existCategory == true && priceSql == '') {
                    SQL = `SELECT * FROM tbl_novel
                    WHERE cate_code = ${req.body.category}
                    ORDER BY nove_review DESC`
                } else {
                    SQL = `SELECT * FROM tbl_novel
                    WHERE cate_code = ${req.body.category} AND`
                    + priceSql +
                    `ORDER BY nove_review DESC`
                }
                break;
        }

        console.log(SQL);
        var result = await db.execute(SQL);
        if(result == "err") {
            res.send("err");
        } else {
            res.send(result.rows);
        }

    }
})

// 스토어 상세페이지 배너 불러오기
router.get('/getbanner', async(req, res) => {
    var result = await db.execute(`SELECT * FROM tbl_banner`)
    if(result == "err") {
        res.send("err");
    } else {
        console.log(result.rows)
        res.send(result.rows)
    }
})

// 이 소설을 유저가 소유했는가
router.post('/getUserPossession', async (req, res)=>{ 
    var result = await db.execute(`SELECT * FROM tbl_possession
    WHERE user_id = '${req.user.USER_ID}' AND nove_code = ${req.body.noveCode}`);
    if(result == "err") {
        res.send("err");
    } else {
        res.send(result.rows);
    }

})

router.post('/addUserPossession', async (req, res)=>{
    var newTime = timestamp.getTimestamp();
    var result = await db.execute(`INSERT INTO tbl_possession VALUES(
        ${req.body.ep}, '${req.user.USER_ID}', ${req.body.noveCode},
        ${req.body.price}, 'B', '${newTime}', null, '${req.body.payCode}', null
    )`);
    
    if(result == "err") {
        res.send("err");
    } else {
        res.send("ok");
    }
})

module.exports = router;