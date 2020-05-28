const SpecialTopic = () => import("@/homeSpecial/index.vue");
const SpecialTopicPost = () => import("@/homeSpecial/post.vue");
const HomeFilter =() => import("@/home/filter.vue");
const HomeCity =() => import("@/home/city.vue");
const HomePost =() => import("@/homePost/index.vue");
const HomePostDetail =() => import("@/homePostDetail/index.vue");
const HomeCompanyDetail =() => import("@/homeCompanyDetail/index.vue");
const routerConfig = [{
	meta:{
		title:"活动专场",
		background:"#f2f2f2"
	},
	path: '/homeSpecial', 
	component: SpecialTopic,
},{
	meta:{
		title:"活动专场",
		background:"#f2f2f2"
	},
	path: '/homeSpecial/post', 
	component: SpecialTopicPost,
},{
	meta:{
		title:"筛选",
	},
	path: '/home/filter', 
	component: HomeFilter,
},{
	meta:{
		title:"城市",
	},
	path: '/home/city', 
	component: HomeCity,
},{
	meta:{
		title:"搜索",
	},
	path: '/homePost', 
	component: HomePost,
},{
	meta:{
		title:"企业详情",
	},
	path: '/homeCompanyDetail', 
	component: HomeCompanyDetail,
},{
	meta:{
		title:"岗位",
	},
	path: '/homePostDetail', 
	component: HomePostDetail,
}]
export default routerConfig