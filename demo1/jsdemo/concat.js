'use strict'

/**
合并数组 arr1 和数组 arr2。不要直接修改数组 arr，结果返回新的数组
*/

//concat 方法
function concat(arr1, arr2) {
	var arr = arr1.concat(arr2);
   console.log(arr);
}

//利用slice+push 
function concat(arr1, arr2) {
    var newArr=arr1.slice(0);
    for(var i=0;i<arr2.length;i++){
        newArr.push(arr2[i]);
    }
    return newArr;
}
//普通的迭代拷贝
function concat(arr1, arr2) {
    var newArr=[];
    for(var i=0;i<arr1.length;i++){
        newArr.push(arr1[i]);
    }
    for(var j=0;j<arr2.length;j++){
        newArr.push(arr2[j]);
    }
    return newArr;
}
concat([1,2,3], [4,5,6]);

//apply 方法 和 push 方法
//apply前面应该是一个函数。[].push的返回值是“function push() { [native code] }”,是一个函数,不要误写为“[].push()”，那样会返回空数组的元素个数，即0
function concat1 (arr1, arr2) {
	var arr0 = arr1.slice(0);
	[].push.apply(arr0, arr2)
	console.log(arr0)
}
concat1([1,2,3], [4,5,6])

//不管几个数组都可以

function concat2(arr1, arr2, arr3) {
  var arr = [];
  console.log(arguments)
  //arguments => { '0': [ 1, 2, 3 ], '1': [ 4, 5, 6 ], '2': [ 7, 8, 9 ] }
  for(var i in arguments){
      arr=arr.concat(arguments[i]);
  }
    return arr;
}
concat2([1,2,3],[4,5,6],[7,8,9])