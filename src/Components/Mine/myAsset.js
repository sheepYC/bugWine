import React,{Component} from "react"
import {NavLink} from "react-router-dom"
import css from "./myAsset.module.scss"
import {connect} from "react-redux"
import axios from "axios"
import action from "./action"

class MyAsset extends Component{
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	list:[]
	  };
	}
	render(){
		return(
			<div>
				<div className={css.tou}>
					<div className={css.jiantou}><NavLink to="/mine/mineHome">＜</NavLink></div>
					<div className={css.dingdan}>我的资产</div>
				</div>
				<ul className={css.liebiao}>
					<li className={css.line}>
						<NavLink replace to="/mine/userCenter">账户余额</NavLink>
						<div className={css.you}><span className={css.kong}>￥</span><span className={css.kong}>0</span><NavLink className={css.kong} replace to="/mine/assetYue">></NavLink></div>
					</li>
					<li className={css.line}>
						<NavLink replace to="/mine/assetYouhui">优惠券</NavLink>
						<div className={css.you}><span className={css.kong}>0</span><span className={css.kong}>张</span><NavLink className={css.kong} replace to="/mine/assetYouhui">></NavLink></div>
					</li>
					<li className={css.line}>
						<NavLink replace to="/mine/userFahuo">绑定优惠券</NavLink>
						<div className={css.you}>></div>
					</li>
					<li className={css.line}>
						<NavLink replace to="/mine/assetJifen">积分</NavLink>
						<div className={css.you}><span className={css.kong}>0</span><NavLink className={css.kong} replace to="/mine/assetJifen">></NavLink></div>
					</li>
				</ul>
			</div>
		)
	}
	componentWillMount(){
		this.props.hideFalse();
	}
	componentWillUnmount(){
		this.props.showTrue();
	}
}

export default connect(null,action)(MyAsset)