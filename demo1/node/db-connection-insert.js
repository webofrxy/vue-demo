var MongoClient = require('mongodb').MongoClient;
var DB_CoNN_STR = 'mongodb://localhost:27017/test';
var insertData = function(db, callback) {
	//连接到表
	var collection = db.collection('rxytest');
	//插入数据
	var data = [{"name":"rxy","age":18}];
	collection.insert(data, function(err, result) {
		if(err){
			console.log("Error"+err);
			return;
		}
		callback(result);
	})
}

MongoClient.connect(DB_CoNN_STR, function(err, db) {
	console.log("连接成功！");
	insertData(db, function(result) {
		console.log(result);
		db.close();
	})
})