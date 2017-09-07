'use strict'
const crypto = require('crypto');//crypto中内置了OpenSSL模块
//通过伪随机码生成salt，进行加密
crypto.randomBytes(128, function (err, salt) {
    if (err) { throw err;}
    salt = salt.toString('hex');
    console.log(salt); //生成动态salt
    var txt = "anchu"
    //使用crypto.pbkdf2()函数，默认会调用hmac算法(数字签名)，用sha1的散列函数，并且可以设置迭代次数和密文长度
    //第五个参数digest是选择加密算法名称，256位密文，4096次迭代次数
    crypto.pbkdf2(txt, salt, 4096, 256, 'sha512', function (err,hash) {
        if (err) { throw err; }
        hash = hash.toString('hex');
        console.log(hash);//生成密文
    })
})