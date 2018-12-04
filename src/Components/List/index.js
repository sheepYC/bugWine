import React,{Component} from 'react';
import axios from 'axios';
import {NavLink} from 'react-router-dom';

class List extends Component{
	render(){
		return (
			<div>
				{this.props.children}
			</div>
		)
	}
}

export default List
