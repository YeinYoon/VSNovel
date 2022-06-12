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
    if(req.body.contentsType == '' && req.body.category == 0) {
        var all = await db.execute(`SELECT * FROM tbl_novel`);
        if(all == "err") {
            res.send("err");
        } else {
            res.send(all.rows);
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

        var result = await db.execute(SQL);
        if(result == "err") {
            res.send("err");
        } else {
            console.log(result);
            res.send(result.rows);
        }

    }
})


module.exports = router;