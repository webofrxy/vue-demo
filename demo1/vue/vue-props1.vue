<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>vue-props1</title>
</head>
<script src="../js/vue.js"></script>
<body>
	<div id="app">
		<my-header :message="message"></my-header>
	</div>
</body>
<script>
		Vue.component('my-header',{
			props:['message'],
			template:`<h3>{{message}}</h3>`
		})
		new Vue({
			el:"#app",
			data() {
				return {
					message:"头部"
				}
			}
		})
</script>
</html>