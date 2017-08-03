var MongoClient = require('mongodb').MongoClient;
var DB_CONN_STR = 'mongodb://localhost/test';
var delData = function(db, callback) {
	//连接到表
	var collection = db.collection('rxytest');
	var whereStr = {'name': 'rxy'};
	collection.remove(whereStr, function(err, result) {
		if(err) {
			console.log("Error:"+err);
			return;
		}
		callback(result);
	});
}

MongoClient.connect(DB_CONN_STR, function(err, db) {
	console.log("连接成功！");
	delData(db, function(result) {
		console.log(result);
		db.close();
	})
})