const dbHelper = require('./helpers/database.js');
const axios = require('axios');
const _ = require('underscore');

var API_KEY = 'AIzaSyADKa78tBy2b8TfJMdxqm3A7z4VNniNpgk';

var exludeIds = [
	2857,
	2742,
	2611,
	2609,
	2600,
	2561,
	2439,
	2393,
	2855,
	2856,
	2857
]

// include back in
// 2843
// 2447
// 2525 (as long as city has been updated check locally)
// 2357 (as long as city has been updated check locally)
// 2353 (as long as city has been updated check locally)


async function main() {
	var res = await dbHelper.query('AffordableHousingDataHub', 'SELECT id, address, city, state FROM Properties');
	for (var r of res) {
		if (_.contains(exludeIds, r.id)) {
			continue;
		}

		var address = r.address;
		if (r.city) {
			address = address + ' ' + r.city;
		}

		if (r.state) {
			address = address + ' ' + r.state;
		}

		console.log('ID: ' + r.id);
		console.log(address);

		// # input: address in following format '1600+Amphitheatre+Parkway,+Mountain+View,+CA'

		try {
			const response = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${API_KEY}`);
			// console.log(JSON.stringify(response.data.results, null, 4));
			console.log(JSON.stringify(response.data.results[0].formatted_address, null, 4));
			var lat = response.data.results[0].geometry.location.lat;
			var long = response.data.results[0].geometry.location.lng;
			console.log(lat);
			console.log(long);
			if (r.id) {
				if (true) {
					await dbHelper.query(
						'AffordableHousingDataHub',
						`UPDATE Properties SET lat=${lat}, longitude=${long} WHERE id = ${r.id}`
					);
				}
			}
		} catch (error) {
			console.log('error');
			console.log(error);
		}
		console.log('');
	}
}

main();
