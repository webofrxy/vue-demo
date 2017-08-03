//MongoClient 是用来连接数据的方法，等于mongo方法
var MongoClient = require('mongodb').MongoClient;
//数据库的地址
var DB_CONN_STR = 'mongodb://localhost:27017/test';

var updateData = function(db, callback) {
	//连接到表
	var collection = db.collection('rxytest');
	//更新数据
	var whereStr = {'name':'rxy'};
	var updateStr = {$set: {"url":"www.baidu.com"}};
	collection.update(whereStr,updateStr, function(err, result) {
		if(err){
			console.log("Error"+err);
			return;
		}
		callback(result);
	})
}

MongoClient.connect(DB_CONN_STR, function(err, db) {
	console.log("连接成功");
	updateData(db, function(result) {
		console.log(result);
		db.close();
	})
})
