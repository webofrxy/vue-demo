'use strict'

/**
pop 截取数组
*/
function truncate(arr) {
	var newArr = [];
    arr.forEach(function(item) {
        newArr.push(item)
    })
    newArr.pop(newArr.length)
    console.log(newArr)
    return;
}
truncate([1,2,3,4])