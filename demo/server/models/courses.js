var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var courseSchema = new Schema({
	'course_id':String,
	'course_name':String,
});

module.exports = mongoose.model('Course',courseSchema,'coursecollections')