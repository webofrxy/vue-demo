##问题
1. return cfn.call({bc: 2000}, year) 后面的参数是什么意思？arrowfn.js
2. 不能使用对象字面量重写原型是什么意思？js高教动态原型模式最后一段话
3. token问题：https://segmentfault.com/a/1190000008383094
4. 2、熟悉PHP，因为已有一个心学线上到场平台是基于PHP做的，有支付功能		（公众号：心学线上道场）；
	3、 一个主页，用户访问 www.yangmingxin.com也可以找到入口；
	4、手机端只做微信入口，公众号绑定；
	5、web端主要做管理后台功能、用户后台功能；
	6、支付接口；
	7、基本的用户数据管理和分析功能； 
	8、 支付主要做：结算和充值；
5. node项目对应文件及文件夹的用处：

	models: 存放操作数据库的文件
	public: 存放静态文件，如样式、图片等
	routes: 存放路由文件
	views: 存放模板文件
	index.js: 程序主文件
	package.json: 存储项目名、描述、作者、依赖等等信息
6. javascript高级编程 两个月，
	图解HTTP协义 一周，  
	设计模式 一周，
	node 一周，
	react 一到两周，
	然后就长期ES6 node react交叉学习
7. github 会默认过滤掉空文件夹
8. vue中的路由处理：
	使用vue-router： /#/home.html
	使用history mode ： /home.html	
9. banner 图中使用position判断会出现连续点击的问题，解决办法：使用点击次数来控制左右的		移动
10. element 组件中的change事件对所有的子组件都有效
11. fastcgi sent in stderr: primary script unknown while reading reponse header form upstream ,client 127.0.0.1:9000,host: localhost 问题原因：index.php 的宿主是root 不是nginx 办法：chown nginx.nginx index.php
12. 使用curl localhost/index.php 会将该文件加载展示到终端页面上
13. 配置nginx时，只要修改/etc/nginx/conf.d/default.conf文件中的内容即可
	包括：root /var/www/html （在server的子级下）index index.html index.php
	将location中的root 改为root /var/www/html ;index index.html index.php index.htm
	将php 的location 中的fastcgi_param 改为 $document_root$fastcgi_script_name;