var express = require('express');
var logger = require('morgan');
var bodyParser = require('body-parser');
var path = require('path');
var mongoose = require('mongoose');
var http = require('http');

var dbConfig = require('./db');

var app = express();
var server = http.createServer(app);

var port = process.env.PORT || 1337;

mongoose.connect(dbConfig.url);

app.use(logger('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/public'));
app.use(require('./routes')());

app.listen(port, function() {
    console.log('Server listening on port', port);
});
