'use strict'

/**
向数组中插入一个未出现的元素
*/
function remove(arr, item) {
    var newArr = [];
	arr.forEach(function(index) {
		console.log(index+'+'+item)
        if(index != item) {
			newArr.push(index)
        }
    })
    
    console.log(newArr) ;
    return newArr;
}
remove([1,3,4],3)