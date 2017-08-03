var http = require('http');
http.createServer(function(request, response){
	//重定向的方法
	reponse.writeHead(301,{
		'Loaction': 'http://www.baidu.com'
	});
	response.end();
}).listen(8888);

console.log('Server running at http://127.0.0.1:8888/');