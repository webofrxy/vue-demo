'use strict'

/**
请修复给定的代码中，函数定义存在的问题
*/

function functions(flag) { 
     var getvalue=null; 
      if (flag) { 
        var getValue = function(){ return 'a'; } 
      } else { 
        var getValue = function() { return 'b'; } 
      } 

  

      return getValue(); 
  } 

  //这道题是考函数声明与函数表达式的区别，原题的写法，
  //是在两个逻辑分支里面各有一个函数声明，但是对于函数声明，
  //解析器会率先读取并且让其在执行任何代码前可用，意思就是别的代码还没运行呢，
  //两个getValue声明已经被读取，所以总是执行最新的那个。
  //函数表达式，当解析器执行到它所在的代码行时，才会真正被解释执行，所以两个逻辑分支可以分别执行

  //原函数的问题是因为不存在块级作业域getValue函数被重写

  //else中的语句相当于将if中的function重写，因此无论flag为何值，
  //返回的方法始终为重写后的方法。将方法赋值给一个变量，方法就不会被重写，因此才能得到正确的结果。

function functions(flag) {
    function getValue() { return(flag)?'a':'b'; }
    return getValue();
}