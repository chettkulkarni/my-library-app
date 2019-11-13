import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import index from './index';
import search from './search';
import bookinfo from './bookinfo';

class main extends Component {
	render() {
		return (
			<div>
			<Route path="/" exact={true} component={index}/>
			<Route path="/search" component={search}/>
			<Route path="/bookinfo" component={bookinfo}/>
			</div>
		)
	}
}

export default main;


