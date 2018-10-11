// react
import React, { Component } from 'react';
// css
import './PropertyDataGroupEdit.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class PropertyDataGroupEdit extends Component {
	constructor(props) {
		super(props);

		this.state = {
			groupName: props.name,
			data: props.data,
			showGroup:  false
		}
		return;
	}

	handleInfoClick(field) {
		var data = this.state.data;
		var fieldData = data[field];
		var description = fieldData.description;
		alert(description);
		return;
	}

	handleSortRightClick() {
		var showGroup = this.state.showGroup;
		this.setState({showGroup: !showGroup});
		return;
	}

	renderGroupEdit() {
		var data = this.state.data;
		var group = [];

		function isTypeText(dataType) {
			if (dataType.match(/^varchar.*/)) {
				return true;
			} else {
				return false;
			}
		}

		function isTypeNum(dataType) {
			if (dataType.match(/^int.*/)) {
				return true;
			} else {
				return false;
			}
		}

		function isTypeBool(dataType) {
			if (dataType.match(/^tinyint.*/)) {
				return true;
			} else {
				return false;
			}
		}

		var getInput = (field, dataType, value, isEditable) => {
			if (isTypeText(dataType) || isTypeNum(dataType)) {
				return (
					<span className='form-group'>
						<input type={isTypeText(dataType) ? 'text' : 'number'} readOnly={!isEditable} className='form-control text-or-num-input' id={field} defaultValue={(value || value == 0) ? value : ''} />
						<button className='btn btn-success verify-btn'>verify</button>
					</span>
				);
			} else if (isTypeBool(dataType)) {
				return (
					<span>
						<div className='form-check form-check-inline'>
							<label className='form-check-label' htmlFor={field + '_' + 'yes'}>
								<input id={field + '_' + 'yes'} className='form-check-input' readOnly={!isEditable} name={field} type='radio' defaultChecked={value == 1 ? true : false} />yes
							</label>
						</div>
						<div className='form-check form-check-inline'>
							<label className='form-check-label' htmlFor={field + '_' + 'no'}>
								<input id={field + '_' + 'no'} className='form-check-input' readOnly={!isEditable} name={field} type='radio' defaultChecked={value == 0 ? true : false} />no
							</label>
						</div>
						<div className='form-check form-check-inline'>
							<button className='btn btn-success verify-btn'>verify</button>
						</div>
					</span>
				);
			} else if (dataType.match(/.*enum.*/)) {

				// parse options from enum cases
				var indices = [];
				for (var i in dataType) {
					if (dataType[i] == '\'') {
						indices.push(parseInt(i));
					}
				}
				var values = [];
				for (var i in indices) {
					if (i % 2 == 0) {
						var start = indices[i] + 1;
						var endIndex = parseInt(i) + 1;
						var end = indices[endIndex];
						var enumValue = dataType.substring(start, end);
						values.push(enumValue)
					}
				}
				var elements = [];
				for (var v of values) {
					var elem = (
						<span key={field + '_' + v}>
							<div className='form-check form-check-inline'>
								<label className='form-check-label' htmlFor={field + '_' + v}>
									<input id={field + '_' + v} className='form-check-input' readOnly={!isEditable} name={field} type='radio' defaultChecked={v == value ? true : false} />{v}
								</label>
							</div>
						</span>
					);
					elements.push(elem);
				}
				return elements;

			} else {
				return (<div>ERROR</div>);
			}
		}

		for (var d in data) {
			console.log(d);
			console.log(data[d]);
			console.log('');
			group.push(
				<div className='property-group-input-container' key={d}>
					<span><b>{d}: </b><img onClick={ this.handleInfoClick.bind(this, d) } className='info-img' src='/img/info.png'/></span>
					<br/>
					{getInput(d, data[d].dataType, data[d].value, data[d].editable)}
				</div>
			);
		}
		return group;
	}

	render() {
		return (
			<div className='property-group'>
				<span>
					<img onClick={this.handleSortRightClick.bind(this)} className='dropdown-triangle' src={this.state.showGroup ? '/img/sort-down.png' : '/img/sort-right.png'}/>
					<u>{this.state.groupName}</u>
				</span>
			{ this.state.showGroup &&
				<div>
					{this.renderGroupEdit()}
				</div>
			}
			</div>
		);
	}
}

export {PropertyDataGroupEdit};