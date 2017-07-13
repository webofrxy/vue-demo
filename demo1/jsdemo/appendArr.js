'use strict'

/**
向数组的尾部添加元素
*/
function appendArr (arr, item) {
	var newArr = [];
	arr.forEach(function(items){
		newArr.push(items)
	})
	newArr.push(item);
	console.log(newArr)
}

appendArr([1,2,3,4], 10);