'use strict '

function square (arr) {
	var newArr = [];
	arr.forEach(function(item){
		newArr.push(item*item)
	})
	console.log(arr);
}
square([1,2,3,4])