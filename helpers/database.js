const initConfig = require('../initConfig.js');
const fs = require('fs');
const mysql = require('mysql');
const bcrypt = require('bcrypt');
const thisFilename = 'database.js';

async function updateSessionId(userId, sessionId) {
	return new Promise(async (resolve, reject) => {
		var error = null;

		try {
			var conn = await getDatabaseConnection();
			var sql = `UPDATE Users SET session_id =${mysql.escape(sessionId)} WHERE id=${mysql.escape(userId)}`;
			await queryDatabase(conn, 'AffordableHousingDataHub', sql);
		} catch(e) {
			error = new Error(thisFilename + ' => updateSessionID(), caught exception:\n' + e.stack);
		} finally {
			await closeDatabaseConnection(conn);
			if (error) {
				return reject(error);
			} else {
				return resolve(true);
			}
		}
	});
}

async function doesUserExist(email, pass) {
	return new Promise(async (resolve, reject) => {
		var error = null;

		try {
			var conn = await getDatabaseConnection();
			var res = await queryDatabase(
				conn,
				'AffordableHousingDataHub',
				`SELECT * FROM Users WHERE email=${mysql.escape(email)}`
			);
			if (res.length > 1) {
				return reject(new Error(thisFilename + ' => doesUserExist(), multiple users found but one expected'));
			}
			if (res.length == 0) {
				return resolve(false)
			}
			if (bcrypt.compareSync(pass, res[0].passwd)) {
				return resolve(res);
			} else {
				return resolve(false);
			}
		} catch(e) {
			error = new Error(thisFilename + ' => doesUserExist(), caught exception:\n' + e.stack);
		} finally {
			closeDatabaseConnection(conn);
			if (error) {
				return reject(error);
			} else {
				return resolve(res);
			}
		}
	});
}

async function createUser(firstName, lastName, org, email, passwd) {
	return new Promise(async (resolve, reject) => {
		try {
			var conn = await getDatabaseConnection();
			var passwdHash = bcrypt.hashSync(passwd, 11);
			var results = await queryDatabase(
				conn,
				'AffordableHousingDataHub',
				`INSERT INTO Users (first_name, last_name, org, email, passwd) VALUES (${mysql.escape(firstName)}, ${mysql.escape(lastName)}, ${mysql.escape(org)}, ${mysql.escape(email)}, ${mysql.escape(passwdHash)})`
			);
			closeDatabaseConnection(conn);
		} catch(e) {
			closeDatabaseConnection(conn);
			return reject(new Error(thisFilename + ' => createUser(), caught exception:\n' + e.stack)); // TODO: is this right?
		}

		return resolve(results)
	});
}

async function getUpdatePropertiesList() {
	// TODO: properly handle errors
	var conn = await getDatabaseConnection();
	var res = await queryDatabase(
		conn,
		'AffordableHousingDataHub',
		'SELECT id, property_name, address, phone, email, website, total_income_restricted_units, total_section_8_units FROM Properties'
	);
	await closeDatabaseConnection(conn);
	return res;
}

async function getProperty(id) {
	// TODO: properly handle errors
	var conn = await getDatabaseConnection();
	var res = await queryDatabase(
		conn,
		'AffordableHousingDataHub',
		`SELECT * from Properties WHERE id = ${id}`
	);
	await closeDatabaseConnection(conn);
	return res;
}

async function queryDatabase(mysqlConnection, database, query) {
	return new Promise((resolve, reject) => {
		mysqlConnection.query(`use ${database}`);

		mysqlConnection.query(query, (e, results, fields) => {
			if (e) {
				return reject(new Error(thisFilename + ' => queryDatabase(), error in query:\n' + e.stack));
			}
			return resolve(results);
		});
	});
}

function closeDatabaseConnection(mysqlConnection) {
	if (!mysqlConnection) {
		return;
	}
	try {
		mysqlConnection.end((e) => {
			if (e) {
				throw new Error(thisFilename + ' => closeDatabaseConnection(), unable to close connection:\n' + e);
			}
		});
	} catch(e) {
		throw new Error(thisFilename + ' => closeDatabaseConnection(), caught exception:\n' + e);
	}
}

async function getDatabaseConnection() {
	return new Promise((resolve, reject) => {
		try {
			if (process.env.NODE_ENV == 'DEVELOPMENT') {
				 var conn = mysql.createConnection({
					socketPath: fs.readFileSync(initConfig.configPath + 'db_socket_path.txt', 'utf8'),
					user: fs.readFileSync(initConfig.configPath + 'db_user.txt', 'utf8'),
					password: fs.readFileSync(initConfig.configPath + 'db_pass.txt', 'utf8'),
				});
			} else if (process.env.NODE_ENV == 'PRODUCTION') {
				var conn;
				// TODO: facillitate connection to internet socket (probs hosted on aws)
			}

			conn.connect((e) => {
				if (e) {
					conn.end(() => {}); // assume that this correctly ends the connection
					return reject(new Error(thisFilename + ' => getDatabaseConnection(), unable to connect to database:\n' + e.stack));
				}
				return resolve(conn);
			});

		} catch(e) {
			return reject(new Error(thisFilename + ' => getDatabaseConnection(), caught exception:\n' + e.stack));
		}
	});
}

module.exports.getDatabaseConnection = getDatabaseConnection;
module.exports.closeDatabaseConnection = closeDatabaseConnection;
module.exports.createUser = createUser;
module.exports.doesUserExist = doesUserExist;
module.exports.queryDatabase = queryDatabase;
module.exports.getUpdatePropertiesList = getUpdatePropertiesList;
module.exports.getProperty = getProperty;
module.exports.updateSessionId = updateSessionId;

