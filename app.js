var express = require('express');
var app = express();
var http = require('http');
var port = process.env.PORT || 32377;
var gamesArr = require('./source/js/games.js');
var nextGame = require('./source/js/nextGame.js');

// app.use(express.static('source/views'));
app.use(express.static('cdn'));
app.set('views', 'source/views');
app.set('view engine', 'html');
app.set('layout', 'layout');
app.enable('view cache');
app.engine('html', require('hogan-express'));

app.get('/home', function(req, res) {
	res.locals = {};
	res.render('home', {
		'partials': {
			'schedule': 'schedule'
		},
		'games': gamesArr,
		'nextGame': nextGame
	});
});

app.listen(port, function(err) {
	console.log('listening server on port ' + port);
});
