'use strict'

const http = require('http');

const options = {
    hostname: 'www.baidu.com',
    path: '',
    port: '89',
    method: 'GET'

}
http.request(options, (response) => {
    console.log(response)
}).end();
console.log('running ')