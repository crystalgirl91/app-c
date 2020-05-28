<template>
	<div class="page-home">
		<!-- 网络不佳状态 -->
		<home-empty v-if="false"></home-empty>
		<!-- 首页内容 -->
		<div>
			<div class="home-banner">
				<my-search-bar type="home" class="page-home-search" @focus="onSearch"></my-search-bar>
				<div class="banner-img">
					<img src="../../assets/images/home/banner-adv.png">
				</div>
			</div>
			<div class="home-noticebar">
				<van-icon class-prefix="my-icon" class="dianzan"></van-icon>
				<span class="home-noticebar-name">今日资讯</span>
				<span class="home-noticebar-cont van-ellipsis">新闻新闻新闻新闻新闻新闻新闻新闻新闻</span>
			</div>
			<router-link to="/homeSpecial" class="home-adv">
				<img src="../../assets/images/home/adv.png">
			</router-link>
			<home-tab v-model="curTab">
				<div class="tab-list" v-show="curTab == 0">
					<van-list
					  v-model="loading"
					  :finished="finished"
					  finished-text="没有更多了"
					  @load="getList"
					>
					  <div class="home-post-panel van-hairline--bottom" @click="$router.push('/homePostDetail')">
				  		<div class="panel-top">
				  			<div class="name">销售经理</div>
				  			<div class="company van-ellipsis">河北公共小商贸有限公司</div>
				  			<div class="money">8-16K</div>	
				  		</div>
				  		<div class="panel-spans">
				  			<span class="panel-span">石家庄</span>
				  			<span class="panel-span">裕华区</span>
				  			<span class="panel-span">3-5年</span>
				  			<span class="panel-span">大专</span>
				  		</div>
				  		<div class="panel-tags">
				  			<span class="panel-tag">五险一金</span>
				  			<span class="panel-tag">双休</span>
				  			<span class="panel-tag">带薪休假</span>
				  		</div>
					  </div>
					  <div class="home-post-panel van-hairline--bottom">
				  		<div class="panel-top">
				  			<div class="name">销售经理</div>
				  			<div class="company van-ellipsis">河北公共小商贸有限公司</div>
				  			<div class="money">8-16K</div>	
				  		</div>
				  		<div class="panel-spans">
				  			<span class="panel-span">石家庄</span>
				  			<span class="panel-span">裕华区</span>
				  			<span class="panel-span">3-5年</span>
				  			<span class="panel-span">大专</span>
				  		</div>
				  		<div class="panel-tags">
				  			<span class="panel-tag">五险一金</span>
				  			<span class="panel-tag">双休</span>
				  			<span class="panel-tag">带薪休假</span>
				  		</div>
					  </div>
					  <div class="home-post-panel van-hairline--bottom">
				  		<div class="panel-top">
				  			<div class="name">销售经理</div>
				  			<div class="company van-ellipsis">河北公共小商贸有限公司</div>
				  			<div class="money">8-16K</div>	
				  		</div>
				  		<div class="panel-spans">
				  			<span class="panel-span">石家庄</span>
				  			<span class="panel-span">裕华区</span>
				  			<span class="panel-span">3-5年</span>
				  			<span class="panel-span">大专</span>
				  		</div>
				  		<div class="panel-tags">
				  			<span class="panel-tag">五险一金</span>
				  			<span class="panel-tag">双休</span>
				  			<span class="panel-tag">带薪休假</span>
				  		</div>
					  </div>
					</van-list>
				</div>
				<div class="tab-list" v-show="curTab == 1">
					<van-list
					  v-model="loading"
					  :finished="finished"
					  finished-text="没有更多了"
					  @load="getList"
					>
						<div class="home-post-block">
							<div class="bg-white">
								<div class="block-company">
									<div class="name van-ellipsis">河北起点科技邮箱公司</div>
									<div class="strong">16个岗位在招</div>
								</div>
								<div class="home-post-panel van-hairline--bottom">
							  		<div class="panel-top">
							  			<div class="name">销售经理</div>
							  			<div class="company van-ellipsis">河北公共小商贸有限公司</div>
							  			<div class="money">8-16K</div>	
							  		</div>
							  		<div class="panel-spans">
							  			<span class="panel-span">石家庄</span>
							  			<span class="panel-span">裕华区</span>
							  			<span class="panel-span">3-5年</span>
							  			<span class="panel-span">大专</span>
							  		</div>
							  		<div class="panel-tags">
							  			<span class="panel-tag">五险一金</span>
							  			<span class="panel-tag">双休</span>
							  			<span class="panel-tag">带薪休假</span>
							  		</div>
							  	</div>
							  	<div class="home-post-panel van-hairline--bottom">
							  		<div class="panel-top">
							  			<div class="name">销售经理</div>
							  			<div class="company van-ellipsis">河北公共小商贸有限公司</div>
							  			<div class="money">8-16K</div>	
							  		</div>
							  		<div class="panel-spans">
							  			<span class="panel-span">石家庄</span>
							  			<span class="panel-span">裕华区</span>
							  			<span class="panel-span">3-5年</span>
							  			<span class="panel-span">大专</span>
							  		</div>
							  		<div class="panel-tags">
							  			<span class="panel-tag">五险一金</span>
							  			<span class="panel-tag">双休</span>
							  			<span class="panel-tag">带薪休假</span>
							  		</div>
							  	</div>
								<div class="more">展开更多</div>
						  	</div>
						</div>
						<div class="home-post-block">
							<div class="bg-white">
								<div class="block-company">
									<div class="name van-ellipsis">河北起点科技邮箱公司</div>
									<div class="strong">16个岗位在招</div>
								</div>
								<div class="home-post-panel van-hairline--bottom">
							  		<div class="panel-top">
							  			<div class="name">销售经理</div>
							  			<div class="company van-ellipsis">河北公共小商贸有限公司</div>
							  			<div class="money">8-16K</div>	
							  		</div>
							  		<div class="panel-spans">
							  			<span class="panel-span">石家庄</span>
							  			<span class="panel-span">裕华区</span>
							  			<span class="panel-span">3-5年</span>
							  			<span class="panel-span">大专</span>
							  		</div>
							  		<div class="panel-tags">
							  			<span class="panel-tag">五险一金</span>
							  			<span class="panel-tag">双休</span>
							  			<span class="panel-tag">带薪休假</span>
							  		</div>
							  	</div>
						  	</div>
						</div>
					</van-list>
				</div>
				<div class="tab-list" v-show="curTab == 2">
				</div>
			</home-tab>
		</div>
	</div>
</template>
<script>
	import mySearchBar from "@s/components/searchBar.vue";
	import homeEmpty from "@/empty/homeEmpty.vue";
	import homeTab from "@s/components/homeTab.vue";
	export default {
		data(){
			return {
				curTab:0,
				loading:false,
				finished:true,
			}
		},
		components:{
			mySearchBar,
			homeEmpty,
			homeTab
		},
		methods:{
			getList(){

			},
			onSearch(){
				this.$router.push("/search")
			}
		}
	}
</script>
<style lang="less" scoped>
	.page-home{
		padding-top: 50px;
		background: url("../../assets/images/home/banner.png") center top/100% no-repeat;
		.banner-img{
			padding:0 18px;
			height: 132px;
			img{
				width: 100%;
				border-radius: 5px;
				overflow: hidden;
				box-shadow: 0 0 10px rgba(0,0,0,0.1);
			}
		}
	}
	.page-home-search{
		top: 0;
		left: 0;
		width: 100%;
		position: fixed;
		box-sizing: border-box;
		background: url("../../assets/images/home/banner.png") center top/100% no-repeat;
		z-index: 10;
	}
	.home-noticebar{
		box-shadow: 0 0 20px rgba(203,203,203,.22);
		padding: 7px 18px;
		margin-bottom: 10px;
		margin-top: 10px;
		line-height: 20px;
		.home-noticebar-name{
			padding: 0 5px;
			display: inline-block;
		}
		.home-noticebar-cont{
			font-size: 12px;
			color: #999999;
		}
	}
	.home-adv{
		padding: 0px 30px;
		box-sizing: content-box;
		display: block;
		img{
			width: 100%;
		}
	}
</style>