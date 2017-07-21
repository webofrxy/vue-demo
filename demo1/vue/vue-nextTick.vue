<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>vue-nextTick</title>
</head>
<script src="../js/vue.js"></script>
<body>
	<div id="app">
	<div>
		<div>llllllllllllllll</div>
		<div>llllllllllllllll</div>
		<div>llllllllllllllll</div>
		<div>llllllllllllllll</div>
		<div>llllllllllllllll</div>
		<div>llllllllllllllll</div>
		<div>llllllllllllllll</div>
		<div>llllllllllllllll</div>
		<div>llllllllllllllll</div>
		<div>llllllllllllllll</div>
		<div>llllllllllllllll</div>
		<div>llllllllllllllll</div>
		<div>llllllllllllllll</div>
		<div>llllllllllllllll</div>
		<div>llllllllllllllll</div>

		<div>llllllllllllllll</div>
		<div>llllllllllllllll</div>
		<div>llllllllllllllll</div>
		<div>llllllllllllllll</div>
		<div>llllllllllllllll</div>
		<div>llllllllllllllll</div>
		<div>llllllllllllllll</div>
		<div>llllllllllllllll</div>
		<div>llllllllllllllll</div>
		<div>llllllllllllllll</div>
		<div>llllllllllllllll</div>
		<div>llllllllllllllll</div>
		<div>llllllllllllllll</div>
		<div>llllllllllllllll</div>
		<div>llllllllllllllll</div>
		<div>llllllllllllllll</div>
		<div>llllllllllllllll</div>
		<div>llllllllllllllll</div>
		<div>llllllllllllllll</div>
		<div>llllllllllllllll</div>

	</div>
		

		<ul v-show="box">
			<li v-for="(item,index ) in sites">{{ item.name }}</li>
		</ul>
	<h2 ref="aaa">固定栏</h2>
	<h1 >底部</h1>
	</div>
</body>
<script>
	var vm = new Vue({
		el: "#app",
		data:{
			sites: [
				      { name: 'Runoob' },
				      { name: 'Google' },
				      { name: 'Taobao' }
				    ],
			box: true
		},
		mounted() {
			console.log(window.screen.availHeight)
			console.log(this.$refs.aaa.offsetTop);
			if(this.$refs.aaa.offsetTop > window.screen.availHeight){
				console.log(123)
				this.box = true;
				console.log(this.box)
			}
			document.onscroll = ()=>{
				if(document.body.scrollTop>0){
					this.box = false;
					console.log(this.box)
				}
			}
		},
		methods:{
			myclick(){

			}
		}
	})
</script>
</html>