var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var formSchema = new Schema({
	year: String,
	event: String,
	stage: String,
	match: String,
	data: Object
});

module.exports = mongoose.model('Form', formSchema);
