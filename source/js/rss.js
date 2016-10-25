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
					var isHome = title.includes(' vs ');
					var gameDateArray = rawList[i]['ev:startdate'].split('T');
					var gameDate = gameDateArray[0] + ' ' + gameDateArray[1];
					var gameFinished = description.charAt(0) === "[";
					if (!nextGameIndex && !gameFinished) {
						nextGameIndex = i; 
					}
					list.push({
						"opponent": (title.split((isHome ? ' vs ' : ' at '))[1]).trim(),
						"mascot": "",
						"logo": rawList[i]['s:opponentlogo'],
						"homeGame": isHome,
						"result": gameFinished ? descriptionArray[1] : '',
						"score": '',
						"displayDate": getTime.display(gameDate, 'ddd, MMM Do YYYY'),
						"displayTime": getTime.display(gameDate, 'h:mm a').replace("12:00 am", "TBD").replace("4:52 pm", "TBD"),
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