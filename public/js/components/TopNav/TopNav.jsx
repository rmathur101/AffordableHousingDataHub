// react libraries
import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
// css
import './TopNav.css';

class TopNav extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	handleAllPropertiesClick(e) {
		if (window.location.pathname != '/update_properties') {
			this.setState({
				'redirectTo': '/update_properties'
			});
		}
	}

	handleLogoutClick(e) {
		this.setState({
			'redirectTo': '/'
		});
	}

	render() {
		if (this.state.redirectTo) {
			return <Redirect to={ this.state.redirectTo } />;
		}

		return (
			<div className='top-nav'>
				<div className='top-nav-header-container'>
					<span className='top-nav-header'>Austin Affordable Housing Data Portal</span>
				</div>
				<ul className='top-nav-links'>
					<li onClick={this.handleAllPropertiesClick.bind(this)}>All Properties</li>
					<li onClick={this.handleLogoutClick.bind(this)}>Logout</li>
				</ul>
			</div>
		);
	}
}

export { TopNav };