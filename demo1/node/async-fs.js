var fs = require('fs');
//使用异步请求方式，请求文件,借助回调函数
fs.readFile('example.txt', function(error, data){
	if(error){
		console.log(error)
	}
	console.log(data.toString())
})

console.log('程序结束')