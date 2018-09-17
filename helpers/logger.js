const logger = require('winston');
const moment = require('moment');

const tsFormat = () => moment().format('YYYY-MM-DD hh:mm:ss').trim();

logger.configure({
    transports: [
        new (logger.transports.Console)(
        	{
        		colorize: true,
        		timestamp: tsFormat
        	}
        ),
        new (logger.transports.File)(
        	{
        		filename: './logs/app.log',
        		timestamp: tsFormat
        	}
        )
    ]
});

module.exports.logger = logger;
