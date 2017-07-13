'use strict'

/**
filter 方法总结
*/
let arr = [1,2,3,4,5];
let s = arr.filter(function(x ){
	console.log(x%2 !== 0)
	return x%2 !== 0 ;
})
console.log(s)