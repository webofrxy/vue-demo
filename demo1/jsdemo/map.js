'use strict'

let m = new Map([['tom',12],['jack',23],['lili', 34],[889,'kk']]);
m.set('admin');
m.delete('admin')
console.log(m.has('admin'));
console.log(m);