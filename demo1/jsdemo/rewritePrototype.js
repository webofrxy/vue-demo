'use strict'

/**
重写原型：
1. 可以随时为原型添加属性和方法，
并且修改能立即在所有对象实例中反映出来
2. 如果重写整个原型对象，那就切断了构造函数和最初原型之间的联系，
注意：实例中的指针仅仅指向原型，不指向构造函数
*/

//构造函数
 function Person() {

 }
//新建对象
 var friend = new Person ();

 //向原型添加属性
 Person.prototype = {
 	constructor: Person,
 	name: 'Nicholas',
 	age: 29,
 	job: 'software Engineer',
 	sayName: function() {
 		alert(this.name)
 	}
 };
 friend.sayName(); //error