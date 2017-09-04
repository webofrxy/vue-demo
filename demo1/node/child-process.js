'use strict'

require('child_process').exec('npm -v', function(err, stdout, stderr) {
    console.log(stderr)
    console.log(err)
    console.log(stdout)
}).toString().trim(); //trim()方法用来去除字符串两边的字符
