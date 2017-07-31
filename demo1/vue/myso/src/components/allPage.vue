<template>
	<div class="allPage">
		<div class="all-head"></div>
		<div class="all-content">
			<div class="all-side"></div>
			<div class="all-contain"></div>
		</div>	
	</div>
	
</template>

<script>
	
</script>

<style>
.allPage{
	height: 100%;
}
.allPage .all-head{
	width: 100%;
	height: 100px;
	background: gold;
}
.allPage .all-content{
	height: -moz-calc(100% - 100px);
	height: -webkit-calc(100% - 100px);
	height: calc(100% - 100px);
}
.all-content .all-side{
	width: 255px;
	height: 100%;
	float: left;
	background: red;
}
.all-content .all-contain{
	width: -moz-calc(100% - 255px);
	width: -webkit-calc(100% - 255px);
	width: calc(100% - 255px);
	height: 100%;
	margin-left: 260px;
	background: yellow;

}
</style>