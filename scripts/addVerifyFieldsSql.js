const dbHelper = require('../helpers/database.js');
const fieldsMap = require('../helpers/propertyFieldsMap.js').fieldsMap;



async function execute() {
	for (field in fieldsMap) {
		if (fieldsMap[field].editable && fieldsMap[field].active) {
			await dbHelper.query(
				'AffordableHousingDataHub',
				`ALTER TABLE Properties DROP COLUMN ${field + '_verified'}`
			);
			await dbHelper.query(
				'AffordableHousingDataHub',
				`ALTER TABLE Properties DROP COLUMN ${field + '_verified_timestamp'}`
			);
			// await dbHelper.query(
			// 	'AffordableHousingDataHub',
			// 	`ALTER TABLE Properties ADD COLUMN ${field + '_verified'} BOOLEAN DEFAULT FALSE`
			// );
			// await dbHelper.query(
			// 	'AffordableHousingDataHub',
			// 	`ALTER TABLE Properties ADD COLUMN ${field + '_verified_timestamp'} DATETIME`
			// );

		}

	}
}

execute();
