import React,{Component} from "react"
import {NavLink} from "react-router-dom"
import css from "./assetYue.module.scss"
import {connect} from "react-redux"
import axios from "axios"
import action from "./action"

class assetYue extends Component{
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
					<div className={css.dingdan}>我的余额</div>
				</div>
				<div className={css.line}>
					<div className={css.yue}>账户余额</div>
					<div className={css.zhong}><span>0</span>元</div>
				</div>
				<div className={css.si}>
					<b className={css.B}>余额明细</b>
					<div className={css.xian}></div>
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

export default connect(null,action)(assetYue) 