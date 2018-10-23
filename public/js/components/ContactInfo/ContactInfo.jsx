// react libs
import React, { Component } from 'react';
// css
import './ContactInfo.css';

class ContactInfo extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}


	render() {
		return (
			<div className='contact-info-container'>
				<div className='contact-info-content'>
					<span className='contact-info-title'>Contact Info:</span>
					<br/>
					<span><b>Property Manager:</b> {this.props.data.property_manager_or_landlord}</span>
					<br/>
					<span><b>Phone:</b> {this.props.data.phone}</span>
					<br/>
					<span><b>Email:</b> {this.props.data.email}</span>
					<br/>
					<span><b>Website:</b> {this.props.data.website}</span>
				</div>
			</div>
		);
	}
}

export {
	ContactInfo
};