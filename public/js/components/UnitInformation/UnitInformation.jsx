// react
import React, { Component } from 'react';
// css
import './UnitInformation.css';
// libs
import _ from "underscore";

class UnitInformation extends Component {
	constructor(props) {
		super(props);

		this.state = {
			unitTypes: {
				// 1: {
				// 	beds: 2,
				// 	baths: 3,
				// 	total_ir_units: 10,
				// 	total_accessible_ir_units: 5,
				// 	total_available_ir_units: 4,
				// 	total_available_accessible_ir_units: 2
				// }
			},
			newUnitTypes: 0
		};

		this.handleAddUnitType = this.handleAddUnitType.bind(this);
		this.renderUnitTypes = this.renderUnitTypes.bind(this);
	}


	handleAddUnitType() {
		var num = this.state.newUnitTypes;
		num = num + 1;
		this.setState({
			newUnitTypes: num
		});
		return;
	}

	onInputChange(unitTypeId, field, e) {
		var value = e.target.value;

		var updatedData = this.props.updatePropertyThis.state.updatedData;

		if (!_.has(updatedData.newUnitInfo, unitTypeId)) {
			this.props.updatePropertyThis.state.updatedData.newUnitInfo[unitTypeId] = {};
		}

		this.props.updatePropertyThis.state.updatedData.newUnitInfo[unitTypeId][field] = value;
	}

	renderUnitTypes() {
		var unitTypes = this.state.unitTypes;

		var unitTypesRender = [];
		for (var u in unitTypes) {
			var unitType = unitTypes[u];
			var elem =
			(
				<div key={u}>
					<span>
						<span>Beds:</span>
						<input type='number' onChange={this.onInputChange.bind(this, u, 'beds')} defaultValue={unitType.beds} />
					</span>
					<br/>
					<span>
						<span>Baths:</span>
						<input type='number' onChange={this.onInputChange.bind(this, 'baths')} defaultValue={unitType.baths} />
					</span>
					<br/>
					<span>
						<span>Total Income Restricted Units:</span>
						<input type='number' onChange={this.onInputChange.bind(this, 'total_ir_units')}  defaultValue={unitType.total_ir_units} />
					</span>
					<br/>
					<span>
						<span>Total Accessible Income Restricted Units:</span>
						<input type='number' onChange={this.onInputChange.bind(this, 'total_accessible_ir_units')}  defaultValue={unitType.total_accessible_ir_units} />
					</span>
					<br/>
					<span>
						<span>Total AVAILABLE Income Restricted Units:</span>
						<input type='number' onChange={this.onInputChange.bind(this, 'total_available_ir_units')}  defaultValue={unitType.total_available_ir_units} />
					</span>
					<br/>
					<span>
						<span>Total AVAILABLE Accessible Income Restricted Units:</span>
						<input type='number' onChange={this.onInputChange.bind(this, 'total_available_accessible_ir_units')}  defaultValue={unitType.total_available_accessible_ir_units} />
					</span>
					<hr/>
				</div>
			);

			unitTypesRender.push(elem);
		}
		var newUnitTypeElems = 0;
		while (newUnitTypeElems < this.state.newUnitTypes) {
			var elem =
			(
				<div key={"new-" + newUnitTypeElems}>
					<span>
						<span>Beds:</span>
						<input type='number' onChange={this.onInputChange.bind(this, newUnitTypeElems, 'beds')}  defaultValue='' />
					</span>
					<br/>
					<span>
						<span>Baths:</span>
						<input type='number' onChange={this.onInputChange.bind(this, newUnitTypeElems, 'baths')}  defaultValue='' />
					</span>
					<br/>
					<span>
						<span>Total Income Restricted Units:</span>
						<input type='number' onChange={this.onInputChange.bind(this, newUnitTypeElems, 'total_ir_units')} defaultValue='' />
					</span>
					<br/>
					<span>
						<span>Total Accessible Income Restricted Units:</span>
						<input type='number' onChange={this.onInputChange.bind(this, newUnitTypeElems, 'total_accessible_ir_units')} defaultValue='' />
					</span>
					<br/>
					<span>
						<span>Total AVAILABLE Income Restricted Units:</span>
						<input type='number' onChange={this.onInputChange.bind(this, newUnitTypeElems, 'total_available_ir_units')} defaultValue='' />
					</span>
					<br/>
					<span>
						<span>Total AVAILABLE Accessible Income Restricted Units:</span>
						<input type='number' onChange={this.onInputChange.bind(this, newUnitTypeElems, 'total_available_accessible_ir_units')} defaultValue='' />
					</span>
					<br/>
					<span>
						<span>Rent Minimum:</span>
						<input type='number' onChange={this.onInputChange.bind(this, newUnitTypeElems, 'rent_min')} defaultValue='' />
					</span>
					<br/>
					<span>
						<span>Rent Maximum:</span>
						<input type='number' onChange={this.onInputChange.bind(this, newUnitTypeElems, 'rent_max')} defaultValue='' />
					</span>
					<hr/>
				</div>
			);
			unitTypesRender.push(elem);
			newUnitTypeElems = newUnitTypeElems + 1;
		}

		return unitTypesRender;
	}

	render() {
		return (
			<div>
				{ this.state.unitTypes &&
					this.renderUnitTypes()
				}

				<button className='btn btn-primary add-another-unit-type-btn' onClick={ this.handleAddUnitType } >Add Another Unit Type</button>
			</div>
		);
	}
}

export { UnitInformation }