<template>
	<div>
		<van-index-bar>
			<ul class="filter-list">
				<div class="filter-panel">
					<div class="filter-title">
						当前城市
					</div>
					<ul class="filter-radios">
						<label class="filter-radio">
							<input class="input" name="city" type="radio" v-model="city">
							<span class="control">石家庄</span>
						</label>
					</ul>
				</div>
	  		</ul>
			<ul class="filter-list">
				<div class="filter-panel">
					<div class="filter-title">
						热门城市
					</div>
					<ul class="filter-radios">
						<label class="filter-radio">
							<input class="input" name="city" type="radio" v-model="city">
							<span class="control">石家庄</span>
						</label>
						<label class="filter-radio">
							<input class="input" name="city" type="radio" v-model="city">
							<span class="control">上海</span>
						</label>
						<label class="filter-radio">
							<input class="input" name="city" type="radio" v-model="city">
							<span class="control">北京</span>
						</label>
					</ul>
				</div>
	  		</ul>
			<van-index-anchor index="A" />
			<ul class="filter-list">
				<div class="filter-panel">
					<ul class="filter-radios">
						<label class="filter-radio" v-for="item in citys">
							<input class="input" name="city" type="radio" v-model="city" :value="item">
							<span class="control">{{item.name}}</span>
						</label>
						<label class="filter-radio" v-for="item in citys">
							<input class="input" name="city" type="radio" v-model="city" :value="item">
							<span class="control">{{item.name}}</span>
						</label><label class="filter-radio" v-for="item in citys">
							<input class="input" name="city" type="radio" v-model="city" :value="item">
							<span class="control">{{item.name}}</span>
						</label>
					</ul>
				</div>
	  		</ul>
			<van-index-anchor index="B" />
			<ul class="filter-list">
				<div class="filter-panel">
					<ul class="filter-radios">
						<label class="filter-radio" v-for="item in citys">
							<input class="input" name="city" type="radio" v-model="city" :value="item">
							<span class="control">{{item.name}}</span>
						</label>
						<label class="filter-radio" v-for="item in citys">
							<input class="input" name="city" type="radio" v-model="city" :value="item">
							<span class="control">{{item.name}}</span>
						</label>
						<label class="filter-radio" v-for="item in citys">
							<input class="input" name="city" type="radio" v-model="city" :value="item">
							<span class="control">{{item.name}}</span>
						</label>
					</ul>
				</div>
	  		</ul>
		</van-index-bar>
	</div>
</template>
<script>
	export default {
		data(){
			return {
				city:"",
				citys:[{
					name:"北京"
				},{
					name:"上海"
				}]
			}
		}
	}
</script>