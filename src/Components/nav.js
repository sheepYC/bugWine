import React,{Component} from 'react';
import css from "./nav.module.scss";
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";
import store from "../store"

class Nav extends Component{
	render(){
		return (
			<div>
				<ul className={this.props.isShow?'':css.hide}>
					<li><NavLink replace to="/home"><i activeclassname="active" className="iconfont icon-home"></i><p>首页</p></NavLink></li>
					<li><NavLink replace to="/list"><i activeclassname="active" className="iconfont icon-fenlei"></i><p>分类</p></NavLink></li>
					{<li><NavLink replace to="/minisite"><i activeclassname="active" className={css.minisite}></i><p>专享福利</p></NavLink></li>}
					<li><NavLink replace to="/shopcar"><i activeclassname="active" className="iconfont icon-icon--"></i><p>购物车</p></NavLink></li>
					<li><NavLink replace to="/mine"><i activeclassname="active" className="iconfont icon-wode"></i><p>我的</p></NavLink></li>
				</ul>
			</div>
		)
	}
}

export default connect((state)=>{
	return {
		isShow:state.nav
	}
})(Nav)
