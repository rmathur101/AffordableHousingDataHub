const csv = require('fast-csv');
// const dbHelper = require('../../app/helpers/database.js');
const dbHelper = require('./helpers/database.js');

var allData =  [];

csv
.fromPath('./properties_outside_etj.csv')
.on('data', function(data) {
    allData.push(data);
})
.on('end', async function() {
	for (let i in allData) {
		if (i == 0) {
			continue;
		}
		var row = allData[i];
		var property_id = row[1];
		var property_name = row[0];
		console.log(property_id);
		console.log(property_name);
		console.log('');
		var sql ='UPDATE Properties SET outside_etj=1 WHERE id=' + property_id;

		if (property_id) {
			var conn = await dbHelper.getDatabaseConnection();
			var res = await dbHelper.queryDatabase(conn, 'AffordableHousingDataHub', sql);
			await dbHelper.closeDatabaseConnection(conn);
		}
	}
});
// .on('end', async function() {
// 	for (let i in allData) {
// 		var row = allData[i];
// 		var ahi_id = row[2];
// 		var tcad_id = row[1];
// 		if (ahi_id && tcad_id) {
// 			var address = row[6];
// 			var conn = await dbHelper.getDatabaseConnection();
// 			var sql = `SELECT address FROM Properties WHERE ahi_project_id="${ahi_id}"`;
// 			var res = await dbHelper.queryDatabase(conn, 'AffordableHousingDataHub', sql);

// 			console.log('AHI ID: ' + ahi_id);
// 			console.log('TCAD ID: ' + tcad_id);
// 			console.log('Address: ' + address);
// 			console.log(res);
// 			console.log('');

// 			var tcad_id_int = parseInt(tcad_id);
// 			if (tcad_id_int) {
// 				// var sql = `INSERT INTO Properties (tcad_id) VALUES (${tcad_id_int}) WHERE ahi_id = ${ahi_id}`;
// 				var sql = `UPDATE Properties SET tcad_id = ${tcad_id_int} WHERE ahi_project_id = ${ahi_id}`;
// 				await dbHelper.queryDatabase(conn, 'AffordableHousingDataHub', sql);
// 			}
// 			await dbHelper.closeDatabaseConnection(conn);
// 			//NOTE: before adding TCAD ID need to verify that the tcad id is an integer not something like "Multiple Ids", or something
// 		}
// 	}
// });
