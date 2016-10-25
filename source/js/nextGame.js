var gamesArr = require('./rss.js');
var moment = require('moment');
var nextGame = function() {
	for(g = 0; g < gamesArr.length; g++) {
		var nextGameObj = gamesArr[g];
		var gameTime = nextGameObj.dateTimeUnix;
		var now = moment().format('X');
		if (gameTime > now) {
			var homeLogo = 'utah.png',
				visitorLogo = nextGameObj.logo;
			if (!nextGameObj.homeGame){
				visitorLogo = homeLogo;
				homeLogo = nextGameObj.logo;
			}
			nextGameObj.homeLogo = homeLogo;
			nextGameObj.visitorLogo = visitorLogo;
			return nextGameObj;
		}
	}
};
console.log(nextGame());
module.exports = nextGame;