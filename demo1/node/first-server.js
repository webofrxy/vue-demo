var http = require('http');
http.createServer(function(request, response){
	//response和request是node预先定义好的参数（两个对象），与名称无关
	//使用writeHead方法，发送请求头
	response.writeHead(200,{'Context-Type':'text/plain'});
	response.end('my node text ')
}).listen(8888)

console.log('Server running at http://127.0.0.1:8888/');