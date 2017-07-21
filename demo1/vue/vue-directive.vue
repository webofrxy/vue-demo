<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>vue-directive</title>
</head>
<script src="../js/vue.js"></script>
<body>
	<div id="app">
		<input type="text" v-focus>
	</div>
	<script>
		Vue.directive('focus',{
			inserted:function(el){
				el.focus();
			}
		})
		new Vue({
			el:"#app"
		})
	</script>
</body>
</html>