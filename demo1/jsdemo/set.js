'use strict'

let m = new Set();
m.add([1,2,3]); // 只能添加一个参数
m.add(6);
m.add([1,89])
m.delete(6);
console.log(m)