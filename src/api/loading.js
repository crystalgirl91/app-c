import {Toast} from "vant";
Toast.setDefaultOptions("loading",{ duration: 0 });
Toast.allowMultiple();
class Loading {
	constructor(){
		this.name="loading";
		this.instances = {}
	}
	add(id){
		if(this.instances[id]){
			this.instances[id].clear();
		}
		this.instances[id] = Toast.loading({
			forbidClick: true
		});
	}
	remove(id){
		if(this.instances[id]){
			this.instances[id].clear();
		}
	}
	clear(){
		Object.values(this.instances).forEach(ins =>{
			ins.clear();
		});
	}
}
export default Loading