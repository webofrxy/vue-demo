'use strict'

/**
筛选数组中重复的元素
*/
// function pulicate (arr) {
// 	var a = [], b = [];
// 	for (var i=0,len= arr.length;i<len;i++) {
// 		if(!b[arr[i]]) {
// 			b[arr[i]] = 1;
// 			continue;
// 		}
// 		b[arr[i]] ++;
// 	}

// 	for(var i=0;i<b.length;i++) {
// 		if(b[i]>1) {
// 			a.push(i)
// 		}
// 	}
// 	console.log(b)
// 	return a;
// }

function pulicate(arr) {
	var result = [];
	arr.forEach(function(elem){
		if(arr.indexOf(elem) != arr.lastIndex(elem)&&result.indexOf(elem)==-1){
			result.push(elem)
		}
	});
	return result;
}
pulicate([1,2,4,4,3,3,1,5,3]);