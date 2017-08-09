import Vue from 'vue'
import App from './App'
import router from './router/index';
import store1 from './vuex-learn/store';
import store2 from './vuex-demo/store';
const app = new Vue({
	router,
	store:{
		store1:store1,
		store2:store2
	},
	render: h => h(App)
}).$mount('#app')
