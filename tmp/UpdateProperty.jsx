// react
import React, { Component } from 'react';
// axios
import axios from 'axios';
// components
import {UpdatePropertyInput} from '../UpdatePropertyInput/UpdatePropertyInput.jsx';
// css
import './UpdateProperty.css';

class UpdateProperty extends Component {
	constructor(props) {
		super(props)

		const self = this;

		var groupFieldMap = { 'Basic Property Info':
			[ 'property_name',
			'address',
			'city',
			'state',
			'zipcode',
			'lat',
			'longitude',
			'unit_type',
			'census_tract',
			'owner',
			'developer',
			'council_district' ],
			'Contact Info': [ 'phone', 'email', 'property_manager_or_landlord', 'website' ],
			Images: [ 'images' ],
			'Communities Served':
			[ 'students_only',
			'community_elderly',
			'community_disabled',
			'community_domestic_abuse_survivor',
			'community_mental',
			'community_veteran',
			'community_military',
			'only_serves_designated_communities',
			'community_served_descriptions',
			'broken_lease',
			'broken_lease_criteria',
			'eviction_history   ',
			'eviction_history_criteria',
			'criminal_history',
			'criminal_history_criteria' ],
			'Affordability Information':
			[ 'has_waitlist',
			'total_units',
			'total_psh_units',
			'has_allocated_psh_units',
			'has_available_psh_units',
			'has_available_psh_units_updated',
			'total_income_restricted_units',
			'has_allocated_ir_units',
			'has_available_ir_units',
			'has_available_ir_units_updated_at',
			'total_section_8_units',
			'accepts_section_8',
			'has_available_section_8',
			'has_available_section_8_updated_at',
			'total_accessible_ir_units',
			'has_allocated_accessible_ir_units',
			'has_available_accessible_ir_units',
			'has_available_accessible_ir_units_updated_at',
			'total_public_housing_units',
			'has_allocated_public_housing_units',
			'has_available_public_housing_units',
			'has_available_public_housing_units_updated_at',
			'num_units_mfi_30',
			'num_units_mfi_40',
			'num_units_mfi_50',
			'num_units_mfi_60',
			'num_units_mfi_65',
			'num_units_mfi_70',
			'num_units_mfi_80',
			'num_units_mfi_90',
			'num_units_mfi_100',
			'num_units_mfi_110',
			'num_units_mfi_120' ],
			'Unit Information':
			[ 'has_0_bed_unit',
			'has_1_bed_unit',
			'has_2_bed_unit',
			'has_3_bed_unit',
			'has_4_bed_unit',
			'has_5_bed_unit',
			'num_ir_0_bed_units',
			'num_ir_1_bed_units',
			'num_ir_2_bed_units',
			'num_ir_3_bed_units',
			'num_ir_4_bed_units',
			'num_ir_5_bed_units',
			'num_ir_0_bed_accessible_units',
			'num_ir_1_bed_accessible_units',
			'num_ir_2_bed_accessible_units',
			'num_ir_3_bed_accessible_units',
			'num_ir_4_bed_accessible_units',
			'num_ir_5_bed_accessible_units' ],
			Amenities:
			[ 'has_playground',
			'has_pool',
			'has_off_street_parking',
			'has_air_conditioning',
			'has_ceiling_fans',
			'wd_unit',
			'wd_hookups',
			'wd_onsite',
			'wd_other',
			'allows_pet',
			'pet_other',
			'bus_transaport_dist',
			'security' ],
			School: [ 'elementary_school', 'middle_school', 'high_school' ] }

		var propertyId = this.props.match.params.id;
		var queryString = '/property?propertyId=' + propertyId
		console.log(queryString);
		axios.get(queryString)
			.then((res) => {
				// TODO: should validate that user is logged in on the backend before returning data
				console.log('what is res');
				console.log(res);

				self.setState({data: res.data.data, groupFieldMap: groupFieldMap});
				// self.setState({data: res.data.data})
			})
			.catch((e) => {
				console.log('inside catch');
				console.log(e);
			});

		// this.state.show = '1';
	}

	handleClick(key) {
		this.state.show = key;
		this.forceUpdate();
	}

	render() {

		var renderContent = (key) => {
			var result = [];
			var groupFieldMap = this.state.groupFieldMap;
			var thisMap = groupFieldMap[key]
			var data = this.state.data;
			var properties = data[0];
			for (var p in properties) {
				if (thisMap.includes(p)) {
					result.push(<UpdatePropertyInput field={p} value={properties[p]}>test1</UpdatePropertyInput>)
				}
			}
			return result;
		}

		return (
			<div>
				<div className='header'>
					<span className='header-title'>Affordable Housing Data Hub</span>
				</div>
				<div style={{padding: '50px 50px 50px 50px'}}>
					<div style={{'float': 'left'}}>
						<button className='btn btn-primary btn-custom' onClick={this.handleClick.bind(this, '1')}>Basic Property Info</button>
						<br></br>
						<button className='btn btn-warning btn-custom' onClick={this.handleClick.bind(this, '2')}>Communities Served</button>
						<br></br>
						<button className='btn btn-success btn-custom'  onClick={this.handleClick.bind(this, '3')}>Affordability Information</button>
						<br></br>
						<button className='btn btn-danger btn-custom' onClick={this.handleClick.bind(this, '4')}>Unit Information</button>
						<br></br>
						<button className='btn btn-info btn-custom' onClick={this.handleClick.bind(this, '5')}>Amenities</button>
						<br></br>
						<button className='btn btn-warning btn-custom' onClick={this.handleClick.bind(this, '6')}>School</button>
					</div>
					<div style={{'float': 'right', 'paddingRight': '100px'}}>
						{ this.state && this.state.data && (this.state.show == '1' || !this.state.show) &&
							renderContent('Basic Property Info')
						}
						{ this.state && this.state.data && this.state.show == '2' &&
							renderContent('Communities Served')
						}
						{ this.state && this.state.data && this.state.show == '3' &&
							renderContent('Affordability Information')
						}
						{ this.state && this.state.data && this.state.show == '4' &&
							renderContent('Unit Information')
						}
						{ this.state && this.state.data && this.state.show == '5' &&
							renderContent('Amenities')
						}
						{ this.state && this.state.data && this.state.show == '6' &&
							renderContent('School')
						}
					</div>
				</div>
			</div>
		);
	}
}

export {UpdateProperty};