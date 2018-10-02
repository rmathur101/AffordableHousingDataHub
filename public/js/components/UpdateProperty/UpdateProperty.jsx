// react
import React, { Component } from 'react';
// axios
import axios from 'axios';
// components
import {UpdatePropertyInput} from '../UpdatePropertyInput/UpdatePropertyInput.jsx';
// css
import './UpdateProperty.css';

class UpdateProperty extends Component {
	constructor(props) {
		super(props)

		const self = this;

		var propertyId = this.props.match.params.id;
		var queryString = '/property?propertyId=' + propertyId;

		axios.get(queryString)
			.then((res) => {
				// TODO: should validate that user is logged in on the backend before returning data
				console.log('what is res');
				console.log(res);
			})
			.catch((e) => {
				console.log('inside catch');
				console.log(e);
			});

	}

	render() {
	}
}

export {UpdateProperty};