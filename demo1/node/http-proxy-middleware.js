'use strict'

const proxy = require('http-proxy-middleware');
const express = require('express');
var app = express();
app.use('/local.php', proxy({target: 'https://b2b.hzanchu.com/api.php', changeOrigin: true}));
app.listen(3000)
console.log('请访问localhost：3000')