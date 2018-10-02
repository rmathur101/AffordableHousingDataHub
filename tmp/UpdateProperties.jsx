// react
import React, { Component } from 'react';
// axios
import axios from 'axios';
// import dev files
import './UpdateProperties.css'
import { debugLog } from "../../utilities.jsx";
import {Button } from 'react-bootstrap';
// import ReactTable from 'react-table';
// import 'react-table/react-table.css';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import '../../../../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
// import 'react-bootstrap-table-all.min.css';
import './UpdateProperties.css';
import {
	Redirect
} from 'react-router-dom';

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
		const options = {
			sizePerPage: 19,
			onRowClick: (row) => {
				console.log('this is row');
				console.log(row);
				this.props.history.push('/update_property/' + row.id);
				// return <Redirect to={{pathname: "/update_property/2084"}} />
			},
			defaultSortName: 'total_income_restricted_units',
			defaultSortOrder: 'desc'

		}

		function formatLink(cell, row) {
			// console.log(row);
			// console.log(cell);
			if (cell == null) {
				return;
			}
			return `<a>${cell}</a>`;
		}

		function columnClassNameFormat(fieldValue, row, rowIdx, colIdx) {
			console.log(fieldValue);
			if (fieldValue == null) {
				return 'table-cell-red';
			}
		}

		return (
			<div>
					<div className='header'>
						<span className='header-title'>Affordable Housing Data Hub</span>
					</div>

					<br/>

					<div id="update-properties-table" style={{padding: '50px 50px 50px 50px'}}>
						{/* only show table when data available from server */}
						{this.state && this.state.data &&
							<BootstrapTable data={this.state.data} options={options} hover pagination search>
								<TableHeaderColumn isKey dataField='id' dataSort= {true} columnClassName={columnClassNameFormat}>Property ID</TableHeaderColumn>
								<TableHeaderColumn dataField='property_name' dataSort= {true} columnClassName={columnClassNameFormat}>Name</TableHeaderColumn>
								<TableHeaderColumn dataField='address' columnClassName={columnClassNameFormat}>Address</TableHeaderColumn>
								<TableHeaderColumn dataField='email' columnClassName={columnClassNameFormat}>Email</TableHeaderColumn>
								<TableHeaderColumn dataField='phone' columnClassName={columnClassNameFormat}>Phone</TableHeaderColumn>
								<TableHeaderColumn dataField='website' dataFormat={formatLink} columnClassName={columnClassNameFormat}>Website</TableHeaderColumn>
								<TableHeaderColumn dataField='total_income_restricted_units' columnClassName={columnClassNameFormat} dataSort= {true}>Total Income Restricted Units</TableHeaderColumn>
							</BootstrapTable>
						}
					</div>
			</div>
		);
	}
}

export {UpdateProperties}