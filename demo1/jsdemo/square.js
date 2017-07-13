'use strict '

/**
获取数组元素平方组成的新数组
*/
function square (arr) {
	var newArr = [];
	arr.forEach(function(item){
		newArr.push(item*item)
	})
	console.log(arr);
}
square([1,2,3,4])