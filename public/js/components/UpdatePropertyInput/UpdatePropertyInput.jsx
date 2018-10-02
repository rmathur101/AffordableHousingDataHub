// react
import React, { Component } from 'react';
// css
import './UpdatePropertyInput.css';

class UpdatePropertyInput extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<form>
				<div className='form-group'>
					<span className='field'>{this.props.field}</span>
					<br/>
					{(this.props.value || this.props.value == 0) &&
						<input style={{width: '500px'}} className='form-control' value={this.props.value}/>
					}
					{!this.props.value && this.props.value != 0 &&
						<input style={{width: '500px', 'backgroundColor': 'pink'}} className='form-control' value={this.props.value}/>
					}
				</div>
			</form>
		)
	}
}

export {UpdatePropertyInput};