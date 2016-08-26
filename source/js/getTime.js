var moment = require('moment');
module.exports = {
	"display": function(dateTime, format) {
		var gameTime = moment(dateTime, ['MMM D YYYY H:mm', 'MMM D YYYY']);
		return gameTime.format(format);
	},
	"unix": function(dateTime) {
		var gameTime = moment(dateTime, ['MMM D YYYY H:mm', 'MMM D YYYY']);
		return gameTime.format('X');
	}
};