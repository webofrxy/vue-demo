var fs = require('fs');
//同步请求文件
var data = fs.readFileSync('example.txt');
//使用toString方法，将.txt文件从buffer代码转换为string代码
console.log(data.toString());
console.log('程序结束')
console.log(__dirname)