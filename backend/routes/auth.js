var express = require('express');
var router = express.Router();

var bcrypt = require('bcrypt');
const passport = require('passport');
const {isNotLogin, isLogin} = require('./middlewares/loginCheck');

var oracle = require('oracledb');
var dbConfig = require('../db/oracleConfig');
oracle.autoCommit = true; // 자동커밋
oracle.outFormat = oracle.OBJECT; //데이터 주고받는 형식 : 객체


//회원가입
router.post('/signUp', (req,res)=>{
  oracle.getConnection(dbConfig, (err, conn)=>{
    if(err) {
      console.log('DB접근 실패');
      console.error(err);
    } else {

      conn.execute(`SELECT * FROM tbl_user WHERE user_id = '${req.body.newId}'`,
      async (err, result)=>{
        if(err) {
          console.error(err);
        } else {

          if(result.rows.length != 0) { //동일한 아이디가 존재할 경우
            console.log(result.rows);
            res.send("이미 존재하는 아이디입니다.");
            conn.close();
          } else {

            var cryptPw = await bcrypt.hash(req.body.newPw, 12);

            conn.execute(`INSERT INTO tbl_user(user_id, user_pwd, user_email, user_nickname, user_name, user_sex, user_phone, user_cardnum)
            VALUES('${req.body.newId}','${cryptPw}','${req.body.newEmail}','${req.body.newNickname}','${req.body.newName}','${req.body.newSex}',${req.body.newPhone},${req.body.newCardnum})`,
            (err)=>{
              if(err) {
                console.error(err);
              } else {
                res.send('ok');
                conn.close();
              }
            })

          }

        }
      })

    }
  })
})

// 로그인
router.post('/login', isNotLogin, (req,res,next)=>{
  passport.authenticate('local', (err, user, info)=>{
    if(err) {
      console.error(err);
      res.send("로그인 에러");
      return next(err);
    }
    if(!user) {
      return res.send(info.msg); // 가입된 회원이 아니거나, 비밀번호가 틀린 경우
    }
    return req.login(user, (err)=>{
      if(err) {
        console.error(err);
        res.send(err);
        return next(err);
      } else {
        return res.send('ok');
      }
    })

  })(req,res,next);
});

// 로그아웃
router.get('/logout', isLogin, (req,res)=>{
  req.logout();
  req.session.destroy();
  res.send('ok');
})

// 로그인 체크
router.get('/loginCheck', (req, res)=>{
  if(req.isAuthenticated()) {
    res.send(req.user);
  } else {
    res.send(null);
  }
})

module.exports = router;
