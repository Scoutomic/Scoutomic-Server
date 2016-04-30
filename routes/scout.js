var express = require('express');
var router = express.Router();
var Form = require('../models/form');

module.exports = function() {
    router.get('/:year/:event?/:stage?/:match?', function(req, res) {
		var year = req.params.year;
		var event = req.params.event;
		var stage = req.params.stage;
		var match = req.params.match;

		var query = {};

		query.year = year;

		if (event) query.event = event;
		if (stage) query.stage = stage;
		if (match) query.match = match;

        Form.find(query, function(err, forms) {
            if (err) {
                console.log(err);

				res.json({
					'success': false
				});
            } else {
                res.json({
					'success': true,
					'forms': forms
				});
            }
        });
    });

	router.post('/:year/:event/:stage/:match', function(req, res) {
        var payload = req.body;

		var year = req.params.year;
		var event = req.params.event;
		var stage = req.params.stage;
		var match = req.params.match;

        var f = new Form({
			'year': year,
			'event': event,
			'stage': stage,
			'match': match,
			'data': payload
		});

		f.save(function(err, data) {
			if (err) {
				console.log(err);

				res.json({
					'success': false
				});
			} else {
				res.json({
					'success': true,
					'id': data._id
				});
			}
		})
    });

    return router;
};
