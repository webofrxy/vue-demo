'use strict'

/**
 * time-formater 时间格式化插件
*/
const tformat = require('time-formater')
const util = require('util')

const currentTime = tformat(); //默认为当前时间，也可以是指定的时间
console.log(currentTime)
console.log(currentTime.format('YYYY-MM-DD HH-MM-SS'))//参数是要格式化的时间格式
// console.log(util.inspect(tformat,true,3))