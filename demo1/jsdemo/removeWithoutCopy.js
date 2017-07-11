'use strict '

//第一种方法也可以实现，但无法通过测试用例
// function removeWithoutCopy (arr, item) {
// 	arr.forEach(function(items, index) {
// 		if(items == item) {
// 			arr.splice(index,index)
// 		}
// 		console.log(index)
// 	})
// 	console.log(arr);
// 	return arr;
// }

//第二种方法可以通过测试用例
function removeWithoutCopy(arr, item) {
     for(var i = 0; i < arr.length; i++){
         if(arr[i] == item){
             //splice方法会改变数组长度，当减掉一个元素后，后面的元素都会前移，因此需要相应减少i的值
             arr.splice(i,1);
             i--;
         }
     }
     return arr;
 }

removeWithoutCopy([1,2,3,3,4,3,5,3,6,7,3],3);