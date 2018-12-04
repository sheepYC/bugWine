import React,{Component} from 'react';
import css from "./nav.module.scss";
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";
import store from "../store"

class Nav extends Component{
	render(){
		return (
			<div className={css.list}>
				<ul className={this.props.isShow?'':css.hide + " " + css.list}>
					<li ref="1" onClick={this.handleClick.bind(this,1)}><NavLink replace to="/home"><i activeclassname="active" className="iconfont icon-home"></i><p>首页</p></NavLink></li>
					<li ref="2" onClick={this.handleClick.bind(this,2)}><NavLink replace to="/list"><i activeclassname="active" className="iconfont icon-fenlei"></i><p>分类</p></NavLink></li>
					{<li ref="3" onClick={this.handleClick.bind(this,3)}><NavLink replace to="/minisite"><i activeclassname="active" className={css.minisite}></i><p>专享福利</p></NavLink></li>}
					<li ref="4" onClick={this.handleClick.bind(this,4)}><NavLink replace to="/shopcar"><i activeclassname="active" className="iconfont icon-icon--"></i><p>购物车</p></NavLink></li>
					<li ref="5" onClick={this.handleClick.bind(this,5)}><NavLink replace to="/mine"><i activeclassname="active" className="iconfont icon-wode"></i><p>我的</p></NavLink></li>
				</ul>
			</div>
		)
	}
	handleClick(index,evt){
		console.log(this.refs)
	}
}

export default connect((state)=>{
	return {
		isShow:state.nav
	}
})(Nav)
