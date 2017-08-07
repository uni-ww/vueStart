import Vue from 'vue'
import App from './App'
import router from './router/index';
import store from './vuex/store';
const app = new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')
