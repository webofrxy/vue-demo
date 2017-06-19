<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>vue-async</title>
</head>
<script src="../js/vue.js"></script>
<body>
	<div id="example">{{message}}
		<p>this is p </p>
		<h1>this is h1</h1>
	</div>
	<script>
	var vm = new Vue({
	  el: '#example',
	  data: {
	    message: '123'
	  }
	})
	vm.message = 'new =message' // 更改数据
	console.log(vm.$el.childNodes.length) // false
	Vue.nextTick(function () {
	  console.log(vm.$el.textContent === 'new message') // true
	})
	</script>
</body>
</html>