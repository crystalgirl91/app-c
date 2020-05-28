<template>
	<div>
		<van-nav-bar
			class="myhead-nav-bar"
			placeholder 
			fixed
			title="活动专场"
			left-arrow
			@click-left="$router.back()"
		/>
		<van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
		  <van-swipe-item>
		  	<img class="my-swipe-img" src="../../assets/images/home/banner-adv.png">
		  </van-swipe-item>
		  <van-swipe-item>
		  	<img class="my-swipe-img" src="../../assets/images/home/banner-adv.png">
		  </van-swipe-item>
		</van-swipe>
		<van-grid column-num="2" class="my-adv-grid" :border="false" :gutter="10">
		  <van-grid-item class=my-adv-griditem to="/homeSpecial/post">
		  		<div class="my-adv-card">
		  			<div class="status">活动即将开始</div>
		  			<p class="title">活动1</p>
		  			<p class="cont font12">内容任务容</p>
		  		</div>
		  </van-grid-item>
		   <van-grid-item class=my-adv-griditem>
		  		<div class="my-adv-card">
		  			<div class="status">活动进行中</div>
		  			<p class="title">活动1</p>
		  			<p class="cont font12">任务内容任务内容任务内容任务内容</p>
		  		</div>
		  </van-grid-item>
		   <van-grid-item class=my-adv-griditem>
		  		<div class="my-adv-card">
		  			<div class="status">活动即将开始</div>
		  			<p class="title">活动1</p>
		  			<p class="cont font12">任务内容任务内容</p>
		  		</div>
		  </van-grid-item>
		   <van-grid-item class=my-adv-griditem>
		  		<div class="my-adv-card">
		  			<div class="status">活动即将开始</div>
		  			<p class="title">活动1</p>
		  			<p class="cont font12">任务内容任务</p>
		  		</div>
		  </van-grid-item>
		</van-grid>
	</div>
</template>
<style lang="less" scoped>
	.my-swipe .my-swipe-img{
		width: 100%;
	}
	.my-adv-grid{
		padding-top: 8px;
	}
	.my-adv-grid /deep/ .van-grid-item__content{
		padding: 0px;
		background: transparent;
	}
	.my-adv-card{
		color: #fff;
		position: relative;
		height: 110px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		width: 100%;
		padding: 15px;
		line-height: 1.5;
		.status{
			width: 100%;
			position: absolute;
			left: 0px;
			top: 8px;
			padding-left: 10px;
			padding-top: 2px;
			padding-bottom: 6px;
			font-size: 11px;
			background: url("../../assets/images/home/xiaobiaoqian.png") left center/auto 100% no-repeat;
		}
		.cont{
			width: 70%;
			font-size: 12px;
		}
	}
	.my-adv-griditem:nth-child(4n + 1) /deep/ .my-adv-card{
		background: url("../../assets/images/home/huodong1.png") center/100% 100% no-repeat;
	}
	.my-adv-griditem:nth-child(4n + 2) /deep/ .my-adv-card{
		background: url("../../assets/images/home/huodong2.png") center/100% 100% no-repeat;
	}
	.my-adv-griditem:nth-child(4n + 3) /deep/ .my-adv-card{
		background: url("../../assets/images/home/huodong3.png") center/100% 100% no-repeat;
	}
	.my-adv-griditem:nth-child(4n + 4) /deep/ .my-adv-card{
		background: url("../../assets/images/home/huodong4.png") center/100% 100% no-repeat;
	}
</style>
