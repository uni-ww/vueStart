<template>
	<div class="demo-all">
		<div class="add-name">
			<span>添加姓名：</span>
			<input type="text" v-model="name" />
		</div>
		<div class="add-btn" @click="add()">添加</div>
		<ul>
			<li v-for="(list,index) in lists">
				<div>{{list.name}}</div>
				<b @click="modify(list,index)">修改</b>
				<i @click="deletename(index)">×</i>
			</li>
		</ul>
		<popTem></popTem>
	</div>
</template>

<script>
import popTem from "./template/poptem";
export default{
	name:'vue-demo',
	data(){
		return{
			name:''
		}
	},
	computed:{
		lists(){
			// store2 为 main.js 中注册 store 指到 store2 -> vuex-demo/store.js
			// demo 为 vuex-demo/store.js 中 modules, 绑定模块指到 demo -> stote-modules
			return this.$store.store2.state.demo.nameList;
		}
	},
	components:{
		popTem
	},
	methods:{
		add(){
			this.$store.store2.dispatch('addName',{name:this.name});
			this.name = '';
		},
		modify(list,index){
			this.$store.store2.dispatch('modifyName',{nameInfo:list,index:index})
		},
		deletename(index){
			this.$store.store2.dispatch('deleteName',index);
		}
	}
}
</script>

<style lang="less">
	@import '../assets/css/common.css';
	@import '../assets/css/style.less';
	.demo-all{
		padding: 0 10px;
	}
	.add-name{
		.heiM(40px);
	}
	.add-btn{
		.wid(50%);
		.heiM(30px);
		margin:0 auto;
		color:#fff;
		background-color: #db1525;
		.bRadius(5px);
		.fsize(12px);
	}
	ul{
		margin-top: 10px;
		li{
			position:relative;
			.heiM(36px);
			margin-top:6px;
			&>div{
				float: left;
				width:100%;
				text-align: left;
				padding-left:10px;
				padding-right:36px
			}
			&>b{
				position:absolute;
				top:0;
				right:36px;
				.heiM(36px);
				font-weight:normal;
				color:#fff;
				background-color:#db1525;
				padding:0 10px;
			}
			&>i{
				position:absolute;
				.wid(36px);
				.hei(36px);
				top:0;
				right: 0;
				background-color:#ccc;
				font-size:30px;
				text-align:center;
				color:#333;
			}
		}
		li:nth-child(odd){
			background-color:lightblue;
		}
		li:nth-child(even){
			background-color:green;
			&>div{
				color:#fff;
			}
		}
	}
</style>