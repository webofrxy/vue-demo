'use strict'

const http = require('http');
const util = require('util');
const fs = require('fs');
const url = require('url');

const mimetype = {
    'html': 'text/html',
    'css': 'text/css',
    'text': 'text/plain',
    'xml': 'application/xml',
    'json': 'application/json',
    'js': 'application/javascript',
    'jpg': 'image/jpeg',
    'png': 'image/png',
    'gif': 'image/gif',
    'svg': 'image/svg+xml'
}

var page_404 = function(req,res,path){
    res.writeHead(404, {
        'Content-type': 'text/html'
    });
    res.write('<!doctype html>\n');
    res.write('<title>404 Not Found</title>')
    res.write('<h1>Not Found</h1>')
    res.write('<p>The request url '+path+'was not found on server</p>')
    res.end();
}

http.createServer((req,res) => {
    const pathname = url.parse(req.url).pathname;
    const realPath = __dirname+pathname;
    console.log(__dirname)
    console.log(111)
    fs.exists(realPath, function(exists){ //用来检查文件系统中给定的路径是否存在
        if(!exists){
            return page_404(req,res,pathname)
        }else{
            console.log("request success")
            const file = fs.createReadStream(realPath);
            res.writeHead(200,{'Content-Type': mimetype[realPath.split('.').pop()] || 'text/plain'});
            file.on('data',res.write.bind(res));
            file.on('close',res.end.bind(res));
            file.on('error',function(err){
                console.log(err);
                return '500'
            })
        }
    })
}).listen(8090);
console.log("server is running")