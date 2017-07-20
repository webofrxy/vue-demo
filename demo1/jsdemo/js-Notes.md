##js中常见问题的总结
1.  e.preventDefault();
	常用于点击事件（eg：handleSubmit事件中）函数中，用于阻止默认行为
2.  mysql 中低版本（目前已知为5.5 的会有这种情况）的MySQL会默认将int 转化为string，所以遇到string和int的转换需要用函数将其强转换，避免出错。