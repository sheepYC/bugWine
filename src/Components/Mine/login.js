import React,{Component} from "react"
import {NavLink} from "react-router-dom"
import css from "./index.module.scss"
import {connect} from "react-redux"
import axios from "axios"
import action from "./action"

class Login extends Component{
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	list:[]
	  };
	}
	render(){
		return(
			<div>
				Login
			</div>
		)
	}
}

export default Login