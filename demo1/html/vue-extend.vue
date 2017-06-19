<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>vue-extend</title>
	<script src="../js/vue.js"></script>
</head>
<body>
	<div id="app">
		<myheader></myheader>
	</div>
</body>
<script>
	// var hz = {template:'<h3>订单详情</h3>'}
	Vue.component('myheader',{
		template: '<h3>{{ name }}</h3>',
		data: function() {
			return {
				"name":"tom"
			}
		}
	})
	new Vue({
		el:"#app",
		// components: {"myheader": hz}
	})
</script>
</html>