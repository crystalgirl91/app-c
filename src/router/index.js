const Index = () => import('@/index.vue');
const Home = () => import('@/home/index.vue');
const Activity = () => import('@/activity/index.vue');
const Circle = () => import('@/circle/index.vue');
const Notice = () => import('@/notice/index.vue');
const My = () => import('@/my/index.vue');
const Search = () => import('@/search/index.vue');
const mainConfig = [{ 
	path: '/', 
	component: Index,
	children:[{
		meta:{
			title:"首页"
		},
		path: 'home', 
		component: Home,
	},{
		meta:{
			title:"活动"
		},
		path: 'activity', 
		component: Activity,
	},{
		meta:{
			title:"圈子"
		},
		path: 'circle', 
		component: Circle,
	},{
		meta:{
			title:"消息"
		},
		path: 'notice', 
		component: Notice,
	},{
		meta:{
			title:"我的"
		},
		path: 'my', 
		component: My,
	},{
		meta:{
			title:"首页"
		},
		path: '*', 
		redirect:"home"
	}]
}];

import homeRouter from "./home.js"
import publicRouter from "./public.js"

export default 
publicRouter
.concat(homeRouter)
.concat(mainConfig)