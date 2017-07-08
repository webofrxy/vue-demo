'use strict'

function selectArr (arr, item) {

	for(let i in arr) {
		if(arr[i] == item) {
			var it = i;
			console.log(it);
		}else{
			console.log('-1') 
		}
	}
	
}

selectArr([1,2,3,4,5], 3)