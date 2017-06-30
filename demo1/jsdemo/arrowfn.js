'use strict'

const obj = {
	bc : 1990,
	getAge : function(year) {
		let b = this.bc;
		var cfn = (y) =>  {
			return	y - this.bc;

		} ;
		console.log(cfn.call({bc: 2000}, year))
		
		return cfn.call({bc: 2000}, year)
	}
}

obj.getAge(2025)

//箭头函数中如果只有一条语句，可以省略{}和return，如果有多条语句，不可以省略{} 和 return

// var obj = {
//     birth: 1990,
//     getAge: function (year) {
//         var b = this.birth; // 1990
//         var fn = (y) => y - this.birth; // this.birth仍是1990
//         console.log(fn.call({birth:2000}, year))
//         return fn.call({birth:2000}, year);
//     }
// };
// obj.getAge(2015); // 25
