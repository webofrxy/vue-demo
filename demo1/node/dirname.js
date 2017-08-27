'use strict'

var path = require("path");
//第一种是在当前目录后面添加一个/static路径,错误的用法
console.log(__dirname+'/static');
//第二中是直接到第二个参数所在的目录下,这是path.resolve的错误的用法，缺少一个点.,第三种为正确的用法
console.log(path.resolve(__dirname,'/static'))
//第三种用法
console.log(path.resolve(__dirname,'./static'))
//获取文件名
console.log(path.basename('dirname.js'))
//获取文件扩展名
console.log(path.extname("dirname.js"))
//拼接路径
console.log(path.join(__dirname,'a','b','c'))
