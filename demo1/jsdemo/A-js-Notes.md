##js中常见问题的总结
1.  e.preventDefault();
	常用于点击事件（eg：handleSubmit事件中）函数中，用于阻止默认行为
2.  mysql 中低版本（目前已知为5.5 的会有这种情况）的MySQL会默认将int 转化为string，所以遇到string和int的转换需要用函数将其强转换，避免出错。
3.  this.currentUrl = location.hash.slice(1) || '/';
	location是javascript里边管理地址栏的内置对象，比如location.href就管理页面的url，用location.href=url就可以直接将页面重定向url。而location.hash 	  则可以用来获取或设置页面的标签值。比如http://domain/#admin的location.hash="#admin"。
4.  在git中处理分支时，如果你是分支dev，那你获取代码的流程是：
	保存自己的代码=》拉别人Dev的代码=》合并别人Dev的代码=》上传代码（不能直接拉master上面的代码，合并代码时会报错）