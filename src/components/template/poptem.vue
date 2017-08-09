<template>
	<div class="pop-modify" v-show="isShow">
		<div class="cover" @click="calcModify()"></div>
		<div class="modify">
			<input type="text" v-model="modifyName" />
			<div class="modify-btn">
				<span @click="calcModify()">取消</span>
				<span @click="sureModify()">确认修改</span>
			</div>
		</div>
	</div>
</template>
<script>
	export default{
		name:'poptem',
		data(){
			return{
				
			}
		},
		computed:{
			isShow(){
				return this.$store.store2.state.demo.isShow;
			},
			// 运用原生的 get/set 方法，实现数据双向绑定
			modifyName:{
				get(){
					return this.$store.store2.state.demo.modifyName;
				},
				set(value){
					this.$store.store2.commit('updateName',value)
				}
			}
		},
		methods:{
			calcModify(){
				this.$store.store2.dispatch('calcModify');
			},
			sureModify(){
				this.$store.store2.dispatch('sureModify');
			}
		}
	}
</script>
<style lang="less">
	@import '../../assets/css/common.css';
	@import '../../assets/css/style.less';

	.pop-modify{
		position:absolute;
		left:0;
		top:0;
		.wid();
		.hei();
		&>.cover{
			.wid();
			.hei();
			background-color:rgba(0,0,0,0.3);
		}
		&>.modify{
			position:absolute;
			top:50%;
			left:15%;
			.wid(70%);
			background-color:#fff;
			min-height: 100px;
			.bRadius(8px);
			.transY();
			input{
				.wid(80%);
				.heiM(30px);
				margin-top:10px;
				padding-left:10px;
			}
			.modify-btn{
				.wid(80%);
				text-align:center;
				margin: 16px auto 0;
				&>span{
					float:left;
					.wid(49%);
					.heiM(26px);
					margin-right: 2%;
					.fsize(14px);
				}
				&>span:nth-child(odd){
					border:1px solid #efefef;
				}
				&>span:nth-child(even){
					margin-right:0;
					background-color:#db1525;
					color:#fff;
				}
			}
		}
	}
</style>