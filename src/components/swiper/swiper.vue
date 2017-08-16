<template>
<div id="banner">
	<div class="swiper-container">
		<div class="swiper-wrapper">
			<div class="swiper-slide" v-for="(imgSrc,index) in imgList">
				<img :src="imgSrc" alt="" />{{index}}----{{index}}
			</div>
		</div>
	</div>
	<router-link class="router-link" to="/aaa">Go to A</router-link><br />
	<router-link class="router-link" to="/user/foo/posts">Go to User foo/posts</router-link><br />
	<router-link class="router-link" to="/user/foo/profile">Go to User foo/profile</router-link><br />
	<router-link class="router-link" :to="{name:'userTo',params:{id:44}}">Go to UserTo</router-link><br />
	<!-- <router-link class="router-link" :to="{name:'userTo',params:{id:44}}" replace>Go to UserTo Replace</router-link><br /> -->
	<router-link class="router-link" :to="{name:'userToQuery',query:{plan:'private'}}">Go to userToQuery</router-link><br />
	<!-- <router-link class="router-link" to="/foo/foo">reditect</router-link> -->
	<router-link class="router-link" to="/dy-redirect?to=foo">reditect</router-link>
	<div id="result">111</div>
	<div @click="testJq()">changeRes</div><br />
		
	<router-link class="router-link" to="/parent">transition Router</router-link>
	<br /><br />
	<router-link class="router-link" to="/header">Go To header</router-link>
	<br />
	<br /><div class="test-less">
		<ul>
			<li>11</li>
			<li>22</li>
			<li>33</li>
		</ul>
	</div>
	<h1>this is h1</h1>
	<router-view></router-view>
	<div class="move" @click="move()">Move Sport</div>
	<div class="sport-move">
		<i class="iconfont">&#xe66a;</i>
	</div>

</div>
</template>
<script>
import Move from '../../assets/lib/js/move';
import $ from "jquery";
import Swiper from "swiper";
// console.log($)
export default {
	name: 'swiper',
	data() {
		return {
			imgList:[
				'../../../static/lib/images/your_name.jpg',
				'../../../static/lib/images/your_name.jpg',
				'../../../static/lib/images/your_name.jpg'
			]
		}
	},
	methods: {
		testJq(){
			$('#result').html('222');
		},
		move(){
			Move('.sport-move')
			  .add('margin-left', 200)
			  .end();
		}
	},
	mounted() {
		new Swiper('.swiper-container', {
			autoplay: 5000, //可选选项，自动滑动
			loop:true
		})
	}
}

</script>
<style lang="less" scoped>
	@import '../../assets/css/style.less'; 
	@import '../../assets/lib/css/swiper.css';
	.swiper-slide{
		/*height: 100px;
		line-height: 100px;*/
		background: lightblue;
	}
	.test-less{
		height: 50px;
		line-height: 50px;
		&>ul{
			width:100%;
			height: 50px;
			&>li{
				width:33%;
				float: left;
			}
		}
	}
	h1{
		.color(red);
	}
	.router-link{
		line-height:30px;
	}
	.move{
		.fsize(24px);
	}
	.sport-move{
		.wid(100px);
		.hei(100px);
		border:1px solid #ccc;
	}
</style>
