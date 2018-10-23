// react libraries
import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
// libraries
import 'bootstrap/dist/css/bootstrap.min.css';
import _ from "underscore";
// css
import './UpdatePropertiesTable.css';


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

	renderFlags(p) {
		var elem1, elem2;
		if (p.propertyInfoVerified) {
			elem1 = <button className='table-flag btn btn-success table-flag-verified'>Info Verified</button>;
		} else {
			elem1 = <button className='table-flag btn btn-danger table-flag-unverified'>Info Unverified</button>;
		}
		if (p.affordabilityInfoVerified) {
			elem2 = <button className='table-flag btn btn-success table-flag-verified affordability-info-flag'>Affordability Verified</button>;
		} else {
			elem2 = <button className='table-flag btn btn-danger table-flag-unverified affordability-info-flag'>Affordability Unverified</button>;
		}
		return <span>{elem1} {elem2}</span>;
	}

	renderRows() {
		var propertyData = this.state.propertyData;

		propertyData = _.sortBy(propertyData, 'total_income_restricted_units');
		propertyData.reverse();

		console.log('something');

		var rows = [];

		for (var p of propertyData) {
			rows.push(
				<tr key={p.id}>
					<td>{p.id}</td>
					<td>{p.address}</td>
					<td>{p.zipcode}</td>
					<td>{p.total_income_restricted_units ? p.total_income_restricted_units : <span className='text-danger'>unknown</span>}</td>
					<td>{p.phone}</td>
					<td>{p.assigned_user_email ? p.assigned_user_email : 'none'}</td>
					<td>{this.renderFlags(p)}</td>
					<td><button data-property-id={p.id} onClick={this.handlePropertyClick} className='table-view-btn btn-primary btn'>View</button></td>
				</tr>
			);
		}

		return rows;
	}

	handleSearchKeyUp() {
		// Declare variables
		var input, filter, table, tr, td, i;
		input = document.getElementById("table-search-input");
		filter = input.value.toUpperCase();
		table = document.getElementById("update-properties-table");
		tr = table.getElementsByTagName("tr");

		// Loop through all table rows, and hide those who don't match the search query
		for (i = 0; i < tr.length; i++) {
			td = tr[i].getElementsByTagName("td")[1];
			if (td) {
				if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
					tr[i].style.display = "";
				} else {
					tr[i].style.display = "none";
				}
			}
		}
	}

	render() {
		if (this.state.redirectTo) {
			return <Redirect to={ this.state.redirectTo } />;
		}

		return (
			<div>
				<br/>
				<div className='form-group'>
					<input onKeyUp={this.handleSearchKeyUp} className='form-control' type="text" id="table-search-input" placeholder="Search by address..." />
				</div>
				<table id='update-properties-table' className="table table-bordered">
				 	<thead>
						<tr>
							<th scope="col">ID</th>
							<th scope="col">Address</th>
							<th scope="col">Zip</th>
							<th scope="col">Total Income Restricted Units</th>
							<th scope="col">Contact</th>
							<th scope="col">Assigned To</th>
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