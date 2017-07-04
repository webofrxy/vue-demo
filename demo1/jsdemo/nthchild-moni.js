// 封装了一个模拟nth-child 选择器的函数，即用js模拟css选择器
// 用到的知识点：正则表达式，数组的方法，

function nthChild(nodeList, selector) {
  var x,
  y; //xn+y
  var reg = /(-?\d*)[n]*([+-]\d+)*/,
  m = selector.match(reg);
  if (selector === m[1]) { // 纯数字
   return [nodeList[(parseInt(m[1]) - 1)]];
  }
function filter(index) { //过滤器函数
  console.log('m1' + m[1], 'm2' + m[2])
  x = m[1]; //直接把n前面的值赋给x
  y = m[2];
  if (m[2]) { // n后面存在y
  if ('' === m[1]) { // n前面木有负号  xn+y x=1
    x = 1;
    y = m[2]
  } else if ('-' === m[1]) { // n前面有负号
    x = -1;
    y = m[2]
  } else { //n后面不存在y
    y = 0;
  }
  var n = (index - parseInt(y)) / parseInt(x); //开始计算
  console.log('x' + x, 'y' + y, n + 'n')
  // 正整数返回true
  return (n === parseInt(n) && n >= 0) ? true : false;
 }
 var result = []; //存储结果
 var l = nodeList.length; //缓存
 for (var i = 1; i <= l; i++) { //这里从1开始！
   console.log(i, filter(i))
   if (filter(i)) {
     result.push(nodeList[i - 1]) //注意了nodelist下标从0开始，所以要-1!
   }
 }
 return result;
}

var lis = document.getElementsByTagName('li')//取得所有的li标签元素，返回一个nodelist
nthChild(lis,'2n+1')
nthChild(lis,'2')
nthChild(lis,'n+5')