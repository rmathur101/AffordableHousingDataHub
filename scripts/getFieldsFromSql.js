const dbHelper = require('../helpers/database.js');

var fieldsObj = {};

async function execute() {
	var fields = await dbHelper.query('AffordableHousingDataHub', 'describe Properties');
	for (var field of fields) {
		fieldsObj[field.Field] = {
			dataType: field.Type
		}
	}
	console.log(fieldsObj);
}

execute();
