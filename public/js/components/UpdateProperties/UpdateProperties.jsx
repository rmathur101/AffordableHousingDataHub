// react libraries
import React, { Component } from 'react';
import {
	Redirect
} from 'react-router-dom';
// axios
import axios from 'axios';
// dev files
import './UpdateProperties.css'
import { debugLog } from "../../utilities.jsx";

class UpdateProperties extends Component {
	constructor(props) {
		super(props);

		const self = this;

		axios.get('update_properties_list')
			.then((res) => {
				// TODO: should validate that user is logged in on the backend before returning data
				console.log('what is res');
				console.log(res);
				self.setState({data: res.data.data})
			})
			.catch((e) => {
				console.log('inside catch');
				console.log(e);
			});
	}

	render() {
		return (
			<div>
				<div className='header'>
					<span className='header-title'>Affordable Housing Data Hub</span>
				</div>
			</div>
		);
	}
}

export {UpdateProperties}