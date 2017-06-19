<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
	<script src="../js/vue.js"></script>
</head>
<body>
	<div id="counter-event-example">		
		<!-- <child message="hello"></child> -->
		<button @click="sub('hello000000000000',$event)"> submit</button>
		<p>{{total}}</p>
		<button-counter v-on:increment="incrementTotal"></button-counter>
		<button-counter v-on:increment="incrementTotal"></button-counter>
		<div class="parent">
			<p>这是父组件的标题</p>
			<my-component>
				<p>这是分发的内容1</p>
				<p>这是分发的内容2</p>
			</my-component>
			<p>head 111</p>
		</div>
		<div>
			<p>这是子组件的标题</p>
			<slot></slot>
		</div>
	</div>
</body>
<script>
	// Vue.component('child',{
	// 	props: ['message'],
	// 	template:'<span>{{ message }}</span>'
	// })
	Vue.component('button-counter',{
		template: '<button v-on:click="increment">{{counter}}</button>',
		data() {
			return {
				counter: 0
			}
		},
		methods: {
			increment: function() {
				this.counter += 1;
				this.$emit('increment')
			}
		}
	})
	Vue.component('my-component',{
		template: '<div class="child"><p>这是子组件的标题</p><slot></slot></div>'
	})
	new Vue({
		el: '#counter-event-example',
		data: {
			total: 0
		},
		methods: {
			incrementTotal: function() {
				this.total +=1;
			},
			sub(message,event) {
				if(event) event.preventDefault();
				alert(message)
			}
		}
	})

</script>
</html>