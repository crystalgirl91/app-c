<template>
	<form @submit.prevent="ok" action>
		<div class="my-search" :class="{'my-search-normal':type=='default','my-search-home':type=='home'}">
			<div class="my-search-address" v-if="type == 'home'" @click="showpop = !showpop">
				<span class="address-name">石家庄</span>
				<van-icon class="address-icon" class-prefix="my-icon" name="chengshigengduo-01"></van-icon>
				<div class="address-pop" v-show="showpop">
					<div class="address-pop-left">定位显示您在“石家庄”</div>
					<div class="address-pop-switch" @click="$router.push('/home/city')"><van-icon class-prefix="my-icon" name="qiehuanchengshi" color="@basecolor"></van-icon>切换城市</div>
					<van-icon class="address-pop-close" class-prefix="my-icon" name="guanbi" color="@basecolor"></van-icon>
				</div>
			</div>
			<div class="my-search-back" @click="$router.go(-1)" v-if="type=='default'">
				<van-icon class="back-icon" class-prefix="my-icon" name="fanhui"></van-icon>
			</div>
				<div class="my-search-control">
					<input placeholder="输入公司或职位名称开始搜索" type="search" name="search" class="my-search-input" @focus="$emit('focus')" v-model="searchText">
				</div>
			<div class="my-search-right">
				<van-icon class-prefix="my-icon" name="sousuo" class="search-icon"></van-icon>
			</div>
		</div>
	</form>
</template>
<script>
	export default {
		props:{
			fixed:{
				type:Boolean,
				default:true
			},
			type:{
				type:String,
				default:"default"
			},
			value:{
				type:String,
				default:""
			}
		},
		data(){
			return {
				showpop:false,
				searchText:this.value
			}
		},
		created(){
			console.log(this.type)
		},
		methods:{
			ok(){
				this.$emit("confirm",this.searchText);
			}
		}
	}
</script>
<style scoped lang="less">
	.my-search{
		padding: 10px 18px;
		display: flex;
		font-size: 16px;
		justify-content: space-between;
		align-items: center;
		color: #fff;
		.my-search-address{
			font-size: 16px;
			padding-right: 8px;
			position: relative;
			.address-icon{
				margin-left: 6px;
			}
		}
		.my-search-control{
			flex: 1;
			.my-search-input{
				padding: 5px 10px;
				border-radius: 4px;
				overflow: hidden;
				border: 0px;
				height: 30px;
				line-height: 20px;
				box-sizing: border-box;
				width: 100%;
				font-size: 14px;
			}
		}
		&.my-search-home{
			input::-webkit-input-placeholder { /* WebKit browsers 适配谷歌 */
			    color: #fff;
			}
			.my-search-input{
				color: #fff;
				background: rgba(255,255,255,0.4);
			}
			.back-icon,.address-icon{
				color: #fff;
			}
		}
		&.my-search-normal{
			.my-search-input{
				color: #333;
				background-color: #f5f5f5;
			}
			.back-icon,.my-icon{
				color: #333;
			}
		}
		.my-search-right{
			padding-left:10px;
			.search-icon{
				font-size: 1.4em;
			}
		}
		.address-pop{
			position: absolute;
			width: 90vw;
			background: #fff;
			color: #999;
			display: flex;
			padding: 10px;
			border-radius: 5px;
			top:calc(100% + 10px);
			justify-content: space-between;
			font-size: 13px;
			&:before{
				content:"";
				display: inline-block;
				border-bottom: 10px solid #fff;
				border-left: 10px solid transparent;
				border-top: 10px solid transparent;
				border-right: 10px solid transparent;
				position: absolute;
				left: 30px;
				top: -20px;
			}
			.address-pop-switch{
				color: #0dcc6d;
			}

		}
		
	}
	.my-search-back{
		margin-right: 10px;
	}
	
</style>