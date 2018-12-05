import React,{Component} from "react"
import {NavLink} from "react-router-dom"
import css from "./assetJifen.module.scss"
import {connect} from "react-redux"
import axios from "axios"
import action from "./action"

class Zhichu extends Component{
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
					<div className={css.dingdan}>我的积分</div>
				</div>
				<ul className={css.liebiao}>
					<li><NavLink replace to="/mine/assetJifen">收入</NavLink></li>
					<li><NavLink replace to="/mine/zhichu">支出</NavLink></li>
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

export default connect(null,action)(Zhichu)