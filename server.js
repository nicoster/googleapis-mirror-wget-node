
var express = require("express");
var app = express();
var server = require('http').createServer(app);
var path = require('path');

app.use(express.static(path.join(__dirname, 'ajax.googleapis.com')));

server.listen(80, '127.0.0.1', function(){
	console.log("Working on port 80");
});

