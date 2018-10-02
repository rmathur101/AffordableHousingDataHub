// react libraries
import React, { Component } from 'react';
import {
	Redirect
} from 'react-router-dom';
// axios
import axios from 'axios';
// libraries
import 'bootstrap/dist/css/bootstrap.min.css';
// dev files
import './UpdateProperties.css';
import {TopNav} from '../TopNav/TopNav.jsx';
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
				self.setState({data: res.data.data});
			})
			.catch((e) => {
				console.log('inside catch');
				console.log(e);
			});
	}

	render() {
		return (
			<div>
				<TopNav/>
				<table className="table">
				  <thead>
				    <tr>
				      <th scope="col">#</th>
				      <th scope="col">First</th>
				      <th scope="col">Last</th>
				      <th scope="col">Handle</th>
				    </tr>
				  </thead>
				  <tbody>
				    <tr>
				      <th scope="row">1</th>
				      <td>Mark</td>
				      <td>Otto</td>
				      <td>@mdo</td>
				    </tr>
				    <tr>
				      <th scope="row">2</th>
				      <td>Jacob</td>
				      <td>Thornton</td>
				      <td>@fat</td>
				    </tr>
				    <tr>
				      <th scope="row">3</th>
				      <td>Larry</td>
				      <td>the Bird</td>
				      <td>@twitter</td>
				    </tr>
				  </tbody>
				</table>
			</div>
		);
	}
}

export {UpdateProperties}