<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>vue-filter</title>
</head>
<script src="../js/vue.js"></script>
<body>
	<div id="app">
		<input type="text" placeholder="vue-filter" v-model= "message">
		<h3>{{ message | num }}</h3>
	</div>
</body>
<script>
	Vue.filter('num',function(value){
		if(!value)return '';
		value = value.toString();
		return value.charAt(0).toUpperCase()+value.slice(1)
	})
	var vm = new Vue({
		el: "#app",
		data() {
			return {
				message:''
			}
		},
		methods:function(){

		}
	})
</script>
</html>