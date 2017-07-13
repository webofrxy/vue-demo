'use strict'

/**
筛选字符串中某个元素出现的位置，这个题有问题
*/
function findAllOccurrences(arr, target) {
	var a = [];
    for(var i = 0; i < arr.length; i++){
        if(target == arr[i])
            a.push(i);
    }
	console.log(a)
    return a;
}
findAllOccurrences('abcdefabc')