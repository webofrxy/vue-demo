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
2017-9-7
1. node 中crypto 模块包括openssl的工具，有hash模块，有hmac认证模块，有随机数函数和自动加盐的函数
2. 代理分为正向代理和反向代理，node中的http-proxy可以实现node服务器的反向代理，同Nginx类似，正向代理则是从客户端发起的
3. node中cookie-parser可以将request中的cookie解析出来，通过req中的header方法可以从请求头中将cookie取出，req.header.cookie 可以取出对应的cookie，req.header.cookie.split(';')则可以取出对应的字段
4. node中的url模块可以解析url中的信息，url.parse().pathname可以取出路径的名称
5. node中http模块中的req和res可以分别获取请求头中的信息和server返回的内容，res.writeHead();res.write();res.end();
6. encodeUrl编码是指将url中的一些字符转换为标准的字符，便于服务器识别