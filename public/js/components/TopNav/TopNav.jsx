import React, { Component } from 'react';

import './TopNav.css';

class TopNav extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className='top-nav'>
				<div className='top-nav-header-container'>
					<span className='top-nav-header'>Austin Affordable Housing Data Hub</span>
				</div>
				<ul className='top-nav-links'>
					<li>Update Properties</li>
					<li>Logout</li>
				</ul>
			</div>
		);
	}
}

export { TopNav };