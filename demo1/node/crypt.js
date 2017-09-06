'use strict'
/**
 * node 自带的加密函数
*/
var crypto = require('crypto');
var scret = 'abd';
var hash = crypto.createHmac('sha256', scret).update('js is ok').digest('base64');//这里可以选择base64和hex
console.log(hash)
var hash_hex = crypto.createHmac('sha256', 'anchu').update('hello').digest('hex')
console.log(hash_hex)