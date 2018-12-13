// react libs
import React, { Component } from 'react';
// axios
import axios from 'axios';
// css
import './AssignedUserInfo.css';

class AssignedUserInfo extends Component {
	constructor(props) {
		super(props);
		this.state = {};

		this.getAssignedUser = this.getAssignedUser.bind(this);
		this.renderAssignedTo = this.renderAssignedTo.bind(this);

		this.getAssignedUser();
	}

	getAssignedUser() {
		var propertyId = this.props.propertyId;
		var queryString = `/get_assigned_user?propertyId=${propertyId}&userEmail=${localStorage.getItem('email')}`;
		axios.get(queryString)
			.then((res) => {
				var assignedTo = null;
				if (res.data.data.length > 0) {
					assignedTo = res.data.data[0].email;
				}
				this.setState({'assignedTo': assignedTo, 'showAssignedUserInfo': true});
			})
			.catch((e) => {
				if (e && e.response && !e.response.data.success && e.response.data.redirect) {
					this.setState({redirectTo: '/'});
				}
			});
	}

	renderAssignedTo() {
		if (this.state.assignedTo) {
			return this.state.assignedTo;
		} else {
			return 'None'
		}
	}

	handleUnassignUser() {
		var propertyId = this.props.propertyId;
		var queryString = `/unassign_user?propertyId=${propertyId}&userEmail=${localStorage.getItem('email')}`;
		axios.get(queryString)
			.then((res) => {
				this.setState({'assignedTo': null, 'showAssignedUserInfo': true});
			})
			.catch((e) => {
				if (e && e.response && !e.response.data.success && e.response.data.redirect) {
					this.setState({redirectTo: '/'});
				}
			});
	}

	handleAssignToMe() {
		var propertyId = this.props.propertyId;
		var queryString = `/assign_property_to_user?propertyId=${propertyId}&userEmail=${localStorage.getItem('email')}`;
		axios.get(queryString)
			.then((res) => {
				this.setState({'assignedTo': res.data.assignedTo, 'showAssignedUserInfo': true});
			})
			.catch((e) => {
				if (e && e.response && !e.response.data.success && e.response.data.redirect) {
					this.setState({redirectTo: '/'});
				}
			});
	}

	render() {
		return (
			<div className='assigned-info-container'>
			{ this.state.showAssignedUserInfo &&
			<div className='assigned-info-content'>
				<span className='assigned-info-title'>Assignee Info:</span>
				<br/>
				<span><b>Assigned To:</b> {this.renderAssignedTo()}</span>
				<br/>
				{ this.state.assignedTo &&
				<span>
					<button onClick={this.handleUnassignUser.bind(this)} className='btn assign-info-btn '>Unassign User</button>
					<br/>
				</span>
				}
				<span><button onClick={this.handleAssignToMe.bind(this)} className='btn assign-info-btn'>Assign To Me</button></span>
			</div>
			}
			</div>
		);
	}
}

export {
	AssignedUserInfo
};