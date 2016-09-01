var moment = require('moment');
var momentTimezone = require('moment-timezone');
var timezone = 'America/Denver';
module.exports = {
	"display": function(dateTime, format) {
		var gameTime = moment.tz(dateTime, ['MMM D YYYY H:mm', 'MMM D YYYY'], timezone);
		return gameTime.format(format);
	},
	"unix": function(dateTime) {
		var gameTime = moment.tz(dateTime, ['MMM D YYYY H:mm', 'MMM D YYYY'], timezone);
		return gameTime.format('X');
	}
};