import Vuex from 'vuex';
import Vue from 'vue';
import storeA from './storeA';
Vue.use(Vuex);
const store = new Vuex.Store({
	modules: {
		storeA: storeA
	}
});

export default store;
