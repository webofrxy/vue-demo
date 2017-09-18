'use strict'
/**
 * 创建shell终端，检查npm的版本
 */
const shell = require('shelljs')
if(shell.which('npm')){
    console.log(1)
}