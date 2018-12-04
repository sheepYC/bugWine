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
					<li ref="1" onClick={this.handleClick.bind(this)}><NavLink replace to="/home" activeClassName={css.active}><i className="iconfont icon-home"></i><p>首页</p></NavLink></li>
					<li ref="2" onClick={this.handleClick.bind(this)}><NavLink replace to="/list" activeClassName={css.active}><i className="iconfont icon-fenlei"></i><p>分类</p></NavLink></li>
					<li ref="3" onClick={this.handleClick.bind(this)}><NavLink replace to="/minisite" activeClassName={css.active}><i className={css.minisite}></i><p>专享福利</p></NavLink></li>
					<li ref="4" onClick={this.handleClick.bind(this)}><NavLink replace to="/shopcar" activeClassName={css.active}><i className="iconfont icon-icon--"></i><p>购物车</p></NavLink></li>
					<li ref="5" onClick={this.handleClick.bind(this)}><NavLink replace to="/mine" activeClassName={css.active}><i className="iconfont icon-wode"></i><p>我的</p></NavLink></li>
				</ul>
			</div>
		)
	}
	handleClick(evt){
		var a = document.querySelectorAll("li a");
		for(var i=0;i<a.length;i++){
			a[i].className = ''
		}
		evt.target.parentNode.className = css.active
	}
}

export default connect((state)=>{
	return {
		isShow:state.nav
	}
})(Nav)
