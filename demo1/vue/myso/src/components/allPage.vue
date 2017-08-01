<template>
	<div class="allPage">
		<div class="all-head">
			<myhead></myhead>
		</div>
		<div class="all-content">
			<div class="all-side">
				<navMenu></navMenu>
			</div>
			<div class="all-contain">
				<breadcrumb class="breadcrumb"></breadcrumb>
				<datePicker class="datePicker"></datePicker>
				<list class="list"></list>
				<pagination class="pagination"></pagination>
			</div>
		</div>	
	</div>
	
</template>

<script>
import navMenu from '@/components/navMenu'
import myhead from '@/components/header'
import breadcrumb from '@/components/breadcrumb'
import datePicker from '@/components/datePicker'
import list from '@/components/list'
import pagination from '@/components/pagination'

export default {
	data() {
		return{

		}
	},
	components:{
		myhead,
		navMenu,
		breadcrumb,
		datePicker,
		list,
		pagination
	}
}
</script>

<style>
.allPage{
	height: 100%;
}
.allPage .all-head{
	width: 100%;
	height: 70px;
	background: gold;
}
.allPage .all-content{
	height: -moz-calc(100% - 70px);
	height: -webkit-calc(100% - 70px);
	height: calc(100% - 70px);
}
.all-content .all-side{
	width: 255px;
	height: 100%;
	float: left;
	background: #eef1f6;
}
.all-content .all-contain{
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
.all-contain .breadcrumb{
	height: 40px;
}
.all-contain .list{
	margin-top: 20px;
}
.all-contain .pagination{
	margin-top: 20px;
	float: right;
}
</style>