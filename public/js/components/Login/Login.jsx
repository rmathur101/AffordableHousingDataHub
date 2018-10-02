// react
import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
// axios
import axios from 'axios';
// dev files
import './Login.css'
import { debugLog } from "../../utilities.jsx";

class Login extends Component {
	constructor(props) {
		super(props);

		this.state = {
			redirectToReferrer: false,
		}

		this.handleLogin = this.handleLogin.bind(this);
	}

	handleLogin(e) {
		e.preventDefault(); // prevent form submit

		var email = document.getElementById('email_login').value;
		var postData = {
			email: email,
			pass: document.getElementById('email_pass').value
		};

		axios.post(
			'/login',
			postData
		).then((res) => {
			console.log(res);
			var elem = document.getElementById('login_failed_msg');
			if (!res.data.success) {
				elem.style.display = 'block';
			} else {
				elem.style.display = 'none';
				localStorage.setItem('isLoggedIn', 'true');
				localStorage.setItem('email', email);
				this.setState(() => ({
					redirectToReferrer: true
				}));
			}
		}).catch((e) => {
			var elem = document.getElementById('login_error_msg');
			elem.style.display = 'block';
			if (!(e && e.response && e.response.data && e.response.data.serverSideError)) {
				debugLog(
				    {
				        log: {
				            message: e.toString(),
				            level: "info",
				            origin: "client"
				        },
				        logToServer: true
				    }
				);
			}
		});
	}

	render() {
		const { from } = {from: {pathname: '/update_properties'}};
		const { redirectToReferrer } = this.state;

		if (redirectToReferrer == true) {
			return <Redirect to={from} />
		}

		return(
			<div>
				<span>Affordable Housing Data Hub</span>
				<form>
					<span>Email</span>
					<br/>
					<input id='email_login' className='login_input' autoComplete='on'></input>
					<br/>
					<span>Password</span>
					<br/>
					<input id='email_pass' className='login_input' type='password' autoComplete='on'></input>
					<br/>
					<button onClick={this.handleLogin}>Login</button>
				</form>
				<div id='login_failed_msg'>Login failed. Username and password combination is incorrect.</div>
				<div id='login_error_msg'>Login failed. Please contact system adminstrator for details.</div>
			</div>
		)
	}
}

export {Login};