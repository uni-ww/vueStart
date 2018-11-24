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
		<div class="backgroundImg" style="background-image:url('../../assets/image/2.jpg');">
			
		</div>
		<div class="backgroundImg backgroundImg1">
			
		</div>
		<div class="backgroundImg backgroundImg2">
			
		</div>
		<template v-for="(img,index) in imgUrl">
		<!-- {{img}} -->
		<!-- <img :src="img" alt=""> -->
		<div class="backgroundImg" :style="{backgroundImage:'url('+img+')'}">
			
		</div>
		</template>
	</div>
</div>
</template>
<script>
	export default{
		name:'useImg',
		data(){
			return{
				imgUrl:[
					'http://mpic.tiankong.com/c5d/ad3/c5dad3b2a7dcf8fe3f4dd6ffcac30c71/640.jpg@360h',
					'http://mpic.tiankong.com/581/86d/58186d765ccc87e35ba9cbc5f16ddfa6/640.jpg@360h',
					'http://mpic.tiankong.com/e4f/3b8/e4f3b852d7c0eeca057d2759dadcc7a2/640.jpg@360h',
					'http://mpic.tiankong.com/5f8/f47/5f8f477a006967a960c9d55a0facf585/171-2780.jpg@360h',
					'http://mpic.tiankong.com/065/ef6/065ef6d139f86146547094a70df93168/640.jpg@360h'
				]
			}
		}
	}
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