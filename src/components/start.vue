<template>
	<div>
	    <router-link class="router-link" to="/swiper">学习vue-router</router-link>
	    <router-link class="router-link" to="/home">学习vuex</router-link>
	    <router-link class="router-link" to="/vuexDemo">vuex-demo</router-link>
	    <router-link class="router-link" to="/useImg">动态引入img</router-link>
    </div>
</template>
<script>
	
</script>
<style lang="less">

	@import '../assets/css/common.css';
	@import '../assets/css/style.less';
.router-link{
  display: block;
  .wid();
  text-align:center;
  .heiM(28px);
}
</style>