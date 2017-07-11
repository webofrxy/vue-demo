'use strict'

var arr1 = [1,2,3];
var arr2 = [4,5,6];
function applyFn (arr1, arr2) {
	var arr = [];
	arr.push.apply(arr1, arr2);
	console.log(arr);
	return arr1;
}

applyFn(arr1, arr2)

