// react
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
// axios
import axios from 'axios';
// components
import {UpdatePropertyInput} from '../UpdatePropertyInput/UpdatePropertyInput.jsx';
import {TopNav} from '../TopNav/TopNav.jsx';
import {PropertyDataGroupView} from '../PropertyDataGroupView/PropertyDataGroupView.jsx';
import {PropertyDataGroupEdit} from '../PropertyDataGroupEdit/PropertyDataGroupEdit.jsx';
import {ContactInfo} from '../ContactInfo/ContactInfo.jsx';
import {AssignedUserInfo} from '../AssignedUserInfo/AssignedUserInfo.jsx';
// css
import './UpdateProperty.css';
// libs
import _ from "underscore";

class UpdateProperty extends Component {
	constructor(props) {
		super(props);

		this.state = {
			redirectTo: null,
			showUpdateProperty: false,
			showEditProperty: false,
			groups: [
				'Basic Property Information',
				'Contact Information',
				'Communities Served',
				'Affordability Information',
				'Amenities',
				'Schools',
				// 'Unit Information'
				/* for v1 we are not going to collect real time unit information */
			],
			updatedData: {
				// see 'Unit Information' above, we are not going to collect real time unit information for now
				// newUnitInfo: {},
				// updatedUnitInfo: {}
			}
		};

		this.handleUpdateData = this.handleUpdateData.bind(this);

		var propertyId = this.props.match.params.id;
		var queryString = `/property?propertyId=${propertyId}&userEmail=${localStorage.getItem('email')}`;
		axios.get(queryString)
			.then((res) => {
				console.log('what is res');
				console.log(res);
				this.setState({'data': res.data.data, 'fieldsMap': res.data.fieldsMap, 'showEditProperty': true, propertyId: propertyId, verifications: res.data.verifications});
			})
			.catch((e) => {
				console.log('inside catch');
				console.log(e);
				console.log(e.response);
				if (e && e.response && !e.response.data.success && e.response.data.redirect) {
					this.setState({redirectTo: '/'});
					console.log('something');
				}
			});
	}

	handleUpdateData(data) {
		if (!_.has(this.state.updatedData, data.field)) {
			this.state.updatedData[data.field] = {};
		}

		// TODO: for strings, need to check if there it is an empty string, if it is, value should be null
		this.state.updatedData[data.field].value = data.value;

		console.log('inside of handleUpdateData in UpdateProperty.jsx');
		console.log(this.state.updatedData);
	}

	renderGroups(propertyDataGroupEdit=false) {

		function getGroupFields(groupName, fieldsMap) {
			var newObj = {};
			for (var field in fieldsMap) {
				if (fieldsMap[field].active && fieldsMap[field].group && fieldsMap[field].group == groupName) {
					newObj[field] = fieldsMap[field];
				}
			}
			return newObj;
		}

		function addGroupFieldsData(groupFieldsMap, values) {
			for (var field in groupFieldsMap) {
				var value = values[field];
				if (value) {
					groupFieldsMap[field].value = value;
				} else {
					groupFieldsMap[field].value = null;
				}
			}

			return groupFieldsMap;
		}

		var groups = [];
		var groupsNames = this.state.groups;
		var fieldsMap = this.state.fieldsMap;

		for (var groupName of groupsNames) {

			var groupFieldsMap = getGroupFields(groupName, fieldsMap);
			var groupFieldsMap = addGroupFieldsData(groupFieldsMap, this.state.data);

			if (propertyDataGroupEdit) {
				groups.push(
					<PropertyDataGroupEdit key={groupName} name={groupName} data={groupFieldsMap} updatePropertyThis={this} handleUpdateData={this.handleUpdateData} verifications={this.state.verifications}/>
				);
			} else {
				groups.push(
					<PropertyDataGroupView key={groupName} name={groupName} data={groupFieldsMap}/>
				);
			}
		}

		return groups;
	}

	handleEditPropertyClick(showEditProperty) {
		if (showEditProperty) {
			this.setState({
				showUpdateProperty: false,
				showEditProperty: true
			});
		} else {
			this.setState({
				showUpdateProperty: true,
				showEditProperty: false
			});
		}
	}

	getPropertyAddress() {
		var header = (this.state.data.address ? this.state.data.address : '') + ' ' + (this.state.data.city ? this.state.data.city : '') + ', ' + (this.state.data.state ? this.state.data.state : '') + ' ' + (this.state.data.zipcode ? this.state.data.zipcode : '');
		return header;
	}

	getPropertyId() {
		return this.state.data.id;
	}

	handleSave() {
		var propertyId = this.props.match.params.id;
		axios.post(
			`/update_property?userEmail=${localStorage.getItem('email')}`,
			{
				updatedData: this.state.updatedData,
				propertyId: propertyId
			})
			.then((res) => {

			})
			.catch((e) => {

			});
	}

	render() {
		if (this.state.redirectTo) {
			return (<Redirect to={this.state.redirectTo} />);
		}
		if (this.state.showUpdateProperty) {
			return (
				<div>
					<TopNav/>
					<br/>
					<div className='property-groups-container'>
						<button onClick={() => {this.handleEditPropertyClick(true)}}>Edit Property</button>
						<br/><br/>
						{this.renderGroups()}
					</div>
				</div>
			);
		}
		if (this.state.showEditProperty) {
			return (
				<div>
					<TopNav/>
					<br/>
					<div className='update-property-left'>
						<div className='property-groups-container'>
						{
							this.getPropertyId() &&
							<h2>Property ID: {this.getPropertyId()}</h2>
						}
						{
							this.getPropertyAddress() &&
							<h2>{this.getPropertyAddress()}</h2>
						}
							{/*<button onClick={() => {this.handleEditPropertyClick(false)}}>Back</button>*/}
							<br/>
							{this.renderGroups(true)}
						</div>
						<div className='save-btn-container'>
							<button onClick={this.handleSave.bind(this)} className='save-btn btn btn-success'>SAVE</button>
						</div>
					</div>
					<div className='update-property-right'>
						<ContactInfo data={this.state.data} />
						<br/>
						<AssignedUserInfo propertyId={this.state.propertyId} />
					</div>
				</div>
			);
		}
		return <div></div>
	}
}

export {UpdateProperty};