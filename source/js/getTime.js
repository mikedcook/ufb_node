var moment = require('moment');
module.exports = {
	"display": function(dateTime, format) {
		var gameTime = moment(dateTime, ['MMM D YYYY H:mm', 'MMM D YYYY']);
			console.log(gameTime.isValid() ? 'gameTime is valid' : 'gameTime is invalid');
		return gameTime.format(format);
	},
	"unix": function(dateTime) {
		var gameTime = moment(dateTime, ['MMM D YYYY H:mm', 'MMM D YYYY']);
			console.log(gameTime.isValid() ? 'unixTime is valid' : 'unixTime is invalid');
		return gameTime.format('X');
	}
};