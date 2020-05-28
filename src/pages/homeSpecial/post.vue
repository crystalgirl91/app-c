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
		<!-- <my-search-bar></my-search-bar> -->
		<van-dropdown-menu active-color="#0dcc6d">
		  <van-dropdown-item title="工作地点">
		  		<index-city></index-city>
		  </van-dropdown-item>
		  <van-dropdown-item title="月薪范围">
		  		<ul class="filter-list">
		  			<div class="filter-panel">
  						<div class="filter-title">月薪范围</div>
  						<ul class="filter-radios">
  							<label class="filter-radio" v-for="item in filterData.salarys.list">
  								<input class="input" name="salary" type="radio" v-model="filterData.salarys.values" :value="item">
  								<span class="control">{{item.name}}</span>
  							</label>
  						</ul>
  					</div>
		  		</ul>
		  </van-dropdown-item>
		  <van-dropdown-item title="更多条件">
		  		<ul class="filter-list">
  					<div class="filter-panel">
  						<div class="filter-title">
  							学历要求
  						</div>
  						<ul class="filter-radios">
  							<label class="filter-radio" v-for="item in filterData.Educations">
  								<input class="input" name="education" type="checkbox" v-model="filterData.Education" :value="item">
  								<span class="control">{{item.name}}</span>
  							</label>
  						</ul>
  					</div>
  					<div class="filter-panel">
  						<div class="filter-title">工作经验</div>
  						<ul class="filter-radios">
  							<label class="filter-radio" v-for="item in filterData.Experiences">
  								<input class="input" name="experience" type="checkbox" v-model="filterData.Experience" :value="item">
  								<span class="control">{{item.name}}</span>
  							</label>
  						</ul>
  					</div>
		  		</ul>
		  		<div class="filter-btn-wrap">
					<van-button type="primary" block round class="filter-btn" @click="filterUpdateSure('dropMenuFilter')">确定</van-button>
				</div>
		  </van-dropdown-item>
		</van-dropdown-menu>
		<div class="tab-list">
			<van-list
			  v-model="page.loading"
			  :finished="page.finished"
			  finished-text="没有更多了"
			  @load="getList"
			>
				<div class="home-post-panel van-hairline--bottom">
			  		<div class="panel-top">
			  			<div class="name">销售经理</div>
			  			<div class="money normal">8-16K</div>	
			  		</div>
			  		<div class="panel-tags">
			  			<span class="panel-tag">五险一金</span>
			  			<span class="panel-tag">双休</span>
			  			<span class="panel-tag">带薪休假</span>
			  		</div>
					<div class="panel-p"> 河北医药有限公司 </div>
				</div>
				<div class="home-post-panel van-hairline--bottom">
			  		<div class="panel-top">
			  			<div class="name">销售经理</div>
			  			<div class="money normal">8-16K</div>	
			  		</div>
			  		<div class="panel-tags">
			  			<span class="panel-tag">五险一金</span>
			  			<span class="panel-tag">双休</span>
			  			<span class="panel-tag">带薪休假</span>
			  		</div>
					<div class="panel-p"> 河北医药有限公司 </div>
				</div>
				<div class="home-post-panel van-hairline--bottom">
			  		<div class="panel-top">
			  			<div class="name">销售经理</div>
			  			<div class="money normal">8-16K</div>	
			  		</div>
			  		<div class="panel-tags">
			  			<span class="panel-tag">五险一金</span>
			  			<span class="panel-tag">双休</span>
			  			<span class="panel-tag">带薪休假</span>
			  		</div>
					<div class="panel-p"> 河北医药有限公司 </div>
				</div>
			</van-list>
		</div>
	</div>
</template>
<script>
	import mySearchBar from "@s/components/searchBar.vue";
	import indexCity from "@s/components/indexCity.vue";
	export default {
		data(){
			return {
				page:{
					pageIndex:1,
					pageSize:10,
					loading:true,
					finished:false
				},
				filterData:{
					salarys:{
						list:[{
							name:"不限",
							value:""
						},{
							name:"1千以下",
							value:"1000"
						},{
							name:"1千-2千",
							value:"2000"
						},{
							name:"2千-4千",
							value:"2000"
						},{
							name:"4千-6千",
							value:"2000"
						},{
							name:"6千-8千",
							value:"2000"
						},{
							name:"8千-1万",
							value:"2000"
						},{
							name:"1万-1.5万",
							value:"2000"
						},{
							name:"1.5万-2.5万",
							value:"2000"
						},{
							name:"2.5万-3.5万",
							value:"2000"
						},{
							name:"3.5万-5万",
							value:"2000"
						},{
							name:"5万-7万",
							value:"2000"
						},{
							name:"7万-10万",
							value:"2000"
						},{
							name:"10万以上",
							value:"2000"
						}]
					},
					Education:[],
					Educations:[{
						name:"不限",
						value:""
					},{
						name:"初中及以下",
						value:"1"
					},{
						name:"中技",
						value:"1"
					},{
						name:"高中",
						value:"1"
					},{
						name:"中专",
						value:"1"
					},{
						name:"大专",
						value:"1"
					},{
						name:"本科",
						value:"1"
					},{
						name:"硕士",
						value:"1"
					},{
						name:"MBA",
						value:"1"
					},{
						name:"EMBA",
						value:"1"
					},{
						name:"博士",
						value:"1"
					}],
					Experience:[],
					Experiences:[{
						name:"全部",
						value:""
					},{
						name:"无经验",
						value:"1"
					},{
						name:"1年以下",
						value:"1"
					},{
						name:"1-3年",
						value:"1"
					},{
						name:"3-5年",
						value:"1"
					},{
						name:"5-10年",
						value:"1"
					},{
						name:"10年以上",
						value:"1"
					}]

				}
			}
		},
		components:{
			mySearchBar,
			indexCity
		},
		methods:{
			filterUpdateSure(){},
			getList(){}
		}
	}
</script>