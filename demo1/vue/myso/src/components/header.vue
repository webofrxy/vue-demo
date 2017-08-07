<template>
	<div class="header">
		<h1 class="logo-wrap">logo</h1>
		<ul class="info-wrap">
			<li><router-link to="/login">登录</router-link></li>
			<li ><router-link to="/reg">注册</router-link></li>
		</ul>
	</div>
</template>

<script>
	
</script>

<style scoped>
.header{
	width: 100%;
	height: 70px;
	background: rgb(32,160,225)
}
.header .logo-wrap{
	width: 200px;
	height: 70px;
	line-height: 70px;
	float: left;
	margin-left: 70px;
	color: white;
}
.header .info-wrap{
	width: 200px;
	height: 70px;
	float: right;
	padding-left: 100px;
	list-style: none;
}
.header .info-wrap li{
	width: 40px;
	height: 70px;
	line-height: 70px;
	text-align: center;
	display: inline-block;
	list-style: none;
	color: white;
}
.header .info-wrap a{
	color: #fff;
	text-decoration-line: none;
}
</style>