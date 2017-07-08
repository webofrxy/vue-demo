'use strict'

function sum(arr) {
	var sum = 0;
    for(let i of arr) {
        sum = sum + i
    }
    console.log(sum) ;
}

sum([1,2,3,4])