<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>定位和居中</title>
	<script src="../js/vue.js"></script>
</head>
<body>
	<div class="contain">
		<p class="login">登录</p>
	</div>
</body>
<style>
	.contain {
		position: absolute;
		background: gray;
		top: 100px;
		left: 30%;
	}
	.login {
		width: 50px;
		height: 30px;
		line-height: 30px;
		text-align: center;
		border-radius: 10px;
		background: red;
	}
</style>
</html>