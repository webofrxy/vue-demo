<template>
	<div class="admin">
		<div class="admin-head">
			<myhead></myhead>
		</div>
		<div class="admin-content">
			<div class="admin-side">
				<navMenu></navMenu>
			</div>
			<div class="admin-contain">
				<router-view></router-view>
				
			</div>
		</div>	
	</div>
	
</template>

<script>
import navMenu from '@/components/common/navMenu'
import myhead from '@/components/adminHeader'


export default {
	data() {
		return{

		}
	},
	components:{
		myhead,
		navMenu,
		
	}
}
</script>

<style>
.admin{
	height: 100%;
}
.admin .admin-head{
	width: 100%;
	height: 70px;
	background: gold;
}
.admin .admin-content{
	height: -moz-calc(100% - 70px);
	height: -webkit-calc(100% - 70px);
	height: calc(100% - 70px);
}
.admin-content .admin-side{
	width: 255px;
	height: 100%;
	float: left;
	background: #eef1f6;
}
.admin-content .admin-contain{
	width: -moz-calc(100% - 315px);
	width: -webkit-calc(100% - 315px);
	width: calc(100% - 315px);
	height: -moz-calc(100% - 90px);
	height: -webkit-calc(100% - 90px);
	height: calc(100% - 90px);
	margin-left: 255px;
	padding: 30px;
	background: white;

}
.admin-contain .breadcrumb{
	height: 40px;
}
.admin-contain .list{
	margin-top: 20px;
}
.admin-contain .pagination{
	margin-top: 20px;
	float: right;
}
</style>