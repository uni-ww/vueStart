
import Vue from "vue";
import Vuex from 'vuex';
import * as types from "./mutation-type";
Vue.use(Vuex);
export default new Vuex.Store({
	state:{
		count:2,
		todos:[
			{id:1,text:'this is id 1',done:true,flag:'1111'},
			{id:2,text:'this is id 2',done:true},
			{id:3,text:'this is id 3',done:false}
		]
	},
	mutations:{
		[types.INCREMENT](state,obj){
			state.count += obj.amount;
		},
		[types.DECREMENT](state,n){
			state.count -= n;
			if(state.count <= 1){
				state.count = 1;
			}
		},
		[types.ADDNEWPROP](state){
			setTimeout(() => {
				state.todos = state.todos.concat({id:4,text:'this is id 4',done:true,flag:'4444'})
			},1000)
		}
	},
	actions:{
		increment({commit,state},obj){
			console.log(commit)
			commit({type:'INCREMENT',amount:obj.amount});
		},
		decrement({commit}){
			commit('DECREMENT',6);
		},
		addNewProp({commit}){
			// setTimeout(() => {
				commit('ADDNEWPROP')
			// },1000);
		}
	},
	getters:{
		doneTodos:state => {
			return state.todos.filter(todo => todo.done)
		}
	}
});
