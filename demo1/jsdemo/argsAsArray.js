'use strict'

/**
函数传参
将数组arr中的元素作为调用函数fn的参数
调用函数的三种方法：
obj.fnc();
func.call(obj, args);
func.apply(obj, [m, n, ...])
*/

function argsAsArray(fn, arr) {
	console.log(fn.apply(this, arr)) 
}
argsAsArray([1,3,4,5])
