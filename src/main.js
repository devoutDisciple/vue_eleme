import Vue from 'vue';
import App from './App';
import routes from './router/index';
import VueRouter from 'vue-router';
import ElementUI from 'element-ui';
import store from './store/index';

// 3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
let router = new VueRouter({
	mode: 'history',
	routes: routes // (缩写) 相当于 routes: routes
});

router.beforeEach((to, from, next) => {
	console.log(to);
	console.log(from);
	next();
});

Vue.use(VueRouter);
Vue.use(ElementUI, { size: 'small', zIndex: 3000 });



new Vue({
	el: '#app',
	router,
	store,
	render: h => h(App)
}).$mount('#app');
