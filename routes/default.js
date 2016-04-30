var express = require('express');
var router = express.Router();
var path = require('path');

module.exports = function() {
    router.get('/', function(req, res) {
		res.sendFile(path.resolve(__dirname + '/../views/index.txt'))
    });

    return router;
};
