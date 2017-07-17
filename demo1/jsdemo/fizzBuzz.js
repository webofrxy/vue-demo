'use strict'

/**
实现 fizzBuzz 函数，参数 num 与返回值的关系如下：
1、如果 num 能同时被 3 和 5 整除，返回字符串 fizzbuzz
2、如果 num 能被 3 整除，返回字符串 fizz
3、如果 num 能被 5 整除，返回字符串 buzz
4、如果参数为空或者不是 Number 类型，返回 false
5、其余情况，返回参数 num
*/

function fizzBuzz(num) {
	var  a = num % 3;
	var  b = num % 5;
	if(a == 0&&b == 0) {
		console.log('fizzbuzz')
	}else if(a == 0) {
		console.log('fizz')
	}else if(b == 0) {
		console.log('buzz')
	}else if (num == 'null' || typeof (num) != 'number') {
		console.log(typeof num)
        return false
    }else {
		console.log(num)
	}
}
fizzBuzz(0);