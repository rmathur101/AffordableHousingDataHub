// react libraries
import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
// libraries
import 'bootstrap/dist/css/bootstrap.min.css';

class UpdatePropertiesTable extends Component {
	constructor(props) {
		super(props);

		this.state = {
			propertyData: props.propertyData
		}

		this.handlePropertyClick = this.handlePropertyClick.bind(this);
	}

	handlePropertyClick(e) {
		console.log('waht is this?');
		console.log(e.currentTarget);
		console.log(e.currentTarget.dataset.propertyId);

		if (e && e.currentTarget && e.currentTarget.dataset && e.currentTarget.dataset.propertyId) {
			this.setState({
				'redirectTo': '/update_property/' + e.currentTarget.dataset.propertyId
			});
		}

	}

	renderRows() {
		var propertyData = this.state.propertyData;

		var rows = [];

		for (var p of propertyData) {
			rows.push(
				<tr key={p.id}>
					<td>{p.id}</td>
					<td>{p.address}</td>
					<td>{p.zipcode}</td>
					<td>{p.total_income_restricted_units}</td>
					<td>{p.phone}</td>
					<td></td>
					<td><button data-property-id={p.id} onClick={this.handlePropertyClick} className='btn-primary btn'>View</button></td>
				</tr>
			);
		}

		return rows;
	}

	render() {
		if (this.state.redirectTo) {
			return <Redirect to={ this.state.redirectTo } />;
		}

		return (
			<div>
				<table className="table">
				 	<thead>
						<tr>
							<th scope="col">ID</th>
							<th scope="col">Address</th>
							<th scope="col">Zip</th>
							<th scope="col">Total Income Restricted Units</th>
							<th scope="col">Contact</th>
							<th scope="col">Flags</th>
							<th></th>
				    	</tr>
				  	</thead>
				  <tbody>
				  	{this.renderRows()}
				  </tbody>
				</table>
			</div>
		);
	}
}

export { UpdatePropertiesTable };