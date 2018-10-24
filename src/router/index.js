// 2. 定义路由
// 每个路由应该映射一个组件。 其中"component" 可以是
// 通过 Vue.extend() 创建的组件构造器，
// 或者，只是一个组件配置对象。
// 我们晚点再讨论嵌套路由。
import Foo from '../Foo';
import Bar from '../Bar';
const routers = [
	{ path: '/foo', component: Foo, name: 'foo' },
	{ path: '/bar', component: Bar, name: 'bar' }
];

export default routers;
