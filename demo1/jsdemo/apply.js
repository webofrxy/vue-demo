'use strict'

var arr1 = [1,2,3];
var arr2 = [4,5,6];
//get新技能：[1,2].push([3,4])//输出[1,2[3,4]]，而不是[1,2,3,4]，所以要用apply
function applyFn (arr1, arr2) {
	var arr = [];
	arr.push.apply(arr1, arr2);
	console.log(arr);
	console.log(typeof [].push())
	console.log(typeof [].push)
	return arr1;
}



applyFn(arr1, arr2)