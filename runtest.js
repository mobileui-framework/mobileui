//Delete on production
var express = require('express');
var path = require('path');
var serveStatic = require('serve-static');

var app = express();

var port = process.env.PORT || 3000;

app.use(serveStatic(path.join(__dirname, '/')));

app.listen(port,  function () {  
	console.log('listening on port:', port);
});