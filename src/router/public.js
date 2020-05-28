const Search = () => import("@/search/index.vue")
const routerConfig = [{
	meta:{
		title:"搜索"
	},
	path: '/search', 
	component: Search,
}];
export default routerConfig