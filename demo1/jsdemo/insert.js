'use strict'
/**
splice方法： 如果第一个表示数量的参数为0时，表示插入一个元素；
如果表示数量的参数大于0时，表示替换和删除从某个位置开始的某个宽度的元素；
第二个元素表示宽度
第三个元素表示替换者

*/
function insert(arr, item, index) {
	var arr1 = arr.concat();
	arr1.splice(index, 0, item)
 	console.log(arr1)   
}
insert([1,2,3], 'z', 1)

/**
为什么 arr.slice(0).splice(index,0,item) 是 [] 呢
splice() 方法向/从数组中添加/删除项目，然后返回被删除的项目。你返回的是splice方法返回的对象，不是处理后的数组，所以为空数组 []

var a = arr.slice(0);和 var a=arr; 比起来有什么好处吗，同样是复制一个数组啊
var a = arr 中 a只是arr的引用
*/