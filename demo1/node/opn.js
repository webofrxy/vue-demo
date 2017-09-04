'use strict'

const opn = require('opn');//opn用于在终端中打开链接
opn('www.baidu.com')
opn('www.so.com', {app: 'firefox'})