var moment = require('moment');
var needle = require('needle');
var Promise = require('Promise').default;
var getTime = require('./getTime.js');

module.exports = new Promise(function(resolve, reject) {
	needle.get('http://www.utahutes.com/calendar.ashx/calendar.rss?sport_id=2', function(error, response) {
		if (!error && response.statusCode == 200) {
			var gamesList = function(){
				var rawList = response.body.rss.channel.item;
				var nextGameIndex;
				var list = [];
				for(i = 0; i < rawList.length; i++){
					var title = rawList[i].title;
					var description = rawList[i].description;
					var descriptionArray = description.split('\\n');
					var isHome = title.includes(' vs ' );
					var isChampionshipGame = title.includes('Championship' );
					var gameDateArray = rawList[i]['ev:startdate'].split('T');
					var gameDate = gameDateArray[0] + ' ' + gameDateArray[1];
					var gameFinished = description.charAt(0) === "[";
					if (!nextGameIndex && !gameFinished) {
						nextGameIndex = i; 
					}
					var utahlogo = 'http://www.utahutes.com/images/logos/site/site.png';
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
						"displayTime": getTime.display(gameDate, 'h:mm a z').replace("12:00 am", "TBD").replace("4:52 pm", "TBD"),
						"displayYear": getTime.display(gameDate, 'YYYY'),
						"dateTimeUnix": getTime.unix(gameDate)
					});
				}
				console.log(nextGameIndex);
				return {
					list: list, 
					index: nextGameIndex
				};
			};
			resolve (gamesList());
		}
	});

});