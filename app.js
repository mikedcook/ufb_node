var express = require('express');
var app = express();
var http = require('http');
var port = process.env.PORT || 3000;
var hogan = require('hogan-express');

app.get('/', function(req, res) {
	res.send('It is working.');
});

app.listen(port, function(err) {
	console.log('listening server on port ' + port);
});