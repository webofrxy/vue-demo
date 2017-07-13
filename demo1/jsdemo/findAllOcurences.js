'use strict'

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