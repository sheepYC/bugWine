import {Route,Switch,Redirect} from 'react-router-dom';
import React from 'react';
import Mine from '../Components/Mine/'
import MineHome from "../Components/Mine/mineHome"
import UserCenter from "../Components/Mine/userCenter"
import UserFukuan from "../Components/Mine/userFukuan"
import UserFahuo from "../Components/Mine/userFahuo"
import UserShouhuo from "../Components/Mine/userShouhuo"
import UserPingjia from "../Components/Mine/userPingjia"
import MyAsset from "../Components/Mine/myAsset"
import AssetYue from "../Components/Mine/assetYue"
import AssetYouhui from "../Components/Mine/assetYouhui"
import Youhuiyishiyong from "../Components/Mine/youhuiyishiyong"
import Youhuiyiguoqi from "../Components/Mine/youhuiyiguoqi"
import AssetJifen from "../Components/Mine/assetJifen"
import Zhichu from "../Components/Mine/zhichu"
import UserFav from "../Components/Mine/userFav"
import UserFoot from "../Components/Mine/userFoot"
import Minisite from "../Components/Minisite"
import Login from "../Components/Mine/login"
const RouterMine = (props)=>{
		return (
		<Mine {...props}>
			<Switch>
				<Route path="/mine/mineHome" component={MineHome}></Route>
				<Route path="/mine/userCenter" component={UserCenter}></Route>
				<Route path="/mine/userFukuan" component={UserFukuan}></Route>
				<Route path="/mine/userShouhuo" component={UserShouhuo}></Route>
				<Route path="/mine/userFahuo" component={UserFahuo}></Route>
				<Route path="/mine/userPingjia" component={UserPingjia}></Route>
				<Route path="/mine/myAsset" component={MyAsset}></Route>
				<Route path="/mine/assetYue" component={AssetYue}></Route>
				<Route path="/mine/assetYouhui" component={AssetYouhui}></Route>
				<Route path="/mine/youhuiyiguoqi" component={Youhuiyiguoqi}></Route>
				<Route path="/mine/youhuiyishiyong" component={Youhuiyishiyong}></Route>
				<Route path="/mine/assetJifen" component={AssetJifen}></Route>
				<Route path="/mine/zhichu" component={Zhichu}></Route>
				<Route path="/mine/userFav" component={UserFav}></Route>
				<Route path="/mine/userFoot" component={UserFoot}></Route>
				<Route path="/minisite" component={Minisite}></Route>
				<Route path="/mine/login" component={Login}></Route>
				<Redirect from="/" to="/mine/mineHome"></Redirect>
			</Switch>
		</Mine>
	)
}


export default RouterMine