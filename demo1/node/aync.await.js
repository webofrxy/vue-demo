'use strict'

function timeout(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}
//下面的函数在node环境下无法执行，必须在浏览器环境下执行，否则会报编译出错的问题：SyntaxError：unexpected token function
async function asyncPrint(value, ms) {
  await timeout(ms);
  console.log(value);
}

asyncPrint('hello world', 50);