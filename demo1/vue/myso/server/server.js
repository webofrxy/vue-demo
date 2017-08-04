/*
*	载入依赖项
*	fs： 文件系统；
*	path: href解决方案
*	bod-parser： 解析Request body处理req
*	api： 处理前台请求的接口
**/
const fs = require('fs');
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const validator = require('express-validator');
const mongoose = require('mongoose');
const api = require('./api');
const app = express();
const resolve = file=>path.resolve(__dirname, file);

const cookieParser = require('cookie-parser')
const session=require('express-session');
const passport = require('passport');
const MongoStore = require('connect-mongo')(session);
const User = require('./db').User;

/*
*	监听8888端口
*	用JSON格式处理bodyParser请求
**/
// app.set('port',(process.env.port ||　8888));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: false}));
// app.use(cookieParser());
// app.use(session({
// 	secret: 'myso',
// 	resave: false,
// 	saveUninitialized: true,
// 	cookie: {secure: false},
// 	store: new MongoStore({ mongooseConnection: mongoose.connection }) //session存储位置
// }))
// app.use(passport.initialize());
// app.use(passport.session());

// //session显示出来
// app.use(function(req, res, next) {
// 	req.user = null;
// 	if(req.session.passport && req.session.passport.user){
// 		User.findById(req.session.passport.user, function(err,user) {
// 			if(err) return next(err);

// 			user.passport = null;
// 			req.user = user;

// 			next();
// 		})
// 	}else{
// 		next();
// 	}
// });

// //后端表单验证（首先去除空格）
// app.use(validator({
// 	errorFormatter: function (param, msg, value) {
// 		let namespace = param.split('.'),
// 			root = namespace.shift(),
// 			formParam = root;
// 		while(namespace.length){
// 			formParam+='['+namespace.shift()+']';
// 		}

// 		return {
// 			param: formParam,
// 			msg:msg,
// 			value:value
// 		}
// 	}
// }));

// require('./passport').init();

// app.use(api);  //最好放在下面

// /*
// *	设置静态资源目录为dist
// *	排除api接口的路由，向浏览器发送根文件
// **/
// app.use('/dist', express.static(resolve('../dist')));
// /*
// *	使用express中的get方法，查询页面路径，并返回callback的内容
// *	使用express.valicate中的originalUrl方法， 查询路由
// **/
// app.get('*', function(req, res, next) {
// 	if(req.originalUrl.indexOf('/article')!=0 || req.originalUrl.indexOf('/category')!=0 || req.originalUrl.indexOf('/favorite')!=0){
// 		const html = fs.readFileSync(resolve('../index.html'), 'utf-8');
// 		res.send(html)
// 	}else{
// 		next();
// 	}
// })
// app.listen(app.get('port'), function(){
// 	console.log('Server up: http://localhost:'+app.get('port'));
// })

app.set('port', (process.env.port || 8888));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
//app.set('view engine', 'ejs');
app.use(cookieParser());

app.use(session({
    secret: 'nodeblog',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
    store: new MongoStore({ mongooseConnection: mongoose.connection }) //session存储位置
}));
app.use(passport.initialize());
app.use(passport.session());
//app.use(flash());

//session显示出来
app.use(function (req, res, next) {
    req.user= null;
    if(req.session.passport && req.session.passport.user){
        User.findById(req.session.passport.user, function (err, user) {
            if(err) return next(err);

            user.passport= null;
            req.user= user;

            next();
        })
    }else{
        next();
    }
})

app.use(function (req, res, next) {
    //res.locals.messages = messages(req, res);
    res.user= req.user;
    //console.log('session data: '+ JSON.stringify(req.session), 'res app locals: '+res.user); //session 打印出来
    next();
});

//后端表单验证
app.use(validator({
    errorFormatter: function (param, msg, value) {
        let namespace=param.split('.'),
            root=namespace.shift(),
            formParam=root;

        while(namespace.length){
            formParam+='['+ namespace.shift() +']';
        }

        return {
            param:formParam,
            msg:msg,
            value:value
        };
    }
}));

require('./passport').init();

app.use(api);   //最好放在下边

/**
 * 设置静态资源目录为dist
 * 排除api接口的路由，向浏览器发送根文件
 */
app.use('/dist', express.static(resolve('../dist')));
app.get('*', function (req, res, next) {
    if(req.originalUrl.indexOf('/article')!=0 || req.originalUrl.indexOf('/category')!=0 || req.originalUrl.indexOf('/favorite')!=0) {
        const html = fs.readFileSync(resolve('../index.html'), 'utf-8');
        res.send(html);
    }else{
        next();
    }
});

app.listen(app.get('port'), function(){
    console.log('Server up: http://localhost:' + app.get('port'));
});
