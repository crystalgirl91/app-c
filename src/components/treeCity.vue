<template>
	<div class="flexbody">
		<div class="column" v-for="(column,colidx) in columns">
			<label class="column-item" v-for="(item,itemidx) in column">
				<input type="radio" :name="'provinceradio'+colidx" :value="item" v-model="checkedItem[colidx]" @change="updateColumns(colidx,item)">
				<span>{{item.CName}}</span>
			</label>
		</div>
	</div>
</template>	
<script>
	export default {
		props:{
			value:{
				type:Array,
				default:function(){
					return []
				}
			}
		},
		data(){
			return {
				baseData:[],
				checkedItem:this.value,
				columns:[],
			}
		},
		mounted:function(){
			this.GetCityList();
		},
		methods:{
			GetCityList(){
				this.$api.GetCityList().then(res => {
					this.baseData = res;
					let province = res;
					let city = province[0].Children;
					let district = city[0].Children;
					this.columns = [province,city,district];
				});
			},
			updateColumns(i,item){
				if(this.columns[i+1]){
					this.$set(this.columns,i+1,item.Children);
					this.checkedItem.splice(i+1);
				}
				if(this.columns[i+2]){
					this.$set(this.columns,i+2,this.columns[i+1][0].Children);
				}
				this.$emit("input",this.checkedItem)
			}
		}
	}
</script>
<style lang="less" scoped>
	.flexbody{
		display: flex;
		background-color: #fafafa;
		.column{
			flex: 1;
			.column-item{
				display: block;
				padding: 46px 0;
				span{
					display: block;
					padding: 0 46px;
					border-left: 6px solid transparent;
				}
			}
			&:first-child{
				background-color:#fff;
				input{
					&:checked~span{
						border-left: 6px solid #4466ff;
					}
				}
			}
			input{
				display: none;
				&:checked~span{
					color:#4466ff;
				}
			}
		}
	}
</style>