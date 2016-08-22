var gamesArr = require('./games.js');
var moment = require('moment');
var nextGame = function() {
	for(g = 0; g < gamesArr.length; g++) {
		// gameTimeUnix = moment(gamesArr[g].gameTimeUnix, "MMM D YYYY h:m a").valueOf();
		gameTimeUnix = moment(gamesArr[g].datetime, "MMM D YYYY h:m a").format('X');
		nowUnix = moment().format('X');
		if (gameTimeUnix > nowUnix) {
			return gamesArr[g];
		}
	}
/*	return {
		"opponent": "BYU",
		"mascot": "Cougars",
		"datetime": "Sep 10 2016 5:30 pm",
		"logo": "byu.jpg",
		"hometeam": "utah",
		"result": "",
		"score": ""
	}*/
};
console.log(nextGame());
module.exports = nextGame;