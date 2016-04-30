var express = require('express');

var router = express.Router();

module.exports = function() {
    router.use('/', require('./default.js')());
    router.use('/scout', require('./scout.js')());

    return router;
};
