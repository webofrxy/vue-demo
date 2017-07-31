<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>vue-async</title>
</head>
<script src="../js/vue.js"></script>
<body>
	<div id="app">
		<my-head></my-head>
	</div>
</body>
<script>
Vue.component('my-head',{
	template:'<h3 @click="updata">{{message}}</h3>',
	data() {
		return {
			message: '更新'
		}
	},
	methods:{
		updata:function(){
			this.$nextTick(function(){
				this.message = '更新后'
			})
			console.log(this.message)
			this.message = '更新前';
			console.log(this.message) 
		}
	}
})	
/*
说明无论this.$nextTick无论在哪个位置，它都是在dom渲染完后执行
**/
new Vue({
	el:"#app"
})
</script>

</html>