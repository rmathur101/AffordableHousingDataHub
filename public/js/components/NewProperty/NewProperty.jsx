// react
import React, { Component } from 'react';
// libs
import _ from "underscore";
// components
import {TopNav} from '../TopNav/TopNav.jsx';
// css
import '../UpdateProperty/UpdateProperty.css';
import './NewProperty.css';

class NewProperty extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<TopNav/>
				<br/>
				<div className='update-property-left'>
					<div>After the new property has been created you will be redirect to page where you can edit fields.</div>
					<div>
						<span><b>Property Name:</b></span>
						<br/>
						<span className='form-group'>
							<input type='text' className='form-control text-or-num-input'></input>
						</span>
					</div>
					<div>
						<span><b>Street Address:</b></span>
						<br/>
						<span className='form-group'>
							<input type='text' className='form-control text-or-num-input'></input>
						</span>
					</div>
					<div>
						<span><b>City:</b></span>
						<br/>
						<span className='form-group'>
							<input type='text' className='form-control text-or-num-input'></input>
						</span>
					</div>
					<div>
						<span><b>State:</b></span>
						<br/>
						<span className='form-group'>
							<input type='text' className='form-control text-or-num-input'></input>
						</span>
					</div>
					<div>
						<span><b>Zip Code:</b></span>
						<br/>
						<span className='form-group'>
							<input type='text' className='form-control text-or-num-input'></input>
						</span>
					</div>
					<div className='save-btn-continer'>
						<button id='new-property-save-btn' className='btn btn-success'>SAVE</button>
					</div>
				</div>
			</div>
		);
	}
}

export {NewProperty};
