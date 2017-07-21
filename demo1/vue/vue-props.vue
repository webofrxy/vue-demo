<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>vue-props</title>
	<script src="../js/vue.js"></script>
</head>
<body>
	<div id="app">
		<myheader message="hello"></myheader>
	</div>
</body>
<script>
	Vue.component('myheader',{
		props: ['message'],
		template: "<h3>{{ message }}</h3>"
	})
	new Vue({
		el: "#app"
	})
</script>
</html>