'use strict'
var fs = require("fs");
//src 表示用一个变量表示这个文件夹的名称，方便日后维护和管理
var src = "E:\vueDemo\vue-demo\demo1\node\static\icons";

fs.readdir(src, function(err, files) {
	console.log(files) //undefined
	files.forEach(function(filename){
		var oldPath = src + '/' + filename, newPath = src + '/' +filename.replace(/_/g, '-');
		fs.rename(oldPath, newPath, function(err) {
			if(!err) {
				console.log(filename + '下划线替换成功！')
			}
		})
	})
})