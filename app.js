"use strict";

var express = require('express');
var app = express();
// var http = require('http');
var port = process.env.PORT || 32377;
var Feed = require('./source/js/rss.js');

// app.use(express.static('source/views'));
app.use(express.static('cdn'));
app.set('views', 'source/views');
app.set('view engine', 'html');
app.set('layout', 'layout');
// app.enable('view cache');
app.engine('html', require('hogan-express'));

app.get('/', function(req, res) {
	var thisSchedule = new Feed();
	thisSchedule.getSchedule.then(function(schedule){
		res.render('home', {
			'partials': {
				'schedule': 'schedule'
			},
			'games': schedule.list,
			'nextGame': schedule.list[schedule.index]
		});
	});
});

app.listen(port, function() {
	console.log('listening server on port ' + port);
});
