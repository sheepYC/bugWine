import {Route} from 'react-router-dom';
import React from 'react';
import List from '../Components/List/';
import contentList from '../Components/List/contentList/contentList.js';


const RouterList = (props)=>{
		return (
		<List {...props}>
			<Route path='/list/contentlist/:id' component={contentList}/>
		</List>
	)
}



export default RouterList