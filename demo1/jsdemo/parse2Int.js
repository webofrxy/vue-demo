'use strict'

/**
修改代码中parseInt的调用方式，使他全部通过测试用例
*/
/**
'12'=>12,'12px'=>12,'0x12'=>0
遇到字母后面的全部不取
*/

function parse2Int(num) {
	console.log(parseInt(num, 10))
	return parseInt(num, 10)
}
parse2Int('0x12')