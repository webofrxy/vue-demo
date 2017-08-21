var fs = require('fs');
var src = 'import', filename = 'import-example.html';
var fnImportExample = function(src, filename) {
	//先读取文件名
	fs.readFile(src+'/'+filename, {
		encoding: 'utf8'
	}, function(err, data){
		var dataReplace = data.replace(/<link\srel="import"\shref="(.*)">/gi, function(maths, m1) {
			return fs.readFileSync(src + '/' +m1, {
				encoding: 'utf8'
			})
		})
		dataReplace = dataReplace(/"\.\.\//g,'"');
		//再写入文件名
		fs.writeFile(filename, dataReplace, {
			encoding: 'utf8'
		}, function(err) {
			if(err) throw err;
			console.log(filename+ '生成成功！')
		})
	})
}；

fnImportExample(src, filename);

fs.watch(src+ '/' +filename+(event, filename){
	if(event == change) {
		console.log(src+'/'+filename+'发生了改变，重新生成。。。');
		fnImportExample(src, filename);
	}
})