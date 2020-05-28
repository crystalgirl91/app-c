<template>
	<div>
		<van-nav-bar
			class="myhead-nav-bar"
			placeholder 
			fixed
			title="筛选"
			left-arrow
			@click-left="$router.back()"
		/>
		<div class="form">
	    	<div class="form-field is-link" v-on:click="rightPopName='professions'">
	    		<div class="left">
		    		<label class="form-label required">期望行业<span class="small">（最多选择3项）</span></label>
		    		<div class="form-control">
		    			<div v-show="formData.professions.length==0" class="placeholder">如：房地产/建筑/建材/工程</div>
		    			<div v-show="formData.professions.length" class="form-value" v-for="item in formData.professions">{{item.PName}}</div>
		    		</div>
		    	</div>
		    	<van-icon class="form-icon" name="arrow"></van-icon>
	    	</div>
	    	<div class="form-field is-link" v-on:click="rightPopName='post'">
	    		<div class="left">
		    		<label class="form-label required">期望职位<span class="small">（最多选择3项）</span></label>
		    		<div class="form-control">
		    			<div v-show="formData.post.length==0" class="placeholder">如：销售经理</div>
		    			<div v-show="formData.post.length" class="form-value" v-for="item in formData.post">{{item.text}}</div>
		    		</div>
		    	</div>
		    	<van-icon class="form-icon" name="arrow"></van-icon>
	    	</div>
	    	<div class="form-field is-link" v-on:click="popName = 'OSalary'">
	    		<div class="left">
		    		<label class="form-label">期望薪资</label>
		    		<div class="form-control">
		    			<input class="input" v-model="computeSalary" placeholder="如：1万-2万" readonly></input>
		    		</div>
		    	</div>
		    	<van-icon class="form-icon" name="arrow"></van-icon>
	    	</div>
	    	<div class="form-field is-link" v-on:click="popName = 'OStatus'">
	    		<div class="left">
		    		<label class="form-label required">求职状态</label>
		    		<div class="form-control">
		    			<input class="input" v-model="formData.OStatus.Name" placeholder="如：随时到岗" readonly></input>
		    		</div>
		    	</div>
		    	<van-icon class="form-icon" name="arrow"></van-icon>
	    	</div>
	    	<div class="btn-wrap">
				<van-button :disabled="btnDisabled" class="submitbtn" round type="primary" block v-on:click="submit">保存</van-button>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		data(){
			return {
				popName:"",
				rightPopName:"",
				formData:{
					post:[],
					professions:[],
					OStatus:{}
				},
				computeSalary:"",
			}
		},
		computed:{
			btnDisabled:function(){
				return true
			},
		},
		methods:{
			submit(){}
		}
	}
</script>
<style scoped>
	.btn-wrap{
		position: fixed;
		width: 100%;
		left: 0;
		padding: 0 20px;
		bottom: 50px;
	}
</style>