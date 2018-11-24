<template>
	<div>
		<br>
		<br>
		<router-link to="/start">skip index study</router-link>
		<br>
		<br>
		<h1 v-html="hello">
		</h1>
		<div class="c-red">this is red</div>
		<ul>
			<template v-for="(list,index) in lists">
				<li>{{list.name}} --- {{list.age}}</li>
			</template>
		</ul>
		<button v-on:click="addItem">add item</button>
		<br><br>
		<a v-bind:href="link" :class="fontS" class="c-red" target="_blank" title="skip baidu">skip baidu</a>
		<br><br>
		<button v-on:click="changeItem">change item 3</button>
		<br>
		<div v-if="isShowA">v-if showA</div>
		<div v-else> don`t showA</div><br>
		<div v-show="!isShowA">v-show  showA</div>
		<br><br>
		<button v-on:click="toggle">toggle showA</button>
		<br><br>
		<input type="text" v-on:keydown.13="keydown">
		<br><br>
		input radio / checkbox 
		<input v-model="myBox" checked="true" type="radio" value='apple'>
		<input v-model="myBox" type="radio" value='banana'>
		<input v-model="myBox" type="radio" value='oriage'>
		{{myBox}}
		<br><br>
		select
		<select v-model="selection">
			<option v-for="item in selectItem" :value="item.value">{{item.text}}</option>
		</select>
		{{selection}}
		<br><br>
		computed
		<input type="text" v-model="myValue">
		<br>
		{{myValueNum}} <br>
		{{getMyValueNum()}}
		<!-- 组件 -->
		<component-a :data-a="dataA" @my-event="myEvent">
			<p slot="footer">xxxx footer</p>
			<p slot="header">xxxx header</p>
		</component-a>
		组件
		<!-- 缓存组件，提高加载速度 -->
		<keep-alive>
			<div :is="comToRender"></div>
		</keep-alive>
		<!-- 过渡 -->
		transition：<br>
		<button v-on:click="show = !show">Toggle</button>
		<br>
		<br>
		<button @click="changeCom">changeCom</button>
		<transition name="my-trans" mode="out-in">
			<!-- <div v-show="show">i an show</div> -->
			<!-- 同一标签名  key值作为唯一标识 -->
			<div v-if="show" key="0">i an show</div>
			<div v-else key="1">i not show</div>
			<!-- <div :is="transCom"></div> -->
		</transition>
		<br>
		<br>
		<br>
		<br>	
	</div>
</template>
<script>
	import componentA from "./componentA";
	import componentB from "./componentB";
	import Vue from "vue";
	export default {
		data(){
			return {
				show:false,
				hello:'<span>hello world</span>',
				link:'https://www.baidu.com',
				dataA:'index页面的dataA',
				isShowA:false,
				fontS:[
					'fonts20',
					'fontw'
				],
				lists:[{
					name:'ww',
					age:12,
					sex:1
				},{
					name:'wadw',
					age:32,
					sex:1
				},{
					name:'ss',
					age:123,
					sex:1
				},{
					name:'ww',
					age:44,
					sex:1
				}],
				// form
				myBox:'',
				selection:'',
				selectItem:[{
					text:'apple',
					value:0
				},{
					text:'orange',
					value:1
				}],
				myValue:'',
				// 引用组件
				comToRender:'component-a',
				transCom:'component-a'
			}
		},
		components:{
			componentA,
			componentB
		},
		computed:{
			// 只有初始化更新
			myValueNum(){
				return this.myValue.replace(/\D/g,'');
			}
		},
		methods:{
			changeCom:function(){
				if(this.transCom === 'component-a'){
					this.transCom = 'component-b'
				}else{
					this.transCom = 'component-a';
				}
			},
			// 会一直更新
			getMyValueNum(){
				return this.myValue.replace(/\D/g,'');
			},
			addItem(){
				console.log(this.lists)
				this.lists.push({
					name:'icon',
					age:44,
					sex:1
				})
			},
			changeItem(){
				Vue.set(this.lists,2,{
					name:'ww2222222',
					age:44,
					sex:1
				})
			},
			toggle(){
				this.isShowA = !this.isShowA
			},
			keydown(){
				console.log('keydown')
			},
			myEvent(e){
				console.log(e)
			}
		},
		watch:{
			myValue(nVal,oVal){
				console.log(nVal,oVal);
				console.log(this)
			}
		}
	}
</script>
<style scoped>
	.c-red{
		color:red;
	}
	.fonts20{
		font-size: 40px;
	}
	.fontw{
		font-weight: bold;
	}
	.c-red{
		color:red;
	}
	.fonts20{
		font-size: 40px;
	}
	.fontw{
		font-weight: bold;
	}
	.fade-enter-active,.fade-leave-active{
		transition:opacity 0.5s ease;
	}
	.fade-enter,.fade-leave-active{
		opacity: 0;
	}
	.my-trans-enter-active,.my-trans-leave-active{
		transition: all .5s ease-out;
	}
	.my-trans-enter{
		position: absolute;
		opacity: 0;
		transform: translateX(-50px);
	}
	.my-trans-leave-active{
		transform: translateX(50px);
		opacity: 0;
	}
</style>