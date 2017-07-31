<template>
	<footer>
		&copy;  aLi
	</footer>
</template>

<script>
	export default{
		name:'header',
		data(){
			return {
				msg:'this is Header'
			}
		}
	}
</script>

<style lang="less" scoped>
@import '../../assets/css/style.less';
footer{
	position: absolute;
	left:0;
	bottom:0;
	.wid();
	.heiM(40px);
	.fsize(15px);
	.color(#333);
}
</style>