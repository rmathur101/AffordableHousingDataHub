import React, {Component} from 'react';
import {Route, Redirect} from 'react-router-dom';
import {isLoggedIn} from '../Login/Login.jsx';

class PrivateRoute extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const {component: Component, ...rest} = this.props;

		if (localStorage.getItem('isLoggedIn') == 'true' && localStorage.getItem('email')) {
			return <Route {...rest} render={(props) => <Component {...props} />}/>
		} else {
			return <Redirect
				to={{
					pathname: '/',
					state: {from: this.props.location}
				}}
			/>
		}
	}
}

export {PrivateRoute};