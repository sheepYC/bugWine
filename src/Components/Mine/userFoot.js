import React,{Component} from "react"
import {NavLink} from "react-router-dom"
import css from "./userCenter.module.scss"
import {connect} from "react-redux"
import axios from "axios"
import action from "./action"

class UserFav extends Component{
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
					<div className={css.dingdan}>浏览足迹</div>
				</div>
			</div>
		)
	}componentWillMount(){
		this.props.hideFalse();
	}
	componentWillUnmount(){
		this.props.showTrue();
	}
}

export default connect(null,action)(UserFav)