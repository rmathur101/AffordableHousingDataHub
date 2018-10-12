// react libraries
import React, { Component } from 'react';
import {
	Redirect
} from 'react-router-dom';
// axios
import axios from 'axios';
// dev files
import './UpdateProperties.css';
import {TopNav} from '../TopNav/TopNav.jsx';
import { UpdatePropertiesTable } from '../UpdatePropertiesTable/UpdatePropertiesTable.jsx';
import { debugLog } from "../../utilities.jsx";

class UpdateProperties extends Component {
	constructor(props) {
		super(props);
		this.state = {
			redirectTo: null,
			showUpdateProperties: false
		}

		var email = localStorage.getItem('email');
		var queryString = '/update_properties_list?userEmail=' + email;
		axios.get(queryString)
			.then((res) => {
				console.log(res);
				this.setState({data: res.data.data, showUpdateProperties: true});
			})
			.catch((e) => {
				console.log(e.response);
				// if not authorized, we want to redirect to login page
				if (e && e.response && !e.response.data.success && e.response.data.redirect) {
					this.setState({redirectTo: '/'});
					console.log('something');
				}
			});
	}

	render() {
		if (this.state.redirectTo) {
			return <Redirect to={this.state.redirectTo} />
		}
		if (this.state.showUpdateProperties) {
			return (
				<div>
					<TopNav/>
					<UpdatePropertiesTable propertyData={this.state.data} />
				</div>
			);
		}
		return <div></div>
	}
}

export {UpdateProperties}