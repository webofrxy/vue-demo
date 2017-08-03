// Schema、Model、Entity或者Documents的关系请牢记，Schema生成Model，Model创造Entity，Model和Entity都可对数据库操作造成影响，但Model比Entity更具操作性。
const mongoose = require('mongoose');
// 连接数据库 如果不自己创建 默认test数据库会自动生成
mongoose.connect('mongodb://localhost/test');

// 为这次连接绑定事件
const db = mongoose.connection;
db.once('error',() => console.log('Mongo connection error'));
db.once('open',() => console.log('Mongo connection successed'));
/************** 定义模式loginSchema **************/
const loginSchema = mongoose.Schema({
    account : String,
    password : String
});

/************** 定义模型Model **************/
var Models = {
    Login : mongoose.model('rxytest',loginSchema)
};
var myAccount = new Models.Login({account:'wangye',password:'niangniang'});
myAccount.save(function(err){
	if(err){
		console.log(err)
	}
	console.log("I save it")
	Models.Login.find((err,data) => {
	    if (err) {
	        console.log(err);
	        // res.send(err);
	    } else {
	    	console.log("success")
	        console.log(data);
	        // res.send(data);
	    }
	});
})
// module.exports = Models;
// Models.Login.find((err,data) => {
//     if (err) {
//         console.log(err);
//         // res.send(err);
//     } else {
//     	console.log("success")
//         console.log(data);
//         // res.send(data);
//     }
// });

// var mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/test');

// var Cat = mongoose.model('Cat', { name: String });

// var kitty = new Cat({ name: 'Zildjian' });
// kitty.save(function (err) {
// if (err) {
// 	console.log(err)
// }
// console.log('meow');
// });

