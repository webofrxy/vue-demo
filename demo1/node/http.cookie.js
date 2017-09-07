'use strict'
const http = require('http');

//生成cookie
// document.cookie = "name="+"tom";
http.createServer(function(req,res){
    const cookie = {};
    req.headers.cookie&&req.headers.cookie.split(';').forEach(function(Cookie) {
        const parts = Cookie.split('=');
        console.log(parts)
        Cookie[parts[0].trim()] = (parts[1] || '').trim();
    });
    console.log(Cookie);
    res.writeHead({
        'Set-Cookie': 'SSID=Ap4GTEq; Expires=Wed, 13-Jan-2021 22:23:01 GMT;HttpOnly ',
        'Content-Type': 'text/plain'
    });
    console.log('hello cookie')
     res.end('Hello World\n<script>console.log(document.Cookie)</script>');
}).listen(8000);

console.log('server is running')