'use strict'

process.on('exit', function(){
    setTimeout(function(){
        console.log('exec is run !')
    }, 100)
})
console.log('exec will run ')//process 是一个全局的进程，可以直接使用变量使用， 下面的exit 执行时，进程会直接退出，回调函数中的事件不会执行