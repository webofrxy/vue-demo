'use strict';

/**
测试 node 的URL模块
*/
var url = require('url');

console.log(url.parse('http://user:pass@host.com:8080/path/to/file?query=string#hash'));