'use strict'

const http = require('http');
const formidable = require('formidable');
const util = require('util') //工具函数，包含各种转换格式和判断格式的函数，例如format，isArray等

http.createServer((req,res) => {
    console.log("http server is running")
    if(req.url == '/upload' && req.method.toLocaleLowerCase() == 'post'){
        const form = new formidable.IncomingForm();
        form.parse(req,(err,fields,files) =>{ //from.parse方法会转换请求中包含的表单信息，callback会包含所有的字段域和文件信息
            res.writeHead(200,{'content-type':'text/plain'});
            res.write('resecive upload:\n\n');
            console.log(fields+"+++"+files)
            res.end(util.inspect({fields: fields, files: files}))
        })
        return;//防止页面被刷新
    }
    res.writeHead(200,{'content-type':'text/html'})
    res.write('<h1>response</h1>')
    res.end(
        '<form action="/upload" enctype="multipart/form-data" method="post">'+
        '<input type="text" name="title"><br>'+
        '<input type="file" name="upload" multiple="multiple"><br>'+
        '<input type="submit" value="Upload">'+
        '</form>'
    );
}).listen(8090)