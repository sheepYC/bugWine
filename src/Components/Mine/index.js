import React,{Component} from "react"
import {NavLink} from "react-router-dom"
import css from "./index.module.scss"
import {connect} from "react-redux"
import axios from "axios"
import action from "./action"
import Swiper from "swiper"
import "swiper/dist/css/swiper.css"

class Mine extends Component{
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	list:[]
	  };
	}
	render(){
		return(
			<div>
				{this.props.children}
			</div>
		)
	}
}

export default Mine