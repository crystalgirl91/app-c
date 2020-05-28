<template>
	<div>
		<div class="home-tabs van-hairline--bottom">
			<ul class="home-tab-navs">
				<li :class="{'on':tab==0}" class="home-nav" @click="tab=0">
					推荐
					<van-icon class="home-nav-icon" :name="require('../assets/images/home/tuijianxiaoshou.png')"></van-icon>
				</li>
				<li :class="{'on':tab==1}" class="home-nav" @click="tab=1">
					热门top
					<van-icon class="home-nav-icon" :name="require('../assets/images/home/rementop.png')"></van-icon>
				</li>
				<li :class="{'on':tab==2}" class="home-nav" @click="tab=2">
					最新
					<van-icon class="home-nav-icon" :name="require('../assets/images/home/zuixin.png')"></van-icon>
				</li>
			</ul>
			<van-button color="#333" plain  class="home-tab-btn" size="small" type="primary" to="/home/filter">
				筛选
				<van-icon color="#000" class-prefix="my-icon" name="chengshigengduo-01"></van-icon>
			</van-button>
		</div>
		<slot></slot>
	</div>
</template>
<script>
	export default {
		props:{
			value:Number,
			default:0
		},
		watch:{
			tab(val){
				this.$emit("input",val);
			}
		},
		data(){
			return {
				tab:this.value
			}
		}
	}
</script>
<style scoped lang="less">
	.home-tabs{
		display: flex;
		justify-content: space-between;
    	padding: 0px 18px;
    	align-items: center;
		.home-tab-btn{
			border-radius: 6px;
		}
	}
	.home-tab-navs{
		display: flex;
		.home-nav{
			position: relative;
			margin-right: 35px;
			font-weight: bold;
			font-size: 15px;
			position: relative;
			height: 50px;
			line-height: 50px;
			&.on{
				color: #ff5a5a;
				&:after{
					content:"";
					width: 20px;
					display: inline-block;
					height: 2px;
					background: #ff5a5a;
					border-radius: 5px;
					position: absolute;
					left: 50%;
					bottom: 0;
					transform: translateX(-50%);
				}
			}
			.home-nav-icon{
				position: absolute;
				right: -16px;
				top: 10px;
				font-size: 14px;
			}
		}
	}
</style>