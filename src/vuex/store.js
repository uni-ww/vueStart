import Vue from "vue";
import Vuex from 'vuex';
Vue.use(Vuex);
export default new Vuex.Store({
	state:{
		count:2,
		todos:[
			{id:1,text:'this is id 1',done:true},
			{id:3,text:'this is id 3',done:true},
			{id:2,text:'this is id 2',done:false}
		]
	},
	mutations:{
		increment(state,obj){
			state.count += obj.amount;
		},
		decrement(state,n){
			state.count -= n;
			if(state.count <= 1){
				state.count = 1;
			}
		}
	},
	getters:{
		doneTodos:state => {
			return state.todos.filter(todo => todo.done)
		}
	}
});