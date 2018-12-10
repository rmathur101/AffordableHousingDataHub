const dbHelper = require('./helpers/database.js');

var fieldsObj = {};

async function execute() {
	var includeFields = [
		'id',
		'property_name',
		'address',
		'city',
		'state',
		'zipcode',
		'lat',
		'longitude',
		'unit_type',
		'council_district',
		'phone',
		'email',
		'website',
		'students_only',
		'community_elderly',
		'community_disabled',
		'community_domestic_abuse_survivor',
		'community_mental',
		'community_military',
		'community_served_descriptions',
		'broken_lease',
		'broken_lease_criteria',
		'eviction_history',
		'eviction_history_criteria',
		'criminal_history',
		'criminal_history_criteria',
		'has_waitlist',
		'total_units',
		'total_psh_units',
		'total_income_restricted_units',
		'accepts_section_8',
		'total_public_housing_units',
		'num_units_mfi_30',
		'num_units_mfi_40',
		'num_units_mfi_50',
		'num_units_mfi_60',
		'num_units_mfi_70',
		'num_units_mfi_80',
		'num_units_mfi_90',
		'num_units_mfi_100',
		'num_units_mfi_110',
		'num_units_mfi_120',
		'has_playground',
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
		'security',
		'elementary_school',
		'middle_school',
		'high_school',
		'affordability_expiration',
		'has_available_affordable_units'
	];
	// var fields = await dbHelper.query('AffordableHousingDataHub', 'describe Properties');
	var fields = await dbHelper.query('AffordableHousingDataHub', 'SELECT * from Properties');
	// for (var field of fields) {
	// 	fieldsObj[field.Field] = {
	// 		dataType: field.Type
	// 	}
	// }

	for (var f of includeFields) {
		var val = await dbHelper.query('AffordableHousingDataHub', `SELECT count(*) as val from Properties where ${f} is NULL`);
		console.log(f);
		var num = val[0]['val'];
		console.log(num);
		console.log(num/537*100);
		console.log('');
	}
}

execute();
