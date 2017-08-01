##前端知识体系
####tip：完成一部分后，扩大列表的子级目录（使其变详细）
###初级
1. 双飞翼布局
	-双飞翼布局（float，position，margin配合使用）
	-左中右布局
2. 自行定制bootstrap，理解栅格原理
	-自定制bootstrap（在bootstrap的css文件后面跟一个重置样式文件，进行覆盖）
	-栅格原理（使用百分比的来定义区域的大小）
3. 操作DOM
	-DOM Document
	-DOM Element
	-DOM Attribute
	-DOM Event
4. 操作BOM
	-browser window
	-borwser navigatior
	-browser location
	-browser history
	-browser screen
5. 封装ajax
	-jq封装get方法
	-jq封装post方法
	-promise 解决ajax的加载顺序的问题，有效控制异步
6. 使用websql
7. 使用web storage（localstorage，sessionstorage）
	-getItem
	-setItem
	-save
	-find
	-JSON.stringify 将object转为string
	-JSON.parse 将string转为JSON object（JSON对象）
8. 使用应用缓存（application cache）
	-需要缓存的的文件在HTML文档中添加manifest属性，未指定的文件不会被缓存<html manifest="demo.appcache"></html>
	-Manifest文件：
		+CACHE MANIFEST 在此标题下列出的文件，将在首次下载后进行缓存
		+NETWORK在此标题下列出的文件表示需要和服务器连接，不会被缓存
		+FALLBACK在此标题下列出的文件规定当页面无法访问时的回退页面如404页面
	-更新缓存
		+用户清空浏览器缓存
		+manifest文件被修改
		+由程序来更新应用缓存
		+更新注释中的日期和版本号是更新缓存文件的办法
9. 使用cookie
	-创建cookie document.cookie= 'username=Jack;expires=;path=/'
###中级
1. 深度使用chrome控制台
2. 模拟请求Postman
3. 使用图片压缩
4. 图片的处理（上传，下载，压缩，识别后缀）
5. scss，less的深度使用（实现兼容，使用mixin等）
6. 框架的使用，源码阅读，源码理解和注释，源码模仿使用
7. token
8. 插件
9. 环境的配置
10.使用element建站
11.仿照element造轮子
###高级
1. 深入JavaScript底层
2. 深入浏览器底层
3. 使用svg，canvas
4. 页面性能调优
5. 自行开发js插件，工具，框架
6. 玩转chrome v8引擎