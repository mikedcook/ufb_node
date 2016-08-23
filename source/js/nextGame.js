var gamesArr = require('./games.js');
var moment = require('moment');
var nextGame = function() {
	for(g = 0; g < gamesArr.length; g++) {
		var gameTime = gamesArr[g].dateTimeUnix;
		var now = moment().format('X');
		if (gameTime > now) {
			return gamesArr[g];
		}
	}
};
console.log(nextGame());
module.exports = nextGame;