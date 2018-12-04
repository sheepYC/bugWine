import React,{Component} from 'react';

class Home extends Component {
	render(){
		return (
			<div>
				这是首页
				{this.props.children}
			</div>
		)
	}
}

export default Home