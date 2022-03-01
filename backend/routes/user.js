var express = require('express');
var router = express.Router();

var oracle = require('oracledb');
var dbConfig = require('../db/oracleConfig');
oracle.autoCommit = true;
oracle.outFormat = oracle.OBJECT;

router.post('/test', (req,res)=>{
  oracle.getConnection(dbConfig, (err, conn)=>{
    if(err) {
      console.log('DB접근 실패');
    } else {
      //insert into test1 values('${user.id}','${user.pw}')
      //var user = {
      //  id : req.body.id,
      //  pw : req.body.pw
      //}
      conn.execute(`select * from test1`,
      (err,result)=>{
        if(err) {
          console.error(err);
        } else {
          console.log('결과값 : ' + result);
          res.send(result);
        }
      });

    }
  })
})




module.exports = router;
