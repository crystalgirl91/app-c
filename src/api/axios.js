import axios  from 'axios';
import {apiUrl} from "./const.js";
import {Toast} from "vant";
import Loading from "./loading.js";

const loading = new Loading();
// 如果接口需要token，用此axios实例
const apiAxios = axios.create({
	baseURL: apiUrl,
});

function responseSuccessHandle(response){
    loading.remove(response.config.url);
    if(response.status == 200){
        if(response.data.ErrCode == 200){
            return response.data.Data;
        }else if(response.data.ErrCode == 401){
            window.location.href = location.origin + "/index.html#/auth/login";
            return Promise.reject(response.data);
        }
        else{
            Toast(response.data.ErrMsg);
            return Promise.reject(response.data);
        }
    }else{
        return Promise.reject({ErrCode:response.status,ErrMsg:"服务器响应异常"});
    }
}
function responseErrorHandle(error){
    console.log("responseErrorHandle",error);
    loading.clear();
    return Promise.reject({ErrCode:404,ErrMsg:"服务器连接异常"});
}
function requestErrorHandle(error){
    console.log("requestErrorHandle",err);
    loading.clear();
    return Promise.reject({ErrCode:404,ErrMsg:"服务器请求异常"});
}
apiAxios.interceptors.request.use(function(config){
	// var tokenPromise = new Promise((resolve,reject)=>{
 //    	verifyToken().then(token =>{
 //    		config.headers["Authorization"] = "Bearer " + token;
 //    		resolve(config);
 //            if(config.loading !==false){
 //                loading.add(config.url);
 //            }
            
 //    	}).catch((err)=>{
 //            console.log("RequestError没有获取到token,请求被终止",config);
 //            config.axiosMess = "没有获取到token,请求被终止";
 //    		reject(config);
 //    	});
 //    })
 //    return tokenPromise;
    return config;
},requestErrorHandle);

axios.interceptors.request.use(function (config) {
    if(config.loading !==false){
        loading.add(config.url);
    }
	return config
}, requestErrorHandle);

apiAxios.interceptors.response.use(responseSuccessHandle, responseErrorHandle);
axios.interceptors.response.use(responseSuccessHandle, responseErrorHandle);

export default apiAxios;
