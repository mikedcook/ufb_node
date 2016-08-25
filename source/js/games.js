var getTime = require('./getTime.js');
gamesArr = [
	{
		"opponent": "Southern Utah",
		"mascot": "Thunderbirds",
		"dateTime": "Sep 1 2016 18:00",
		"logo": "suu.png",
		"homeGame": true,
		"result": "",
		"score": ""
	},
	{
		"opponent": "BYU",
		"mascot": "Cougars",
		"dateTime": "Sep 10 2016 17:30",
		"logo": "byu.png",
		"homeGame": true,
		"result": "",
		"score": ""
	},
	{
		"opponent": "San Jose State",
		"mascot": "Spartans",
		"dateTime": "Sep 17 2016 20:30",
		"logo": "sanjosestate.png",
		"homeGame": false,
		"result": "",
		"score": ""
	},
	{
		"opponent": "USC",
		"mascot": "Trojans",
		"dateTime": "Sep 23 2016",
		"logo": "usc.png",
		"homeGame": true,
		"result": "",
		"score": ""
	},
	{
		"opponent": "Cal",
		"mascot": "Golden Bears",
		"dateTime": "Oct 1 2016",
		"logo": "cal.jpg",
		"homeGame": false,
		"result": "",
		"score": ""
	},
	{
		"opponent": "Arizona",
		"mascot": "Wildcats",
		"dateTime": "Oct 8 2016",
		"logo": "arizona.jpg",
		"homeGame": true,
		"result": "",
		"score": ""
	},
	{
		"opponent": "Oregon State",
		"mascot": "Beavers",
		"dateTime": "Oct 15 2016",
		"logo": "oregonstate.jpg",
		"homeGame": false,
		"result": "",
		"score": ""
	},
	{
		"opponent": "UCLA",
		"mascot": "Bruins",
		"dateTime": "Oct 22 2016",
		"logo": "ucla.jpg",
		"homeGame": false,
		"result": "",
		"score": ""
	},
	{
		"opponent": "Washington",
		"mascot": "Huskies",
		"dateTime": "Oct 29 2016",
		"logo": "washington.png",
		"homeGame": true,
		"result": "",
		"score": ""
	},
	{
		"opponent": "BYE",
		"mascot": "",
		"dateTime": "Nov 5 2016",
		"logo": "utah-gray.png",
		"homeGame": true,
		"result": "",
		"score": ""
	},
	{
		"opponent": "Arizona State",
		"mascot": "Sun Devils",
		"dateTime": "Nov 10 2016",
		"logo": "arizonastate.jpg",
		"homeGame": false,
		"result": "",
		"score": ""
	},
	{
		"opponent": "Oregon",
		"mascot": "Ducks",
		"dateTime": "Nov 19 2016",
		"logo": "oregon.png",
		"homeGame": true,
		"result": "",
		"score": ""
	},
	{
		"opponent": "Colorado",
		"mascot": "Buffaloes",
		"dateTime": "Nov 26 2016",
		"logo": "colorado.jpg",
		"homeGame": false,
		"result": "",
		"score": ""
	}
];
(function() {
	for(g = 0; g < gamesArr.length; g++) {
		var game = gamesArr[g];
		game.displayDate = getTime.display(game.dateTime, 'ddd, MMM Do YYYY');
		game.displayTime = getTime.display(game.dateTime, 'h:mm a').replace("12:00 am", "TBD");
		// game.homeGame = true;

		game.dateTimeUnix = getTime.unix(game.dateTime);
	}
})();
module.exports = gamesArr;