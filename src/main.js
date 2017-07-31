// 未完成 hash -> history 模式  消除#
import Vue from 'vue'
import App from './App'
import router from './router/index';

const app = new Vue({
	router,
	render: h => h(App)
}).$mount('#app')
