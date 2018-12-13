// react
import React, { Component } from 'react';

class PropertyDataGroupView extends Component {
	constructor(props) {
		super(props);

		this.state = {
			groupName: props.name,
			data: props.data
		}
	}

	renderGroup() {
		var data = this.state.data;
		var group = [];
		for (var d in data) {
			group.push(
				<div key={d}>
					<span><b>{d}:</b> {data[d].value}</span>
				</div>
			);
		}
		return group;
	}

	render() {
		return (
			<div>
				<span><u>{this.state.groupName}</u></span>
				<br/>
				{this.renderGroup()}
			</div>
		);
	}
}

export {PropertyDataGroupView};