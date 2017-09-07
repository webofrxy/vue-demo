'use strict'

const express = require('express');
const session = require('express-session');
const cookieParser = require('cookie-parser');

const app = express();
app.use(cookieParser());
app.use(session({
    secret: 'hubwiz app', //secret的值建议使用随机字符串
    cookie: {maxAge: 60 * 1000 * 30}, // 过期时间（毫秒）
    resave: false,
    saveUninitialized: true
}));
app.get('/', function (req, res) {
    if (req.session.sign) {//检查用户是否已经登录
        console.log(req.session);//打印session的值
        // res.writeHead(200,{'Content-type':"text/html"});
        res.send('welecome <strong>' + req.session.name + '</strong>, 欢迎你再次登录');
    } else {//否则展示index页面
        req.session.sign = true;
        req.session.name = 'anchu';
        res.end('欢迎登陆！');
    }
});

app.listen(8000);