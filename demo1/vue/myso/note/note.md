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
1. es6中class Admin extends Component=》constructor=》this.login = this.login.bind(this),是为了将login绑定到Admin的上下文中，触发事件时，改变this的指向。
2. file.on('data',res.write.bind(res));//??
    file.on('close',res.end.bind(res));//??
3. 加密分为对称加密和非对称加密
4. 对称加密：加密数据
5. 非对称加密：添加身份认证
6. hash函数（散列函数）：主要为MD5，SHA1，用于验证数据的完整性，散列值被称为数据的指纹，也叫数字签名
7. 加密过程：hash数字签名=》私钥加密=》堆成加密=》随机秘钥
8. https则是在上面的基础上加了CA平台认证这一程序