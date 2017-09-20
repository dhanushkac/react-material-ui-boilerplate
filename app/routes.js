import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Dashboard from './containers/Dashboard';
import About from './components/About';
import Settings from './components/Settings';

export default (
	<Switch>
		<Route exact path="/" component={Dashboard} />
		<Route path="/about" component={About} />
		<Route path="/settings" component={Settings} />
	</Switch>
);

