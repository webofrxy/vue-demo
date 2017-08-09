<template>
	<div>
		<h3>修改信息</h3>
		姓名：<el-input class="userName" placeholder="请输入姓名"></el-input><br>
		电话：<el-input class="userTel" placeholder="请输入电话"></el-input><br>
		邮箱：<el-input class="userEmail" placeholder="请输入邮箱"></el-input><br>
		地址：<el-input class="userEmail" placeholder="请输入地址"></el-input><br>
		备注：<el-input class="userIssue" type="textarea" :autosize="{ minRows: 2, maxRows: 8}" placeholder="请输入内容">
</el-input>
	</div>
</template>
<script>
	
</script>

<style scoped>
.userName{
	width: 200px;
	margin-top: 10px;
}
.userTel{
	width: 200px;
	margin-top: 10px;
}
.userEmail{
	width: 200px;
	margin-top: 10px;
}
.userIssue{
	width: 500px;
	margin-top: 10px;
}
</style>