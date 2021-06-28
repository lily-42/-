import {baseUrl} from './config.js'
	
export function topList(){
	uni.request({
		url:`${baseUrl}/toplist`,
		method:'GET',
		data:{},
		success:res=>{
			console.log(res);
		},
		fail:()=>{},
		complete:()=>{}
	});
}