'use strict'
//解决浏览器同源策略的后端cors方法，原理：添加一个请求的标签
const http = require('http');
http.createServer(function(request, response){
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.end('ok')
}).listen(8888);
console.log('cors server is running at port 8888')