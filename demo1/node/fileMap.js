'use strict'

/*
* 遍历当前的文件目录并打印到控制台
**/

var fs = require('fs')
var path = require('path')

var root = path.join(__dirname)

readDirSync(root)
function readDirSync(path) {
	var pa = fs.readdirSync(path);
	pa.forEach(function(ele, index){
		var info = fs.statSync(path+"/"+ele);
		if(info.isDirectory()){
			console.log("dir"+ele)
		}else{
			console.log("file:"+ele)
		}
	})
}