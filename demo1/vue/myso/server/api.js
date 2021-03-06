// 可能是我的node版本问题，不用严格模式使用ES6语法会报错
"use strict";
const models = require('./db');
const mongoose = require('mongoose')
const express = require('express');
const router = express.Router();

/************** 创建(create) 读取(get) 更新(update) 删除(delete) **************/

// 创建账号接口
router.post('/api/login/createAccount',(req,res) => {
    // 这里的req.body能够使用就在index.js中引入了const bodyParser = require('body-parser')
    let newAccount = new models.Login({
        account : req.body.account,
        password : req.body.password
    });
    // 保存数据newAccount数据进mongoDB
    newAccount.save((err,data) => {
        if (err) {
            res.send(err);
        } else {
            res.send('createAccount successed');
        }
    });
});
// 获取已有账号接口
router.get('/api/login/getAccount',(req,res) => {
    console.log(res)
    // 通过模型去查找数据库
    models.Login.find((err,data) => {
        if (err) {
            console.log(err);
            res.send(err);
        } else {
            console.log(data);
            res.send(data);
        }
    });
});

//查看文章
router.get('/api/saveArticle',(req,res) => {
    console.log(1)

    models.Article.find((err, data) => {
        if(err) {
            console.log(err);
            res.send(err);
        }else{
            console.log(data);
            res.send(data);
        }
    })
})
//新建文章(如果这个api接口已经get连接成功过，则重新post会报404，所以遇到404问题可以重写新函数新路径)
router.post("/api/changeArticle",(req,res) => {
    
    let articleInfo = new models.Article(req.body.articleInformation).save((err,data) => {
    
        if(err) {
            console.log(1)
            res.send(err)
        }else{
            console.log(data)
            res.send('新建文章成功')
        }
    })
})
//文章列表
router.get('/api/admin/articleList',(req,res) => {
    models.Article.find(function(err,data){
        if(err) {
            console.log(err);
            res.send(err);
        }else{
            console.log(data);
            res.send(data);
        }
    })
})
//删除文章
// router.post('/api/admin/deletArticle',(req,res) => {
//     models.Article.remove({title:req.body.title}, function(err,data){
//         if(err){
//             console.log(err);
//             res.send(err);
//         }else{
//             console.log(data);
//             res.send(data);
//         }
//     })
// })
router.post('/api/admin/deleArticle',(req,res) => {
    models.Article.remove({title:req.body.title}, function(err,data){
        if(err){
            console.log(err);
            res.send(err);
        }else{
            console.log(data);
            res.send(data);
        }
    })
})
module.exports = router;

// const express = require('express');
// const mongoose = require('mongoose');
// const slug=require('slug');
// const pinyin = require("pinyin");
// const md5 = require("md5");
// const passport = require('passport');
// const router = express.Router();
// const db = require('./db');

/**
 * API implacement
 * 接口符合RESTful风格
 */

//let n=0;  //for trace output
/**
*注册
*/
// router.post('/reg', function(req, res, next){
//     const email = req.body.email;
//     const password = req.body.password;
//     const comfirPassword = req.body.comfirmPassword;

//     console.log('email:'+email, 'pass:'+password, 'repass:'+comfirPassword);
//     //服务器端验证字段
//     req.checkBody('email', '必须为邮箱且不能为空').notEmpty().isEmail();
//     req.checkBody('password', '密码不能为空').notEmpty();
//     req.checkBody('comfirmPassword').notEmpty().equals(password);

//     let errors = req.validationErrors();
//     console.log(errors);
//     if(errors){
//         return res.status(301).send(errors).end();
//     }

//     const user = new db.User({
//         name: email.split('@').shift(),
//         email: email,
//         password: md5(password),
//         created: new Date
//     });

//     user.save(function(err, result){
//         if(err) {
//             console.log('reg err:'+err);
//             throw err;
//         }else{
//             console.log('用户注册成功info：'+n++);
//             res.status(200).send(JSON.stringify(result)).end();
//         }
//     })
// })

// module.exports = router;