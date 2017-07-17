'use strict'

/**
函数的上下文
将函数fn的执行的上下文改为obj对象
函数声明的优先级高于变量声明，
即使书写顺序在变量声明后面也会优先执行

输入：
function () {
	return this.greeting + ', ' + this.name + '!!!';
}, {greeting: 'Hello', name: 'Rebecca'}

输出：
Hello, Rebecca!!!
*/

function speak (fn, obj) {
	return fn.call(obj)
}
speak(function() {
	return this.greeting+','+this.name+'!!!'
},{
	greeting: Hello,
	name: 'tom'
} )
