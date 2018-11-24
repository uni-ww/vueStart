import Vue from 'vue';
import Router from 'vue-router';
import Swiper from '../components/swiper/swiper';
import HomeTem from '../components/home';
import VuexDemo from '../components/vuex-demo';
import Start from '../components/start';
import UseImg from '../components/useImg'
// const Header = resolve => {
// 	require.ensure(['../components/headFoot/header.vue'],() => {
// 		resolve(require('../components/headFoot/header.vue'));
// 	})
// }
// const Header = resolve => require(['../components/headFoot/header.vue'],resolve);
Vue.use(Router);
const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }
const AAA = { template: '<div>this is AAA</div>' }
const UserProfile = { template: '<div>This is UserProfile</div>' }
const UserPosts = { template: '<div>This is UserPosts</div>' }
const UserTo = {
	template: `
	    <div class="user">
	      <h2>User {{ $route.params.id }}</h2>
	    </div>
	`
}
const userToQuery = {
	template: `
	    <div class="user">
	      <h2>User {{ $route.query }}</h2>
	    </div>
	`
}
const Default = {template:'<div class="default">this is Default</div>'}
const User = {
	template: `
	    <div class="user">
	      <h2>User {{ $route.params.id}}</h2>
	      <router-view></router-view>
	    </div>
	`
}
const Parent = {
	data(){
		return{
			transitionName:'slide-left'
		}
	},
	watch:{
		'$route'(to,from){
			console.log(to,from);
			const toDepth = to.path.split('/').length;
			const fromDepth = from.path.split('/').length;
			this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
		}
	},
	template:
		`
			<div class="parent">
				<h2>Parent</h2>
				<transition :name="transitionName">
					this is a Parent transition!
					<router-view class="child-view"></router-view>
				</transition>
			</div>
		`
}

const Home = { template: 
	`
		<div>
			scorllHome
			<router-link class="router-link" to="/scrollFoo">Go To scrollFoo</router-link><br />
			<router-link class="router-link" to="/scrollBar">Go To scrollBar</router-link>
		</div>
	` 
};
const ScrollFoo = {template:'<div>this is scrollFoo</div>'};
const ScrollBar = {
	template:
	`
		<div>
			this is scrollBar
			<div style="height:1000px"></div>
			<p id="anchor">Anchor</p>
		</div>
	`
};

const scrollBehavior = (to,from,savedPosition) => {
	console.log(to,from,savedPosition);
	if(savedPosition){
		console.log('in')
		return savedPosition;
	}else{
		const position = {};
		if(to.hash){
			position.selector = to.hash;
		}
		if(to.matched.some(m => m.meta.scrollToTop)){
			position.x = 0;
			position.y = 0;
		}
		return position;
	}
}

// vedio study
import Index from "../s-vedio/index";
const routes = [
	{ path:'/', component:Index},
	{ path:'/start', component:Start},
	{ path:'/home', component:HomeTem},
	{ path: '/vuexDemo', component: VuexDemo },
	{path:'/useImg',component:UseImg},
	{ path: '/foo', component: Foo },
	{ path:'/swiper',component:Swiper},
	// { path: '/foo', component: Foo },
	{ path: '/bar', component: Bar ,name:'bar'},
	// { path:'/foo',redirect:'/bar'},
	// { path:'/foo',redirect:{name:'userTo'}},
	{ path: '/aaa', component: AAA },
	{ path: '/user/:id', component: User,children:[{
		path:'profile',
		component:UserProfile
	},{
		path:'posts',
		component:UserPosts
	}]},
	{path:'/userTo',component:UserTo,name:'userTo'},
	{path:'/userToQuery',component:userToQuery,name:'userToQuery'},
	{
		path:'/dy-redirect/:id?',
		redirect: to => {
			// console.log(to)
			const { hash, params, query } = to;
			if(query.to == 'foo'){
				return {path:'/userToQuery',query:null}
			}
			if(hash == '#bar'){
				return {name:'bar',hash:''}
			}
			if(params.id){
				return '/user/:id'
			}else{
				return '/bar'
			}

		}
	},{
		path:'/parent',component:Parent,
		children:[{
			path:'',component:Default
		},{
			path:'foo',component:Foo
		},{
			path:'bar',component:Bar
		}]
	},
	{path:'/header',component:resolve => require(['../components/headFoot/header.vue'],resolve)}
	// {path: '/', component: Home, meta: { scrollToTop: true }},
 //    { path: '/scrollFoo', component: ScrollFoo },
 //    { path: '/scrollBar', component: ScrollBar, meta: { scrollToTop: true }}
]
export default new Router({
	// mode: 'history',
	// scrollBehavior,
	routes
})
