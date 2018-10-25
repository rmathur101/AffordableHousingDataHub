const fs = require('fs');
const configPath = fs.readFileSync('./config_path.txt', 'utf8');

module.exports.configPath = configPath;
