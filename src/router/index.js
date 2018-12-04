import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import React from 'react';
import {Provider} from 'react-redux';
import store from '../store'
import App from '../App.js';
import Home from './Home.js';
import List from './List.js';
import ShopCar from './ShopCar.js';
import Mine from './Mine.js';
import Detail from './Detail.js';
import Minisite from './Minisite.js';

const router = <Provider store={store}>
		<Router>
			<App>
				<Switch>
					<Route path="/home" render={Home} />
					<Route path="/list" render={List} />
					<Route path="/shopcar" render={ShopCar} />
					<Route path="/mine" render={Mine} />
					<Route path="/detail" render={Detail} />
					<Route path="/minisite" render={Minisite} />
					<Redirect from="/" to="/home"/>
				</Switch>
			</App>
		</Router>
	</Provider>

export default router