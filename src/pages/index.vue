<template>
	<div class="page page--foot">
		<router-view></router-view>
		<van-tabbar v-model="active" active-color="#00971e" route safe-area-inset-bottom>
		  <van-tabbar-item icon-prefix="my-icon" icon="icon-position" to="/home">
		  	<template #icon="props">
		      <img class="my-tabbaritem-img" :src="props.active ? require('../assets/images/home/shouye.png') : require('../assets/images/home/huishouye.png')" />
		    </template>
		  	<span>首页</span>
		  </van-tabbar-item>
		  <van-tabbar-item icon-prefix="my-icon" icon="icon-resume-database" to="/activity">
		  	<template #icon="props">
		      <img class="my-tabbaritem-img" :src="props.active ? require('../assets/images/home/huodong.png') : require('../assets/images/home/huihuodong.png')" />
		    </template>
		  	<span>活动</span>
		  </van-tabbar-item>
		  <van-tabbar-item icon-prefix="my-icon" icon="icon-release1" to="/circle">
		  	<template #icon="props">
		      <img class="my-tabbaritem-img" :src="props.active ? require('../assets/images/home/quanzi.png') : require('../assets/images/home/huiquanzi.png')" />
		    </template>
		  	<span>圈子</span></van-tabbar-item>
		  <van-tabbar-item icon-prefix="my-icon" icon="icon-news" to="/notice">
		  	<template #icon="props">
		      <img class="my-tabbaritem-img" :src="props.active ? require('../assets/images/home/xiaoxi.png') : require('../assets/images/home/huixiaoxi.png')" />
		    </template>
		  	<span>消息</span>
		  </van-tabbar-item>
		  <van-tabbar-item icon-prefix="my-icon" icon="icon-my" to="/my">
		  	<template #icon="props">
		      <img class="my-tabbaritem-img" :src="props.active ? require('../assets/images/home/wode.png') : require('../assets/images/home/huiwode.png')" />
		    </template>
		  	<span>我的</span>
		  </van-tabbar-item>
		</van-tabbar>
	</div>
</template>
<script>
	export default {
		data(){
			return {
				active:0
			}
		}
	}
</script>
<style scoped>
	.page .my-tabbaritem-img{
		height: 24px;
	}
	.page--foot{
		padding-bottom: 50px;
	}
</style>