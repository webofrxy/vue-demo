'use strict'

/**
1、从 start 到 end（包含 start 和 end），每隔 100 毫秒 console.log 一个数字，每次数字增幅为 1
2、返回的对象中需要包含一个 cancel 方法，用于停止定时操作
3、第一个数需要立即输出
*/

function count () {
	setInterval(function(){
		console.log(1)
	},500)
}
count()