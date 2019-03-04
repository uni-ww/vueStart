import Vue from 'vue'
import App from './App'
import router from './router/index';
import store1 from './vuex-learn/store';
import store2 from './vuex-demo/store';
import Dialog from 'vue-wdialog';
console.log(Dialog)
Vue.use(Dialog)
Vue.config.productionTip = false;
const app = new Vue({
	el: '#app',
	router,
	store: {
		store1: store1,
		store2: store2
	},
	render: h => h(App)
})
