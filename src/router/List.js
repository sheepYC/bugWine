import {Route,Redirect,Switch} from 'react-router-dom';
import React from 'react';
import List from '../Components/List/';
import contentList from '../Components/List/contentList/contentList.js';
import biglist from '../Components/List/biglist/biglist.js';
import Lists from '../Components/List/Lists/list.js';


const RouterList = (props)=>{
		return (
		<List {...props}>
			<Switch>
				<Route path='/list/lists' component={Lists}/>
				<Route path='/list/contentlist/:parentId/:id' component={contentList}/>
				<Route path='/list/biglist/:id' component={biglist}/>
				<Redirect from="/list" to="/list/lists" />
			</Switch>
		</List>
	)
}



export default RouterList