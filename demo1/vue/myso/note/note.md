# tip
1. 引入插件的方式有两种import————from和require
2. express中的express.all();express.use(path,fallback);
3. express-session插件，实现express服务器的session会话的长连接，需要cookie-parse插件配合使用
4. express.use(session({scret: 'foo', store: new Mongostore(options)}))
5. schema集合，const Schema = mongoose.Schema; const schema = new Schema({});const admin = mongoose.model('admin', adminSchema);用于生成一个mongodb数据库的集合
6. 数据的加密，解密
7. http和https的使用，兼容方法（通过判断域名调用http和https），不能写死，否则请求接口会出现404
8. http是用于客户端和服务端传输html的一种方式，由于开始传输的是静态页面，所以产生了session会话和cookie，从短连接发展为长连接。
9. nunjuck{{}}和ejs模板引擎
2017-9-5