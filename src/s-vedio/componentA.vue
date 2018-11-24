<template>
	<div>
		<br>
		<br>
		<br>
		<h1>this is 组件</h1>		
		<slot name="header">no header</slot>
		<br><br>
		props: <br>
		<h2>this is {{dataA}}</h2>
		<br>
		<br>
		<slot name="footer">no footer</slot>	
		<br>
		<button @click="parentEvent"> click parent event</button>
		<br><br>
	</div>
</template>
<script>
	export default{
		props:{
		'data-a':{
				type:[String,Number],
				value:''
			}
		},
		data(){
			return{

			}
		},
		methods:{
			parentEvent(){
				this.$emit('my-event','clcik comA hhhhhh')
			}
		}
	}
</script>
<style>
	
</style>