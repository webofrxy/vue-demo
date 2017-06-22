<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>vue-upload-file</title>
</head>
<script src="../js/vue.js"></script>
<!-- 引入样式 -->
<link rel="stylesheet" href="https://unpkg.com/element-ui/lib/theme-default/index.css">
<!-- 引入组件库 -->
<script src="https://unpkg.com/element-ui/lib/index.js"></script>
<body>
	<div id="app">
		<el-upload
			class="upload"
			accept="excel"
			:data="{'name':'excel'}"
			:action="loadUrl"
			:on-change="handleSuccess"
			:file-list="fileList"
			:on-preview="loadSuccess"
			:before-upload="beforeUpload"
		>
			<el-button size="small" type="primary">
				上传
			</el-button>
		</el-upload>
		<input type="file" >
	</div>
</body>
<script>
	var vm = new Vue({
		el: "#app",
		data() {
			return {
				errors: 0,
				fileList: [], //存放文件列表
				loadUrl: this.$api.batch.importOrder, //上传的地址
				loadFailedUrl: this.$api.batch.getFailExcel, //下载失败商品、
				exportGoodsList: this.$api.batch.exportGoodsList, //下载商品列表
				exportOrderTem: this.$api.batch.exportOrderTem, //下载上传模板
				loadResponse: {
					success: 0,
					failed: 0
				},
				faileName: []

			}
		},
		methods: function() {
			//上传文件之前调用函数
			//const 常量（地址不变）let 变量
			//slice 从字符串中截取一部分，（也可以从数组中截取一个数组片段）这里是截取文件的类型xlsx
			//substring和slice相同都是截取start到end的字符串，substr截取的是一定数量的字符串
			beforeUpload(file){
				//提取文件的后缀，用于校验文件格式
				const fileSuffix = file.name.slice（file.name.lastIndexOf('.'+1);
				//校验上传文件的数量
				if(this.fileName.length == 0) {
					//ele 中错误信息提示的组件
					this.$message.error('请勿重复上传')；
					return false;
				}
				//校验文件格式是否正确
				if(fileSuffix.indexOf('xl') == 0 ) {
					this.fileName.push(file.name);

				}else{
					this.$message.error('文件格式错误，请重新上传');
					this.fileList = [];
					return false;
				}
			},
			//上传成功 回调
			loadSuccess(file){
				if(file.response.error == 0){
					file.loadResponse.success = file.response.data.success;
					this.loadResponse.failed = file.response.data.failed;
				}else{
					this.fileList=[];
					this.fileName = [];
				}
			},
			//上传完成 自动完成点击事件 获取回调数据
			handleSuccess(file, fileList) {
				document.getElementsByClassName('el-upload-list__item-name')[0].click();
			}
		}
	})
</script>
<style scoped>
	/* 2.0版 注释 2017/06/21 */

	/* 1.*版 注释 */
	.w-batch{
		width:972px;
		float: left;
		padding:16px 25px 130px 22px;
		background-color:#fff;
		min-height: 500px;
	}
	.w-batch button{
		cursor:pointer;
		font-size:14px;
	}
	.w-batch h3{
		color:#333;
		text-align: left;
		padding-bottom:15px;
		border-bottom: 1px solid #D8D8D8;
		margin-bottom: 22px;
	}
	.w-batch h4,.w-batch p{
		text-align: left;
		font-size:14px;
		color:#333;
	}
	.w-batch h4{
		margin-bottom:26px;
	}
	.w-batch p span{
		display: inline-block;
		width:19px;
		height:19px;
		color:#fff;
		border-radius:4px;
		background-color: #009E4D;
		text-align: center;
		font-size:14px;
		line-height:19px;
		margin:0 15px;
	}
	.w-batch p a{
		color:#E64346;
		cursor: pointer;
	}
	.w-batch p button{
		width:78px;
		height:28px;
		border:1px solid #D8D8D8;
		background-color: #F2F2F2;
		margin-left:48px;
	}
	.w-batch .step p:nth-of-type(2),.w-batch .step p:nth-of-type(4){
		margin:12px 0 24px;
	}
	.w-batch .step p:nth-of-type(6){
		margin:44px 0 16px;
		box-sizing: border-box;
		padding-left:15px;
		color:#999;
	}
	.w-batch .upload{
		margin-left: 16px;
		display: inline-block;
	}
	.w-batch .step p:nth-of-type(7){
		color:#E64346;
		margin-top:14px;
		box-sizing: border-box;
		padding-left: 15px;
	}
	.w-batch .step p:nth-of-type(7) i{
		color:#E64346;
		margin-right: 20px;
	}
	.w-batch .step p:last-of-type{
		color:#E64346;
		margin-top:14px;
		box-sizing: border-box;
		padding-left: 15px;
	}
	.w-batch .step p:last-of-type a{
		color:#E64346;
		margin-right: 20px;
		text-decoration:underline;
	}
</style>
</html>