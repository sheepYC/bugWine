import axios from "axios"
import Swiper from "swiper"

const action = {
	getMineList(){
		return axios.post('/BtCApi/ShopCar/GetEveryoneBuy',
			'DeviceId=598c789f-83db-4c75-ad14-bd1c4d2f7e8f&PhoneVersion=null&ClientVersion=1.0.0.1&ClientType=0')
		.then(res=>{
			return{
				type:"getMyList",
				payload:res.data.data
			}
		})
	},
	showTrue(){
		return{
			type:"showNav",
			payload:true
		}
	},
	hideFalse(){
		return{
			type:"hideNav",
			payload:false
		}
	}
}

export default action