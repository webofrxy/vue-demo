'use strict'

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