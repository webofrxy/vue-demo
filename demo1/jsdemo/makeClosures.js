'use strict'

/**
使用闭包
实现函数 makeClosures，调用之后满足如下条件：
1、返回一个函数数组 result，长度与 arr 相同
2、运行 result 中第 i 个函数，即 result[i]()，结果与 fn(arr[i]) 相同

输入：
[1, 2, 3], function (x) { 
	return x * x; 
}
输出：
4
*/

function makeClosures (arr, fn){
	var result = [];
	for(var i=0;i<arr.length;i++) {
		console.log(i)
		result[i] = function(x) {
			return function() {
				console.log(fn(x))
				return fn(x) ;
			}
		}(arr[i])
		
	}
	console.log(result)
	return result ;
}

//这种是错误的写法会导致result中每个函数的参数都是arr[arr.length]
function makeClosures(arr, fn) {
    var result = new Array();
     for(var i=0;i<arr.length;i++){
        result[i] = function(){
            return fn(arr[i]);            
        };
    }
    return result;
}

//参考《JavaScript高级程序设计》的典型方法
function makeClosures(arr, fn) {
    var result = new Array();
    for(var i=0;i<arr.length;i++){
        result[i] = function(num){
            return function(){
                return fn(num);
                 
            }
        }(arr[i]);
    }
    return result;
}

//使用ES5的bind()方法
function makeClosures(arr, fn) {
    var result = new Array();
    for(var i=0;i<arr.length;i++){
        result[i] = fn.bind(null,arr[i]);
    }
    return result;
}

//使用forEach()
function makeClosures(arr, fn) {
    var result = new Array();
    arr.forEach(function(curr){
        result.push(function(){return fn(curr)});
    })
    return result;
}
makeClosures([1,2,3], function(x){
	return x*x;
});