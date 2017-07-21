<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>vue-set</title>
</head>
<script src="../js/vue.js"></script>
<body>
	<div id="app">
		<my-header></my-header>
	</div>
	<script>
		Vue.component('my-header',{
			template:'<h3 @click="update">{{message}}</h3>',
			data(){
				return {
					message:'更新',
					obj:[]
				}
					
			},
			methods:{
				update:function(){
					this.$set(this.obj,a,'1');
					this.$nextTick(function(){
					console.log(this.obj)
						
					})
				}
			}
		})
		var vm=new Vue({
			el:"#app",
			data(){
				return {
					myobj:[],
					someObject:{}
				}
			}
		})
		vm.$set(vm.myobj,'a','1');
		console.log(vm.myobj)
		vm.someObject = Object.assign({}, vm.someObject, { a: 1, b: 2 })
		console.log(vm.someObject)
		// this.$nextTick(function(){
		// 	console.log(this.obj)
		// }
	</script>
</body>
</html>