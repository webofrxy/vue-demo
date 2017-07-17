'use strict'

/**
函数传参
将数组arr中的元素作为调用函数fn的参数
调用函数的三种方法：
obj.fnc();
func.call(obj, args);
func.apply(obj, [m, n, ...])

在JavaScript中，函数是一种对象，其上下文是可以变化的，
对应的，函数内的this也是可以变化的，函数可以作为一个对象的方法，
也可以同时作为另一个对象的方法，
可以通过Function对象中的call或者apply方法来修改函数的上下文，
函数中的this指针将被替换为call或者apply的第一个参数。
将函数 fn 的执行上下文改为 obj 对象，
只需要将obj作为call或者apply的第一个参数传入即可。
*/

function argsAsArray(fn, arr) {
	console.log(fn.apply(this, arr)) 
}

//三种方案
//apply
function speak(fn, obj) {
    return fn.apply(obj);
}
//call
function speak(fn, obj) {
    return fn.call(obj);
}
//bind
function speak(fn, obj) {
    return fn.bind(obj)();
}


argsAsArray([1,3,4,5])
