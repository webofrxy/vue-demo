<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>vue-async1</title>
</head>
<script src="../js/vue.js"></script>
<body>
	<div id="app">
		<example></example>
	</div>
	<script>
	//git status
		Vue.component('example', {
		  template: '<span @click="updateMessage">{{ message }}</span>',
		  data: function () {
		    return {
		      message: '没有更新'
		    }
		  },
		  methods: {
		    updateMessage: function () {
		      this.message = '更新完成'
		      console.log(this.$el.textContent) // => '没有更新'
		      this.$nextTick(function () {
		        console.log(this.$el.textContent) // => '更新完成'
		      })
		    }
		  }
		})
		new Vue({
			el:"#app"
		})
	</script>
</body>
</html>