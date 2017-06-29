'use strict'

var fs = require('fs');
fs.readFile('console.js', 'utf-8',function(err,data){
	if(err) {
		console.log(err);
	}else{
		console.log(data);
		console.log(data.length+"bytes")
	}
})



try {
	var data = fs.readFileSync('map.js','utf-8');
	console.log(data)
}catch(err){
	console.log(err)
}


fs.stat('requireDemo.js', function (err, stat) {
    if (err) {
        console.log(err);
    } else {
        // 是否是文件:
        console.log('isFile: ' + stat.isFile());
        // 是否是目录:
        console.log('isDirectory: ' + stat.isDirectory());
        if (stat.isFile()) {
            // 文件大小:
            console.log('size: ' + stat.size);
            // 创建时间, Date对象:
            console.log('birth time: ' + stat.birthtime);
            // 修改时间, Date对象:
            console.log('modified time: ' + stat.mtime);
        }
    }
});
