'use strict'

/**
使用arguments
函数 useArguments 可以接收 1 个及以上的参数。
请实现函数 useArguments，返回所有调用参数相加后的结果。
本题的测试参数全部为 Number 类型，不需考虑参数转换。

输入：
1,2,3,4
输出：
10
*/

function useArguments() {
	var arr = [];
	var sum = 0;
    arr.push.apply(arr, arguments)
    for(let i of arr) {
    	sum = sum + i;
    }
    console.log(sum);

}

function useArguments() {
    var arr=Array.prototype.slice.call(arguments)//把arguments类数组转化为数组
    return eval(arr.join("+"));//求和
}

function useArguments() {
    var result = Array.prototype.reduce.call(arguments,function(a,b){return a+b;});
    return result;
}

function useArguments() {
    /*var sum = 0;
     var arr = Array.prototype.slice.call(arguments);
     arr.forEach(function (value, index) {
     sum += value;
     })
     return sum*/
    var sum = 0;
    for (var i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum
}
useArguments(1,2,3,4);