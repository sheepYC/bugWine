import React,{Component} from "react"
import {NavLink} from "react-router-dom"
import css from "./assetYouhui.module.scss"
import {connect} from "react-redux"
import axios from "axios"
import action from "./action"

class assetYouhui extends Component{
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
					<div className={css.dingdan}>我的优惠券</div>
				</div>
				<ul className={css.liebiao}>
					<li><NavLink replace to="/mine/assetYouhui">未使用</NavLink></li>
					<li><NavLink replace to="/mine/youhuiyishiyong">已使用</NavLink></li>
					<li><NavLink replace to="/mine/youhuiyiguoqi">已过期</NavLink></li>
				</ul>
				<div className={css.bangdingyouhuiquan}>
					绑定优惠券
				</div>
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

export default connect(null,action)(assetYouhui)