import Vue from 'vue'
import App from './main.vue'
import VueRouter from 'vue-router'
import routerConfig from './router/index.js'
import "./mixins/vant.js"
import api from "./api/api.js"


Vue.prototype.$api = api;

Vue.use(VueRouter);
const router = new VueRouter({
	routes:routerConfig
});

// router.beforeEach((to, from, next) => {
//   // 获取认证信息，若认证不通过，跳转至认证界面
//   if(/^\/auth\//.test(to.path)){
//     // 若跳转至认证相关页面，不校验认证信息
//     next();
//   }else{
//     getInitPath().then(path =>{
//         if(path === true){
//           next();
//         }else{
//           next(path);
//         }
//       }).catch(err =>{
//         console.log("路由卫士：获取认证信息失败！");
//         next(false);
//       });
//   }
// })
router.beforeResolve((to, from, next) => {
  var meta = to.meta;
  document.title = meta.title;
  if(meta.background){
  	document.body.style.backgroundColor = meta.background
  }else{
  	document.body.style.backgroundColor = "#fff";
  }
  next();
});
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
