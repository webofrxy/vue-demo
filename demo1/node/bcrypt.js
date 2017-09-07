'use strict'

const bcrypt = require("bcrypt-nodejs");

const password = "anchu";
const salt = "123"
bcrypt.genSalt(password,function(err,salt){
    console.log(salt)
bcrypt.hash(password,salt,'',function(err,hash){
    console.log(hash)
})
})