'use strict'

var fs = require('fs')
// 打开一个流:
var rs = fs.createReadStream('map.js', 'utf-8');
var ws = fs.createReadStream('set.js', 'utf-8')

// rs.on('data', function (chunk) {
//     console.log('DATA:')
//     console.log(chunk);
// });

// rs.on('end', function () {
//     console.log('END');
// });

// rs.on('error', function (err) {
//     console.log('ERROR: ' + err);
// });
rs.pipe(ws)