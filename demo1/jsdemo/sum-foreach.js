'use strict'

function sumforEach (arr) {
	var sum = 0;
	arr.forEach(function(item) {
		sum = sum +item;
		
	})
	return sum;
}

sumforEach([1,2,3,4,5]);