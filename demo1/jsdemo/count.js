'use strict' 
/**
统计数组 arr 中值等于 item 的元素出现的次数
*/

//for 方法
function count(arr, item) {
    var  arr1 = [];
	for(let i in arr) {
        if(arr[i] == item) {
            arr1.push(arr[i])
        }
    }
   console.log(arr1)
   return arr1.length; 
}

//reduce() 方法-->从数组的第一项开始，逐个遍历到最后，可以用作过滤器，在回调函数中写过滤的方法，兼容到IE9
function count(arr, item) {
	var num =  arr.reduce(function(prev, cur){
		return cur == item ? prev+1 : prev;
	},0);
	console.log(num)
	return num;
}

//filter 方法
function count(arr, item) {
	var arr1 = arr.filter(function(i){
		return i === item;
	})
	console.log(arr1.length)
}

//map 方法 遍历数组 ，不改变数组，map() 方法返回一个新数组， 兼容到IE9
function count (arr, item) {
	var count = 0;
	arr.map(function(i){
		if(i===item){
			count ++
		}
	})
	console.log(arr)
	console.log(count)
}
count([1,2,4,4,3,4,3], 4)