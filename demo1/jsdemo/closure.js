'use strict '

/**
闭包出现的原因：
-for 循环时返回值引用（返回10）和 复制 （返回i）的问题
-f1（父级）f2 （子级），返回f2中的变量的方法
-配合自执行函数使用
*/
function creatFunctions() {
	var result = new Array();
	for (var i=0;i<10;i++){
		result[i] = function() {
			console.log(i)
			return i;
		}
	}
	console.log(result) 
	//[[Function],[Function],...],而不是每个i，返回10
	return result;
}

//立即执行函数=》返回匿名函数=》i-》num =》每个fn一个num
function creatFunctions() {
	var result = new Array();
	for (var i=0; i<10; i++) {
		result[i] = function(num) {
			return function() {
				return num ;
			}
		}(i)
	}
	console.log(result);
	return result;
}
creatFunctions();

/**
阮一峰 闭包 demo
*/

　var name = "The Window";
　　var object = {
　　　　name : "My Object",
　　　　getNameFunc : function(){
　　　　　　return function(){
　　　　　　　　return this.name;
　　　　　　};
　　　　}
　　};
　alert(object.getNameFunc()());


var name = "The Window";
　　var object = {
　　　　name : "My Object",
　　　　getNameFunc : function(){
　　　　　　var that = this;
　　　　　　return function(){
　　　　　　　　return that.name;
　　　　　　};
　　　　}
　　};
alert(object.getNameFunc()());