'use strict'
var fs = require("fs");
//src 表示用一个变量表示这个文件夹的名称，方便日后维护和管理
var src = "D:/myNotes/vue-demo/demo1/node/static/icons";
//tip:window 中读取路径为\,src 中的路径为/才能生效，否则undefined
fs.readdir(src, function(err, files) {
	console.log(err) //undefined
	files.forEach(function(filename){
		var oldPath = src + '/' + filename, newPath = src + '/' +filename.replace(/_/g, '-');
		fs.rename(oldPath, newPath, function(err) {
			if(!err) {
				console.log(filename + '下划线替换成功！')
			}
		})
	})
})