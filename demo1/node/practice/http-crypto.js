'use strict'

const crypto = require('crypto');
const util = require('util');
crypto.randomBytes(128,function(err,salt){
    if(err){return err}
    salt = salt.toString('hex');
    crypto.pbkdf2('anchu',salt,10000,128,'sha512',function(err,hash){
        if(err){return err}
        hash = hash.toString('hex')//每次加密完后都是buffer的格式，需要转为字符串
    })
    
})
// console.log(util.inspect(crypto))