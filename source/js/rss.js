"use strict";

var needle = require('needle');
var Promise = require('Promise').default;
var getTime = require('./getTime.js');

function Schedule(){
	this.getSchedule = new Promise(function(resolve) {
		needle.get('http://utahutes.com/calendar.ashx/calendar.rss?sport_id=2', function(error, response) {
			if (!error && response.statusCode === 200) {
				var gamesList = function(){
					var rawList = response.body.rss.channel.item;
					var nextGameIndex;
					var list = [];
					for(var i = 0; i < rawList.length; i++){
						var title = rawList[i].title;
						var description = rawList[i].description;
						var descriptionArray = description.split('\\n');
						var isHome = title.includes(' vs ' );
						var isChampionshipGame = title.includes('Championship' );
						var gameDateArray = rawList[i]['ev:startdate'].split('T');
						var gameDate = gameDateArray[0] + ' ' + gameDateArray[1];
						var validateTime = function(hours, minutes) {
							return (minutes < 60) && (minutes % 15 === 0) && (9 < hours < 23);
						};
						var gameFinished = description.charAt(0) === "[";
						var pastKickoff = (getTime.unix_ms(gameDate) < Date.now());
						if (!nextGameIndex && nextGameIndex !== 0 && !pastKickoff/* && !gameFinished*/) {
							nextGameIndex = i;
						}
						var utahlogo = 'http://utahutes.com/images/logos/site/site.png';
						var opponentlogo = rawList[i]['s:opponentlogo'];
						list.push({
							"opponent": (title.split((isHome ? ' vs ' : ' at '))[1]).trim(),
							"mascot": "",
							"location": rawList[i]['ev:location'],
							"homelogo": isHome ? utahlogo : opponentlogo,
							"visitorlogo": isHome ? opponentlogo : utahlogo,
							"opponentlogo": opponentlogo,
							"homeGame": isHome && !isChampionshipGame,
							"result": gameFinished ? descriptionArray[1] : '',
							"score": '',
							"displayDate": getTime.display(gameDate, 'ddd, MMM Do'),
							"displayTime": validateTime(getTime.display(gameDate, 'k'), getTime.display(gameDate, 'mm')) ? getTime.display(gameDate, 'h:mm a z') : "TBD",
							"displayYear": getTime.display(gameDate, 'YYYY'),
							"dateTimeUnix": getTime.unix(gameDate)
						});
					}
					return {
						list: list,
						index: nextGameIndex
					};
				};
				console.log('updated schedule');
				resolve (gamesList());
			} else {
				console.log('Failed to retrieve data. Satus ' + response.statusCode);
				return;
			}
		});



	});
}
module.exports = Schedule;