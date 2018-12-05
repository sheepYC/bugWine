import React,{Component} from "react"
import {NavLink} from "react-router-dom"
import css from "./userCenter.module.scss"
import {connect} from "react-redux"
import axios from "axios"
import action from "./action"

class UserCenter extends Component{
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
					<div className={css.dingdan}>商品订单</div>
				</div>
				<ul className={css.liebiao}>
					<li><NavLink replace to="/mine/userCenter">全部</NavLink></li>
					<li><NavLink replace to="/mine/userFukuan">待付款</NavLink></li>
					<li><NavLink replace to="/mine/userFahuo">待发货</NavLink></li>
					<li><NavLink replace to="/mine/userShouhuo">待收货</NavLink></li>
					<li><NavLink replace to="/mine/userPIngjia">待评价</NavLink></li>
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

export default connect(null,action)(UserCenter)