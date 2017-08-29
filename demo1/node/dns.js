'use strict' 

var dns = require('dns');
//此处不能反向解析百度的地址
dns.lookup('www.github.com', (err, address, family) => {
    console.log(address);
    dns.reverse(address, (err, hostname) => {
        console.log(hostname)
        if(err) {
            console.log(err)
        }
        console.log('反向解析：'+address+':'+JSON.stringify(hostname))
    })
})