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
// css
import './UpdateProperty.css';

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
				'Schools'
			]
		};

		var propertyId = this.props.match.params.id;
		var queryString = `/property?propertyId=${propertyId}&userEmail=${localStorage.getItem('email')}`;
		axios.get(queryString)
			.then((res) => {
				console.log('what is res');
				console.log(res);
				this.setState({'data': res.data.data, 'fieldsMap': res.data.fieldsMap, 'showEditProperty': true});
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

	renderGroups(propertyDataGroupEdit=false) {

		function getGroupFields(groupName, fieldsMap) {
			var newObj = {};
			for (var field in fieldsMap) {
				if (fieldsMap[field].group && fieldsMap[field].group == groupName) {
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
					<PropertyDataGroupEdit key={groupName} name={groupName} data={groupFieldsMap}/>
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
				</div>
			);
		}
		return <div></div>
	}
}

export {UpdateProperty};