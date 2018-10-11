module.exports.fieldsMap = {
    id: {
        dataType: 'int(11)',
        group: 'Basic Property Information',
        groupOrderNum: 1,
        editable: false,
        description: 'A unique ID of the property for record keeping.'
    },
    property_name: {
        dataType: 'varchar(255)',
        group: 'Basic Property Information',
        groupOrderNum: 2,
        editable: true,
        description: 'The name of the property. This would be the name of the apartment complex. If it is a single family home you can leave this blank.'
    },
    address: {
        dataType: 'varchar(255)',
        group: 'Basic Property Information',
        groupOrderNum: 3,
        editable: true,
        description: 'The street address of the property.'
    },
    city: {
        dataType: 'varchar(255)',
        group: 'Basic Property Information',
        groupOrderNum: 4,
        editable: true,
        description: 'The city the property is located in.'
    },
    state: {
        dataType: 'varchar(255)',
        group: 'Basic Property Information',
        groupOrderNum: 5,
        editable: true,
        description: 'The state the property is located in.'
    },
    zipcode: {
        dataType: 'varchar(255)',
        group: 'Basic Property Information',
        groupOrderNum: 6,
        editable: true,
        description: 'The zipcode the property is located in.'
    },
    lat: {
        dataType: 'float',
        group: null,
        editable: false,
        description: 'Latitude.'
    },
    longitude: {
        dataType: 'float',
        group: null,
        editable: false,
        description: 'Longitude'
    },
    unit_type: {
        dataType: 'varchar(255)',
        group: 'Basic Property Information',
        groupOrderNum: 7,
        editable: true,
        description: 'Examples: multifamily, apartment, single-family home, etc.'
    },
    census_tract: {
        dataType: 'varchar(255)',
        group: null,
        editable: false,
        description: 'The census tract the property is in.'
    },
    owner: {
        dataType: 'varchar(255)',
        group: null,
        editable: false,
        description: 'The owner of the property.'
    },
    developer: {
        dataType: 'varchar(255)',
        group: null,
        editable: false,
        description: 'The developer of the property.'
    },
    council_district: {
        dataType: 'int(11)',
        group: 'Basic Property Information',
        groupOrderNum: 8,
        editable: true,
        description: 'The council district the property is in.'
    },
    phone: {
        dataType: 'varchar(255)',
        group: 'Contact Information',
        groupOrderNum: 1,
        editable: true,
        description: 'The phone number of landlord or leasing agent.'
    },
    email: {
        dataType: 'varchar(255)',
        group: 'Contact Information',
        groupOrderNum: 2,
        editable: true,
        description: 'The email of the landlord or leasing agent.'
    },
    property_manager_or_landlord: {
        dataType: 'varchar(255)',
        group: 'Contact Information',
        groupOrderNum: 3,
        editable: true,
        description: 'The name of the property manager, landlord, or leasing agent.'
    },
    website: {
        dataType: 'varchar(255)',
        group: 'Contact Information',
        groupOrderNum: 4,
        editable: true,
        description: 'The website of the property.'
    },
    students_only: {
        dataType: 'tinyint(1)',
        group: 'Communities Served',
        groupOrderNum: 1,
        editable: true,
        description: 'Does this property only allow students?'
    },
    community_elderly: {
        dataType: 'tinyint(1)',
        group: 'Communities Served',
        groupOrderNum: 2,
        editable: true,
        description: 'Does this property only allow elderly?'
    },
    community_disabled: {
        dataType: 'tinyint(1)',
        group: 'Communities Served',
        groupOrderNum: 3,
        editable: true,
        description: 'Does this property only allow disabled persons?'
    },
    community_domestic_abuse_survivor: {
        dataType: 'tinyint(1)',
        group: 'Communities Served',
        groupOrderNum: 4,
        editable: true,
        description: 'Does this property only allow domestic abuse survivors?'
    },
    community_mental: {
        dataType: 'tinyint(1)',
        group: 'Communities Served',
        groupOrderNum: 5,
        editable: true,
        description: 'Does this property only allow persons with mental disabilities?'
    },
    community_veteran: {
        dataType: 'tinyint(1)',
        group: 'Communities Served',
        groupOrderNum: 6,
        editable: true,
        description: 'Does this property only allow veterans?'
    },
    community_military: {
        dataType: 'tinyint(1)',
        group: 'Communities Served',
        groupOrderNum: 7,
        editable: true,
        description: 'Does this property only allow military persons?'
    },
    only_serves_designated_communities: {
        dataType: 'tinyint(1)',
        group: null,
        editable: false,
    },
    community_served_descriptions: {
        dataType: 'varchar(255)',
        group: 'Communities Served',
        groupOrderNum: 8,
        editable: true,
        description: 'Any other information about the communities that this property serves.'
    },
    broken_lease: {
        dataType: 'enum(\'yes\',\'no\',\'depends\')',
        group: 'Communities Served',
        groupOrderNum: 9,
        editable: true,
        description: 'Does this property accept tenants with past broken leases?'
    },
    broken_lease_criteria: {
        dataType: 'varchar(255)',
        group: 'Communities Served',
        groupOrderNum: 10,
        editable: true,
        description: 'Any other information about accepting tenants with broken leases.'
    },
    eviction_history: {
        dataType: 'enum(\'yes\',\'no\',\'depends\')',
        group: 'Communities Served',
        groupOrderNum: 11,
        editable: true,
        description: 'Does this property accept tenants with an eviction history?'
    },
    eviction_history_criteria: {
        dataType: 'varchar(255)',
        group: 'Communities Served',
        groupOrderNum: 12,
        editable: true,
        description: 'Any other information about accepting tenants with eviction history.'
    },
    criminal_history: {
        dataType: 'enum(\'yes\',\'no\',\'depends\')',
        group: 'Communities Served',
        groupOrderNum: 13,
        editable: true,
        description: 'Does this property accept tenants with a criminal history?'
    },
    criminal_history_criteria: {
        dataType: 'varchar(255)',
        group: 'Communities Served',
        groupOrderNum: 14,
        editable: true,
        description: 'Any other information about accepting tenants with criminal history.'
    },
    has_waitlist: {
        dataType: 'tinyint(1)',
        group: 'Communities Served',
        groupOrderNum: 15,
        editable: true,
        description: 'Does this property have a waitlist for affordable housing units?'
    },
    total_units: {
        dataType: 'int(11)',
        group: 'Affordability Information',
        groupOrderNum: 1,
        editable: true,
        description: 'The total number of units the property has. Includes affordable units and market rate units.'
    },
    total_psh_units: {
        dataType: 'int(11)',
        group: 'Affordability Information',
        groupOrderNum: 12,
        editable: true,
        description: 'The total number of permanent supportive housing units. Includes vacant or occupied units.'
    },
    has_allocated_psh_units: {
        dataType: 'tinyint(1)',
        group: 'Affordability Information',
        groupOrderNum: 11,
        editable: true,
        description: 'Does this property have any permanent supportive housing units? Includes vacant and occupied units.'
    },
    has_available_psh_units: {
        dataType: 'tinyint(1)',
        group: 'Affordability Information',
        groupOrderNum: 13,
        editable: true,
        description: 'Does this property have any AVAILABLE permanent supportive housing units?'
    },
    has_available_psh_units_updated: {
        dataType: 'datetime',
        group: null,
        editable: false,
        description: null
    },
    total_income_restricted_units: {
        dataType: 'int(11)',
        group: 'Affordability Information',
        groupOrderNum: 3,
        editable: true,
        description: 'The total number of income restricted units. Includes vacant and occupied units.'
    },
    has_allocated_ir_units: {
        dataType: 'tinyint(1)',
        group: 'Affordability Information',
        groupOrderNum: 2,
        editable: true,
        description: 'Does this property have any income restricted units? Includes vacant and occupied units.'
    },
    has_available_ir_units: {
        dataType: 'tinyint(1)',
        group: 'Affordability Information',
        groupOrderNum: 4,
        editable: true,
        description: 'Does this property have any AVAILABLE income restricted units?'
    },
    has_available_ir_units_updated_at: {
        dataType: 'datetime',
        group: null,
        editable: false,
        description: null
    },
    total_section_8_units: {
        dataType: 'int(11)',
        group: 'Affordability Information',
        groupOrderNum: 6,
        editable: true,
        description: 'Total number of units that accept section 8 vouchers. This includes vacant and occupied units.'
    },
    accepts_section_8: {
        dataType: 'tinyint(1)',
        group: 'Affordability Information',
        groupOrderNum: 5,
        editable: true,
        description: 'Does this property accept section 8 vouchers?'
    },
    has_available_section_8: {
        dataType: 'tinyint(1)',
        group: 'Affordability Information',
        groupOrderNum: 7,
        editable: true,
        description: 'Does this property have any AVAILABLE units that would accept section 8 vouchers?'
    },
    has_available_section_8_updated_at: {
        dataType: 'datetime',
        group: null,
        editable: false,
        description: null
    },
    total_accessible_ir_units: {
        dataType: 'int(11)',
        group: 'Affordability Information',
        groupOrderNum: 9,
        editable: true,
        description: 'Total number of units that are accessible for physically disabled persons.'

    },
    has_allocated_accessible_ir_units: {
        dataType: 'tinyint(1)',
        group: 'Affordability Information',
        groupOrderNum: 8,
        editable: true,
        description: 'Does this property have any accessible units? Includes vacant and occupied units.'
    },
    has_available_accessible_ir_units: {
        dataType: 'tinyint(1)',
        group: 'Affordability Information',
        groupOrderNum: 10,
        editable: true,
        description: 'Does this property have any AVAILABLE accessible units for physically disabled persons?'
    },
    has_available_accessible_ir_units_updated_at: {
        dataType: 'datetime',
        group: null,
        editable: false,
        description: null
    },
    total_public_housing_units: {
        dataType: 'int(11)',
        group: 'Affordability Information',
        groupOrderNum: 15,
        editable: true,
        description: 'Total number of public housing units. Inlcudes vacant and occupied units.'
    },
    has_allocated_public_housing_units: {
        dataType: 'tinyint(1)',
        group: 'Affordability Information',
        groupOrderNum: 14,
        editable: true,
        description: 'Does this property have any public housing units? Includes vacant and occupied units.'
    },
    has_available_public_housing_units: {
        dataType: 'tinyint(1)',
        group: 'Affordability Information',
        groupOrderNum: 16,
        editable: true,
        description: 'Does this property have any AVAILABLE public housing units?'
    },
    has_available_public_housing_units_updated_at: {
        dataType: 'datetime',
        group: null,
        editable: false,
        description: null
    },
    // num_units_mfi_30: {
    //     dataType: 'int(11)'
    // },
    // num_units_mfi_40: {
    //     dataType: 'int(11)'
    // },
    // num_units_mfi_50: {
    //     dataType: 'int(11)'
    // },
    // num_units_mfi_60: {
    //     dataType: 'int(11)'
    // },
    // num_units_mfi_65: {
    //     dataType: 'int(11)'
    // },
    // num_units_mfi_70: {
    //     dataType: 'int(11)'
    // },
    // num_units_mfi_80: {
    //     dataType: 'int(11)'
    // },
    // num_units_mfi_90: {
    //     dataType: 'int(11)'
    // },
    // num_units_mfi_100: {
    //     dataType: 'int(11)'
    // },
    // num_units_mfi_110: {
    //     dataType: 'int(11)'
    // },
    // num_units_mfi_120: {
    //     dataType: 'int(11)'
    // },
    // has_0_bed_unit: {
    //     dataType: 'tinyint(1)'
    // },
    // has_1_bed_unit: {
    //     dataType: 'tinyint(1)'
    // },
    // has_2_bed_unit: {
    //     dataType: 'tinyint(1)'
    // },
    // has_3_bed_unit: {
    //     dataType: 'tinyint(1)'
    // },
    // has_4_bed_unit: {
    //     dataType: 'tinyint(1)'
    // },
    // has_5_bed_unit: {
    //     dataType: 'tinyint(1)'
    // },
    // num_ir_0_bed_units: {
    //     dataType: 'int(11)'
    // },
    // num_ir_1_bed_units: {
    //     dataType: 'int(11)'
    // },
    // num_ir_2_bed_units: {
    //     dataType: 'int(11)'
    // },
    // num_ir_3_bed_units: {
    //     dataType: 'int(11)'
    // },
    // num_ir_4_bed_units: {
    //     dataType: 'int(11)'
    // },
    // num_ir_5_bed_units: {
    //     dataType: 'int(11)'
    // },
    // num_ir_0_bed_accessible_units: {
    //     dataType: 'int(11)'
    // },
    // num_ir_1_bed_accessible_units: {
    //     dataType: 'int(11)'
    // },
    // num_ir_2_bed_accessible_units: {
    //     dataType: 'int(11)'
    // },
    // num_ir_3_bed_accessible_units: {
    //     dataType: 'int(11)'
    // },
    // num_ir_4_bed_accessible_units: {
    //     dataType: 'int(11)'
    // },
    // num_ir_5_bed_accessible_units: {
    //     dataType: 'int(11)'
    // },
    has_playground: {
        dataType: 'tinyint(1)',
        group: 'Amenities',
        groupOrderNum: 11,
        editable: true,
        description: 'Does the property have a playground?'
    },
    has_pool: {
        dataType: 'tinyint(1)',
        group: 'Amenities',
        groupOrderNum: 10,
        editable: true,
        description: 'Does the property have a pool?'
    },
    has_off_street_parking: {
        dataType: 'tinyint(1)',
        group: 'Amenities',
        groupOrderNum: 9,
        editable: true,
        description: 'Does this property have off street parking? Like a gated parking lot or a garage.'
    },
    has_air_conditioning: {
        dataType: 'tinyint(1)',
        group: 'Amenities',
        groupOrderNum: 1,
        editable: true,
        description: 'Does this property have air conditioning?'
    },
    has_ceiling_fans: {
        dataType: 'tinyint(1)',
        group: 'Amenities',
        groupOrderNum: 2,
        editable: true,
        description: 'Does this property have ceiling fans?'
    },
    wd_unit: {
        dataType: 'tinyint(1)',
        group: 'Amenities',
        groupOrderNum: 3,
        editable: true,
        description: 'Does this property have in unit washers and dryers?'
    },
    wd_hookups: {
        dataType: 'tinyint(1)',
        group: 'Amenities',
        groupOrderNum: 4,
        editable: true,
        description: 'Does this property have washer dryer hookups?'
    },
    wd_onsite: {
        dataType: 'tinyint(1)',
        group: 'Amenities',
        groupOrderNum: 5,
        editable: true,
        description: 'Does this property have a laundromat on site?'
    },
    wd_other: {
        dataType: 'varchar(255)',
        group: 'Amenities',
        groupOrderNum: 6,
        editable: true,
        description: 'Any other information associated with laundry'
    },
    allows_pet: {
        dataType: 'enum(\'yes\',\'no\',\'service_only\')',
        group: 'Amenities',
        groupOrderNum: 7,
        editable: true,
        description: 'Does this property allow pets?'
    },
    pet_other: {
        dataType: 'varchar(255)',
        group: 'Amenities',
        groupOrderNum: 8,
        editable: true,
        description: 'Any other information about having pets.'
    },
    bus_transport_dist: {
        dataType: 'varchar(255)',
        group: null,
        editable: false,
        description: false
    },
    security: {
        dataType: 'varchar(255)',
        group: 'Amenities',
        groupOrderNum: 12,
        editable: true,
        description: 'What kind of provisions does this property have in terms of security? For example, does it have a security guard, or a gate?'
    },
    elementary_school: {
        dataType: 'varchar(255)',
        group: 'Schools',
        groupOrderNum: 1,
        editable: true,
        description: 'Name of the elementary school.'
    },
    middle_school: {
        dataType: 'varchar(255)',
        group: 'Schools',
        groupOrderNum: 2,
        editable: true,
        description: 'Name of the middle school.'
    },
    high_school: {
        dataType: 'varchar(255)',
        group: 'Schools',
        groupOrderNum: 3,
        editable: true,
        description: 'Name of the high school.'
    },
    affordability_start: {
        dataType: 'datetime',
        group: null
    },
    affordability_expiration: {
        dataType: 'datetime',
        group: null
    },
    ahi_project_id: {
        dataType: 'int(11)',
        group: null
    },
    housing_program: {
        dataType: 'varchar(255)',
        group: null
    },
    CDBG: {
        dataType: 'float',
        group: null
    },
    HOME: {
        dataType: 'float',
        group: null
    },
    LIHTC: {
        dataType: 'varchar(255)',
        group: null
    },
    data_source_atc_guide: {
        dataType: 'tinyint(1)',
        group: null
    },
    data_source_tdhca: {
        dataType: 'tinyint(1)',
        group: null
    },
    data_source_ahi: {
        dataType: 'tinyint(1)',
        group: null
    },
    tcad_id: {
        dataType: 'int(11)',
        group: null
    }
}