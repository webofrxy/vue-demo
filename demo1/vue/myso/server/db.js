// Schema、Model、Entity或者Documents的关系请牢记，Schema生成Model，Model创造Entity，Model和Entity都可对数据库操作造成影响，但Model比Entity更具操作性。
 const mongoose = require('mongoose');
 const md5 = require("md5");
 const Schema = mongoose.Schema;
// 连接数据库 如果不自己创建 默认test数据库会自动生成
 mongoose.connect('mongodb://localhost/test');

// 为这次连接绑定事件
 const db = mongoose.connection;
 db.once('error',() => console.log('Mongo connection error'));
 db.once('open',() => console.log('Mongo connection successed'));
/************** 定义模式loginSchema **************/
 const loginSchema = new mongoose.Schema({
     account : String,
     password : String
 });
 const articleSchema = new mongoose.Schema({
 	articleContent: String,
 	date: Date,
 	label: String,
 	state: String,
 	title: String,
 })

/************** 定义模型Model **************/
 const Models = {
     Login : mongoose.model('rxytest',loginSchema),
     Article: mongoose.model('artical',articleSchema),
}

module.exports = Models;

// const md5 = require("md5");
// const mongoose = require('mongoose');
// mongoose.Promise = require('bluebird');
// const Schema = mongoose.Schema;

/**
 * Create a schema for Article, User, Category
 * Create a Model by using the schema defined above
 * this value defaults the name of the collection to plural of model name i.e Article.
 * @type {{Article: *, User: *, Category: *}}
 */
// const ArticleSchema = new Schema({
//     title:      {type:String, require:true},
//     content:    {type:String, require:true},
//     author:     {type:Schema.Types.ObjectId, ref:'User'},
//     category:   {type:Schema.Types.ObjectId, ref:'Category'},
//     created:    {type:Date},
//     slug:       {type:String, required: true },
//     published:  {type:Boolean, default: false },
//     meta:       {type:Schema.Types.Mixed },
//     comments:   [Schema.Types.Mixed ]
// },{versionKey: false});

// const UserSchema = new Schema({
//     name:       {type:String, require:true},
//     email:      {type:String, require:true},
//     password:   {type:String, require:true},
//     created:    {type:Date}
// });

// const CategorySchema = new Schema({
//     name:      {type:String, require:true},
//     slug:       {type:String, require:true},
//     created:    {type:Date}
// });

// //MD5密码和原密码匹配
// UserSchema.methods.verifyPassword= function(password){
//     let isMatch= md5(password)=== this.password;
//     //console.log('UserSchema.methods.verifyPassword: ', password, this.password, isMatch);
//     return isMatch;
// };

// const Models={
//     Article : mongoose.model('Article', ArticleSchema),
//     User : mongoose.model('User', UserSchema),
//     Category : mongoose.model('Category', CategorySchema),
//     verify : UserSchema.methods.verifyPassword
// };

// /**
//  * 创建数据库名称并连接
//  * Connecting to Mongod instance.
//  */
// const dbHost = 'mongodb://localhost:27017/nodeblog';
// mongoose.connect(dbHost);
// const db=mongoose.connection;
// db.on('error', function () {
//     console.log('Database connection error.');
// });
// db.once('open', function () {
//     console.log('The Database has connected.')
// });

// module.exports = Models;