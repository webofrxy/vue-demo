'use strict'
const crypto = require('crypto')

const password = 'anchu';
const salt = () =>{
    var time = Date.now()%100, str='';
    time = time === 0?'00':String(time);
    for(let i = 0;i<8;i++){
        const base = Math.random < 0.5 ? 65 : 97;
        str += String.fromCharCode(base+Math.floor(Math.random()*26))
    }
    console.log(time)
    return time+str;//随机数加时间戳
}
// salt();
const md5 = (text) => {
    return crypto.createHash("md5").update(String(text)).digest("hex")
}
const encrypt = (password) =>{
    console.log(md5(password))
    console.log('----------------')
    console.log(salt())
    // console.log(md5(password)+salt())
    return md5(md5(password)+salt())
}
encrypt(password);
console.log("下面是crypto支持的加密算法")
console.log(crypto.getHashes())
