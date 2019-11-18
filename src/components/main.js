import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import index from './index';
import search from './search';
import bookinfo from './bookinfo';
import login from './login';
import logout from './logout';

class main extends Component {
	render() {
		return (
			<div>
			<Route path="/" exact={true} component={index}/>
			<Route path="/search" component={search}/>
			<Route path="/bookinfo" component={bookinfo}/>
			<Route path="/login" component={login}/>
			<Route path="/logout" component={logout}/>
			</div>
		)
	}
}

export default main;


