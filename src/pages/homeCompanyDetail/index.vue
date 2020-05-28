<template>
	<div>
		<van-nav-bar
			class="myhead-nav-bar"
			placeholder 
			fixed
			left-arrow
			@click-left="$router.back()"
		/>
		<div class="company-block">
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
		<div class="company-block">
			<van-swipe :autoplay="3000" :show-indicators="false" class="my-swipe">
			  <van-swipe-item>
			  	<div class="swipe-vedio">
			  		<img class="vedio-img" src="../../assets/images/home/banner-adv.png">
			  		<span class="vedio-icon"></span>
			  	</div>
			  </van-swipe-item>
			  <van-swipe-item>
			  	<div class="swipe-vedio">
			  		<img class="vedio-img" src="../../assets/images/home/banner-adv.png">
			  		<span class="vedio-icon"></span>
			  	</div>
			  </van-swipe-item>
			  <van-swipe-item>
			  	<div class="swipe-vedio">
			  		<img class="vedio-img" src="../../assets/images/home/banner-adv.png">
			  		<span class="vedio-icon"></span>
			  	</div>
			  </van-swipe-item>
			</van-swipe>
		</div>
		<div class="map company-block van-hairline--bottom"></div>
		<div class="desc company-block">
			<div class="desc-title">企业简介</div>
			<p class="desc-p color-light" :class="{'van-multi-ellipsis--l3':!showMore}">这里是企业简介这里是企业简介这里是企业简介这里是企业简介这里是企业简介这里是企业简介简介这里是企业简介这里是企业简介这里是企业简介这里是企业简介这里是企业这里是企业简介这里是企业简介这里是企业简介这里是企业简介这里是企业简介这里是企业简介简介这里是企业简介这里是企业简介这里是企业简介这里是企业简介这里是企业</p>
			<p class="desc-more" @click="showMore = !showMore"> {{ showMore ? '收起' :'展开'}}</p>
		</div>
		<van-tabs v-model="active" color="#0dcc6d" line-width="20">
		  <van-tab title="在招职位">
		  		<van-list
				  v-model="page.loading"
				  :finished="page.finished"
				  finished-text="没有更多了"
				  @load="getList"
				>
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
				
		  </van-tab>
		  <van-tab title="企业认证信息">
		  	<div class="auth-block color-light">
		  		<div class="company-p"><label class="c-label">统一社会信用代码：</label><span>9003010111646645900</span></div>
		  		<div class="company-p"><label class="c-label">成立日期：</label></div>
		  		<div class="company-p"><label class="c-label">组织机构代码：</label></div>
		  		<div class="company-p"><label class="c-label">企业类型：</label></div>
		  		<div class="company-p"><label class="c-label">登记机关：</label></div>
		  		<div class="company-p"><label class="c-label">经营状态：</label></div>
		  		<div class="company-p"><label class="c-label">注册地址：</label></div>
		  		<div class="company-p"><label class="c-label">注册资本：</label></div>
		  		<div class="company-p"><label class="c-label">经营范围：</label></div>
		  	</div>
		  </van-tab>
		</van-tabs>
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
</style>