"use strict";

var moment = require('moment');
var timezone = 'America/Denver';
require('moment-timezone');
module.exports = {
	"display": function(dateTime, format) {
		// return moment.tz(dateTime, ['YYYY-MM-DD HH:mm:ss', 'YYYY-MM-DD'], timezone).format(format);
		return moment(dateTime).tz(timezone).format(format);
	},
	"unix": function(dateTime) {
		// return moment.tz(dateTime, ['YYYY-MM-DD HH:mm:ss', 'YYYY-MM-DD'], timezone).format('X');
		return moment(dateTime).tz(timezone).format('X');
	}
};