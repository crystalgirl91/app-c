<!-- 全局搜索界面 -->
<template>
	<div class="search-page">
		<div class="search-wrap">
			<my-search-bar  @confirm="onSearch"></my-search-bar>
		</div>
		<div class="search-contend">
			<div class="search-block">
				<div class="search-title">热门搜索</div>
				<div class="search-list search-list-colorful">
					<span class="search-tag">销售代表</span>
					<span class="search-tag">会计</span>
					<span class="search-tag">销售代表</span>
					<span class="search-tag">促销</span>
				</div>
			</div>
			<div class="search-block">
				<div class="search-title">历史搜索</div>
				<div class="search-list">
					<span class="search-tag">销售代表</span>
					<span class="search-tag">会计</span>
					<span class="search-tag">销售代表</span>
					<span class="search-tag">促销</span>
				</div>
			</div>
		</div>
	</div>
</template>	
<script>
	import mySearchBar from "@s/components/searchBar.vue";
	export default {
		data(){
			return {

			}
		},
		components:{
			mySearchBar
		},
		methods:{
			onSearch(text){
				this.$router.replace({
					path:"/homePost",
					query:{
						search:text
					}
				});
			}
		},
	}
</script>
<style scoped lang="less">
	.search-contend{
		padding: 0 20px;
	}
	.search-block{
		padding: 17px 0;
	}
	.search-title{
		font-size: 16px;
		margin-bottom: 15px;
		font-weight: bold;
	}
	.search-list{
		display: flex;
		flex-wrap: wrap;
	}
	.search-tag{
		padding: 5px 10px;
		display: inline-block;
		margin-right: 15px;
		margin-bottom: 15px;
		background-color: #f2f2f2;
	}
	.search-list-colorful{
		.search-tag{
			&:nth-child(1){
				background-color: rgba(13,204,109,.1);
			};
			&:nth-child(2){
				background-color: rgba(253,74,75,.1);
			};
			&:nth-child(3){
				background-color: rgba(255,183,70,.1);
			};
			&:nth-child(4){
				background-color: rgba(56,124,251,.1);
			};
		}
	}
</style>