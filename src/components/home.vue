<template>
	<div class="outer">
		<h2>{{count}}</h2>
		<div class="addJ"><span class="add" @click="increment()">+</span><span class="jian" @click="decrement()">-</span></div>

		<ul>
			store.state属性：<br />
			<li v-for="todo in todos1">
				{{todo.id}}---{{todo.text}}---{{todo.done}}
				<span v-if="todo.flag">{{todo.flag}}</span>
			</li>
		</ul>

		<ul>
			getters属性：<br />
			<li v-for="todo in todos2">
				{{todo.id}}---{{todo.text}}---{{todo.done}}
			</li>
		</ul>

		<div class="add-new-prop" @click="addNewProp()">Add new Prop</div>
	</div>
</template>

<script>
	export default{
		name:'home',
		computed:{
			count(){
				return this.$store.state.count
			},
			todos1(){
				return this.$store.state.todos
			},
			todos2(){
				return this.$store.getters.doneTodos
			}
		},
		data(){
			return{

			}
		},
		methods:{
			increment:function(){
				this.$store.dispatch('increment',{amount:10});
			},
			decrement:function(){
				this.$store.dispatch('decrement');
			},
			addNewProp:function(){
				this.$store.dispatch('addNewProp');
			}
		}
	}
</script>

<style lang="less" scoped>
@import '../assets/css/style.less';
@import '../assets/css/common.css';
.outer{
	padding:0 10px;
	&>h2{
		text-align:center;
	}
}
.addJ{
	margin:0 auto;
	width:50%;
	.heiM(30px);
	text-align: center;
	font-size: 20px;
	&>.add{
		float: left;
		.wid(49%);
		border:1px solid #ccc;
		margin-right: 2%;
	}
	&>.jian{
		float: left;
		.wid(49%);
		border:1px solid #ccc;
	}
}
ul{
	padding-top: 10px;
	li{
		.heiM(24px);
		text-align:center;
	}
}
.add-new-prop{
	.wid(100px);
	.heiM(40px);
	background-color: #db1525;
	color:#fff;
}
.add-new-prop:hover{
	background-color: #db5525;
}
</style>