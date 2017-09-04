'use strict'
const fs = require('fs');
const path = require('path');
const http = require('http');
const url = require('url');

// function start (){
    http.createServer(function(request,response){
        console.log('server is running')
        var pathname = url.parse(request.url).pathname;
        console.log(pathname)
        response.writeHead(200, {'Content-Type':'text/plain'});
        response.write('hello world');
        response.end('hello jack');
    }).listen(8888) 
    console.log('server is running in port 8888')

// }

// exports.start = start; 