'use strict'

/**
删除arr的第一个元素，不改变原数组，返回新数组
*/
//push 和shift方法
// function curtail(arr) {
// 	var newArr = [];
//     arr.forEach(function(item){
//        newArr.push(item);
//     })
//     console.log(newArr.shift())
//     return newArr.shift();
// }

//slice 方法 不改变原数组 和splice 方法 改变原数组
function curtail (arr) {
	console.log(arr.slice(1));
	console.log(arr)
	console.log(arr.splice(1));
	console.log(arr)
	return arr.slice(1)
}
curtail([1,2,3,4])