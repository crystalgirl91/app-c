<template>
	<div>
		<van-nav-bar
			class="myhead-nav-bar"
			placeholder 
			fixed
			left-arrow
			@click-left="$router.back()">
				<template #right> 
					<van-icon class="nav-btn" size="22" class-prefix="my-icon" color="#fff" name="quxiaoshoucang"></van-icon>
					<van-icon class="nav-btn" size="22" class-prefix="my-icon" color="#fff" name="jubao"></van-icon>
					<!-- <van-icon class-prefix="my-icon" name="shoucang"></van-icon> -->
				</template>
			</van-nav-bar>
		<div class="home-post-panel van-hairline--bottom" @click="$router.push('/homePostDetail')">
	  		<div class="panel-top">
	  			<div class="font16 name">销售经理</div>
	  			<div class="font16 money normal">8-16K</div>	
	  		</div>
	  		<div class="panel-spans">
	  			<span class="panel-span">石家庄</span>
	  			<span class="panel-span">裕华区</span>
	  			<span class="panel-span">3-5年</span>
	  			<span class="panel-span">大专</span>
	  			<span class="panel-span">工作性质</span><br>
	  			<span class="panel-span">性别要求：男</span>
	  			<span class="panel-span">招聘人数：2</span>
	  		</div>
	  	</div>
	  	<div class="company-block">
	  		<div class="post-desc">
	  			<div class="post-title">职位描述</div>
	  			<div class="post-desc-cont">
	  				<div class="post-desc-cont-title">岗位职责</div>
	  				<div class="post-desc-p">1、发觉客户的需求和痛点</div>
	  				<div class="post-desc-p">2、研发符合市场需寻求和公司需求的产品</div>
	  				<div class="post-desc-p">3、调研</div>
	  			</div>
	  			<div class="post-desc-cont">
	  				<div class="post-desc-cont-title">岗位要求</div>
	  				<div class="post-desc-p">1、发觉客户的需求和痛点</div>
	  				<div class="post-desc-p">2、研发符合市场需寻求和公司需求的产品</div>
	  				<div class="post-desc-p">3、调研</div>
	  			</div>
	  			<div class="panel-tags">
	  				<span class="panel-tag">五险一金</span>
	  				<span class="panel-tag">双休</span>
	  				<span class="panel-tag">带薪休假</span>
	  			</div>
	  		</div>
	  	</div>
		<div class="company-block" @click="$router.push('/homeCompanyDetail')">
			<div class="news-panel">
				<img src="../../assets/images/postDetail/weixinpngyouquan.png" class="news-panel-img"></img>
				<div class="news-panel-right">
					<div class="title">河北关谷有限公司<van-icon color="#0dcc6d" class-prefix="my-icon" name="renzheng"></van-icon></div>
					<div class="tags color-light">
						<span class="tag">石家庄</span>
						<span class="tag">企业性质</span>
						<span class="tag">企业规模</span>
						<span class="tag">企业行业</span>
					</div>
				</div>
			</div>
		</div>
		<div class="map company-block van-hairline--bottom"></div>
		<van-list
			  v-model="page.loading"
			  :finished="page.finished"
			  finished-text="没有更多了"
			  @load="getList">
			  	<div class="post-title list-post-title">岗位推荐</div>
				<div class="home-post-panel">
					<div class="panel-withlogo">
						<div class="panel-withlogo-left">
							<img class="logo" src="../../assets/images/postDetail/weixinpngyouquan.png"></img>
							<div class="logo-desc">
								<div class="name">销售经理</div>
								<div class="panel-spans clolor-light">
						  			<span class="panel-span">石家庄</span>
						  			<span class="panel-span">裕华区</span>
						  			<span class="panel-span">3-5年</span>
						  			<span class="panel-span">大专</span>
						  		</div>
								<div class="panel-p"> 河北医药有限公司 </div>
							</div>
						</div>
						<div class="money">
			  				8-16K
						</div>
					</div>
			  		<div class="panel-tags">
			  			<span class="panel-tag">五险一金</span>
			  			<span class="panel-tag">双休</span>
			  			<span class="panel-tag">带薪休假</span>
			  		</div>
				</div>
				<div class="home-post-panel van-hairline--bottom">
					<div class="panel-withlogo">
						<div class="panel-withlogo-left">
							<img class="logo" src="../../assets/images/postDetail/weixinpngyouquan.png"></img>
							<div class="logo-desc">
								<div class="name">销售经理</div>
								<div class="panel-spans clolor-light">
						  			<span class="panel-span">石家庄</span>
						  			<span class="panel-span">裕华区</span>
						  			<span class="panel-span">3-5年</span>
						  			<span class="panel-span">大专</span>
						  		</div>
								<div class="panel-p"> 河北医药有限公司 </div>
							</div>
						</div>
						<div class="money">
			  				8-16K
						</div>
					</div>
			  		<div class="panel-tags">
			  			<span class="panel-tag">五险一金</span>
			  			<span class="panel-tag">双休</span>
			  			<span class="panel-tag">带薪休假</span>
			  		</div>
				</div>
			</van-list>
		<div class="btn-wrap">
			<van-button type="primary" block round>继续沟通</van-button>
		</div>
	</div>
</template>
<script>
	export default {
		data(){
			return {
				active:0,
				showMore:false,
				page:{
					pageIndex:1,
					pageSize:10,
					loading:true,
					finished:false
				},
			}
		},
		methods:{
			getList(){}
		}
	}
</script>
<style lang="less" scoped>
	@import "../../assets/styles/home/post.less";
	.nav-btn{
		padding-left: 16px;
	}
	.post-title{
		font-weight: bold;
		font-size: 15px;
	}
	.post-desc{
		padding: 15px 0;
		.post-desc-cont{
			line-height: 1.5;
			font-size: 13px;
			color: #666;
		}
		.post-desc-cont-title{
			padding: 10px 0;
			font-weight: bold;
			font-size: 14px;
			color: #333;
		}
		.panel-tags{
			margin-top: 10px;
		}
	}
	.list-post-title{
		padding:20px 20px 0 20px;
	}
</style>