'use strict'

let arr = [1,2,3,4,5];
arr.reduce(function(x, y){
	console.log(x+"+"+y+"+"+x*y)
	return x+y;
})