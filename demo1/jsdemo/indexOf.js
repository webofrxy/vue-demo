'use strict '

//indexOf返回的是元素在数组中出现第一次的位置
function indexof(arr, item) {
	var a = [], b = [];
	for (var i=0,len= arr.length;i<len;i++) {
		if(!b[arr[i]]) {
			b[arr[i]] = 1;
			continue;
		}
		b[arr[i]] ++;
	}

	for(var i=0;i<b.length;i++) {
		if(b[i]>1) {
			a.push(i)
		}
	}
	return a;
}

console.log(indexof([1,2,3,4,5,3], 3))