<template>
<div class="useImg">
	<h2>this is useImg</h2> 
	<div class="img-list">
		<div>
			<img src="../assets/image/1.jpg" alt="" />
		</div>
		<div>
			<img src="../assets/image/your_name.jpg" alt="" />
		</div>
		<div class="backgroundImg" style="background-image:url('../assets/image/2.jpg');">
			
		</div>
		<div class="backgroundImg backgroundImg1">
			
		</div>
		<div class="backgroundImg backgroundImg2">
			
		</div>
	</div>
</div>
</template>
<script>
	
</script>
<style lang="less">
@import '../assets/css/style.less';
.useImg{
	padding-top: 10px;
	.img-list{
		padding:0 10px;
		padding-top: 20px;
		&>div{
			.wid();
			margin-bottom: 10px;
		}
		&>.backgroundImg{
			padding-bottom: 100%;
			background-color: #fff;
			background-repeat: no-repeat;
			background-position: center;
			background-size: cover;
		}
		.backgroundImg1{
			background-image:url('../assets/image/2.jpg');
		}
		.backgroundImg2{
			background-image:url('../assets/image/your_name.jpg');
		}
	}
}
</style>