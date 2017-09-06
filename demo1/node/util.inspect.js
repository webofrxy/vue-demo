'use strict'

const util = require('util')
console.log(util.inspect(util,false,null))
console.log(typeof util.inspect(util,true,null))//用于将对象转化为字符串的形式，第一个参数为对象，第二个参数为非枚举类型是否显示，第三个参数为递归的深度