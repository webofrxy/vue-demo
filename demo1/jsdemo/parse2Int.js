'use strict'

/**
修改代码中parseInt的调用方式，使他全部通过测试用例
*/
/**
'12'=>12,'12px'=>12,'0x12'=>12
*/
function parse2Int(num) {
	console.log(parseInt(num))
    return parseInt(num);
}

parse2Int('0x12')