import Vue from 'vue';
import Vuex from 'vuex';
import storeModules from './store-modules'
Vue.use(Vuex);
export default new Vuex.Store({
	modules:{
		demo:storeModules
	}
})