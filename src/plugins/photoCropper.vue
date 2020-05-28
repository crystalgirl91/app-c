<template>
	<div class="page" >
		<div class="clear-btn" @click="close"><van-icon name="clear" size="40" color="#526efd"></van-icon></div>
		<vueCropper
			ref="cropper"
			:img="img"
			:outputSize="outputsize"
			outputType="jpeg"
			:autoCrop="true"
			:fixedBox="true"
			:canMoveBox="false"
			:autoCropWidth="width"
			:autoCropHeight="height"
			:center-box="true"
		></vueCropper>

		<div class="btn-wrap">
			<van-icon name="replay" size="40" color="#526efd" @click="rotate"></van-icon>
			<van-button @click="ok" class="hbtn hbtn-large hbtn-radius hbtn-normal">确定</van-button>
		</div>
		
      </div>
</template>
<script>
	import {VueCropper} from "vue-cropper";
	import {Toast} from "vant";
	export default {
		data(){
			return {
				img:"",
				width:"300",
				height:"300",
				file:"",
				confirm:"",
				cancel:"",
				outputsize:0.5
			}
		},
		components: {
			VueCropper,
		},
		mounted(){
			var file = this.file;
			if(file){
				this.readFile(file);
			}
		},
		methods:{
			readFile(file){
				console.log("read",file)
				var that = this;
				var reader = new FileReader();
				reader.onload = function(event){
					that.img = event.target.result;
				}
				reader.readAsDataURL(file);
			},
			ok(){
				this.$refs.cropper.getCropData((dataURL) => {
					var bytes = window.atob(dataURL.split(',')[1]);
		            var ab = new ArrayBuffer(bytes.length);
		            var ia = new Uint8Array(ab);
		            for (var i = 0; i < bytes.length; i++) {
		                ia[i] = bytes.charCodeAt(i);
		            }
		            var file = new Blob([ab], { type: 'image/png', name: 'blob.png' });
		            var formData = new window.FormData();
		            formData.append("imageName", file);
		   //          Toast.loading({
					//   message: '上传中...',
					//   forbidClick: true
					// });
					this.$api.Upload(formData)
					.then((ret) =>{
						// Toast.clear();
						console.log(ret[0]);
						this.confirm(ret[0]);
						this.$el.remove();
					})
					.catch((err)=>{
						console.log(err)
						// Toast(err.ErrMsg);
					});
				});
				
			},
			close(){
				this.$el.remove();
				this.cancel && this.cancel();
			},
			rotate(){
				this.$refs.cropper.rotateRight();
			}
		}
	}
</script>
<style scoped lang="less">
	.page{
		position: fixed;
		width: 100%;
		height: 100%;
		left: 0px;
		top: 0px;
	}
	.btn-wrap{
		width: 100%;
		box-sizing: border-box;
		position: fixed;
		bottom: 0px;
		left:0px;
		padding: 20px;
		text-align: center;
		.hbtn{
			margin-top:20px
		}
	}
	.clear-btn{
		position:absolute;
		right: 30px;
		top: 30px;
		z-index: 10;
	}
</style>