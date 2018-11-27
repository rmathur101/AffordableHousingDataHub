// react
import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
// libs
import _ from "underscore";
// axios
import axios from 'axios';
// components
import {TopNav} from '../TopNav/TopNav.jsx';
// css
import '../UpdateProperty/UpdateProperty.css';
import './NewProperty.css';

class NewProperty extends Component {
	constructor(props) {
		super(props);

		this.handleSave = this.handleSave.bind(this);
		this.showFailureMessage = this.showFailureMessage.bind(this);
		this.hideFailureMessage = this.hideFailureMessage.bind(this);

	}

	showFailureMessage() {
		document.getElementById('new-property-save-message-failure').style.display = 'block';
	}

	hideFailureMessage() {
		document.getElementById('new-property-save-message-failure').style.display = 'none';
	}

	handleSave() {
		this.hideFailureMessage();
		var queryString = `/new_property?userEmail=${localStorage.getItem('email')}`;
		axios.post(
			queryString, {
				'property_name': document.getElementById('new-property-name').value,
				'street_address': document.getElementById('new-property-address').value,
				'city': document.getElementById('new-property-city').value,
				'state': document.getElementById('new-property-state').value,
				'zipcode': document.getElementById('new-property-zip').value
			}
		)
		.then((res) => {
			console.log(res);
			this.setState({
				'redirectTo': res.data.redirect
			});
		})
		.catch((e) => {
			console.log(e);
			this.showFailureMessage();
		})
	}

	render() {
		if (this.state && this.state.redirectTo) {
			return <Redirect to={ this.state.redirectTo } />;
		}

		return (
			<div>
				<TopNav/>
				<br/>
				<div className='new-property-left'>
					<div>After the new property has been created you will be redirected to a page where you can edit additional attributes.</div>
					<br/>
					<div className='new-property-input-container'>
						<span><b>Property Name:</b></span>
						<br/>
						<span className='form-group'>
							<input id='new-property-name' type='text' className='form-control text-or-num-input'></input>
						</span>
					</div>
					<div className='new-property-input-container'>
						<span><b>Street Address:</b></span>
						<br/>
						<span className='form-group'>
							<input id='new-property-address' type='text' className='form-control text-or-num-input'></input>
						</span>
					</div>
					<div className='new-property-input-container'>
						<span><b>City:</b></span>
						<br/>
						<span className='form-group'>
							<input id='new-property-city' type='text' className='form-control text-or-num-input'></input>
						</span>
					</div>
					<div className='new-property-input-container'>
						<span><b>State:</b></span>
						<br/>
						<span className='form-group'>
							<input id='new-property-state' type='text' className='form-control text-or-num-input'></input>
						</span>
					</div>
					<div className='new-property-input-container'>
						<span><b>Zip Code:</b></span>
						<br/>
						<span className='form-group'>
							<input id='new-property-zip' type='text' className='form-control text-or-num-input'></input>
						</span>
					</div>
					<div className='save-btn-continer'>
						<button onClick={this.handleSave} id='new-property-save-btn' className='btn btn-success'>SAVE</button>
						<span id='new-property-save-message-success' className='text-success'>Success! Your data was saved!</span>
						<span id='new-property-save-message-failure' className='text-danger'>There was an issue saving your data. Please note that all fields are required. Please try again or contact system adminstrator.</span>
					</div>
				</div>
			</div>
		);
	}
}

export {NewProperty};
